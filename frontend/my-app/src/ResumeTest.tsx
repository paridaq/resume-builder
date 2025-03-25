 

 function ResumeTest(){

    return(
        <>
            <div className="resume-container">
                                        <div className="section name-section">
                                                <h1>John Doe</h1>
                                        </div>
                                        <div className="section url-section">
                                                <p>Email: john.doe@example.com</p>
                                                <p>LinkedIn: linkedin.com/in/johndoe</p>
                                                <p>GitHub: github.com/johndoe</p>
                                        </div>
                                        <div className="section skills-section">
                                                <h2>Skills</h2>
                                                <ul>
                                                        <li>JavaScript</li>
                                                        <li>React</li>
                                                        <li>TypeScript</li>
                                                        <li>Node.js</li>
                                                </ul>
                                        </div>
                                        <div className="section projects-section">
                                                <h2>Projects</h2>
                                                <ul>
                                                        <li>Project 1: Description of project 1</li>
                                                        <li>Project 2: Description of project 2</li>
                                                        <li>Project 3: Description of project 3</li>
                                                </ul>
                                        </div>
                                        <div className="section education-section">
                                                <h2>Education</h2>
                                                <p>Bachelor's Degree in Computer Science</p>
                                                <p>University of Example, 2020</p>
                                        </div>
                                </div>
                                <style>
                                        {`
                                                .resume-container {
                                                        font-family: Arial, sans-serif;
                                                        margin: 20px auto;
                                                        padding: 20px;
                                                        border: 1px solid #ccc;
                                                        border-radius: 8px;
                                                        background-color: #f9f9f9;
                                                        color: black;
                                                        width: 210mm; /* A4 width */
                                                        height: 297mm; /* A4 height */
                                                        box-sizing: border-box;
                                                }
                                                .section {
                                                        margin-bottom: 20px;
                                                }
                                                .name-section h1 {
                                                        font-size: 2em;
                                                        margin-bottom: 10px;
                                                }
                                                .url-section p, .education-section p {
                                                        margin: 5px 0;
                                                }
                                                .skills-section ul, .projects-section ul {
                                                        list-style-type: disc;
                                                        margin-left: 20px;
                                                }
                                                .skills-section li, .projects-section li {
                                                        margin: 5px 0;
                                                }
                                        `}
                                </style>      </>
    )
 } 
 export default ResumeTest