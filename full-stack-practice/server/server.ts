import 'dotenv/config';
import pg from 'pg';
import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';

type Todo = {
  entryId: number;
  task: string;
  isCompleted: boolean;
  createdAt: string;
  updatedAt: string;
};

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get('/api/products', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "products"
        order by "productId";
    `;
    const result = await db.query<Todo>(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/products/:productId', async (req, res, next) => {
  try {
    const { productId } = req.params;
    if (!Number.isInteger(+productId) || +productId < 1) {
      throw new ClientError(400, 'todoId must be a positive integer');
    }
    const sql = `
      select *
        from "products"
        where "productId" = $1;
    `;
    const result = await db.query<Todo>(sql, [productId]);
    const product = result.rows[0];
    if (!product) {
      throw new ClientError(404, `cannot find todo with todoId ${productId}`);
    }
    res.json(product);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
