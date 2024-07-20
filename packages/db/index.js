const { AceBaseServer } = require("acebase-server");
const dbname = "mydb";
const server = new AceBaseServer(dbname, {
    host: "0.0.0.0", port: 443, authentication: {
        enabled: true,
        allowUserSignup: false, username: "admin", password: "4BrbBSpW7h5!Xa1K"
    }
});

// on chain db password N5IGUbH!K@$AHJpf
server.on("ready", () => {
    console.log("SERVER ready");
});

