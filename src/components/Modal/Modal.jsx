function Modal({ children, onClose }) {
  return (
    <div>
      <button type="button" onClick={onClose}>
        Fechar
      </button>
      {children}
    </div>
  );
}

export default Modal;
