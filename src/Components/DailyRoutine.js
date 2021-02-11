import { useState } from 'react';

const DailyRoutine = (props) => {

    const [items, setItems] = useState([]);

    const thingsToDo = {
        dailyAchievements: {
            title: 'Daily Achievements',
            description: 'Achievements one can do once a day to earn 2 gold and 10 achievement points.',
        },
        dailyFractals: {
            title: 'Daily Fractals',
            description: 'Dungeon-like instances. Each day, a chosen few give extra rewards the first time they\'re completed',
        }
    }

    const addRoutine = (e) => {
        setItems(items.concat([thingsToDo.dailyAchievements, thingsToDo.dailyFractals]));
    };

    return (
        <div className="DailyRoutine">
            <h2 className="DailyRoutine__Title">Daily Routine</h2>
            <div className="DailyRoutine__RoutineContainer">
                {
                    items.map( item => {
                        return (
                            <article className="DailyRoutine__Item">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </article>
                        )
                    })
                }
                <div className="DailyRoutine__Item DailyRoutine__RoutineAddButton" onClick={() => addRoutine()} />
            </div>
        </div>
    )
};

export default DailyRoutine;