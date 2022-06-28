
import './App.css';
import Container from "./Components/Container.styled"
import {data }from "./Components/data";
import Table from "./Components/Table.styled";
import InputTodo from "./Components/InsertData"


function App() {
  return (
    <Container>
    <h1>Todo List</h1><br/>
    <InputTodo/>
    
      <h1>Tables</h1>
      <br/>
      <Table data={data} />
    </Container>
    
  );
}

export default App;
