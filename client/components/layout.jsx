import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../src/assets/Logo.png';

export default function Layout() {
    return (
        <>
            <nav>
                <div className='container'>
                    <Link to ="/"><img src = {Logo} alt = "Company Logo" className = "logo" width = "60px" height= "60px"/>  </Link>
                

                <div className='nav-elements'>
                    <ul>
                        

                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/about">About</Link>
                        </li>

                        <li>
                            <Link to="/education">Education</Link>
                        </li>

                        <li>
                            <Link to="/project">Project</Link>
                        </li>

                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        
                    </ul>
                    </div>
                </div>    
            </nav>


            <footer>
                <div>
                    <p>This is  a footer </p>
                    <p>&copy; 2024 Jonalyn. All Rights Reserved.</p>
                </div>
            </footer>
        </>  
    );
    
}


