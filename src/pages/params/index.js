import React from 'react';
import ExtractionForm from '../../components/extractionForm';

import "./styles.css";

export default function index() {
  return (
    <div className="frame">
      {/* <h1>Parâmetros de Extração</h1> */}
      <ExtractionForm />
    </div>
  );
}
