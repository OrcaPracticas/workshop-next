import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import { Layout } from "../components";

const Error = ({ statusCode }) => (
    <Layout hidden>
        <section className="error pulse">
            <h1>{statusCode}</h1>
            <h2>
                {
                    (statusCode === 404)
                        ? (
                            <>
                                No se pudo encontrar el contenido
                                <Link href="/">
                                    <a href="/"> Regresar al home</a>
                                </Link>
                            </>
                        )
                        : "Ups tenemos un problema :("
                }
            </h2>
            <style jsx>
                {`
                        :global(body) {
                          background: #272822;
                          color: white;
                        }
                        @keyframes bounce {
                          0%, 20%, 50%, 80%, 100% {
                            transform: translateY(0);
                          }
                          40% {
                            transform: translateY(-30px);
                            color: #66D9EF;
                          }
                          60% {
                            transform: translateY(-15px);
                            color: #A6E22E;
                          }
                        }
                        .error {
                          align-items: center;
                          display: flex;
                          flex-direction: column;
                          justify-content: center;
                          min-height: calc(100vh - 200px);
                        }
                        .error > h1 {
                          animation-duration: 2.5s;
                          animation-fill-mode: both;
                          animation-iteration-count: infinite;
                          animation-name: bounce;
                          font-size: 100px;
                        }
                        .error > h2 {
                          font-size: 30px;
                        }
                        a {
                          color: white;
                        }
                    `}
            </style>
        </section>
    </Layout>
);

Error.getInitialProps = ({ res, err }) => {
    let statusCode = res ? res.statusCode : null;
    statusCode = (statusCode && err) ? err.statusCode : 404;
    return { statusCode };
};

Error.propTypes = {
    statusCode: PropTypes.number,
};

Error.defaultProps = {
    statusCode: 404,
};

export default Error;
