// Dependencias
import PropTypes from "prop-types";
import React from "react";

// Componentes
import Header from "./Header";

/**
 * Template generico.
 *
 * @param {Object} props Propiedades.
 */
const Layout = ({ children, header }) => (
    <main key="Index">
        <Header key="header-site" {...header} />
        {children}
        <style jsx>
            {`
                :global(body) {
                    background-color: #272822;
                    margin: 0;
                    font-family: system-ui;
                    background: white;
                }
                :h2 {
                    padding: 5px;
                    font-size: 1.3em;
                    font-weight: 600;
                    margin: 0;
                    text-align: center;
                }
            `}
        </style>
    </main>
);

Layout.propTypes = {
    children: PropTypes.node,
    header: PropTypes.shape({}),
};

Layout.defaultProps = {
    children: [],
    header: {},
};

export default Layout;
