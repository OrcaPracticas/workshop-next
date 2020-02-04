class Tools {
    static getDataCard(data = [], link = "/channel") {
        const DATA = data.map((item) => {
            const { id, title, urls = {} } = item;
            const { logo_image: { original = "" } } = urls;

            return {
                id,
                logo: original,
                title,
                uri: {
                    slug: title.toLocaleLowerCase().replace(/\s/g, "-"),
                    id,
                },
            };
        });
        return DATA;
    }

    static getList(data, link = "/podcast") {
        const DATA = data.map((item) => {
            const {
                id, duration,
                channel, title,
            } = item;
            return {
                id,
                duration,
                title,
                uri: {
                    slugChannel: channel.title.toLocaleLowerCase().replace(/\s/g, "-"),
                    idChannel: channel.id,
                    slug: title.toLocaleLowerCase().replace(/\s/g, "-"),
                    id,
                },
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
