import './App.css';
import React from 'react';
import data from './Assets/data';
import MovieList from './MovieList';

function App() {

  
  return (
    <>
    <div className='headDiv'><h1>Movie List</h1></div>
    {data.map((val)=>{
       return(<MovieList 
          imgsrc = {val.img.src}
          imgalt = {val.img.alt}
          ranking = {`#${val.ranking}`}  
          title = {val.title}
          distributor={val.distributor}
          amount = {val.amount}
          year = {val.year}  
            
       />) 
    })}
    
    </>
  );
}

export default App;
