import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upperCase",'success');
    }
    const handleLowClick=()=>{
      // console.log("Uppercase was clicked");
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase",'success');
  }
  const handleReverseClick=()=>{
    // console.log("Uppercase was clicked");
    let newText = text.split('').reverse().join('');
    setText(newText);
    props.showAlert("Words Reversed",'success');
}
const handleClear=()=>{
  // console.log("Uppercase was clicked");
  let newText ="";
  setText(newText);
  props.showAlert("Text Cleared",'success');
}
    const handleOnChange=(event)=>{
        // console.log("text change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#011932'}}>
   <h1>{props.heading}</h1>     
<div className="form-group">
<textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#030f1c':'white', color:props.mode==='dark'?'white':'#011932'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} type="button" className="btn btn-primary my-3" onClick={handleUpClick}>Convert to UpperCase</button>
<button disabled={text.length===0} type="button" className="btn btn-primary my-3 mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
<button disabled={text.length===0} type="button" className="btn btn-primary my-3 mx-2" onClick={handleReverseClick}>Reverse Text</button>
<button disabled={text.length===0} type="button" className="btn btn-primary my-3 mx-2" onClick={handleClear}>Clear Text</button>

    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'#011932'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview here!"}</p>
    </div>
    </>
  )
}
