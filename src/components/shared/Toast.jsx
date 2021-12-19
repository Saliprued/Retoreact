import { Toast, ToastContainer } from "react-bootstrap";
import '../../styles/Toast.css';

const ToastReto = (props) => (
    <ToastContainer className="p-3" position="top-end">
        <Toast onClose={() => props.onClose()} show={props.show}
            delay={3000} autohide bg={props.variant ?? 'info'}
            style={{zIndex:-1000}}>
            <Toast.Header>
                <strong>{props.title}</strong>
            </Toast.Header>
            <Toast.Body>
                {props.message}
            </Toast.Body>
        </Toast>
    </ToastContainer>
)

export default ToastReto

/*
props.variant ?? 'info'
es lo mismo que
props.variant!=null ? props.variant : 'info'
*/