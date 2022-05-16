import { useState } from "react";
import Father from "./Components/Father";
import Mother from "./Components/Mother";

function App() {
  const [count,setCount] = useState(1);
  
  const onClick = (e) =>{
    e.preventDefault();
    setCount(prev => prev+=1);
  }
  const onInputSubmit = (e) => {
    e.preventDefault();
    console.log('submit!');
  }
  const handleMinus = (e) => {
    e.preventDefault();
    setCount(prev => prev -= 1)
  }
  const handleCancle = () => {
    console.log('calcel!')
  }

  return (
   <>
   <div><Father onInputSubmit={onInputSubmit} handleCancle={handleCancle} /><Mother onClick={onClick} handleMinus={handleMinus} count={count} /></div>
   </>
  );
}

export default App;
