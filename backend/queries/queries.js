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
const getTodos = (id) => {
  return `SELECT * FROM todos WHERE user_id = '${id}' ORDER BY created_At`
};

const addTodo = (title, user_id) => {
  return `INSERT INTO todos (title, user_id) VALUES('${title}', '${user_id}')`
};

const updateTodo = (todo_id, edited_title, user_id) => {
  return `UPDATE todos SET title = '${edited_title}' WHERE id = '${todo_id}' AND user_id = '${user_id}'`
};

const deleteTodo = (todo_id, user_id) => {
  return `DELETE FROM todos WHERE id = '${todo_id}' AND user_id = '${user_id}'`
};

module.exports = { createUserTable, createTodsTable, getTodos, addTodo, updateTodo, deleteTodo };