import { useState } from 'react';
import './App.css';
import { HotButton } from './HotButton';

function App() {
  const [count, setCount] = useState(0);

  return (
    <HotButton
      onHotButtonClick={() => setCount((count) => count + 1)}
      label="Hot Button"
      clicks={count}
    />
  );
}

export default App;
