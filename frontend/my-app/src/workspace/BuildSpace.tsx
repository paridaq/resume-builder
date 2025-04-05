import { useState } from "react"


function BuildSpace(){
    interface  workexperince{
        companyName:string;
        workdescription:string;
    }
    interface Projects {
      name:string;
      techStack:string;
      description:string
    }

    interface Skills {
        programminglanguage:string;
        backend:string;
        frontend:string;
        devops:string;

    }
    

   const[pdfURL,setpdfURl] = useState<string>('')

   const [projects,setProjects] = useState<Projects[]>([{name:"",techStack:"",description:"",}]);
   const[workexperinces,setWorkexperinces] = useState<workexperince[]>([{companyName:"",workdescription:""}])
   const [name,setName] = useState<string>('')
   const[linkedinURL,setLinkedinURL] = useState<string>('')
   const[portfolioURL,setPortfolioURL]= useState<string>('')
   const [githubURL,setGithubURL] = useState<string>('')
   const[leetcodeurl,setLeetcodeURL] = useState<string>('')
   const[codeforcesURL,setCodeforcesURL]=useState<string>('')
   const[summery,setSummery] = useState<string>('')
   const [skills, setSkills] = useState<Skills>({
    programminglanguage: "",
    backend: "",
    frontend: "",
    devops: "",
});


   

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
   


   const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const formData={
        name,
        linkedinURL,
        portfolioURL,
        githubURL,
        leetcodeurl,
        codeforcesURL,
        skills,
        projects,
        workexperinces,
        summery
    }
    try {
        //send data to the backend
        // i am not using any database to store userdata
        const response = await fetch("https://resume-builder-3kaa.vercel.app/api/build/resume-build",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        })
        console.log(response)
        if(response.ok){
            const result = await response.json();
            console.log(result)
            setpdfURl(result.pdfUrl)
            console.log(pdfURL)
            
        }
    } catch (error) {
        console.log(error)
        
    }

    

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
               <input type="text"
               value={name}
               onChange={(e)=>{
                setName(e.target.value)
               }}
               />
               <label htmlFor="">Linkedin URL</label>
               <input type="text"
               value={linkedinURL}
               onChange={(e)=>{
                setLinkedinURL(e.target.value)
               }} />
               <label htmlFor="">Portfolio URL</label>
               <input type="text" 
               value={portfolioURL}
               onChange={(e)=>{
                setPortfolioURL(e.target.value)
               }}/>
               <label htmlFor="">github Url</label>
               <input type="text"
               value={githubURL}
               onChange={(e)=>{
                setGithubURL(e.target.value)
               }}
                />
               <label htmlFor=""> leetcode Url</label>
               <input type="text" 
               value={leetcodeurl}
               onChange={(e)=>{
                setLeetcodeURL(e.target.value)
               }}
               />
               <label htmlFor="">codeforce Url</label>
               <input type="text" 
               value={codeforcesURL}
               onChange={(e)=>{
                setCodeforcesURL(e.target.value)
               }}
               />
               <h2>skills</h2>
               <label htmlFor="">programming language</label>
               <input type="text" 
               value={skills.programminglanguage}
               onChange={(e)=>{
                setSkills({...skills,
                    programminglanguage:e.target.value
                })
               }}
               />
               <label htmlFor="">backend </label>
               <input type="text"
               value={skills.backend}
               onChange={(e)=>{
                setSkills({
                    ...skills,backend:e.target.value
                })
               }}
               />
               <label htmlFor="">frontend</label>
               <input type="text"
               value={skills.frontend}
               onChange={(e)=>{
                setSkills({
                    ...skills,frontend:e.target.value
                })
               }}
                />
               <label htmlFor="">devops</label>
               <input type="text"
               value={skills.devops}
               onChange={(e)=>{
                setSkills({
                    ...skills,devops:e.target.value
                })
               }}
                />
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
                <input type="text"
                placeholder="add anything about you"
                value={summery}
                onChange={(e)=>{
                    setSummery(e.target.value)
                }}
                 />
                 <h2>Thank you for using the application to build  your Ressume</h2>
                 <button type="submit">SUbmit</button>
                
            </form>

            {pdfURL &&(
                <a href={`https://resume-builder-3kaa.vercel.app${pdfURL}`} download>
                    <button>Download Resume</button>
                </a>
            )
            }
            <h1>here we are</h1>
        </div>

        </>
    )
}
export default BuildSpace