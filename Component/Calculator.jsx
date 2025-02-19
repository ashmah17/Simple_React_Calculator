import React, { useState } from 'react'
import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'

const Calculator = () => {
    const [inputval, setInputval] = useState('');
    
    const handledel = ()=>{
       setInputval(inputval.slice(0, -1))
    }
    const handlerestart = ()=>{
       setInputval('')
    }
    
    const handleInputVal =(event)=>{
        setInputval ((e)=> e  + event.target.value)
    }
    const handleequal=()=>{
        setInputval(eval(inputval))
    }
    const calculatorValue = [
        {val:'Ac', click:handlerestart, style:'5'},
        {val:'del', click:handledel, style:'5'},
        {val:'%', click: handleInputVal},
        {val:'/', click: handleInputVal},
        {val:'7', click: handleInputVal},
        {val:'8', click: handleInputVal},
        {val:'9', click: handleInputVal},
        {val:'*', click:  handleInputVal},
        {val:'4', click:  handleInputVal},
        {val:'5', click:  handleInputVal},
        {val:'6', click:  handleInputVal},
        {val:'-', click:  handleInputVal},
        {val:'1', click:  handleInputVal},
        {val:'2', click:  handleInputVal},
        {val:'3', click:  handleInputVal},
        {val:'+', click:  handleInputVal},
        {val:'0', click:  handleInputVal},
        {val:'00', click: handleInputVal},
        {val:'.', click:   handleInputVal},
        {val:'=', click:  handleequal}
    ]
   const [darkmood, setDarkMood] = useState(false);
   const handleDarkMood=()=>{
    setDarkMood(!darkmood);
   }

  return (
    <div className={`${darkmood ? 'bg-yellow-100' : 'shadow '}   w-full h-[100vh] flex flex-col items-center`}>
       
       {darkmood?
       <img src={moon} className='w-10 mt-[3rem] cursor-pointer' onClick={handleDarkMood} />:
       <img src={sun} className='w-10 mt-[3rem] cursor-pointer' onClick={handleDarkMood} />

       }
       
       <div className={`${darkmood ? 'bg-yellow-100 border-[#ebecb591]' : 'border-[#705b83] bg1'}  mt-[5rem]  shadow-xl border  h-[70vh] w-[50vw] rounded-xl p-4 flex flex-col`}>
            <span>
                <div className={` ${darkmood ? 'darkinset text-yellow-700 bg-yellow-100' : 'text-gray-300 inset bg1'} pl-6 text-xl rounded-xl w-full p-3 flex items-center h-[6rem] mb-4  text-gray-300 outline-gray-600`}
                
                >{inputval}</div>
            </span>
            <div className='grid grid-cols-4 w-full'>
               {calculatorValue.map((value, index)=>(
                 <span key={index} className=" w-full flex justify-between">
                    <button 
                    className={` ${darkmood ? 'hover:bg-[#e7e8b391] darkshadow text-yellow-700': 'shadow text-gray-400  hover:bg-[#523d63]'}  transition-all duration-600 h-[3rem]   rounded-xl w-full m-2`}
                    value={value.val} 
                    onClick={value.click} 
                    >{value.val}</button>
                     </span>
               ))}
               
            </div>
        </div>
    </div>
  )
}

export default Calculator
