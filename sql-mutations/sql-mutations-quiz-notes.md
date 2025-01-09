# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?
  `create, read, update, and delete`

- How do you add a row to a SQL table?
  `insert into "table" ("columns"...) values ('tuples'...)`

- How do you add multiple rows to a SQL table at once?
  `multiple tuples separated by comma`

- How do you update rows in a database table?
  `update "table" set "someColumn" = 'value' where "someOtherColumn" = 'lookupValue'`

- How do you delete rows from a database table?
  `delete from "table" where "column" = 'lookupValue'`

- Why is it important to include a `where` clause in your `update` and `delete` statements?
  `otherwise will update or delete all records in table`

- How do you accidentally delete or update all rows in a table?
  `forgot a where clause`

- How do you get back the modified row without a separate `select` statement?
  `returning *;`

- Why did you get an error when trying to delete certain films?
  `they were referenced by another table`

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
