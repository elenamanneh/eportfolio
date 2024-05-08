import { header_img } from '../img/style';
import './header.css'


function header() {

    return (
        <div className="Header">
            <img src={header_img} className="Header-img" alt="header-img" />
        </div>
    );
}

export default header;

