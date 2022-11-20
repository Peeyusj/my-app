import React from 'react'

export default function Alert(props) {
   
   
    const handlecloseclick=()=>{
        console.log("button clicked")
        let close= document.querySelector('#closealert')
       close.style.display='none';
       
    }
  return (
    
     props.alert && <div className="alert alert-warning alert-dismissible fade show" id="closealert" role="alert">
  <strong>{props.alert.type}</strong>:{props.alert.msg }
   <button type="button" onClick={handlecloseclick} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
 </div>

  )
}
