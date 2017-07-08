module.exports = {
    html(txt) {
        return decodeURIComponent(txt);
    },
    markdownToHTML(txt) {
        const markdown = new require('markdown').markdown;
        return markdown.toHTML(txt);
    }
};
