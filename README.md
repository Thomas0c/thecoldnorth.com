# thecoldnorth.com
[http://thecoldnorth.com](http://thecoldnorth.com) Personal website for Thomas Carlson.

## Development Setup
* Get [Prettier](https://github.com/prettier/prettier) for your editor.
* Get Yarn by running `brew install yarn`.
* Install Git - https://git-scm.com/ (also available via `brew`).
* Clone the `thecoldnorth.com` repo - `git clone git@github.com:Thomas0c/thecoldnorth.com.git`.
* Enter the project directory - `cd thecoldnorth.com`
* Install all Yarn dependencies: `yarn install`
* Run the project locally by running `yarn run dev`.

## Build Static Files
* Run `yarn run build`
* Static files will then be built and output in `out`

## Netlify Deployment
WIP

### Styling using Glamorous
[Glamorous](https://glamorous.rocks/) in used as the CSS-in-JS solution to handle styling. CSS-in-JS has been chosen in order to containerize every component and thereby keep both component and styling for same within the same file to make the styling-to-component relationship obvious and easy to navigate.

### Structure
Components are found in `/components` and pages in `/pages`. Every component in `/components` can be a parent or a child component whereas every page in `/pages` are container components, i.e. they're wrapping a one or more components to be rendered on a specific route. E.g. page `index.js` will render as the website's index.

### Assets
Assets are found in the `/static` folder. In order for assets to be correctly shown when building static files it is important to prepend the path to `static` with `./`.
