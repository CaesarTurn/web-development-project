const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Set up body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve a basic HTML form
app.get('/', (req, res) => {
  res.send(`
    <form method="POST" action="/submit">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name">
      <br>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email">
      <br>
      <button type="submit">Submit</button>
    </form>
  `);
});

// Handle form submission
app.post('/submit', (req, res) => {
  const { name, email } = req.body;

  // Process the form data (e.g., save to database, send email, etc.)
  console.log('Form data:', req.body);

  // Send a response back to the client
  res.send(`Thanks for submitting, ${name}!`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
