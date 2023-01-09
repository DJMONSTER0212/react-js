import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = ()=>{
        // console.log("UpperCase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange  = (event)=>{
        // console.log("On change")
        setText(event.target.value);
    }
    const cleatText = ()=>{
      setText("");
    }
    const [text, setText] = useState("");  //text is a variable , setText is a function|| sabse pehle imported use state hook from react || text k ander = "Enter text here" reh jaayega , default value hai aur jab bhi text ko update karenge toh is function k saath karenge
    // text  = "new text" // wrong way to change the state
    // setText("new Text"); // correct way to change the state
  return (
    <>
    <div className='container'>
        <h1 className='my-3'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} value={text} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-outline-success mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-outline-primary mx-2" onClick={handleLowClick}>Convert To LowerCase</button>
        <button className="btn btn-outline-danger mx-2" onClick={cleatText}>Clear</button>
    </div>
    <div className="container my-2">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length -1} words, {text.length} characters</p>
      {/* <h2>Preview</h2   */}
    </div>
    </>
  )
}
