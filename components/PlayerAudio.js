import PropTypes from "prop-types";
import React, { Fragment } from "react";

/**
 * Listdado de los ultimos podcast.
 *
 * @param {Object} props Propiedades.
 */
const PlayerAudio = ({
    audioMp3, channel,
    poster, title,
}) => (
    <Fragment>
        <div className="player">
            <picture>
                <img src={poster} alt={title} />
            </picture>
            <h3>{ title }</h3>
            <h6>{ channel }</h6>
            <audio controls autoPlay>
                <source src={audioMp3} type="audio/mpeg" />
            </audio>
            <style jsx>
                {`
                    .player {
                        color: #A6E22E;
                        padding: 30px;
                        background: rgba(39, 40, 34, 1);
                        text-align: center;
                    }
                    h3 {
                        margin: 0;
                    }
                    h6 {
                        margin: 0;
                        margin-top: 1em;
                    }
                    audio {
                        margin-top: 2em;
                        width: 100%;
                    }
                `}
            </style>
        </div>
    </Fragment>
);

PlayerAudio.propType = {
    audioMp3: PropTypes.string,
    channel: PropTypes.string,
    poster: PropTypes.string,
    title: PropTypes.string,
};

PlayerAudio.defaultProps = {
    audioMp3: "",
    channel: "",
    poster: "/default-podcast.png",
    title: "",
};

export default PlayerAudio;
