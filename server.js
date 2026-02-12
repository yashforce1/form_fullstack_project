const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());              // 👈 THIS LINE FIXES EVERYTHING
app.use(express.json());

const userRoutes = require("./routes/useRoutes");

// pracice
app.get("/",(req,res)=>{
  res.status(200).send(`this server is connected and i have updated while leraning!`)
})

//database
app.use("/api", userRoutes);



const PORT = 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
