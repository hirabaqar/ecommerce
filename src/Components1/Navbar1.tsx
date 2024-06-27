import Link from "next/link";


export default function Navbar () {
  return (
    <>
     <div>
      <div className='flex justify-center gap-10 m-24 p-5'>
        
        <a href="/">Home</a>
        <a href="/About">About</a>
        <a href="/Projects">Projects</a>
        {/* <a href="/Serivces">Serivces</a> */}
        <a href="/Contact">Contact Us</a>

        <button className="flex justify-items-end gap-15  bg-blue-800 text-3xl font-bold rounded-br-xl ">SignUp</button> 
        </div>
    
        {/* <div className="bg-purple-900 hover:bg-teal-800 px-5 py-4 text-xlg rounded-2xl  flex justify-center">
        <button >Login</button> */}

        {/* <div className="flex justify-center text-4xl"> */}
          {/* <h1 className='bg-indigo-300 flex justify-center text-4xl"'><strong>Welcome to Digital World</strong></h1> */}
      </div>
      
    {/* </div> */}
    </>
  )
}
{/* <button className="flex justify-center gap-5  bg-blue-800 text-3xl font-bold rounded-br-xl ">SignUp</button>  */}


