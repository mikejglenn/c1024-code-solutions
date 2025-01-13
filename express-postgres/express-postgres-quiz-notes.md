# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?
  `PostgreSQL client for Node.js`

- How do you tell `pg` which database to connect to?
  `const db = new pg.Pool({ connectionString: 'postgres://dev:dev@localhost/DB', ssl: { rejectUnauthorized: false }});`

- How do you send SQL to PostgreSQL from your Express server?
  `await db.query()`

- How do you access the rows that get returned from the SQL query?
  `result.rows`

- What must you always remember to put around your asynchronous route handlers? Why?
  `call to db is async. its external, its to wait on the response, and can fail.`

- What is a SQL Injection Attack and how do you avoid it in `pg`?
  `SQL injection manipulates a standard SQL query to exploit non-validated input vulnerabilities in a database. Pass params array to db.query(sql,params) to be sanitized.`

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
