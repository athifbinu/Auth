// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './components/Header/Header';
import Routers from './Routers/Routers';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <div>
        <div className='mb-24'>
        <Header/>
         <Routers/>
        </div>
         <Footer/>
    </div>
  );
}

export default App;
