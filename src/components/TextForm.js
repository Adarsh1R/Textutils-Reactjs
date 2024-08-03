import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("UpperCase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success")
    }

    const handleLoClick=()=>{
      console.log("UpperCase was clicked" + text);
      let newText=text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to LowerCase", "success")
  }
  const handleBoClick=()=>{
    console.log("UpperCase was clicked" + text);
    let newText=text.toLowerCase();
    newText = newText.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    setText(newText)
}
const handleRoClick = () => {
  console.log("UpperCase was clicked: " + text);
  let newText = text.split('').reverse().join(''); 
  setText(newText);
}

    const handleOnChange=(event)=>{
        console.log("On change");
        
        setText(event.target.value)
    }
   
    const[text,setText]=useState("Enter  text");

  return (
    <>
    <div className="container" style= {{color:props.mode==='dark' ? 'white':'black'}}>
        <h1> {props.heading} </h1>

      <div className="mb-3">
      
      <textarea className="form-control" value= {text} onChange={handleOnChange} id="mybox" style={{backgroundColor:props.mode==='dark' ? 'grey':'white',color:props.mode==='dark' ? 'white':'black'}} rows="8"></textarea>
       </div>
       <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
       <button className="btn btn-warning mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
       <button className="btn btn-danger mx-2" onClick={handleBoClick}>Convert to  Capital text</button>
       <button className="btn btn-success mx-2" onClick={handleRoClick}>Reverse Text</button>
    
       
    </div>
    <div className="container my-3" style= {{color:props.mode==='dark' ? 'white':'black'}}>
      <h1> Your text summary</h1>
      <p>{text.split(" ").length} and {text.length} characters</p>
      <p>{0.008* text.split(" ").length} Minutes read</p>
      <h2> Preview</h2>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
