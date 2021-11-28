export const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newItems = [...state.item, action.payload];
    return {
      ...state,
      item: newItems,
      isModalOpen: true,
      modalContent: 'item added',
    };
  }

  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'please enter value',
    };
  }

  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false };
  }

  if (action.type === 'REMOVE_ITEM') {
    const newItems = state.item.filter((piece) => piece.id !== action.payload);

    return {
      ...state,
      item: newItems,
    };
  }

  throw new Error('no mathing action type');
};
