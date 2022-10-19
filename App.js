/** @format */

import React, { useState } from 'react';
import { LanguageContext } from './context/contextLanguage';
import UserCreate from './UserCreate';

const App = () => {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      <div>
        <div>
          <span>Selectionner la language</span>
          <button onClick={() => setLanguage('fr')}>FR</button>
          <button onClick={() => setLanguage('en')}>EN</button>
        </div>
        <UserCreate />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
