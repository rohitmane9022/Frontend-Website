
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';


const App = () => {

  return (
    <main className='w-full h-full font-Arimo'>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </main>
  );
};

export default App;
