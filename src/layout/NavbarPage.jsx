import React from 'react';
import styles from '../assets/css/navbarPage.module.css';

const NavbarPage = () => {
    return (
        <nav className={`${styles.navbar} navbar-expand navbar-light bg-white topbar static-top shadow`}>
            <div
                className={`${styles.navbarSearch} d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100`}>
                <div className="input-group">
                    <h3>NEWSHORE TEST JOURNEYS</h3>
                </div>
            </div>
        </nav>
    );
}

export default NavbarPage;
