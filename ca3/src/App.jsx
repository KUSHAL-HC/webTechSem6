import { useState } from 'react'
import './App.css'

function App() {

const [n1, setn1] = useState("");
const [n2,setn2] = useState("");
const [opp,setOpp] = useState("");
const [ans,setAns] = useState("");

const cal = ()=>{
  const num1= Number(n1);
  const num2= Number(n2);

 switch(opp)
 {
  case "+":return setAns(num1 + num2);
  case "-":return setAns(num1 - num2);
  case "*":return setAns(num1 * num2);
  case "%":return setAns(num1 % num2);
  case "/":return setAns(num1 / num2);
  default: "invalid option";
 }

}


  return (
   <div style={{display:"flex",justifyContent:"center",alignItems:"center",}}>
    <div className='card'>
        <h1>Simple calculator</h1>
        <input type='number' value={n1} placeholder='Enter the first Number:' onChange={(e)=>{setn1(e.target.value)}}/>
        <input type='number' value={n2} placeholder='Enter the second Number'onChange={(e)=>{setn2(e.target.value)}}/>
        <input type='text' name={opp} placeholder='Enter the Operation' onChange={(e)=>{setOpp(e.target.value)}}/>
        <button onClick={cal}>Calculate</button>
        <p value={ans}>{`Answer:${ans}`}</p>
    </div>
   </div>
  )
}

export default App
