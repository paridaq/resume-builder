import { useState } from "react"


function BuildSpace(){
   const [projects,setProjects] = useState<string[]>([""]);
   

   

   const addProjects = ()=>{
    setProjects([...projects,""]);
   }


   

   const handleProjects=(index:number,value:string)=>{
    const newProjects = [...projects]
    newProjects[index] = value
    setProjects(projects)
   }

    return(
        <>
        <style>
            {
                `
                form {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                }
                label {
                    margin-bottom: 5px;
                }
                input {
                    padding: 8px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }
                `
            }
        </style>
        <div>
            <h1>
                welcome to build space
            </h1>

            <form >
               <label htmlFor="">Name</label>
               <input type="text" />
               <label htmlFor="">Linkedin URL</label>
               <input type="text" />
               <label htmlFor="">Portfolio URL</label>
               <input type="text" />
               <label htmlFor="">github Url</label>
               <input type="text" />
               <label htmlFor=""> leetcode Url</label>
               <input type="text" />
               <label htmlFor="">codeforce Url</label>
               <input type="text" />
               <h2>skills</h2>
               <label htmlFor="">programming language</label>
               <input type="text" />
               <label htmlFor="">backend </label>
               <input type="text" />
               <label htmlFor="">frontend</label>
               <input type="text" />
               <label htmlFor="">devops</label>
               <h2>Projects</h2>
               {projects.map((project,index)=>(
                <div key={index}>
                      <label htmlFor="">project-{index+1}</label>
                      <input type="text" 
                      value={project}
                      onChange={(e)=>handleProjects(index,e.target.value)}
                      />
                </div>
               ))}
               <button onClick={addProjects}>Add project</button>


             

            </form>
        </div>

        </>
    )
}
export default BuildSpace