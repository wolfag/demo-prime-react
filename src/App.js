import React, { useState, useCallback } from 'react';
import { Button } from 'primereact/button';
import logo from './logo.svg';
import './App.css';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount(count + 1);
  });
  return (
    <div className='App'>
      <Button label='Click me' icon='pi pi-check' onClick={increment} />
      <p>Number pf click: {count}</p>
    </div>
  );
}

export default App;
