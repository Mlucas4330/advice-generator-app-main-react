import './App.css';
import img from './images/pattern-divider-desktop.svg';
import img2 from './images/icon-dice.svg';
import UseFetch from './UseFetch';

function App() {
    const { data, loading, error, refetch } = UseFetch('https://api.adviceslip.com/advice');

    if (loading) return <h1 className="green">LOADING...</h1>;
    if (error) return <h1 className="green">ERROR...</h1>;
    return (
        <main>
            <h6 className="green">
                ADVICE <span>#{data?.slip.id}</span>
            </h6>
            <p>"{data?.slip.advice}"</p>
            <img className="pattern_divider" src={img} />
            <div onClick={refetch} className="dicebg">
                <img className="dice" src={img2} />
            </div>
        </main>
    );
}

export default App;
