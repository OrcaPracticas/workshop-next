import PropTypes from "prop-types";
import React from "react";
import "isomorphic-fetch";

import { Cards, Layout } from "../components";
import { api, recommend } from "./config.json";
import Tools from "../Tools";

/**
 * Pagina principal.
 *
 * @param {Array} channels Listado de tarjetas.
 */
const Index = ({ channels }) => (
    <Layout>
        <Cards channels={channels} />
    </Layout>
);

/**
 * Metodo encargado de realizar la peticion al Api.
 *
 * @param  {Object} res Request de la peticion realizada.
 * @return {Promise}
 */
Index.getInitialProps = async ({ res }) => {
    const RESPOSE = { channels: [], statusCode: 503 };
    try {
        const REQUEST = await fetch(`${api}${recommend}`);
        const { body: channels } = await REQUEST.json();
        RESPOSE.channels = Tools.getDataCard(channels);
        RESPOSE.statusCode = 200;
    } catch (error) {
        res.statusCode = 503;
    }
    return RESPOSE;
};

Index.propTypes = {
    channels: PropTypes.arrayOf(PropTypes.shape({})),
};

Index.defaultProps = {
    channels: [],
};

export default Index;
