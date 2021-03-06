const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/annemacozmoz/Desktop/Coding/Homework/homework20-Portfolio-React/Portfolio-React/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/annemacozmoz/Desktop/Coding/Homework/homework20-Portfolio-React/Portfolio-React/src/pages/index.js"))),
  "component---src-template-archive-js": hot(preferDefault(require("/Users/annemacozmoz/Desktop/Coding/Homework/homework20-Portfolio-React/Portfolio-React/src/template/archive.js"))),
  "component---src-template-blog-details-js": hot(preferDefault(require("/Users/annemacozmoz/Desktop/Coding/Homework/homework20-Portfolio-React/Portfolio-React/src/template/blog-details.js"))),
  "component---src-template-category-post-js": hot(preferDefault(require("/Users/annemacozmoz/Desktop/Coding/Homework/homework20-Portfolio-React/Portfolio-React/src/template/category-post.js"))),
  "component---src-template-project-details-js": hot(preferDefault(require("/Users/annemacozmoz/Desktop/Coding/Homework/homework20-Portfolio-React/Portfolio-React/src/template/project-details.js"))),
  "component---src-template-tag-template-js": hot(preferDefault(require("/Users/annemacozmoz/Desktop/Coding/Homework/homework20-Portfolio-React/Portfolio-React/src/template/tag-template.js")))
}

