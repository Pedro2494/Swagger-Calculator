const express = require("express");
const app = express();

const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');


app.use(
  '/api-docs',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);

//ROUTE SOMA
app.get("/soma/:a&:b", (req, res) => {
    const c = parseInt(req.params.a) + parseInt(req.params.b)
    res.send(c.toString())

  });

app.listen(8001, () => {
  console.log("server listening on port 8001");
});