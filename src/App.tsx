import './App.css';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className='structure'>
        <div className='header'>
          <div className='text'>TEST</div>
        </div>
        <div className='main'>
          <div className='buttons'>
            <Link to={'route1'}>
              <button>Route 1</button>
            </Link>
            <Link to={'route2'}>
              <button>Route 2</button>
            </Link>
          </div>
          <div className='outlet'>
            <Outlet />
          </div>
        </div>

        <div className='footer'></div>
      </div>
    </>
  );
}

export default App;
