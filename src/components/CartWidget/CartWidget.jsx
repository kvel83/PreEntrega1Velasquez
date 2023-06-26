
import { BsCart4 } from "react-icons/bs";
import './cartWidget.css';

const CartWidget = () => {
    return (
        <span class="badge cart d-flex gap-2 align-center">
            <h3><BsCart4 /></h3>
            <h6 class="mt-2">4</h6>
        </span>
    );
};

export default CartWidget;