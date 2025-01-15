import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib';

type Grade = {
  gradeId?: number;
  name: string;
  course: string;
  score: number;
  createdAt?: string;
};

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
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `Non-integer gradeId: ${gradeId}`);
    }

    const sql = `
      select * from "grades" where "gradeId" = $1;
    `;
    const result = await db.query<Grade>(sql, [gradeId]);
    const grade = result.rows[0];
    if (!grade) throw new ClientError(404, `grade ${gradeId} not found`);
    res.json(grade);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (!name || !course || !score) {
      throw new ClientError(400, 'name, course, and score are required');
    }
    if (!Number.isInteger(score)) {
      throw new ClientError(400, `Non-integer score: ${score}`);
    }
    if (score < 0 || score > 100) {
      throw new ClientError(400, 'score must be an integer from 0 to 100');
    }

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
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `Non-integer gradeId: ${gradeId}`);
    }

    const { name, course, score } = req.body;
    if (!name || !course || !score) {
      throw new ClientError(400, 'name, course, and score are required');
    }
    if (!Number.isInteger(score)) {
      throw new ClientError(400, `Non-integer score: ${score}`);
    }
    if (score < 0 || score > 100) {
      throw new ClientError(400, 'score must be an integer from 0 to 100');
    }

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
    if (!grade) throw new ClientError(404, `grade ${gradeId} not found`);
    res.json(grade);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `Non-integer gradeId: ${gradeId}`);
    }

    const sql = `
      delete from "grades"
        where "gradeId" = $1
      returning *;
    `;
    const result = await db.query<Grade>(sql, [gradeId]);
    const grade = result.rows[0];
    if (!grade) throw new ClientError(404, `grade ${gradeId} not found`);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
