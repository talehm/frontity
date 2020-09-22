const settings = {

  "name": "my-app",
  "state": {
    "frontity": {
      "url": "http://www.mylocalwp.com",
      "title": "Development Blog",
      "description": "Taleh Blog"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "blog_menu": [
            [
              "Home",
              "/"
            ],
            [
              "Blog",
              "/articles"
            ],


          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://www.mylocalwp.com/wp-json",
          params: {
            per_page: 10,
            type: ["post"],
            head_tags: false
          },
          /*  postTypes: [
             {
               type: "blog", // type slug
               endpoint: "blog", // REST API endpoint
               archive: "/blog_category", // link where this custom posts are listed,
             },
           ],
           taxonomies: [
             {
               taxonomy: "blog_category",
               endpoint: "blog_category",
               postTypeEndpoint: "blog",
               params: {
                 per_page: 5,
                 _embed: true,
               },
             },
           ] */

        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    //"@frontity/head-tags"
  ]
};

export default settings;
