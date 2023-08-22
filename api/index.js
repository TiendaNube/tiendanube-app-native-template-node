const express = require("express");
const app = express();
const cors = require("cors");
const passport = require("passport");

require("./passport");

app.use(cors());

const port = 3200;

app.get("/", async (_, res) => {
  res.json({ status: "hi mom!" });
});

app.get(
  "/secret",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.json({
      message: `private message to storeId: ${req.user.storeId} at ${new Date}`
    });
  }
);

app.listen(port, () => {
  console.log("Start service in http://localhost:" + port);
});
