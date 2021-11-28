import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from './data';
import { reducer } from './Reducer';

const initialState = {
  item: [],
  isModalOpen: false,
  modalContent: '',
};

function App() {
  const [item, setItem] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item) {
      const newItem = { id: new Date().getTime().toString(), item };
      console.log(newItem);
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setItem('');
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <section className='container'>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </div>
        <button type='submit'>Add</button>
      </form>
      {state.item.map((piece) => {
        return (
          <div key={piece.id} className='item'>
            <h4>{piece.name}</h4>
            <button>remove</button>
          </div>
        );
      })}
    </section>
  );
}

export default App;
