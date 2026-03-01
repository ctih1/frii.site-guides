# The API for frii.site


> [!CAUTION]
> Please only use paths under `/api/`.


## Authenticated or not?
Since frii.site's backend is using a custom piece of middleware to get sessions from requests, **the docs will not show you the required headers**.

*So how do I know which paths require authentication?*: Check the response codes. If the path requires authentication, it will return a `460` if the API token hasn't been passed, or is invalid


For API requests, you can specify the API token with the `X-API-Token` header. The value should be the token, (e.g `$APIV2=...`)

## How to get the API key
Go to https://www.frii.site/api/dashboard

## API key permissions explained
### Affected domains
These are the domains that the API key affects

### View domains
Lets the API key view domains that the API key has permission to use (aka affected domains)

### The "register" permission
Affected domains don't matter for this one. If you enable this permission, the API key can register any domain that's available and valid. 

## Just show me the link
https://api.frii.site/docs.