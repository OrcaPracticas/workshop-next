// Dependencias
import PropTypes from "prop-types";
import React from "react";
import "isomorphic-fetch";

// Componentes
import { Cards, Layout, PodCastList } from "../components";
import {
    api, audio,
    child, channel,
} from "./config.json";
import Tools from "../Tools";

/**
 * Listado de canales.
 *
 * @param {Array} channels Listado de canales.
 * @param {Array} header   Datos correspondientes al header.
 * @param {Array} list     Listado de podcas pasados.
 */
const Channel = ({ channels, header, list }) => (
    <Layout header={header}>
        {
            (channels.length > 0) && (
                <>
                    <h2>Series</h2>
                    <Cards channels={channels} />
                </>
            )
        }

        {
            (list.length > 0) && (
                <>
                    <h2>Ultimos Podcasts</h2>
                    <PodCastList podcasts={list} />
                </>
            )
        }

        <style jsx>
            {`
                h2 {
                    padding: 15px;
                    font-size: 2em;
                    font-weight: 600;
                    margin: 0;
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
Channel.getInitialProps = async ({ query }) => {
    let API = channel.replace("{id}", query.id);
    API = `${api}${API}`;
    const [CHANNEL, AUDIOS, CHILDRENS] = await Promise.all(
        [
            fetch(API),
            fetch(`${API}${audio}`),
            fetch(`${API}${child}`),
        ],
    );
    const { body } = await CHILDRENS.json();
    const { body: cbody } = await CHANNEL.json();
    const { body: { audio_clips } } = await AUDIOS.json(); // eslint-disable-line
    const channels = Tools.getDataCard(body.channels);
    const header = Tools.getHeader(cbody.channel, "channel");
    const list = Tools.getList(audio_clips);
    return { channels, header, list };
};

Channel.propTypes = {
    channels: PropTypes.arrayOf(PropTypes.shape({})),
    header: PropTypes.arrayOf(PropTypes.shape({})),
    list: PropTypes.arrayOf(PropTypes.shape({})),
};

Channel.defaultProps = {
    channels: [],
    header: [],
    list: [],
};

export default Channel;
