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
};
