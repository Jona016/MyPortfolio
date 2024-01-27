import Centennial_College from '../src/assets/Centennial_College.jpg';


export default function Education() {
    return (
        <>
            <div className="education">
                <h1>Bytes of Brilliance</h1>
                <h4> 
                    <img src = {Centennial_College} alt='Centennial College' width="30%" height="10%"/>
                    <br />
                    Currently pursuing - Health Informatics Technology <br/>
                    Centennial College, Expected Graduation: April 2025
                </h4>
                <h4> 
                    {/* <img src = {TSU} alt='TSU' width="30%" height="10%"/> */}
                    <br />
                    Bachelor of Science in Information Technology <br/>
                    Specialized in Web and Mobile Application <br />
                    Tarlac State University, Graduation Year: 2019
                </h4>
            </div>          
        </>
    );
}
    