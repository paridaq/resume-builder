"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resumeController = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const resumeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const formData = req.body;
        console.log(formData);
        const { name, linkedinURL, portfolioURL, githubURL, leetcodeURL, codeforcesURL, skills, projects, workexperinces, summary, } = formData;
        const { programminglanguage, backend, frontend, devops } = skills;
        const publicDir = path_1.default.join(__dirname, "public");
        if (!fs_1.default.existsSync(publicDir)) {
            fs_1.default.mkdirSync(publicDir, { recursive: true });
        }
        const browser = yield puppeteer_1.default.launch();
        const page = yield browser.newPage();
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
            ${Array.isArray(workexperinces) ? workexperinces.map(workExperience => `
                    <li>
                       <strong>${workExperience.companyName}:</strong><br>
                       ${workExperience.workdescription}
                    </li>
                `).join('') : '<li>No work experiences available</li>'}
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
        console.log(resumeHTML);
        yield page.setContent(resumeHTML);
        const pdfPath = path_1.default.join(__dirname, "public", `${Date.now()}-resume.pdf`);
        console.log("pdfpath :", pdfPath);
        yield page.pdf({ path: pdfPath, format: "A4" });
        yield browser.close();
        res.json({ pdfUrl: `/public/${path_1.default.basename(pdfPath)}` });
    }
    catch (error) {
        res.status(500).send({
            error: "Error while generating Image"
        });
    }
});
exports.resumeController = resumeController;
