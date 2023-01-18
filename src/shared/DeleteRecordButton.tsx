import apiRequest from "./apiRequest";
import { DeleteItem } from "../dialogs/confirmation";
import { BsTrash2Fill } from "react-icons/bs";

interface DeleteButtonProps {
  id: number;
  remove: (id: number) => Promise<unknown>;
}

const DeleteRecordButton = ({ id, remove }: DeleteButtonProps) => {
  const handleClickOpen = () => {
    DeleteItem(handleDelete);
  };

  const handleDelete = () => {
    apiRequest.execute(
      () => remove(id),
      () => {
        const event = new CustomEvent("listChanged");
        document.dispatchEvent(event);
      }
    );
  };

  return (
    <button
      onClick={handleClickOpen}
      className="text-pink-600 flex items-center justify-center gap-2 py-2 text-sm"
    >
      <BsTrash2Fill className="text-2xl" />
      Delete
    </button>
  );
};

export default DeleteRecordButton;
