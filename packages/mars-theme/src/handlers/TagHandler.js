export const TagHandler = (name, pattern, priority) => {
    return {
        name: name,
        priority: priority,
        pattern: pattern,
        func: async ({ link, params, state, libraries, force }) => {
            // 1. get product
            const response = await libraries.source.api.get({
                endpoint: "/archive/blog",
                params: { page: params.page, tag: params.tag },
            });
            6            // 2. add product to state
            const blog = await libraries.source.populate({
                response,
                state,
                force,
            });
            if (typeof blog !== 'undefined') {
                Object.assign(state.source.data[link], {
                    id: blog.id,
                    type: blog.type,
                    isBlogByTag: true,
                    isBlogArchive: true,
                    items: blog.map(item => ({
                        type: item.type,
                        id: item.id,
                        link: item.link
                    }))
                });
            }
            else {
                Object.assign(state.source.data[link], {
                    errorStatus: 404,
                    isError: true,
                    is404: true
                });
            }
            // 3. add link to data

        },
    }
}