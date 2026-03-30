const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory user store
const users = [];

// Register endpoint
app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: 'Email already registered.' });
  }
  users.push({ name, email, password });
  res.json({ message: 'Registration successful.', name });
});

// Login endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }
  res.json({ message: 'Login successful.', name: user.name });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});