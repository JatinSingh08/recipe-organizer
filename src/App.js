import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, SingleRecipe } from './page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipe/:id' element={<SingleRecipe />} />
      </Routes>
    </div>
  );
}

export default App;
