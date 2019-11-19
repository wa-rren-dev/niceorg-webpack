1. `npm i`

2. `npm start`

3. Add the webpack scripts to the page you want to test...

```html
<script src="/css.bundle.js"></script>
<script src="/javascript.bundle.js"></script>
```

4. `/pages` is served at `http://localhost:3000`

5. Express will restart on changes to `package.json`, `server.js` or `webpack.config.js`

PS. Doesn't build much yet.
