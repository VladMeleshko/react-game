import './App.css';
import Field from './components/Field.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState('PvP');
  const [value, setValue] = useState('X');
  const [newGame, setNewGame] = useState(false);
  const [audio, setAudio] = useState(true);

  return (
    <div className="app">
      <Header 
        changeMode={(modeType) => setMode(modeType)}
        changeValue={(newValue) => setValue(newValue)}
        startNewGame={(newGame) => setNewGame(newGame)}
        switchAudio={(audioMode) => setAudio(audioMode)}
      />
      <Field 
        mode={mode}
        value={value}
        newGame={newGame}
        audio={audio}
        clearField={(newGame => setNewGame(newGame))}
      />
      <Footer />
    </div>
  );
}

export default App;
