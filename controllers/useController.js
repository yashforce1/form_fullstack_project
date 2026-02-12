const pool = require("../db");



// POST (CREATE)
const createUser = async (req, res) => {
  const { name, email, age } = req.body;
  if(!name || !email || !age)
    res.status(500).json("Please enter the all the details");

  try {
    const result = await pool.query(
      "INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *",
      [name, email, age]
    );
    res.status(200).json(`${name} is added to the databse`);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// GET (ALL THE NAMES FROM THE TABLE)
const namesPrint = async(req ,res)=>{
  try{
    const result = await pool.query(
      "select name from users"
    )

    const names = result.rows.map((user)=>{return user.name})
    res.status(200).json(names);
  }
  catch(err){
    res.status(500).json({error : err.message})
  }
};


// DELTE THE LAST ROW FROM THE TABLE

const deleteRow = async(req,res)=>{
  try{
    const result = await pool.query(
      "delete from users where id in (5 , 6) "
    )
    res.status(200).json("deleted sucessfully");
  }
  catch(err){
    res.status(500).json({erro : err.message})
  }
}



// Delete a row after taking input from the user

const deleteInput = async(req,res)=>{
  try{
    const {name} = req.body;

    const result = await pool.query(
      "delete from users where name = $1",
      [name]
    );
    if(result.rowCount ==0){
      return res.status(404).json({message : "user not found"});
    }

    res.status(200).json({message : "user deleted sucessfully "})

  }
  catch(err){
    res.status(500).json({error : err.message});
  }

}

module.exports = {
  createUser , namesPrint , deleteRow , deleteInput
};



// res =  only used when the user is requesting some input , like IN <pos> we were asking the input from user(nmae , email and age) that was the reason  both <req> and <res> are running . 

// while in Get operation - we are requesting to print a column , and there is no input asked , thats why req is not been used .



// catch(err){
//   res.status(500).json({erro : err.message})
// }

//>>>>>in this error message (err)willl