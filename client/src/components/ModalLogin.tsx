import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

type Props = {
    show: boolean | undefined;
    handleClose?: () => any;
    handleShow?: () => void;
}

export default function ModalLogin({show, handleClose}: Props) {
  return (
    <>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>S'inscrire</Modal.Title>
        </Modal.Header>
        <Modal.Body>Il y aura un form ici</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
