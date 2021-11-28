import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from './data';
import { reducer } from './Reducer';

const initialState = {
  item: data,
  isModalOpen: false,
  modalContent: 'Item added',
};

function App() {
  const [item, setItem] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item) {
      const newItem = { id: new Date().getTime().toString(), item };
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setItem('');
    }
  };
  return (
    <section className='container'>
      {state.isModalOpen && <Modal />}
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
        const { id, name } = piece;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button>remove</button>
          </div>
        );
      })}
    </section>
  );
}

export default App;
