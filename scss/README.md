# Information stand for the Bank of Estonia museum

An edutainment game about inflation, economy crises, and the roles of the state and state bank in those things.

## How to run

1. `npm install`

    NB: There's a minor vulnerability in `babel-cli`, which I have not fixed (yet) as the version of Babel used in this project is no longer maintained.
2. `npm run build`

    NB: The visuals are "zoomed out" for the sake of development. To build the styles at full size (1980p), change the value of the variable `$zoom_out` in `scss/_variables.scss` to `1`.
3. Open `index.html` in a web browser.
