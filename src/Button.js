/** @format */

import React, { useContext } from 'react';
import { LanguageContext } from './context/contextLanguage';

export default function Button() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <button
      style={{ backgroundColor: language === 'fr' ? 'red' : 'blue' }}
      type='submit'
    >
      {language === 'fr' ? 'Envoyer' : 'Submit'}
    </button>
  );
}
