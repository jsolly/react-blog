import { useState } from "react"

const Home = () => {

    const [name, setName] = useState('Mario');

    const handleClick = () => {
        console.log("Hello World")
    }

    const handleClick2 = (name, e) => {
        console.log(`Hello World, ${name}`)
        console.log(e.target)
    }

    const handleClick3 = (e) => {
        console.log(e)
    }

    const handleClick4 = () => {
        setName("Luigi")
    }

    return ( <div className="home">
        <h2>Home Page</h2>
        <p>{ name }</p>
        <button onClick={handleClick}className="clickme">Click Me</button>
        <button onClick={()=> console.log("I ran inline!")}className="clickme2">Click Me, too!</button>
        <button onClick={(e)=> handleClick2("Mario", e)} className="clickme3">Click Me, three!</button> 
        <button onClick={handleClick3} className="clickme4">Click Me, four!</button> 
        <button onClick={()=> handleClick4('Luigi')} className="clickme5">Change Mario to Luigi</button> 
        
        </div>  );
}
 
export default Home;