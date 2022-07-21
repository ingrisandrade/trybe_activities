import './App.css';
import gamesList from './data';
import VideoGameList from './components/VideoGameList';

function App() {
  return (
    <div className='App'>
      <VideoGameList games={ gamesList } />
    </div>
  );
}

export default App;
