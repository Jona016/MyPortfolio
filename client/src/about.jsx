import Profile from '../src/assets/Profile.jpg';

export default function About() {
    return (
        <>
            <div className="about">
                <h1>Behind the Screen</h1>
                <br/><br/><br/>
                <img src = {Profile} alt = "Profile" width = "10%" height= "10%"/> 
                
                <h1> Jonalyn Llanes </h1> 
                <p>
                    I am a web developer.
                </p>
                <a href="../src/assets/files/resume.pdf" /*download="YourName_Resume.pdf"*/>
                    Download Resume
                </a>
            </div>
            
        </>
    );
}
