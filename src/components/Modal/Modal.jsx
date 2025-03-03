/* eslint-disable react/prop-types */
import { X } from "lucide-react";
import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext({
  close: () => {},
  open: () => {},
  isOpenName: "",
});

function Modal({ children }) {
  const [isOpenName, setIsOpenName] = useState("");
  const close = () => setIsOpenName("");
  const open = setIsOpenName;

  return (
    <ModalContext.Provider value={{ close, open, isOpenName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opens) });
}

function Window({ children, name }) {
  const { isOpenName, close } = useContext(ModalContext);
  const modalRefContainer = useRef();

  useEffect(() => {
    function handleCloseModal(e) {
      if (
        modalRefContainer.current &&
        !modalRefContainer.current.contains(e.target)
      ) {
        close();
      }
    }

    document.addEventListener("click", handleCloseModal, true);
    return () => {
      document.removeEventListener("click", handleCloseModal, true);
    };
  }, [modalRefContainer, close]);

  useEffect(() => {
    function handleEscCloseModal(e) {
      if (e.key === "Escape") {
        close();
      }
    }

    document.addEventListener("keydown", handleEscCloseModal);
    return () => {
      document.removeEventListener("keydown", handleEscCloseModal);
    };
  }, [close]);

  if (name !== isOpenName) return null;

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-[100vh] backdrop-blur-sm z-[1001] transition-all bg-lightWhite">
      <div
        ref={modalRefContainer}
        className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#02674B] border-4 border-white rounded-lg shadow-2xl md:w-[fit-content] w-[90%] p-5 md:p-10 transition-all"
      >
        <div className="w-full flex justify-end md:translate-y-[-2rem] md:translate-x-[2rem]">
          <button
            onClick={close}
            className={
              "w-fit cursor-pointer border-2 border-transparent hover:border-lightGray transition-all bg-white text-[#02674B] rounded-full"
            }
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
}

function Close({ children }) {
  const { close } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => close() });
}

Modal.Open = Open;
Modal.Window = Window;
Modal.Close = Close;

export default Modal;
