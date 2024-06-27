import React from 'react';



export default function Contact() {
  return (
    <div>
    
      <h1 className="flex justify-center text-8xl m-25 p-25">Let's Chat</h1>

      <label className="Name flex justify-left text-2xl"> Name</label>
      <textarea name='string/@/number 'placeholder="your Name  here" cols-1 rows-1></textarea>
      {/* <input type="text/string" placeholder="First Name"> &nbsp; &nbsp; <input type="text/string" placeholder="Last Name"></input></input> */}


      <label className="E-mail flex justify-left text-2xl">E-mail</label>
      <textarea name='string/@'placeholder="your E-Mail  here" cols-5 rows-5></textarea>
      

      <label className="Feed Back flex justify-left text-2xl">Feed Back</label>
      <textarea name="text/string/number" placeholder="your Feed Back here" cols-10 rows-5></textarea>
    </div>
  )
}


