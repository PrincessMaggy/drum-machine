import Pad from "./components/Pad";
import React,{useState} from "react";
const clips = [{
  "keyTrigger": "Q",
  "keyCode": "81",
  "id": "Heater-1",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
},
{
  "keyTrigger": "W",
  "keyCode": "8",
  "id": "Heater-2",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
},
{
  "keyTrigger": "E",
  "keyCode": "69",
  "id": "Heater-3",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
},
{
  "keyTrigger": "A",
  "keyCode": "65",
  "id": "Heater-4",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
},
{
  "keyTrigger": "S",
  "keyCode": "83",
  "id": "Heater-6",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
},
{
  "keyTrigger": "D",
  "keyCode": "68",
  "id": "Dsc_Oh",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
},
{
  "keyTrigger": "Z",
  "keyCode": "90",
  "id": "Kick_n_Hat",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
},
{
  "keyTrigger": "X",
  "keyCode": "88",
  "id": "RP4_KICK_1",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
},
{
  "keyTrigger": "C",
  "keyCode": "67",
  "id": "Cev_H2",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
}

]


const App = () => {
  
const [volume, setVolume] = useState(1);


  return (
    <div className="App bg-info">
            <div className="text-center mh-100">
                <h2>Drum Machine</h2>
                { clips.map ((clip) =>
              <Pad 
              key={clip.id} 
              clip ={clip}
              volume={volume} /> )}
           
        <br/>
        <h4>Volume</h4>

        <input 
        type="range" 
        className="w-50" 
        value={volume} 
        max="1" 
        step="0.01"
         min="0"
         onChange={(e)=> setVolume(e.target.value)} />
        </div>
    </div>
  );
}

export default App;
