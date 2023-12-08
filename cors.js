const host = "0.0.0.0";
const port = 8000; // warning do not leave 8080 here, it'll conflict with your development server!

import cors_proxy from "cors-anywhere";
cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins
  })
  .listen(port, host, function () {
    console.log("Running CORS Anywhere on " + host + ":" + port);
  });
