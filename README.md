# Dynamic Rich Presence for Discord

## How to use
1. Install [Node.js](https://nodejs.org/en/download/)
2. Download this repository
3. Open a terminal in the folder
4. rename `config.example.json` to `config.json` and put your Discord token in the `Token` section
5. Run `npm install`
6. Run `node index.js`
7. Enjoy!


### How to get self discord token using browser console

1. Open developer tools in browser (if you using desktop app use Ctrl+Shift+I shortcut)
2. Switch current tab to Console
3. Write this code and press enter

It returns your current discord account token

## NEVER SHARE YOUR TOKEN WITH ANYONE, IT GIVES FULL ACCESS TO YOUR ACCOUNT
```js
(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()
```

## Note:
you can use  <a href="https://uptimerobot.com/?rid=85889251b4d5f6">UptimeRobot</a> to monitor your Rich Presence  get notified when it goes offline
```
Monitor Type: HTTP(s)
URl or IP: http://example.com:3000 / http://192.198.187.89:3000
```

Give it a star ⭐ and/or support me on [ko-fi](https://ko-fi.com/lonoxx)
# Support
> Website: [Panda-Network.de](https://panda-network.de) \
> Support [Discord Server](https://discord.gg/z8ScRvf)