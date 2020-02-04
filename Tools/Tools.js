class Tools {
    static getDataCard(data = [], link = "/channel") {
        const DATA = data.map((item) => {
            const { id, title, urls = {} } = item;
            const { logo_image: { original = "" } } = urls;
            return {
                id,
                logo: original,
                title,
                uri: `${link}?id=${id}`,
            };
        });
        return DATA;
    }

    static getList(data, link = "/podcast") {
        const DATA = data.map((item) => {
            const {
                id, duration,
                title,
            } = item;
            return {
                id,
                duration,
                title,
                uri: `${link}?id=${id}`,
            };
        });
        return DATA;
    }

    static getHeader(data, type = "") {
        const {
            title,
            urls: { logo_image: { original: logo } },
        } = data;
        return {
            logo,
            title,
            type,
            subTitle: title,
        };
    }
}

export default Tools;
