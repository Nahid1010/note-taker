const notesDB = require('../db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// ROUTING
module.exports = (app) => {
  // API GET Requests
  app.get('/api/notes', (req, res) => res.json(notesDB));
  // API POST Request - Save
  app.post('/api/notes', (req, res) => {
    req.body.id = uuidv4();
    notesDB.push(req.body);

    const dbStr = JSON.stringify(notesDB);
    fs.writeFileSync('db/db.json',dbStr, err => {
      if(err) console.log(err)
    });
    res.json(req.body.id);
  });

  // API POST Request - delete
  app.delete('/api/notes/:id', (req, res) => {
    const pos = notesDB.findIndex(elem => elem.id === req.params.id)
    notesDB.splice(pos, 1)
    const dbStr = JSON.stringify(notesDB);
    fs.writeFileSync('db/db.json',dbStr, err => {
      if(err) console.log(err)
    }); 
    res.json(req.body.id);
  });
};