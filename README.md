# Server-side rendering in Create React App

_SSR with all the goodies, without ejecting._

- [Link to Tutorial](https://medium.com/@cereallarceny/server-side-rendering-in-create-react-app-with-all-the-goodies-without-ejecting-4c889d7db25e)
- [Deployed application](https://cra-ssr.herokuapp.com/)
- [Github Gist for server folder](https://gist.github.com/cereallarceny/ee1b86227aabaf4a4b2a3144b84dfaa2)

## Goals

- **Zero modifications to your existing CRA application**
- Create React App **without ejecting**
- React 16 (fiber, baby!)
- React Router v4 (with Thunk)
- **Full SEO support** via React Helmet
- **Preloaded page data** via async/await and React Frontload
- **Code splitting** via React Loadable
- Server-side **cookie support**

## Examples

- Multiple pages (`/`, `/about`)
- **User-specific pages with preloaded data** set on a timeout to fake an API call (`/profile/1`, `/profile/2`)
- **Basic authentication with cookie storage** (`/login`, `/dashboard`, `/logout`)
- Not found (404, etc.) page

## Installation

1.  Install dependencies via `yarn install`
2.  To run locally, use `yarn start`
3.  To run under SSR mode, use `yarn build && yarn serve`

## Why?

Server-side rendering is a requirement for many modern web applications to appear correctly in search engines and social media parsers.

**Question:** Have you ever created a web application with multiple pages only to find out that your meta descriptions weren't page specific?<br />
**Answer:** _Server-side rendering_

**Question:** Have you ever created a web application where users had individual profile pages that required pre-loading of metadata?<br />
**Answer:** _Server-side rendering_

**Question:** Have you ever created a web application with a lot of content on your page that ends up taking a long time for your users to load in poor Internet conditions?<br />
**Answer:** _Server-side rendering_

## Contribute

Do what you normally do - fork and PR.
