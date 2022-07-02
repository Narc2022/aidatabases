import './App.css';

function App() {
  return (
      <nav
        className='navbar bg-red-gradiant'
      >
        <ul className='navbar-nav'>
          <li className="nav-item">
            <a className="navbar-brand" href="/">Table</a>{"   "}
            <a className="navbar-brand" href="/chart">Chart</a>
          </li>
        </ul>
      </nav>
  );
}

export default App;
