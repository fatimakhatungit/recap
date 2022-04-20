import React, {useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 const [ nayoks, setNayoks] = useState([])
  useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users') 
.then(res => res.json())
.then(data => setNayoks(data))

  }, [])
  // const nayoks = [{name: 'jasim', age: 56}, {name: 'Deepjol', age: 61}, {name: 'BappaRaz', age: 43},{ name: 'omar sani', age: 64}]


  return (
    <div className="App">
    <MovieCounter></MovieCounter>
    {
      nayoks.map(nk => <Nayok name={nk.name} age={nk.age}></Nayok>)  
    }
      {/* <Nayok name={nayoks[1]} age="56"></Nayok> 
      <Nayok name={nayoks[0]}></Nayok>
      <Nayok name={nayoks[2]}></Nayok>
      <Nayok></Nayok> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
 

      </header> 
    </div>
  );
}


 function MovieCounter(){
  const [count, setCount] = useState(0);  

  const handleClick = () => setCount(count + 1);

   return (
     <div>
       <button onClick={handleClick}>Add Movie</button>
       <h3>Number Of movies: {count}</h3>  
       <MovieDisplay movies={count}></MovieDisplay>
       <MovieDisplay movies={count + 10}></MovieDisplay>
       <MovieDisplay movies={count + 5}></MovieDisplay>
       <MovieDisplay movies={count + 15}></MovieDisplay>
       <MovieDisplay movies={count}></MovieDisplay>
     </div>
   )
 }
 function MovieDisplay(props){
   return <h4>Movies I have acted :{props.movies}</h4> 
 }
function Nayok(props){
  console.log (props)  
  const nayokStyle = {
    border: '2px solid purple',
    margin: '20px'
  } 
  return (
  <div style={nayokStyle}>
    <h1>Ami nayak-{props.name}</h1> 
    <h3>I have done 5 movies in {props.age || 30} year</h3> 
  </div>
  )
}

export default App;
