/* eslint-disable jsx-a11y/anchor-is-valid */
import './navBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return(
        <nav class="navbar navbar-custom navbar-expand-lg ">
            <div class="container-fluid">
                <a class="navbar-brand brand-color" href="#">Kawaii Store</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link links-color" aria-current="page" href="#">Ofertas</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle links-color" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                Categorías
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item links-color" href="#">Papelería</a></li>
                                <li><a class="dropdown-item links-color" href="#">Accesorios</a></li>
                                <li><a class="dropdown-item links-color" href="#">Ropa</a></li>
                                <li><a class="dropdown-item links-color" href="#">Decoraci</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item links-color" href="#">Formulario de contacto</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link links-color">Políticas de envío</a>
                        </li>
                    </ul>
                    <form class="d-flex gap-2" role="search">
                        <input class="form-control me-2" type="search" placeholder="Buscar producto" aria-label="Search"/>
                        <button className="btn button-color" type="submit">Search</button>
                        <CartWidget />
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;