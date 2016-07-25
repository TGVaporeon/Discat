// eris is only gonna be used because i'm lazy
const Eris = require("eris");
const config = JSON.parse((require("fs")).readFileSync("./config.json"));

const client = new Eris.CommandClient(config.token, {} , {
    prefix: ["[]", "@mention"],
    owner: "acdenisSK, TGVaporeon",
    description: "just a bot to share the link to the real discord sidescroller, might have something more in the future though"
});

client.registerCommand("play", "here's the link to it!\nhttps://acdenissk.github.io/discordsidescroller/index.html");

client.connect();