// import { useState } from "react";



// function NavBar(){
//     const[name,setName] = useState<string>('')

//     const handleSubmit=async(e: React.FormEvent<HTMLFormElement>)=>{
//         e.preventDefault();
//         try {
//             const response = await fetch('http://localhost:8080/api/auth/register',{
//                 method:'POST',
//                 headers:{
//                     'Content-Type':'application/json'
//                 },
//                 body: JSON.stringify({ name })
//             })
//             if(response.ok){
//                 console.log('name registered')
//             }
//         } catch (error) {
//             console.log(error)
//         }


//     }



//     return(
//         <>
//         <form onSubmit={handleSubmit}>
//             <input type="text"
//             value={name}
//             onChange={(e)=>setName(e.target.value)}
//             />
//             <button type="submit">Submit</button>
//         </form>
//         </>
//     )
// }

// export default NavBar;