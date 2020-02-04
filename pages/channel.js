// Dependencias
import PropTypes from "prop-types";
import React from "react";
import "isomorphic-fetch";

// Componentes
import { Cards, Layout, PodCastList } from "../components";
import Error from "./_error";

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
const Channel = ({
    channels, header,
    list, statusCode,
}) => (
    <Layout header={header}>
        {
            (statusCode !== 200)
                ? <Error statusCode={statusCode} />
                : (
                    <>
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
                    </>
                )
        }
    </Layout>
);

/**
 * Metodo encargado de realizar la peticion al Api.
 *
 * @param  {String}  query Id correspondiente al consulta.
 * @return {Promise}
 */
Channel.getInitialProps = async ({ query, res }) => {
    const RESPOSE = {
        channels: [],
        header: [],
        list: [],
        statusCode: 200,
    };
    try {
        let API = channel.replace("{id}", query.id);
        API = `${api}${API}`;
        const [CHANNEL, AUDIOS, CHILDRENS] = await Promise.all(
            [
                fetch(API),
                fetch(`${API}${audio}`),
                fetch(`${API}${child}`),
            ],
        );
        const { status } = await CHANNEL;
        if (status >= 400) {
            res.statusCode = status;
            RESPOSE.statusCode = status;
        } else {
            const { body } = await CHILDRENS.json();
            const { body: cbody } = await CHANNEL.json();
            const { body: { audio_clips } } = await AUDIOS.json(); // eslint-disable-line
            RESPOSE.channels = Tools.getDataCard(body.channels);
            RESPOSE.header = Tools.getHeader(cbody.channel, "channel");
            RESPOSE.list = Tools.getList(audio_clips);
        }
    } catch (error) {
        res.statusCode = 503;
        RESPOSE.statusCode = 503;
    }
    return RESPOSE;
};

Channel.propTypes = {
    channels: PropTypes.arrayOf(PropTypes.shape({})),
    header: PropTypes.arrayOf(PropTypes.shape({})),
    list: PropTypes.arrayOf(PropTypes.shape({})),
    statusCode: PropTypes.number,
};

Channel.defaultProps = {
    channels: [],
    header: [],
    list: [],
    statusCode: 404,
};

export default Channel;
