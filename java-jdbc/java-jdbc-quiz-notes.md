# java-jdbc-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is JDBC?
`JDBC, or Java Database Connectivity, is a standard Java API that provides a common way for Java applications to interact with relational databases and other tabular data sources. It acts as an abstraction layer, allowing developers to write database-agnostic code while still enabling communication with various database systems.`

- What is the difference between a `Statement` and a `PreparedStatement`?
`The primary difference between Statement and PreparedStatement in JDBC lies in how they handle SQL queries. Statement is used for static SQL queries, while PreparedStatement is designed for precompiled, parameterized queries. PreparedStatement offers performance benefits and security advantages when executing the same query multiple times with different parameters.`

- How do you process the results of a JDBC query?
`Processing the results of a JDBC query involves working with the ResultSet object returned by methods like Statement.executeQuery() or PreparedStatement.executeQuery(). The ResultSet represents the data retrieved from the database.`

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
