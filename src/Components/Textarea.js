import React, { useState } from 'react'
import './area.css'

//Disabled is a property in html for making disabled button or form

export default function Textarea(props) {
  const [text, setText] = useState("")
  const [preview, setpreview] = useState(" ")
  const click = ()=>{
    if(text.length!==0){
    let a = text.toUpperCase();
    setText(a);
    props.setalert('Converted To UpperCase', 'Success:')
    props.changing();
    }
  }

  const click2 = ()=>{
    if(text.length!==0){
    let a = text.toLowerCase();
    setText(a);
    props.setalert('Converted To LowerCase', 'Success:')
    props.changing();
    }
  }

  const click3 = ()=>{
    if(text.length!==0){
    setpreview(text);
    props.setalert('Text Previewed', 'Success:')
    props.changing();
    }
  }

  const click4 = ()=>{
    if(text.length!==0){
    setText("")
    props.setalert('Text Cleared', 'Success:')
    props.changing();
    }
  }

  const copy = ()=>{
    if(text.length!==0){
      navigator.clipboard.writeText(text);
    props.setalert('Copied To Clipboard', 'Success:')
    props.changing();
  }
  }

  const change = (event)=>{
    setText(event.target.value)
    console.log(props.mode)
  }
  const paste = ()=>{
    navigator.clipboard.readText().then((clipboardText)=>{
      if(clipboardText.length!==0){
      setText(text+" "+clipboardText)
      props.setalert('Text Pasted Successfully', 'Success:')
      props.changing();
  }})
  }
  return (
    <>
      <div className='align'>
        <div>
          <h1>Enter Your text here</h1>
          <textarea value={text} onChange={change} className='size1' style={{backgroundColor: props.mode ==='dark'?"#1b1a1a":"white", color: props.mode ==='dark'?'white':'black'}}></textarea>
        </div>
        <div className='flex'><input type="button" className="button" onClick={click} value="Convert To UpperCase"/> <input type="button" className="button" onClick={click2} value="Convert To LowerCase"/> <input type="button" className="button" onClick={click4} value="Clear Text"/> <input type="button" className="button" onClick={copy} value="Copy Text"/> <input type="button" className="button" onClick={paste} value="Paste Text"/> </div>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words and {text.length} characters</p>
        <input type="button" className="button button2" value="Preview" onClick={click3}/>
        <p>{preview}</p>
      </div>
    </>
  )
}
