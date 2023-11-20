import {useEffect, useState} from 'react'

const Timer =()=>{
    const [seconds, setSeconds] = useState(30);
    const [isActive, SetIsActive]= useState(false);
  
    useEffect(()=>{
      let intervel;
      if(seconds > 0 && isActive){
        intervel = setInterval(()=>{
          setSeconds(seconds - 1);
    },1000)
      }else{
        clearInterval(intervel)
      }
      return ()=> clearInterval(intervel)
  
    },[seconds, isActive])
  
    const handleStart =()=>{
       SetIsActive(!isActive)
    }
  
    const handleReset=()=>{
      SetIsActive(false);
      setSeconds(30);
    }
  
    return (
      <div className="App">
        <div>
       <p>Timer: {seconds}</p>
        </div>
        <div>
        <button onClick={()=> handleStart()}>{isActive ? 'Pasuse':'Start'}</button>
       <button onClick={()=> handleReset()}>Reset</button>
        </div>
     
      </div>
    );
  }

  export default Timer;