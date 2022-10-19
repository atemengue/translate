/** @format */

import React, { useContext } from 'react';
import { LanguageContext } from './context/contextLanguage';
export default function Field() {
  const { language } = useContext(LanguageContext);
  return (
    <form
      style={{
        marginTop: '10px',
        marginBottom: '10px',
      }}
    >
      <label>{language === 'fr' ? 'Nom' : 'Name'}</label>
      <input />
    </form>
  );
}
