import React  from 'react'

export default function About(props) {

// const [mystyle, SetMyStyle] = useState({

//     color: 'Black',
//     backgroundColor: 'White',  
//     Border: '2px solid white'
// })

let mystyle ={
  color : props.mode === 'dark'?'white':'#042743',
  backgroundColor : props.mode === 'dark'?'rgb(36 74 104)':'white',
  
}
  return (
    <div className='container'>
       <h1 className='my-2'  style={{  color : props.mode === 'dark'?'white':'#042743',}}>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
      TextUtils is a user-friendly word processing tool designed to assist individuals in analyzing and manipulating text efficiently. Whether you need to count words, convert text case, or remove extra spaces, TextUtils provides a seamless experience tailored to meet your needs.      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free To Use </strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong></strong> 
        TextUtils is a free-to-use platform that empowers users with powerful text analysis and manipulation tools, making it easy to enhance and optimize your text content without any cost.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        TextUtils is a free-to-use platform that empowers users with powerful text analysis and manipulation tools, making it easy to enhance and optimize your text content without any cost.
      </div>
    </div>
    </div>
    </div>
    

    <footer style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
    color: props.mode === 'dark' ? 'white' : 'black',
        padding: '20px',
        textAlign: 'center'
      }}>
        <p style={{ color: props.mode === 'dark' ? 'white' : 'black', textShadow: '2px 2px 4px #000000',  fontSize: '30px' }}>Develop by Mukul Gupta</p>
      </footer>
      </div>
   


    
  

   
   

    
  )
}
