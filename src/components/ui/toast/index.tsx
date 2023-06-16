import { toast, ToastOptions, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { Button, Col, Row } from 'reactstrap';
export enum toastEnum {
  SUCCESS = 'SUCCESS',
  INFO = 'INFO',
  WARNING = 'WARNING',
  DANGER = 'DANGER',
}

const defaultMsgOptions: ToastOptions = {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 5000,
  closeOnClick: false,
  draggable: false,
};

const defaultConfirmDialogOptions: ToastOptions = {
  ...defaultMsgOptions,
  autoClose: false,
  icon: false,
  toastId: 'customToastDialogId', // use this id to programmatically remove toast
};

/**
 * danger toast's auto close time is set to false by default.
 */
export const toastMsg = (
  toastStatus: toastEnum,
  message: string,
  customOptions?: ToastOptions,
) => {
  const options = { ...defaultMsgOptions, ...customOptions };
  switch (toastStatus) {
    case toastEnum.SUCCESS:
      toast.success(message, options);
      break;
    case toastEnum.INFO:
      toast.info(message, options);
      break;
    case toastEnum.WARNING:
      toast.warn(message, options);
      break;
    case toastEnum.DANGER:
      toast.error(message, {
        ...defaultMsgOptions,
        autoClose: false,
        ...customOptions,
      });
      break;
    default:
      break;
  }
};

export const toastConfirmDialog = (
  onConfirm: () => Promise<unknown> | void,
  message: string,
  cancelText: string,
  confirmText: string,
) => {
  const toastContent = (
    <>
      <div>{message}</div>
      <Row className="mt-3">
        <Col>
          <Button
            size="sm"
            block
            color="light"
            onClick={() => {
              toast.dismiss(defaultConfirmDialogOptions.toastId);
            }}
          >
            {cancelText}
          </Button>
        </Col>
        <Col>
          <Button
            size="sm"
            block
            color="danger"
            onClick={() => {
              void onConfirm();
              toast.dismiss(defaultConfirmDialogOptions.toastId);
            }}
          >
            {confirmText}
          </Button>
        </Col>
      </Row>
    </>
  );

  toast.error(toastContent, defaultConfirmDialogOptions);
};
export { ToastContainer };
