import './App.css';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className='text'>TEST</div>
      <div className='rectangle'></div>
      <div className='buttons'>
        <Link to={'route1'}>
          <button>Route1</button>
        </Link>
        <Link to={'route2'}>
          <button>Route2</button>
        </Link>
      </div>
      <div className='outlet'>
        <Outlet />
      </div>
    </>
  );
}

export default App;
