import data from './../data.json';
import { useState } from 'react';

export default function MyProjects(){
    const [index, setIndex] = useState(0);
    let videogames = data;
    let videogame = data[index];
    function handleClick() {
        if (index < videogames.length-1)
        {
           setIndex(index + 1);
        }
        else 
        {
           setIndex(0);
        }
     }
    return(
        <div><button onClick= {handleClick}>Next</button>
        <h1>{videogame.name}</h1>
        <h1>{videogame.developer}</h1>
        <img src={videogame.photoUrl}/>
        <h1>{videogame.alt}</h1>
        </div>
    )
}