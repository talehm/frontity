export const PaginationRedirection = {
    name: "pagination",
    priority: 10,
    pattern: "/blog/page/:page/",
    func: ({ slug }) => `/blog/${page}/`,
};