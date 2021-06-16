import './App.css';
import React, { useState } from "react";

function NameMovie(props){
  return <h2 className="App1">{props.name}</h2>;
}

function YearMovie(props){
  return<h2 className="App2">{props.yearm}</h2>;
}


function Button(props) {
  const handlerClick = () => {     
   props.onClickAct(props.bkColor,props.MyColor,props.text);   
  };
  return (
  <button  onClick={handlerClick} 
  style={{ backgroundColor: props.bkColor,color:props.MyColor }}>
  {props.text}
  </button>
  );
 }
 function DisplayBlock(props) {
   return (
   <div className='MyBloc'
   style={{ backgroundColor:props.bkColor ,color:props.MyColor }}>
   Some text
   </div>
   );
  }

function App() {
  const [displayBkColor,setDisplayBkColor] = useState("white");

  const [MyBkColor,setMyBkColor] = useState("orange");
  const [myText,setMyText] = useState("Some Text");
   let stateFunc = (newBkColor,newMyColor, myText) => {
     setDisplayBkColor(newBkColor);
       setMyText(myText);
      setMyBkColor(newMyColor);
   }
  return ( 
  <div className="App">
    <NameMovie name="Ghost Rider (Призрачный Гонщик)" />
    <YearMovie yearm="2007"/>
    <br/>
    <div>
    <img className="App-img" src ="./ghost3.jpg" alt="Ghost Rider"/>
    
      <span className="App-span">
      When motorcycle rider Johnny Blaze sells his soul to the Devil to save his father's life,
      <br/>
      he is transformed into the Ghost Rider, the Devil's own bounty hunter, and is sent to hunt down sinners.
      <br/><br/>
      Director    Mark Steven Johnson(directed by)
      <br/><br/>
      Writer  Mark Steven Johnson
      <br/><br/>
      Stars Nicolas CageEva MendesSam Elliott
      <br/>
      </span>     
    </div>  

    <Button bkColor="red" MyColor="blue" text="Red" onClickAct={stateFunc}
 />
 <Button bkColor="green" MyColor="red" text="Green"
 onClickAct={stateFunc} />
 <Button bkColor="yellow" MyColor="green" text="Yellow"
 onClickAct={stateFunc}/>
 <DisplayBlock  bkColor={displayBkColor} MyColor={MyBkColor}  text={myText}/>
    
  </div>
  );
}

export default App;
