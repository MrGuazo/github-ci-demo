const app = require('./holamundo');
const port = process.env.PORT || 3000;
app.listen(port,
() => console.log(`La aplicación está
corriendo en http://localhost:${port}`)
);
module.exports = app;
