import "./Modal.css";
import CloseIcon from "../../assets/icons/close.png";
import { useEffect, useState } from "react";

export const Modal = ({ openModal, closeModal, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
    if (closeModal) {
      closeModal();
    }
  };

  useEffect(() => {
    setIsOpen(openModal);
  }, [openModal]);

  return (
    isOpen && (
      <div className="overlay">
        <div className="modal-content">
          <div className="card-xl">
            <div onClick={handleCloseModal} className="close-button">
              <img src={CloseIcon} alt="icon-close" />
            </div>
            {children}
          </div>
        </div>
      </div>
    )
  );
};
