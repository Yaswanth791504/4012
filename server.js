const app = require("./index");

app.listen(process.env.PORT || 3000, () => {
  console.log(`App is listening to the port ${process.env.PORT || 3000}`);
});
