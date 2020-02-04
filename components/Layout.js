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
const Layout = ({ children, header, hidden }) => (
    <main key="Index">
        {
            (!hidden)
                ? <Header key="header-site" {...header} />
                : ""
        }
        {children}
        <style jsx>
            {`
                :global(body) {
                    margin: 0;
                    font-family: system-ui;
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
    hidden: PropTypes.bool,
};

Layout.defaultProps = {
    children: [],
    header: {},
    hidden: false,
};

export default Layout;
