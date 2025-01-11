import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log(new Date(), req.method, req.path);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello root!');
});

app.get('/notes', (req, res) => {
  res.send('Hello notes!');
});

app.post('/notes/:noteId', (req, res) => {
  const { noteId } = req.params;
  res.send(`Hello notedID ${noteId}!`);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
