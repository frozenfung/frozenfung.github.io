var md = require('markdown-it')({
  html: true,
});

module.exports = {
  generatePage: function(pageContent, pageMeta = defaultMeta){
    return`<!DOCTYPE html>
<html lang="${pageMeta.lang || this.defaultMeta.lang}">
  <head>
    <title>${pageMeta.title || this.defaultMeta.title}</title>
    <meta charset="${pageMeta.charset || this.defaultMeta.charset}">
    <meta name="description" content="${pageMeta.description || this.defaultMeta.description}">
    <meta name="keywords" content="${pageMeta.keywords || this.defaultMeta.keywords}">
    <meta name="author" content="${pageMeta.author || this.defaultMeta.author}">
    ${
      pageMeta.hasOwnProperty('extra')
        ?pageMeta.extra.length
          ? pageMeta.extra.map(value => `<meta ${value}>`)
          : ''
        :''
    }
    <meta name="description" content="${pageMeta.description || this.defaultMeta.description}">
    ${
      pageMeta.hasOwnProperty('stylesheets')
        ?pageMeta.stylesheets.length
          ?pageMeta.stylesheets.map(value => `<link rel="stylesheet" href="${value}">`)
          :''
        :this.defaultMeta.stylesheets.map(value => `<link rel="stylesheet" href="${value}">`)
    }
    <link rel="icon" type="image/png" href="${pageMeta.favicon || this.defaultMeta.favicon}">
    <!-- CDNs -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.5/jquery.fullpage.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Rubik|Yanone+Kaffeesatz" rel="stylesheet">
  </head>
  <body>
    ${md.render(pageContent)}
  </body>
  <script src="./js/vendors/nanobar.min.js"></script>
  <script>
    var nanobar;
    var options = {
      target: document.querySelector('#preload-page'),
    };
    nanobar = new Nanobar(options);
    nanobar.go(20);
  </script>
  ${
    pageMeta.hasOwnProperty('scripts')
      ?pageMeta.scripts.length
        ?pageMeta.scripts.map(value => `<script src="${value}"></script>`)
        :''
      :this.defaultMeta.scripts.map(value => `<script src="${value}"></script>`)
  }
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.5/jquery.fullpage.min.js"></script>
  <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
</html>
`;
  },
  defaultMeta: {
    lang: 'en',
    title: 'Portfolio',
    stylesheets: ['./css/index.css'],
    scripts: ['./js/index.js'],
    charset: 'utf-8',
    description: 'This is a page',
    keywords: 'page, sample',
    author: 'None',
    favicon: './images/favicon.png',
    viewport: 'width=device-width, initial-scale=1',
    extra: []
  }
}
