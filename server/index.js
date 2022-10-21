const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, addGoal, deleteGoal, changeUser, getCompletedGoals, getToDoList } = require('./controller')

app.get("/api/compliment/", getCompliment);
app.get("/api/fortune/", getFortune);
app.post("/api/goal/", addGoal)
app.get("/api/goal/completedGoals", getCompletedGoals)
app.delete("/api/goal/:id" , deleteGoal);
app.put("/api/:userName", changeUser)
app.get("/api/goal/", getToDoList)

app.listen(4000, () => console.log("Server running on 4000"));
