import Result from "./components/Results";
import UserInput from "./components/UserInput"
import Header from "./components/header"
import { useState } from "react";
function App() {

  const [userInput,setUserInput]=useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
});
let isValid=userInput.duration>=1;
function handleChange(inputIdentifier,newValue){
  setUserInput((prev)=>({...prev,[inputIdentifier]:+newValue}));
}


  return (
    <>
    <Header />
    <UserInput onChange={handleChange} userInput={userInput}/>
    {!isValid && <p className="center">Please enter duration greater than zero.</p>}
    {isValid && <Result input={userInput}/>}
    </>
  )
}

export default App
