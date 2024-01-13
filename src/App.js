import { useState } from 'react';
import './App.css';



function App() {
   const [number1, setNumber1] = useState('');
   const [number2, setNumber2] = useState('');
   const [result, setResult ] = useState(null);
   const [givenerror, setGivenError] = useState('');
   
  
   const handleInput1 = (e) =>{
    setResult(null)
    setNumber1(e.target.value);
   }

   const handleInput2 = (e) =>{
    setResult(null)
    setNumber2(e.target.value);
   }

   const validation = () =>{
    if(number1 === ''){
      setGivenError("Error");
      setResult("Number 1 Cannot be empty");
    }
    else if(number2 === ''){
      setGivenError("Error");
      setResult("Number 2 Cannot be empty");
    }
    else if(isNaN(Number(number1))){
      setGivenError("Error");
      setResult("Num1 Should Be Either Integer, Floating-Point Number, Positive, Or Negative");
    }
    else if(isNaN(Number(number2))){
      setGivenError("Error");
      setResult("Num2 Should Be Either Integer, Floating-Point Number, Positive, Or Negative");
    }
    else{
      setGivenError("Success")         
      return true;
      }
      return false
   }

  const  calculate =(isValid , result) =>{
    if(isValid){
      setResult( "Result = "+result);
    }
  }

  return (
    <div className="App">
       <div className="main">
        <div className="calculator">
          <h2 className='heading'>React Calculator</h2>
          <input placeholder='Num 1' type="text" value={number1} onChange={handleInput1} className='inputentry' />
          <input placeholder='Num 2' type="text" value={number2} onChange={handleInput2} className='inputentry' />
          <div className="operations">
            <button className='ops' onClick={() => {calculate(validation(), Number(number1) + Number(number2))}}>+</button>
            <button className='ops' onClick={() => {calculate(validation(), Number(number1) - Number(number2))}} >-</button>
            <button className='ops' onClick={() => {calculate(validation(), Number(number1) * Number(number2))}}>*</button>
            <button className='ops' onClick={() => {calculate(validation(), Number(number1) / Number(number2))}}>/</button>
          </div>
          <div className="result">
            {
             result && (
              <>
               <h3 className={givenerror}>{givenerror}!</h3>
               <h3 className='resvalue'>{result}</h3>
              </>
             )  
            }
          </div>
        </div>
       </div>
    </div>
  );
}

export default App;
