export const CategoriesHandler =
{
    name: "blog page",
    priority: 10,
    pattern: "/blog/",
    func: async ({ link, params, state, libraries, force }) => {
        // 1. get product
        const response = await libraries.source.api.get({
            endpoint: "blog",
            params: { slug: params.slug },
        });

        // 2. add product to state
        const [product] = await libraries.source.populate({
            response,
            state,
            force,
        });

        // 3. add link to data
        Object.assign(state.source.data["/test/"], {
            isTest: true,

        });
    },
}