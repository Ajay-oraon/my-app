import React, {  } from 'react'

export default function About(props) {
    // const[myStyle,setMyStyle]=useState({
    //     color:"black",
    //     backgroundColor:"white",
    //     border:'2px solid white'
    // })
    let myStyle={
        color:props.mode==='dark'?'white':'#011932',
        backgroundColor: props.mode==='dark'?'#011932':'white',
    }
    

    
  return (
<>
<div className="contianer" style={myStyle}>
    <h1 className='mx-2'>About Us</h1>
    <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="card" >
            <div className="card-header" id="headingOne" style={myStyle}>
            <h5 className="mb-0">
                <button className="btn" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                <strong>Analyze Your text ↧</strong>
                </button>
            </h5>
            </div>

            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body" style={myStyle}>
                TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, Character count 
            </div>
            </div>
        </div>
        <div className="card">
            <div className="card-header" id="headingTwo" style={myStyle}>
            <h5 className="mb-0">
                <button className="btn  collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                <strong>Free to Use ↧</strong>
                </button>
            </h5>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div className="card-body" style={myStyle}>
                TextUtils is free character counter tool that provides instant character count & statistics for given text. TextUtils reports the number of words and Character. Thus it is suitable for writing text with word/Character limit.
            </div>
            </div>
        </div>
        <div className="card">
            <div className="card-header" id="headingThree" style={myStyle}>
            <h5 className="mb-0">
                <button className="btn  collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                <strong>Browser Compatible ↧</strong>
                </button>
            </h5>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div className="card-body" style={myStyle}>
                This word counter works in any web browser such as Chrome, firefox,Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essay, ect.
            </div>
            </div>
        </div>
    </div>
  
</div>


</>
  
  )
}
