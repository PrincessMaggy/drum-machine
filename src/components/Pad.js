import React,{useEffect, useState} from "react";

const Pad = ({clip, volume}) =>{
    const [active, setActive] = useState(false)
  
     useEffect(()=> {
     document.addEventListener('keydown', handleKeyPress)
     return () =>{
       document.removeEventListener('keydown',handleKeyPress)
     }
  })
  
  
  const handleKeyPress =(e) =>{
  
    if( e.keyCode === clip.keyCode){
      playSound();
    }
  
  }
  
  const playSound = () =>{
    const audioTape = document.getElementById(clip.keyTrigger);
    setActive(true);
    setTimeout(()=> setActive(false), 200);
    audioTape.volume= volume;
    audioTape.currentTime =0;
    audioTape.play();
  }
  
    return (
      <button onClick={playSound} className={`btn btn-secondary p-4 m-3 ${active && "btn-warning"}`}>
      <audio className="clip" id={clip.keyTrigger} src={clip.url} />
      {clip.keyTrigger} </button>
    
    )
  }
  
  
export default Pad;  