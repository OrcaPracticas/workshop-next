// Dependencias
import PropTypes from "prop-types";
import React from "react";
import "isomorphic-fetch";

// Componentes
import { PlayerAudio, Layout } from "../components";
import Error from "./_error";
import { api, audio } from "./config.json";


/**
 * Player que permite esuchar el audio.
 *
 * @param {Object} Header  Configuraciones para el header.
 * @param {Object} player Configuracion correspondiente el reproductor.
 */
const PodCast = ({ header, player, statusCode }) => (
    <Layout header={header}>
        {
            (statusCode !== 200)
                ? <Error statusCode={statusCode} />
                : <PlayerAudio {...player} />
        }
        <style jsx>
            {`
                :global(body) {
                    background: #272822;
                }
            `}
        </style>
    </Layout>
);

/**
 * Metodo encargado de realizar la peticion al Api.
 *
 * @param  {String}  query Id correspondiente al consulta.
 * @return {Promise}
 */
PodCast.getInitialProps = async ({ query, res }) => {
    const RESPOSE = {
        player: {
            audioMp3: "",
            channel: "",
            poster: "",
            title: "",
        },
        header: {},
        statusCode: 200,
    };
    try {
        const REQUEST = await fetch(`${api}${audio}/${query.id}.mp3`);
        const { status } = await REQUEST;
        if (status >= 400) {
            res.statusCode = status;
            RESPOSE.statusCode = status;
        } else {
            const { body: { audio_clip: mp3 = { } } } = await REQUEST.json();
            const { channel = {}, title = "", urls = {} } = mp3;
            RESPOSE.player.audioMp3 = urls.high_mp3;
            RESPOSE.player.channel = channel.title;
            RESPOSE.player.poster = urls.image;
            RESPOSE.player.title = title;
            RESPOSE.header.back = `/channel?id=${channel.id}`;
        }
    } catch (error) {
        res.statusCode = 503;
        RESPOSE.statusCode = 503;
    }
    return RESPOSE;
};

PodCast.prototype = {
    header: PropTypes.shape(PropTypes.object),
    player: PropTypes.shape(PropTypes.object),
    statusCode: PropTypes.number,
};

PodCast.defaultProps = {
    header: {},
    player: {},
    statusCode: 404,
};

export default PodCast;
