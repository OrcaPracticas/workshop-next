// Dependencias
import PropTypes from "prop-types";
import React from "react";
import "isomorphic-fetch";

// Componentes
import { PlayerAudio, Layout } from "../components";
import { api, audio } from "./config.json";

/**
 * Player que permite esuchar el audio.
 *
 * @param {Object} Header  Configuraciones para el header.
 * @param {Object} player Configuracion correspondiente el reproductor.
 */
const PodCast = ({ header, player }) => (
    <Layout header={header}>
        <PlayerAudio {...player} />
    </Layout>
);

/**
 * Metodo encargado de realizar la peticion al Api.
 *
 * @param  {String}  query Id correspondiente al consulta.
 * @return {Promise}
 */
PodCast.getInitialProps = async ({ query }) => {
    const REQUEST = await fetch(`${api}${audio}/${query.id}.mp3`);
    const { body: { audio_clip: mp3 = { } } } = await REQUEST.json();
    const { channel = {}, title = "", urls = {} } = mp3;
    const PROPS = {
        audioMp3: urls.high_mp3,
        channel: channel.title,
        poster: urls.image,
        title,
    };
    return { header: { back: `/channel?id=${channel.id}` }, player: PROPS };
};

PodCast.prototype = {
    header: PropTypes.shape(PropTypes.object),
    player: PropTypes.shape(PropTypes.object),
};

PodCast.defaultProps = {
    header: {},
    player: {},
};

export default PodCast;
