const pool = require("../db");



// CREATE
const createUser = async (req, res) => {
  const { name, email, age } = req.body;
  if(!name || !email || !age)
    res.status(500).json("Please enter the all the details");

  try {
    const result = await pool.query(
      "INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *",
      [name, email, age]
    );
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



module.exports = {
  createUser
};
