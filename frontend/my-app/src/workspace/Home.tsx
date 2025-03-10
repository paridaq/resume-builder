import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Home(){
      

    const[registeredname,setRegisteredname] = useState<string>('')
    const navigate = useNavigate()

    useEffect(()=>{
         
    const Name = localStorage.getItem("submittedname")
    if(Name){
    setRegisteredname(Name)
    }else{
        setRegisteredname("guest")
    }
    },[])

    return(
        <>
        <style>
            {
                `
                .container{
                }
                .getstart{
                background-color:blue;
                border-radius:10%
                color:white}
                `
            }
        </style>
        <div className="container">
                <h1>
                   hi {registeredname} Let's build  your job ready resume 
                </h1>
                <button onClick={() => navigate('/buildspace')} className="getstart">Get started</button>
        </div>
        </>
    )
}
export default Home;