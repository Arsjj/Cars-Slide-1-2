import './App.css';
import NavBar from './components/Navigation';
import Pages from './routes';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Pages />      
    </div>
  );
}

export default App;
