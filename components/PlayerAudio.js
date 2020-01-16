import PropTypes from "prop-types";
import React, { Fragment } from "react";

const PlayerAudio = ({
    audio, channel,
    poster, title,
}) => (
    <Fragment>
        <div className="player">
            <picture>
                <div style={{ backgroundImage: `url(${poster}})` }} />
            </picture>
            <h3>{ title }</h3>
            <h6>{ channel }</h6>
            <audio controls autoPlay>
                <source src={audio} type="audio/mpeg" />
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
    audio: PropTypes.string,
    channel: PropTypes.string,
    poster: PropTypes.string,
    title: PropTypes.string,
};

PlayerAudio.defaultProps = {
    audio: "",
    channel: "",
    poster: "",
    title: "",
};

export default PlayerAudio;
