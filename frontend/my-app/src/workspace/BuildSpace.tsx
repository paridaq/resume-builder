import { useState } from "react"


function BuildSpace(){
   const [projects,setProjects] = useState([{name:"",techStack:"",description:"",}]);
   const[workexperinces,setWorkexperinces] = useState([{companyName:"",workdescription:""}])
   

   const addWorkexperince = ()=>{
    setWorkexperinces([...workexperinces,{companyName:"",workdescription:""}])
   }

   const addProjects = ()=>{
    setProjects([...projects,{name:"",techStack:"",description:"",}]);
   }


   const handleWorkexperince =(index:number,field:"companyName" | "workdescription",value:string)=>{
    const newWorkexperinces = [...workexperinces];
    (newWorkexperinces[index] as any)[field] = value
    setWorkexperinces(newWorkexperinces)
   }

   const handleProjects=(index:number,field:"name" | "techStack" | "description",value:string)=>{
    const newProjects = [...projects]
    newProjects[index][field] = value
    setProjects(newProjects)
   }


   const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    

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

            <form onSubmit={handleSubmit}>
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
                      value={project.name}
                      onChange={(e)=>handleProjects(index,"name",e.target.value)}
                      placeholder="project name"
                      />
                      <input type="text" 
                      value={project.techStack}
                      onChange={(e)=>handleProjects(index,"techStack",e.target.value)}
                      placeholder="add techstack used"
                      />
                      <input type="text" 
                      value={project.description}
                      onChange={(e)=>handleProjects(index,"description",e.target.value)}
                      placeholder="add description "
                      />
                </div>
               ))}
               <button onClick={addProjects}>Add project</button>
                <h2>Work Experience</h2>
                {workexperinces.map((workexperince,index)=>(
                    <div key={index}>
                        <label htmlFor="">company-{index+1}</label>
                        <input type="text"
                        value={workexperince.companyName}
                        onChange={(e)=>handleWorkexperince(index,"companyName",e.target.value)} 
                        placeholder="company name"
                         />
                          <input type="text"
                        value={workexperince.workdescription}
                        onChange={(e)=>handleWorkexperince(index,"workdescription",e.target.value)}
                        placeholder="work done within the company"
                          />
                    </div>
                ))}
                <button onClick={addWorkexperince}>add workexperince</button>
                <h2>summery</h2>

                
            </form>
        </div>

        </>
    )
}
export default BuildSpace