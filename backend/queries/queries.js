const createUserTable = `CREATE TABLE IF NOT EXISTS "user" (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
)`

const createTodsTable = `
CREATE TABLE IF NOT EXISTS todos(
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  isDone BOOLEAN NOT NULL DEFAULT FALSE,
  user_id uuid,
  created_At TIMESTAMP NOT NULL DEFAULT NOW(),
  FOREIGN KEY (user_id) REFERENCES "user"(id)
);
`
const getTodos = `SELECT * FROM todos WHERE user_id = $1 ORDER BY created_At`;

const addTodo = `INSERT INTO todos (title, user_id) VALUES($1, $2)`;

const updateTodo = `UPDATE todos SET title = $1 WHERE id = $2 AND user_id = $3`;

const deleteTodo = `DELETE FROM todos WHERE id = $1 AND user_id = $2`;

const deleteAllUserTodos = `DELETE FROM todos WHERE user_id = $1`;

const getUser = `SELECT username, created_at FROM "user" WHERE id = $1`;

const getPassword = `SELECT password FROM "user" WHERE id = $1`

const usernameExist = `SELECT username FROM "user" WHERE username = $1`;

const updatePassword = `UPDATE "user" SET password =$1 WHERE id = $2`;

const updateUser = `UPDATE "user" SET username = $1 WHERE id = $2`;

const deleteUser = `DELETE FROM "user" WHERE id = $1`;

module.exports = { 
  createUserTable, 
  createTodsTable, 
  getTodos, 
  addTodo, 
  updateTodo, 
  deleteTodo, 
  deleteAllUserTodos, 
  getUser,
  getPassword,
  usernameExist, 
  updatePassword,
  updateUser,
  deleteUser 
};