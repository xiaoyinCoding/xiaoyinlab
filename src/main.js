const app = require("./app/index");
const { SERVER_PORT } = require("./config/server");

app.listen(SERVER_PORT, () => {
  console.log("服务器启动成功~");
});
