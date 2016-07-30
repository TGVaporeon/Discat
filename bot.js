// eris is only gonna be used because i'm lazy
const Eris = require("eris");
const config = JSON.parse((require("fs")).readFileSync("./config.json"));

const client = new Eris.CommandClient(config.token, {} , {
    prefix: ["[]", "@mention"],
    owner: "acdenisSK, TGVaporeon",
    description: "Just a bot to share the link to the real discord sidescroller, might have something more in the future though!"
});

client.once("ready", () => console.log("Running!"));

client.registerCommand("play", "Here's the link to where you can play!\nhttps://acdenissk.github.io/discordsidescroller/index.html");

client.registerCommand("server", "Here's the link to my server!\nhttps://discord.gg/sfBskxg");

client.connect();
