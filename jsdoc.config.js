module.exports = {
  plugins: [],
  recurseDepth: 10,
  opts: {
    recurse: true,
    destination: './docs/',
  },
  source: {
    includePattern: '.+\\.js(doc|x)?$',
    excludePattern: '(^|\\/|\\\\)_',
  },
  sourceType: 'module',
  tags: {
    allowUnknownTags: true,
    dictionaries: ['jsdoc', 'closure'],
  },
  templates: {
    cleverLinks: false,
    monospaceLinks: false,
  },
};
