export const BlogHandler = (name, pattern, priority) => {
    return {
        name: name,
        priority: priority,
        pattern: pattern,
        func: async ({ link, params, state, libraries, force }) => {
            // 1. get product

            const response = await libraries.source.api.get({
                endpoint: "/archive/articles",
                params: { category: params.category, page: params.page, tag: params.tag, head_tags: false },
            });
            const data = await response.clone().json()
            const totalPages = data[0].totalPages
            const page = data[0].page

            // 2. add product to state
            const blog = await libraries.source.populate({
                response,
                state,
                force,
            });


            if (typeof blog !== 'undefined') {
                Object.assign(state.source.data[link], {
                    isArchive: true,
                    isBlogArchive: true,
                    isBlog: true,
                    items: blog.map(item => ({
                        type: item.type,
                        id: item.id,
                        link: item.link,
                    })),
                    totalPages: totalPages,
                    paged: page
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

export const BlogByCategoryHandler = (name, pattern, priority) => {
    return {
        name: name,
        priority: priority,
        pattern: pattern,
        func: async ({ link, params, state, libraries, force }) => {
            // 1. get product

            const response = await libraries.source.api.get({
                endpoint: "/archive/articles",
                params: { category: params.category, page: params.page, tag: params.tag },
            });
            const data = await response.clone().json()
            if (data.length > 0) {
                const totalPages = data[0].totalPages
                const page = data[0].page

                // 2. add product to state
                const blog = await libraries.source.populate({
                    response,
                    state,
                    force,
                });


                if (typeof blog !== 'undefined') {
                    Object.assign(state.source.data[link], {
                        isArchive: true,
                        isBlogArchive: true,
                        isBlogByCategory: true,
                        items: blog.map(item => ({
                            type: item.type,
                            id: item.id,
                            link: item.link,
                        })),
                        totalPages: totalPages,
                        paged: page
                    });
                }
                else {
                    Object.assign(state.source.data[link], {
                        errorStatus: 404,
                        isError: true,
                        is404: true
                    });
                }
            } else {
                Object.assign(state.source.data[link], {
                    errorStatus: 404,
                    isError: true,
                    is404: true
                });
            }

            console.log(state.source.data[link])


            // 3. add link to data

        },
    }
}

export const BlogByTagHandler = (name, pattern, priority) => {

    return {
        name: name,
        priority: priority,
        pattern: pattern,
        func: async ({ link, params, state, libraries, force }) => {
            // 1. get product

            const response = await libraries.source.api.get({
                endpoint: "/archive/articles",
                params: { category: params.category, page: params.page, tag: params.tag },
            });
            const data = await response.clone().json()
            //console.log(data);
            if (data.length > 0) {

                const totalPages = data[0].totalPages
                const page = data[0].page

                // 2. add product to state
                const blog = await libraries.source.populate({
                    response,
                    state,
                    force,
                });

                if (typeof blog !== 'undefined') {
                    Object.assign(state.source.data[link], {
                        isArchive: true,
                        isBlogArchive: true,
                        isArticlesByTag: true,
                        items: blog.map(item => ({
                            type: item.type,
                            id: item.id,
                            link: item.link,
                        })),
                        totalPages: totalPages,
                        paged: page
                    });
                }
                else {
                    Object.assign(state.source.data[link], {
                        errorStatus: 404,
                        isError: true,
                        is404: true
                    });
                }
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

export const ArticleHandler = (name, pattern, priority) => {
    return {
        name: name,
        priority: priority,
        pattern: pattern,
        func: async ({ link, params, state, libraries, force }) => {
            // 1. get product
            const response = await libraries.source.api.get({
                endpoint: "/single/articles",
                params: { slug: params.slug, category: params.category },
            });

            // 2. add product to state
            const [blog] = await libraries.source.populate({
                response,
                state,
                force,
            });
            console.log("Sdfsd");

            console.log(blog)
            console.log("Sdfsd");

            if (typeof blog !== 'undefined') {
                Object.assign(state.source.data[link], {
                    id: blog.id,
                    type: blog.type,
                    isBlogArticle: true,
                    isPostType: true,
                });
            }
            else {
                Object.assign(state.source.data[link], {
                    errorStatus: 404,
                    isError: true,
                    is404: true
                });
                console.log(state.source.data[link]);

            }
            // 3. add link to data

        },
    }
}
