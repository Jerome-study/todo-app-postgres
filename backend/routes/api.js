const express = require("express");
const router = express.Router();
const queries = require("../queries/queries");
const pool = require("../config/db");

router.get("/getUser", async (req,res) => {
    try {
        const user_id = req.user;
        const result = await pool.query(`${queries.getUser(user_id)}`)
        res.send(result.rows[0]);
    } catch(error) {
        console.log(error.message);
    }
});

router.get("/getTodos", async (req,res) => {
    try {
        const user_id = req.user;
        const result = await pool.query(`${queries.getTodos(user_id)}`)
        res.send(result.rows);
    } catch(error) {
        console.log(error.message);
    }
});

router.post("/addTodo", async (req,res) => {
    const { title } =  req.body;
    if (!title) return res.send({ message: "Do not leave it blank!"});
    const user_id = req.user;
    try {
        await pool.query(queries.addTodo(title, user_id));
        res.send({ success: true })
    } catch(error) {
        console.log(error.message);
    }
});

router.put("/updateTodo/:todo_id", async (req,res) => {
    const { edited_title } =  req.body;
    if (!edited_title) return res.send({ message: "Do not leave it blank!"});
    const { todo_id } = req.params;
    const user_id = req.user;
    try {
        await pool.query(queries.updateTodo(todo_id, edited_title, user_id));
        const updated_todos = await pool.query(`${queries.getTodos(user_id)}`)
        res.send(updated_todos.rows);
    } catch(error) {
        console.log(error.message);
    }
});

router.delete("/deleteTodo/:todo_id", async (req,res) => {
    const { todo_id } = req.params;
    const user_id = req.user;
    try {
        await pool.query(queries.deleteTodo(todo_id, user_id));
        const updated_todos = await pool.query(`${queries.getTodos(user_id)}`)
        res.send(updated_todos.rows);
    } catch(error) {
        console.log(error.message);
    }
});

router.delete("/deleteUser", async (req,res) => {
    const id = req.user
    try {
        await pool.query(`${queries.deleteAllUserTodos(id)}`);
        await pool.query(`${queries.deleteUser(id)}`);
        res.send({ message: "User has been deleted "});
    } catch(error) {
        console.log(error.message);
    }
});
module.exports = router;