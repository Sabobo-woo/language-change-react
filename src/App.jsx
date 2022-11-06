import Header from './Header';
import MainContent from './MainContent';
import './App.scss';
import LanguageContext from './LanguageContext';
import { useState } from 'react';

function App() {

  const [language, setLanguage] = useState('en');

  //common ancestor that should keep info about language needed for selection
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="app">

        <Header />

        <MainContent />

      </div>

    </LanguageContext.Provider>
  );
}

export default App;
