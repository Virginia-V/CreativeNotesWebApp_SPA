import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import open, { close } from ".";

interface Props {
  id: string;
  message: string;
  onOkTitle: string;
  onCancelTitle: string;
  onOk: () => void;
}

export function DeleteItem(onConfirmed: () => void) {
  const id = "delete";
  return open({
    id: id,
    title: "Are you sure?",
    Content: () =>
      ConfirmationContent({
        id: id,
        message:
          "Do you really want to delete this post? This process cannot be undone.",
        onOkTitle: "Delete",
        onCancelTitle: "Cancel",
        onOk: onConfirmed,
      }),
  });
}

function ConfirmationContent({
  id,
  message,
  onOkTitle,
  onCancelTitle,
  onOk,
}: Props) {
  const confirmed = () => {
    onOk();
    close(id);
  };

  return (
    <>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={() => close(id)}>
          {onCancelTitle}
        </Button>
        <Button color="success" onClick={confirmed}>
          {onOkTitle}
        </Button>
      </DialogActions>
    </>
  );
}
