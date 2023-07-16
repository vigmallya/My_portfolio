import styled from 'styled-components'
import { ToastContainer } from "react-toastify";

export const NotificationBar = styled(ToastContainer)`

.Toastify__toast-theme--light {
    background: var(--toastify-color-light);
    color: #000;
    font-size: 18px;
}
.Toastify__progress-bar-theme--light {
    background: #40E0D0;
}
.Toastify__toast-body{
    padding: 20px;
}
`;