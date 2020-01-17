// Dependencias
import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

/**
 * Información por cada canal habilitado.
 *
 * @param {Object} props Propiedades.
 */
const Card = ({ channels }) => (
    <div className="channels">
        {
            channels.map((channel) => {
                const {
                    title, id,
                    logo, uri,
                } = channel;
                return (
                    <Link href={uri} key={`Card-${id}`} prefetch>
                        <a className="channel" href={uri}>
                            <img src={logo} alt={title} />
                            <h3>{title}</h3>
                        </a>
                    </Link>
                );
            })
        }
        <style jsx>
            {`
                    .channels {
                        display: grid;
                        grid-gap: 15px;
                        padding: 15px;
                        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                    }
                    a.channel {
                        display: block;
                        margin-bottom: 0.5em;
                        color: #333;
                        text-decoration: none;
                    }
                    .channel img {
                        border-radius: 3px;
                        box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                        width: 100%;
                    }
                    h3 {
                        padding: 5px;
                        font-size: 0.9em;
                        font-weight: 600;
                        margin: 0;
                        text-align: center;
                    }
              `}
        </style>
    </div>
);

Card.propTypes = {
    channels: PropTypes.arrayOf(PropTypes.shape()),
};

Card.defaultProps = {
    channels: [],
};

export default Card;
