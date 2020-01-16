// Dependencias
import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";


const PodCastList = ({ podcasts }) => (
    <div>
        {
            podcasts.map((podcast) => {
                const {
                    duration, id, title, uri,
                } = podcast;
                return (
                    <Link href={uri} key={`List-${id}`} prefetch>
                        <a className="podcast" href={uri}>
                            <h3>{ title }</h3>
                            <div className="meta">
                                {`${Math.ceil(duration / 60)} minutes`}
                            </div>
                        </a>
                    </Link>
                );
            })
        }
        <style jsx>
            {`
                .podcast {
                    display: block;
                    text-decoration: none;
                    color: #333;
                    padding: 15px;
                    border-bottom: 1px solid rgba(0,0,0,0.2);
                    cursor: pointer;
                }
                .podcast:hover {
                    color: #000;
                }
                .podcast h3 {
                    margin: 0;
                }
                .podcast .meta {
                    color: #666;
                    margin-top: 0.5em;
                    font-size: 0.8em;
                }
            `}
        </style>
    </div>
);

PodCastList.propTypes = {
    podcasts: PropTypes.arrayOf(PropTypes.shape({})),
};

PodCastList.defaultProps = {
    podcasts: [],
};

export default PodCastList;
