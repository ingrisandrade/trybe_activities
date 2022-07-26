import React from "react";

// Crie uma lista de tarefas simples que:
// Utilize a função Task dentro do componente App.
// Leia as tarefas de dentro de um Array.
// Use a função map para criar cada item da lista no HTML.

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes','Ir trabalhar'];

class App extends React.Component {
  render() {
    return (
      <>
      <h1>Tarefas:</h1>
      <ul> { tarefas.map(tarefa => Task(tarefa)) } </ul>
      </>
    )
  }
}
export default App;
