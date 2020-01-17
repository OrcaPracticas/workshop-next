import React from "react";

import { audio, layout, cards, list } from "./mockup.json";
import {
    Cards, Layout,
    PlayerAudio, PodCastList,
} from "../components";

const Test = () => (
    <Layout {...layout}>
        <Cards {...cards} />
        <PodCastList {...list} />
        <PlayerAudio {...audio} />
    </Layout>
);

export default Test;
