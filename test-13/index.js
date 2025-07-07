let express = require('express');
let pool = require('./db');
let app = express();

app.use(express.json());

PORT = process.env || 8000 

app.get('/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/product/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
    result.rows.length > 0 ? res.json(result.rows[0]) : res.status(404).json({ message: "Bad request!!!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



app.listen(PORT, () => {
  console.log(`Server is working on ${PORT} port`);
});
