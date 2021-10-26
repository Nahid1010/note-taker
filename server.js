// dependency on express server
const express = require('express');
const path = require('path');

// creating an "express" server
const app = express();

// initial port
const PORT =  process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Following example of HotRestaurant
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// start server
app.listen(PORT, () => {
  console.log(`App listening on PORT: http://localhost:${PORT}`);
});