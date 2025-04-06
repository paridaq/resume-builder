import {Response,Request} from 'express'
import { Express } from 'express'
import puppeteer from 'puppeteer'
import fs from "fs"
import path from 'path'
import { fileURLToPath } from "url";
import { dirname } from "path";


export const resumeController =async(req:Request,res:Response):Promise<any>=>{
  try{
    const formData = req.body
    console.log(formData)
    interface Project {
        name: string;
        techStack: string;
        description: string;
    
    }

    interface WorkExperiences {  
        companyName: string;
       workdescription: string;
    }

    const {
        name,
        linkedinURL,
        portfolioURL,
        githubURL,
        leetcodeURL,
        codeforcesURL,
        skills,
        projects,
        workexperinces,
        summary,
    }: {
        name: string;
        linkedinURL: string;
        portfolioURL: string;
        githubURL: string;
        leetcodeURL: string;
        codeforcesURL: string;
        skills: {
            programminglanguage:string;
            backend:string;
            frontend:string;
            devops:string;
        }
        projects: Project[];
        workexperinces: WorkExperiences[];
        summary: string;
    } = formData;
    const {programminglanguage,backend,frontend,devops} = skills;
    const publicDir = path.join(__dirname, "public");
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
    }
    const browser = await puppeteer.launch();
   const page = await browser.newPage();
   //here we used backticks because we use template litteral 
   // if we did not use this then we gone need to put \n in everyline
const resumeHTML = `
 <!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Resume Template</title>
 <style>
      body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
      }
      .container {
            max-width: 800px;
            margin: 20px auto;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }
      h1, h2 {
            color: #333;
      }
      .section {
            margin-bottom: 20px;
      }
      .links a {
            margin-right: 10px;
            text-decoration: none;
            color: #007BFF;
      }
      .links a:hover {
            text-decoration: underline;
      }
      ul {
            padding-left: 20px;
      }
 </style>
</head>
<body>
 <div class="container">
      <h1>${name}</h1>
      <p><strong>Email:</strong> your.email@example.com | <strong>Phone:</strong> +123 456 7890</p>
      <div class="links">
            <a href="${portfolioURL}" target="_blank">Portfolio</a>
            <a href="${linkedinURL}" target="_blank">LinkedIn</a>
            <a href="${githubURL}" target="_blank">GitHub</a>
            <a href="${leetcodeURL}" target="_blank">LeetCode</a>
            <a href="${codeforcesURL}" target="_blank">Codeforces</a>
      </div>

      <div class="section">
            <h2>Projects</h2>
            <ul>
        ${projects.map(project => `
            <li>
                <strong>${project.name}:</strong> (${project.techStack}) <br>
                ${project.description}
            </li>
        `).join('')}
    </ul>
      </div>

      <div class="section">
            <h2>Experience</h2>
            <ul>
            ${
                Array.isArray(workexperinces) ? workexperinces.map(workExperience => `
                    <li>
                       <strong>${workExperience.companyName}:</strong><br>
                       ${workExperience.workdescription}
                    </li>
                `).join('') : '<li>No work experiences available</li>'
            }
            </ul>
      </div>

      <div class="section">
            <h2>Skills</h2>
            <ul>
               <li>Programming language:${programminglanguage}</li>
               <li>Backend:${backend}</li>
               <li>Frontend:${frontend}</li>
               <li>Devops:${devops}</li>
            </ul>
           
      </div>

      <div class="section">
       
            <p>${summary}</p>
      </div>
 </div>
</body>
</html>`;
   console.log(resumeHTML)
   await page.setContent(resumeHTML);
   const  pdfPath = path.join(__dirname,"public",`${Date.now()}-resume.pdf`)
   console.log("pdfpath :",pdfPath)
   await page.pdf({path:pdfPath,format:"A4"})
   await browser.close();

   res.json({ pdfUrl: `/public/${path.basename(pdfPath)}` });
}catch(error){
  res.status(500).send({
    error:"Error while generating Image"
  })
}
}