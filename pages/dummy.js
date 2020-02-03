// Dependencias
import React from "react";

/**
 * Componente basico para el demo.
 */
const Index = () => (
    <>
        <img src="/groot.png" alt="Groot" />
        <h1>Creado por JMZ</h1>
        <h2>WorkShop NextJS</h2>
        {/*  Cargando compomentStyles */}
        <style jsx>
            {`
              /* Al usar global permite indicar que el estilo afectara a todo */
            :global(body){
              background-color: #272822;
            }
            img {
              display: block;
              margin:50px auto;
            }
            h1, h2 {
              color:#FFFFFF;
              text-align: center;
            }
        `}
        </style>
    </>
);

export default Index;
