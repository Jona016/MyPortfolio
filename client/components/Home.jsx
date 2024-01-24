import { Link } from 'react-router-dom';
import '../src/index.css'

export default function Home() {
    return <>
        <aside>
            <div>
                <h1>Hello there, </h1> 
                <h2>Jonalyn here</h2>
                <h2> I am an aspiring web developer </h2>
            </div>
        </aside>

        <section>
            <div>
                <p>Welcome! </p>
                <h1>Elevating web experiences with creativity</h1>
            </div>

            <div>
                <h4>To know more about me</h4>
                <Link to="/about">
                    <button>Click here</button>
                </Link>
            </div>
        </section>
    </>
}
    