export const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newItem = [...state.item, action.payload];
    return {
      ...state,
      item: newItem,
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
};
