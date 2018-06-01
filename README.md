# Server-side rendering in Create React App

_SSR with all the goodies, without ejecting._

## Goals

- **Zero modifications to your existing CRA application**
- Create React App **without ejecting**
- React 16 (fiber, baby!)
- React Router Redux v5 (with Thunk)
- **Full SEO support** via React Helmet
- **Preloaded page data** via async/await and React Frontload
- **Code splitting** via React Loadable
- Server-side **cookie support**

## Examples

- Multiple pages (`/`, `/about`)
- **User-specific pages with preloaded data** set on a timeout to fake an API call (`/profile/1`, `/profile/2`)
- **Basic authentication with cookie storage** (`/login`, `/dashboard`, `/logout`)
- Not found (404, etc.) page

## Why?

Server-side rendering is a requirement for many modern web applications to appear correctly in search engines and social media parsers.

**Question:** Have you ever created a web application with multiple pages only to find out that your meta descriptions weren't page specific?<br />
**Answer:** _Server-side rendering_

**Question:** Have you ever created a web application where users had individual profile pages that required pre-loading of metadata?<br />
**Answer:** _Server-side rendering_

**Question:** Have you ever created a web application with a lot of content on your page that ends up taking a long time for your users to load in poor Internet conditions?<br />
**Answer:** _Server-side rendering_
