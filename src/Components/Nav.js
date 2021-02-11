import { Link } from 'react-router-dom';
import '../Styles/Nav.css';

function Nav(props) {

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
    }

    return (
        <nav className='App__AccountNav'>
          <ul>
            <li>
              <Link style={linkStyle} to='/'>Home</Link>
            </li>
            <li>
              <Link style={linkStyle} to='/dailyRoutine'>Daily Routine</Link>
            </li>
            <li>
              <Link style={linkStyle} to='/info'>Account Information</Link>
            </li>
          </ul>
        
          <form>
            <input 
                type="text"
                value={props.apiKey}
                onChange={(e)=> props.setApiKey(e.target.value)}
            />
            <input type="submit"/>
          </form>
        </nav>
    )
};

export default Nav;