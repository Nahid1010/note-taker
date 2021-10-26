// DEPENDENCIES
const path = require('path');

// ROUTING
module.exports = (app) => {
  // /notes
  app.get('./notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  });

  // all other request goes to index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });
};