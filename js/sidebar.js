/* eslint-disable node/no-unsupported-features/node-builtins */
(function($, moment, ClipboardJS, config) {
    window.onload = function(e){
        TableOfContents.init({
            basePath: "https://table-of-contents-sidebar.github.io/table-of-contents-sidebar-lib/",
            querySelector: "body" // or other css querySelector
        });
    }
}(jQuery, window.moment, window.ClipboardJS, window.IcarusThemeSettings));
