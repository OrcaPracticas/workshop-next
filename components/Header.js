// Dependencias
import Head from "next/head";
import Link from "next/link";
import PropTypes from "prop-types";
import React, { Fragment } from "react";

/**
 * Header general correspondientes a las paginas del sitio.
 *
 * @param {Object} props Propiedades.
 */
const Header = (props) => {
    const {
        back, logo,
        subTitle, title, type,
    } = props;

    return (
        <Fragment>
            <Head>
                <link rel="icon" type="./favicon.ico" />
                <title>
                    {`.: PodCast - ${title} :.`}
                </title>
            </Head>
            <header>
                {
                    (back) ? (
                        <Link href={back}>
                            <a className="back" href={back}>&lt; Regresar </a>
                        </Link>
                    ) : "PodCast"
                }
            </header>
            {
                (type === "channel") && (
                    <Fragment>
                        <div className="banner" />
                        <h1>{subTitle}</h1>
                    </Fragment>
                )
            }
            <style jsx>
                {`
                    .back {
                      color: #FFFFFF;
                      position: relative;
                      right: 45%;
                    }

                    .banner {
                      width: 100%;
                      padding-bottom: 25%;
                      background-position: 50% 50%;
                      background-size: 100% 100%;
                      background-color: #aaa;
                      ${logo && `background-image: url(${logo});`}
                    }

                    header {
                      color: #FFFFFF;
                      background-color: #000000;
                      padding: 15px;
                      text-align: center;
                    }

                    h1 {
                      font-weight: 600;
                      padding: 15px;
                    }
                `}
            </style>
        </Fragment>
    );
};

Header.propTypes = {
    back: PropTypes.string,
    logo: PropTypes.string,
    subTitle: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
};

Header.defaultProps = {
    back: "",
    logo: "/default-hero.jpg",
    subTitle: "channel",
    title: "PodCast",
    type: "normal",
};

export default Header;
