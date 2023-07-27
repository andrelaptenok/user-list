export const openModal = (isOpenModal: boolean) => {
  return {
    type: 'OPEN_MODAL',
    payload: isOpenModal,
  };
};
