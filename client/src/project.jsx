import AI_Website from '../src/assets/AI.png';
import Skill1 from '../src/assets/Skill1.png';
import Skill2 from '../src/assets/Skill2.jpg';

export default function Project() {
    return (
        <>
                <div>
                    <center><h2>Projects</h2></center>
                    <div className="project-list">
                        <div className="project-card">
                        <h3>AI Triage</h3>
                        <img class = "p_img"src = {AI_Website} alt='Centennial College'/>
                        </div>

                        <div className="project-card">
                        <h3>Project 2</h3>
                    
                        </div>
                    </div>
                </div>

                <div>
                   <br/> <center><h2>Skills</h2></center>
                    <div className="skill-list">
                        <div className="skill-card">
                        <h3>Web Development</h3>
                        <img class = "p_img"src = {Skill1} alt='Web Development'/>
                        
                        </div>

                        <div className="skill-card">
                        <h3>UI/UX Design</h3>
                        <img class = "p_img"src = {Skill2} alt='UI/UX Design'/>

                        </div>
                        
                        <div className="skill-card">
                        <h3>Skill 3</h3>
                    
                        </div>
                    </div>

                </div>
        </>
    );
}
    