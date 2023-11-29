function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("L") && <li key={animal}>{animal}</li>
      })}
    </ul>
  );
}


function App() {
  const animals = ['Lion', 'Bear', 'Giraffe', 'Donkey']
  return (
    <>
     <h1>Animals:</h1>
      <List animals={animals}></List>
    </>
  )
}

export default App
