// Dependencias
import PropTypes from "prop-types";
import React from "react";

/**
 * Listdado de los ultimos podcast.
 *
 * @param {Object} props Propiedades.
 */
const PlayerAudio = ({
    audioMp3, channel,
    poster, title,
}) => (
    <>
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
                  picture {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex: 1 1;
                    flex-direction: column;
                    width: auto;
                    padding: 10%;
                  }
                  picture img {
                    width: 320px;
                    height: 320px;
                    background-position: 50% 50%;
                    background-size: contain;
                    background-repeat: no-repeat;
                  }
                `}
            </style>
        </div>
    </>
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
