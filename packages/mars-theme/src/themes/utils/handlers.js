export const players = {
    priority: 8,
    pattern: "/blog/",
    func: async ({ route, params, state, libraries }) => {
        // 1. get all pages with parent "players".
        const blogList = await libraries.source.api.get({
            endpoint: "blog",
            params: { per_page: 1, page: 1 }
        });

        // 1. get "players" page itself.
        const blogPage = await libraries.source.api.get({
            endpoint: "pages",
            params: { include: 48 }
        });

        // 2. add everything to the state.
        const items = await libraries.source.populate({
            response: blogList,
            state
        });
        const [page] = await libraries.source.populate({
            response: blogPage,
            state
        });

        // 3. add info to data
        Object.assign(state.source.data[route], {
            isblogPage: true,
            isPostType: true,
            type: "page",
            id: page.id,
            items: items.map(item => ({
                type: item.type,
                id: item.id,
                link: item.link
            }))
        });
    }
};