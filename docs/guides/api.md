# The API for frii.site


> [!CAUTION]
> Please only use paths under `/api/`.


## Authenticated or not?
Since frii.site's backend is using a custom piece of middleware to get sessions from requests, **the docs will not show you the required headers**.

*So how do I know which paths require authentication?*: Check the response codes. If the path requires authentication, it will return a `460` if the API token hasn't been passed, or is invalid


For API requests, you can specify the API token with the `X-API-Token` header. The value should be the token, (e.g `$APIV2=...`)

## Just show me the link
https://api.frii.site/docs.