const express = require("express");
const router = express.Router();
const queries = require("../queries/queries");
const pool = require("../config/db");
const bcrypt = require("bcrypt");

// todos

router.get("/getTodos", async (req,res) => {
    try {
        const user_id = req.user;
        const result = await pool.query(queries.getTodos, [user_id])
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
        await pool.query(queries.addTodo, [title, user_id]);
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
        await pool.query(queries.updateTodo ,[edited_title, todo_id, user_id]);
        await pool.query(queries.getTodos, [user_id]);
        res.send( { success: true });
    } catch(error) {
        console.log(error.message);
    }
});

router.delete("/deleteTodo/:todo_id", async (req,res) => {
    const { todo_id } = req.params;
    const user_id = req.user;
    try {
        await pool.query(queries.deleteTodo, [todo_id, user_id]);
        await pool.query(queries.getTodos, [user_id]);
        res.send({ success: true });
    } catch(error) {
        console.log(error.message);
    }
});

// Users
router.get("/getUser", async (req,res) => {
    try {
        const user_id = req.user;
        const result = await pool.query(queries.getUser, [user_id])
        res.send(result.rows[0]);
    } catch(error) {
        console.log(error.message);
    }
});

router.put("/updateUser", async (req,res) => {
    try {
        const user_id = req.user;
        const { edited_username } = req.body;
        const result = await pool.query(queries.usernameExist, [edited_username]);
        if (result.rows[0]) return res.status(303).send({ message: "Username is not available!" });
        await pool.query(queries.updateUser, [edited_username, user_id ]);
        res.send({ success: true });
    } catch(error) {
        console.log(error.message);
    }
});

router.put("/updatePassword", async (req,res) => {
    try {
        const user_id = req.user;
        const { currentPassword, newPassword } = req.body;
        const user = await pool.query(queries.getPassword, [user_id]);
        const userPassword = user.rows[0].password;
        const isMatched = await bcrypt.compare(currentPassword, userPassword);
        if (!isMatched) return res.status(401).send({ message: "Current Password invalid!" });
        const newHashedPassword = await bcrypt.hash(newPassword, 10);
        await pool.query(queries.updatePassword, [newHashedPassword, user_id]);
        res.send({ success: true });
    } catch(error) {
        console.log(error.message);
    }
});

router.delete("/deleteUser", async (req,res) => {
    const id = req.user
    try {
        await pool.query(queries.deleteAllUserTodos, [id]);
        await pool.query(queries.deleteUser, [id]);
        res.send({ message: "User has been deleted "});
    } catch(error) {
        console.log(error.message);
    }
});


module.exports = router;