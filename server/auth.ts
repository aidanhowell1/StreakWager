import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Example in-memory user for demonstration
const users = [
  { id: 1, email: 'user@example.com', passwordHash: bcrypt.hashSync('password123', 10) }
];

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);

  if (!user || !await bcrypt.compare(password, user.passwordHash)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, 'your_jwt_secret', { expiresIn: '2h' });
  res.json({ token });
});

export default router;