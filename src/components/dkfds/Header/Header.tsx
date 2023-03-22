import React from 'react'

export function Header() {

    return (
        <>
            <header className="header">
                <div className="portal-header portal-header-compact">
                    <div className="container portal-header-inner">
                        <img src="https://www.nordatlantiskhus.dk/media/2830/kemp_og_lauritzen_logo_pos_rgb.png?maxwidth=1030" alt="Kemp & Lauritzen"/>
                        <button
                            className="function-link button-menu-open js-menu-open ml-auto d-print-none"
                            aria-haspopup="menu"
                            title="Åben mobil menu"><svg className="icon-svg" focusable="false" aria-hidden="true"><use href="#menu"></use></svg>Menu</button>

                        <div className="portal-info">
                            <p className="user">Anders Andersen, Forsikringens Forsikringsfirma
                            </p>
                            <button
                                className="button button-secondary alert-leave d-print-none">
                                Log af
                            </button>
                        </div>
                    </div>
                </div>
                <div className="solution-header">
                    <div className="container solution-header-inner">
                        <div className="solution-heading">
                            <a href="#" className="alert-leave2">En længere løsningstitel</a>
                        </div>

                        <div className="solution-info">
                            <p className="h5 authority-name">Myndighedsnavn</p>
                            <p>Support: 12 34 56 78 <span className="d-print-none">· <a
                                href="#"
                                className="icon-link function-link alert-leave">Kontakt<svg className="icon-svg" aria-hidden="true" focusable="false"><use href="#open-in-new"></use></svg></a></span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="overlay"></div>
                <nav className=" nav">
                    <button className="function-link button-menu-close js-menu-close"
                        title="Luk mobil menu"><svg className="icon-svg" aria-hidden="true"><use href="#close"></use></svg>Luk</button>

                    <div className="navbar navbar-primary">

                        <div className="navbar-inner container">
                            <ul className="nav-primary">
                                <li>
                                    <a href="#" className="nav-link">
                                        <span>Første menupunkt</span>
                                    </a>
                                </li>
                                <li className="current">
                                    <a href="#" className="nav-link">
                                        <span>Andet menupunkt</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span>Tredje menupunkt</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        <span>Fjerde menupunkt</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="navbar">
                        <div className="navbar-inner container navbar-context-actions">
                            <div className="nav-actions">
                                <a href="#"
                                    className="function-link"><svg className="icon-svg" aria-hidden="true"><use href="#print"></use></svg>Funktionsikon</a>
                            </div>
                        </div>
                    </div>


                    <div className="portal-info-mobile">
                        <p className="user bold">Ida Ester Petersen</p>
                        <a href="#"
                            className="button button-secondary button-signout alert-leave">
                            Log af
                        </a>
                    </div>

                    <div className="solution-info-mobile">
                        <p className="h5 authority-name">Myndighedsnavn</p>
                        <p>Support: 12 34 56 78 · <a href="#"
                            className="icon-link function-link alert-leave">Kontakt<svg className="icon-svg" aria-hidden="true" focusable="false"><use href="#open-in-new"></use></svg></a>
                        </p>
                    </div>

                </nav>
            </header>
        </>
    );
}

export default Header;