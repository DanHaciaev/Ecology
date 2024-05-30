import './App.css';
import Header from './components/header/Header'
import Main from './components/main/Main'
import Game from './components/game/Game'
import Instruction from './components/instruction/Instruction'
import Information from './components/information/Information'
import Recyclable from './components/instruction/Non-recyclable/Recyclable'
import Plastic from './components/instruction/Plastic/Plastic'
import Glass from './components/instruction/Glass/Glass'
import Paper from './components/instruction/Paper/Paper'
import Food from './components/instruction/Food/Food'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/game' element={<Game />}></Route>
          <Route path='/instruction' element={<Instruction />}></Route>
            <Route path='/instruction/non-recyclable' element={<Recyclable/>}></Route>
            <Route path='/instruction/plastic' element={<Plastic/>}></Route>
            <Route path='/instruction/glass' element={<Glass/>}></Route>
            <Route path='/instruction/paper' element={<Paper/>}></Route>
            <Route path='/instruction/food' element={<Food/>}></Route>
          <Route path='/information' element={<Information />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
