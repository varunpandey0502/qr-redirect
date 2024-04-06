# Next.js Redirect Middleware

This project uses a [Next.js middleware](https://nextjs.org/docs/app/building-your-application/routing/redirecting#nextresponseredirect-in-middleware) to handle redirects based on a JSON file.

## Adding Redirects

The redirects are defined in the [`redirectData.json`](./redirectData.json) file.

To add a new redirect, you need to modify the `redirectData.json` file. This file contains a JSON object where each key is a path to redirect from, and each value is another object with a `destination` property.

Here's an example of what this file might look like:

```json
{
  "/id/1": {
    "destination": "https://www.floridabeautylabs.com/"
  }
}
```

## How the Middleware Works

The middleware function is defined in the [`middleware.ts`](./middleware.ts) file.

The `middleware.ts` file contains a Next.js middleware function that handles the redirects.

When a request is made to the server, this function is called before the request is completed. It checks if the path of the request matches any of the keys in the `redirectData.json` file. If it finds a match, it redirects the request to the corresponding destination URL. If it doesn't find a match, it allows the request to continue without redirecting.

The redirect is performed using the `NextResponse.redirect` method, which sends a HTTP 301 status code (permanent redirect) along with the destination URL in the `Location` header of the response.
