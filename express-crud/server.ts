import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib';

type Grade = {
  gradeId?: number;
  name: string;
  course: string;
  score: number;
  createdAt?: string; // ?
};

function validateGradeId(gradeId: string): void {
  if (!Number.isInteger(+gradeId) || +gradeId < 0) {
    throw new ClientError(400, `gradeId must be positive integer`);
  }
}

function validateGrade(name: string, course: string, score: number): void {
  if (!name || !course) {
    throw new ClientError(400, 'name, and course are required');
  }
  if (!Number.isInteger(score) || score < 0 || score > 100) {
    throw new ClientError(400, 'score must be an integer from 0 to 100');
  }
}

function validateGradeExists(grade: Grade | undefined, gradeId: string): void {
  if (!grade) throw new ClientError(404, `grade ${gradeId} not found`);
}

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: { rejectUnauthorized: false },
});

const app = express();
app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      select * from "grades";
    `;
    const result = await db.query<Grade>(sql);
    const grades = result.rows;
    res.json(grades);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    validateGradeId(gradeId);

    const sql = `
      select * from "grades"
       where "gradeId" = $1;
    `;
    const result = await db.query<Grade>(sql, [gradeId]);
    const grade = result.rows[0];
    validateGradeExists(grade, gradeId);
    res.json(grade);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body as Grade;
    validateGrade(name, course, score);

    const sql = `
      insert into "grades" ("name", "course", "score")
        values ($1, $2, $3)
      returning *;
    `;
    const result = await db.query<Grade>(sql, [name, course, score]);
    const grade = result.rows[0];
    res.status(201).json(grade);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    validateGradeId(gradeId);

    const { name, course, score } = req.body as Grade;
    validateGrade(name, course, score);

    const sql = `
      update "grades"
         set "name" = $2,
             "course" = $3,
             "score" = $4
      where "gradeId" = $1
      returning *;
    `;
    const result = await db.query<Grade>(sql, [gradeId, name, course, score]);
    const grade = result.rows[0];
    validateGradeExists(grade, gradeId);
    res.json(grade);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    validateGradeId(gradeId);

    const sql = `
      delete from "grades"
        where "gradeId" = $1
      returning *;
    `;
    const result = await db.query<Grade>(sql, [gradeId]);
    const grade = result.rows[0];
    validateGradeExists(grade, gradeId);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
