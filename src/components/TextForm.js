import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange  = (event)=>{
        // console.log("On change")
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter Text here");  //text is a variable , setText is a function|| sabse pehle imported use state hook from react || text k ander = "Enter text here" reh jaayega , default value hai aur jab bhi text ko update karenge toh is function k saath karenge
    // text  = "new text" // wrong way to change the state
    // setText("new Text"); // correct way to change the state
  return (
    <div>
        <h1 className='my-3'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} value={text} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-outline-success" onClick={handleUpClick}>Convert To Uppercase</button>
    </div>
  )
}
