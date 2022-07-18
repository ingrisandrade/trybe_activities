// function App() {
//   return (
//     <div>
//     </div>
//   );
// }

// export default App;

function HelloWorld(nome, sobrenome) {
  return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
}

const element = HelloWorld("Jorge", "Maravilha");
const container = <div>{element}</div>;

export default function App() {
  return container;
};