// Dependencias
import PropTypes from "prop-types";
import React from "react";
import "isomorphic-fetch";

// Componentes
import { Cards, Layout } from "../components";
import { api, recommend } from "./config.json";
import Error from "./_error";
import Tools from "../Tools";

/**
 * Pagina principal.
 *
 * @param {Array} channels Listado de tarjetas.
 */
const Index = ({ channels, statusCode }) => (
    <Layout>
        {
            (statusCode !== 200)
                ? <Error statusCode={statusCode} />
                : <Cards channels={channels} />
        }
    </Layout>
);

/**
 * Metodo encargado de realizar la peticion al Api.
 *
 * @param  {Object} res Request de la peticion realizada.
 * @return {Promise}
 */
Index.getInitialProps = async ({ res }) => {
    const RESPOSE = { channels: [], statusCode: 200 };
    try {
        const REQUEST = await fetch(`${api}${recommend}`);
        const { status } = await REQUEST;
        if (status >= 400) {
            res.statusCode = status;
            RESPOSE.statusCode = status;
        } else {
            const { body: channels } = await REQUEST.json();
            RESPOSE.channels = Tools.getDataCard(channels);
            RESPOSE.statusCode = 200;
        }
    } catch (error) {
        res.statusCode = 503;
    }
    return RESPOSE;
};

Index.propTypes = {
    channels: PropTypes.arrayOf(PropTypes.shape({})),
    statusCode: PropTypes.number,
};

Index.defaultProps = {
    channels: [],
    statusCode: 404,
};

export default Index;
