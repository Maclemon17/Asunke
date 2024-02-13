import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export type ModalProps = {
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
};

const Modal = ({ handleClose, handleOpen, open }: ModalProps) => {

  return (
    <div
      className={
        open
          ? "fixed top-0 left-0 right-0 bottom-0 bg-black/55 bg-blur bg-opacity-40 z-50 flex justify-center items-center px-4 opacity-1 visible transition duration-300"
          : "opacity-0 hidden"
      }
    >
      <div className="bg-containe p-8 rounded-xl bg-white max-w-[450px]">
        <AiOutlineClose
          className="absolute right-8 top-8 text-2xl cursor-pointer text-white"
          onClick={handleClose}
        />
        <div className="py-8 px-5 flex flex-col justify-center">
            <p className="text-center text-lg font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quaerat, ullam iste animi, unde repellendus cum, vero assumenda voluptate illum pariatur.</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
