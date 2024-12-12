import { useState } from "react";

function getRandomAnimal(){
    const animals = ['bird' , 'cat' , 'cow' , 'dog' , 'gator' , 'horse']

    return animals[Math.floor(Math.random() * animals.length)]
}

function App(){
    const [count , setCount]= useState(0);
    const handleClick = () => {
        setCount(count + 1);
    }
    return(
        <div>
        <button onClick={handleClick}>Add Animal</button>
        <p>Number of animals: {count} </p>
        </div>
    )
}
export default App;