import React from "react";
import styled from "styled-components";
import Todo from "./components/Todo";
import ImageUploader from "./components/ImageUploader";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const TaskItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  border-bottom: 1px solid #ccc;
`;

const TaskName = styled.span`
  font-size: 16px;
  font-weight: normal;
  margin: 0;
`;

const TaskStatus = styled.span`
  font-size: 12px;
  font-weight: normal;
  margin: 0;
`;

function App() {
  const [taskList, setTaskList] = React.useState([
    { id: 1, name: "Identify and contextualize the problem", status: "Done" },
    { id: 2, name: "Present ideas and changes to team", status: "In Progress" },
    { id: 3, name: "Prepare User Flows", status: "To Do" },
    { id: 4, name: "Prepare design style guide", status: "To Do" },
    { id: 5, name: "Delivery stage: test and release", status: "To Do" },
  ]);

  return (
    <AppContainer>
      <Header>
        <Title>Frontend Assignment - UI</Title>
        <button>+ Add Task</button>
      </Header>
      <TaskList>
        {taskList.map((task) => (
          <TaskItem key={task.id}>
            <TaskName>{task.name}</TaskName>
            <TaskStatus>{task.status}</TaskStatus>
          </TaskItem>
        ))}
      </TaskList>
    </AppContainer>
  );
}

export default Main;