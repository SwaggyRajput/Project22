import {React,useState} from 'react'
import ReactDOM from 'react-dom'
import './App.css'

const Weather=()=>{
   
    const [City,setCity]=useState('')
    const [Temp,setTemp]=useState('')
    let name,value;
    const onchange=(event)=>{
        name=event.target.name;
        value=event.target.value;
        setCity(value)
    }

    const getData=async(e)=>{
        e.preventDefault();
const res=await fetch(`http://api.weatherstack.com/current?access_key=12274a9ee8f748051b3082badcdcf8f7&query=${City}`)
const data = await res.json();
console.log(data)
console.log(data.current.temperature)
setTemp(`Temperature of ${City} is ${data.current.temperature}`)


    }
   
    
  return(
        
    <>
    <h1 className='a'><marquee width="100%" direction="right">
    Temperature Finder
</marquee></h1>
 <div className='div1'>
 
 <form method='get' action='http://api.weatherstack.com/current?access_key=12274a9ee8f748051b3082badcdcf8f7&query=City'>

<h1>Enter Your City</h1>
<input type='text' placeholder='Enter City' value={City} name='City' onChange={onchange} />
<button type='submit'onClick={getData}>Click</button>
<h2>{Temp}</h2>
</form>
 </div>




      
    </>
  )
}

export default Weather;