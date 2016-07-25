# Discord sidescroller
This is gonna be a repo containing a fairly small bot for [Discord](https://discordapp.com/) with some small commands. (the most important one is "play" and the prefix is "[]" or by using discord's mention feature "@name")

## How to run the bot?

_DISCLAIMER: i see so many people being dumb i can't even handle it so this is like a FULL noob guide_ 

First install [node](https://nodejs.org/en/download/) and [git](https://git-scm.com/downloads) then do 
_linux/Mac and Windows_
```bash
git clone https://github.com/TGVaporeon/Discord-Sidescroller.git && cd ./Discord-Sidescroller
```
Once `git` done it's job you're almost ready to go!
Only remaining things to do is

1. Go to [developers](https://discordapp.com/developers/applications/me), create a account, Click "Create Bot User", Click "Reveal Token" , copy everything after `Token:` and save it somewhere temporarly (NOTE: Do not share this others at all cost!)
2. Open `config.json`
3. Change `token` (the `""` part) with the temporaly saved one
4. `npm install --no-optional && node index.js`

And voila! the bot should be running. (To check see the console if it contains "Running!")

## FAQ

1. What is this?
Well for now you can consider it a js game except in a html page where you can play a small cat. Except this is just a small js bot for three small commands so users in discord can communicate with it
2. Why "Discord sidescroller"?
It was mostly meant to be a bot for posting images and such but it would be spammy, so we retained the idea of that.

---

*We also may add more things in the future rather then a js game*