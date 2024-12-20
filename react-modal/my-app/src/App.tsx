import './App.css';
import { useState } from 'react';
import { Modal } from './Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Delete Me!</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>Do you really want to delete?</p>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
        <button
          onClick={() => {
            alert('Something was deleted');
            setIsOpen(false);
          }}>
          Delete
        </button>
      </Modal>
    </>
  );
}

export default App;
