export default function handler(req, res) {
    const { email, password } = req.body;
  
    if (email === 'test@example.com' && password === 'password123') {
      res.status(200).json({ user: { email } });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  }
  