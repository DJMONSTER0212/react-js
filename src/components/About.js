import React, { useState } from 'react'

export default function About() {
    const dark ={
        color: "#39ff14",
        background:"transparent"
    }
    const light = {
        background:"white",
        color:"black"
    }
    const [mystyle,setMystate] = useState(dark);
    const [btntext,setText]  = useState("Enable Light Mode");
    let st2={
        background: "transparent",
        color:"#39ff14"
    }
    const toggleStyle = ()=>{ 
        if(JSON.stringify(mystyle)===JSON.stringify(dark)) { // Usually, when you compare data types like int and strings in JavaScript, you use the equality operators ( == and === ). However, comparing objects with == and === will not work. To fix this, one option is to stringify both objects and then use the equality operators.
            setMystate(light);
            setText("Enable Dark Mode");
        }
        else {
            setMystate(dark);
            setText("Enable Light Mode");
        }
        // console.log(mystyle,btntext);
    }
  return (
    <div className='container'>
        <h2>About Us</h2>
        <hr/>   
      <div className="accordion" id="accordionExample" style={st2}>
        <div className="accordion-item" style={st2}>
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" style={mystyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" style={st2} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={st2}>
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={st2}>
            <h2 className="accordion-header" id="headingTwo" style={st2}>
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" style={st2} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={st2}>
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={st2}>
            <h2 className="accordion-header" style={st2} id="headingThree">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" style={st2} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={st2}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
</div>
    <div className="container">
        <button onClick={toggleStyle}  className='btn btn-primary my-3'>{btntext}</button>
    </div>
    {/* <p>{btntext}</p> */}
    </div>
  )
}
