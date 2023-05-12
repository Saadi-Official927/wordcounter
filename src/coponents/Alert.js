import React from 'react'

export default function Alert(props) {
  //To capataliza the Word   Success
  const Capatalize = (word) => {
    let lower = word.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  //This will work
  // div className='alert alert-primary alert-dismissible fade show my-2'  role= "alert"
  return (
    <div className='container' style={{ height: '60px', display: 'block' }} >
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show my-2`} role="alert">
        <strong> {Capatalize(props.alert.type)} </strong> {props.alert.msg}
      </div>
      }
    </div>
  )
}
