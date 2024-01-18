import React from "react";
import styled from "styled-components";

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const TodoInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

const TodoButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
`;

const TodoList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const TodoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  border-bottom: 1px solid #ccc;
`;

const TodoName = styled.span`
  font-size: 16px;
  font-weight: normal;
  margin: 0;
`;

const TodoDeleteButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #f00;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
`;

function Todo() {
  const [todoList, setTodoList] = React.useState([]);

  const handleAddTodo = () => {
    setTodoList([...todoList, { id: todoList.length + 1, name: "New Task" }]);
  };

  const handleDeleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContainer>
      <TodoInput type="text" placeholder="Enter a task" />
      <TodoButton onClick={handleAddTodo}>Add</TodoButton>
      <TodoList>
        {todoList.map((todo) => (
          <TodoItem key={todo.id}>
            <TodoName>{todo.name}</TodoName>
            <TodoDeleteButton onClick={() => handleDeleteTodo(todo.id)}>
              X
            </TodoDeleteButton>
          </TodoItem>
        ))}
      </TodoList>
    </TodoContainer>
  );
}

export default Todo;