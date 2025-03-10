
import { useState } from "react";


function NavBar(){
     const [show ,setShow] = useState<boolean>(false)
     const[name,setName] = useState<string>('')
     const[submittedname,setSubmittedname] = useState<string>('')


    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       setSubmittedname(name)
    };

    return(
        <>
        <style>
            {
                `
                .navbar {
                    display: flex;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    background-color: white;
                    justify-content: space-between;
                    align-items: center;
                    height: 60px;
                    width: 100%;
                    font-size: 20px;
                    font-weight: bold;
                }
                .nav-left {
                    color: black;
                    margin-left:9px
                }
                .nav-right a {
                    color: blue;
                    text-decoration: none;
                    margin-left: 30px;
                }
                    .input{
                    height:40px
                    
                    }
                    .submitname{
                    color:black;
                    }
                    

                `
            }
        </style>
        <nav className="navbar">
            <div className="nav-left">ResumeCraft</div>
            <div className="nav-right">
                {submittedname ? (<span className="submitname">{submittedname}</span>):
              show? (<form onSubmit={handleSubmit}>
                <input className="input" type="text"
                placeholder="submitname"
                value={name}
                onChange={(e)=>setName(e.target.value)} />
                <button className="button" type="submit">submit</button>
                </form>
                
                
              ):(
                <button onClick={()=>setShow(true)}>
                    Register
                </button>
              )}
            </div>
        </nav>
        </>
    )
}
export default NavBar;