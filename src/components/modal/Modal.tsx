import { ModalProps } from "types";
import styles from "./Modal.module.scss";
import { useEffect } from "react";

const Modal = ({ children, onClose, customClass, customInner }: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if ((event.target as HTMLElement).classList.contains(styles.container)) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={customClass ? customClass : styles.container}>
      <div className={customInner ? customInner : styles.container_inner}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
