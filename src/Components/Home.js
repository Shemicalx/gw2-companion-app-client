import { useState, useEffect } from 'react';
import ErrorMessage from './ErrorMessage';

const Home = (props) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dailies, setDailies] = useState([]);

    useEffect(()=> {
        fetch("https://api.guildwars2.com/v2/achievements/daily")
            .then( res => res.json() )
            .then( 
                ( result ) => {
                    setIsLoaded(true);
                    setDailies(result);
                },
                ( error ) => {
                    setIsLoaded(true);
                    setError(error)
                }
            )
    }, []);

    if(error) {
        return <ErrorMessage error={error} />
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <section className='HomeSection'>
                <h2>Home</h2>
                <ul>
                    {Object.entries(dailies).map( ([catagory, achievements]) => {
                        return (
                            <li>
                               {catagory}: {achievements.map( a => a.id ).join(', ')}
                           </li>
                       )
                    })}
                </ul>
                <button onClick={()=>console.log(dailies)}>Daily Achievements</button>
            </section>
        )
    }
};

export default Home;