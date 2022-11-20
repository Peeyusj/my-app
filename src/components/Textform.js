import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpclick=()=>{
        console.log("button clicked")
        let newtext=text.toUpperCase();
        setText(newtext)
    }
    const handleonchange=(event)=>{
         setText(event.target.value)
        console.log("changed")
    }
    const [text, setText] = useState()
    // setText("ghjgjhgghjghjg")
  return (
    <div>  
        <h1 >{props.heading} </h1>   
<div className="mb-3 " >
  <textarea className="form-control" id="mybox" value={text} onChange={handleonchange} placeholder="enter your text here" rows="10"></textarea>
</div>
<button className='btn btn-primary' onClick={handleUpclick}>Convert to UPC</button>
    </div>
  )
}
