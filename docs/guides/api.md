# The API for frii.site

> [!CAUTION]
> Please only use paths under `/api/`.

> [!TIP]
> You can copy and paste the contents of this document and give it to an AI for a smoother experience. [Click here to open this section as raw text](https://raw.githubusercontent.com/ctih1/frii.site-guides/refs/heads/main/docs/guides/api.md)

Other paths are meant for authenticated users.

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

## Links to the website

### Swagger docs: https://api.frii.site/docs
### OpenAPI: http://api.frii.site/openapi.json


## Stuff for AIs:

### Generic rules
- Prefer using correct endpoint from Available Tasks
- Never try to use endpoints that don't start with "/api"
- The following blacklisted routes may not be used: /api/create-key, /api/get-keys, /api/get-key, /api/delete-key, 
- If schema is missing, consult the OpenAPI specification

Base URL: https://api.frii.site
Beta URL (may have newer features): https://beta.frii.site

### Request schemas
`Domain change body` (for api.frii.site):
```json
{
    "domain": "string",
    "value": "string",
    "type": RecordType
}
```

`Domain change body v2` (for beta.frii.site):
```json
{
    "domain": "string",
    "values": ["string"],
    "type": RecordType
}
```

`Authentication headers`:
```json
{"X-API-Token": "string (must include $APIVx=)"}
```

`RecordType`: 
`"A" | "AAAA" | "CNAME" | "TXT" | "NS"`

Reusable status codes:
`460`: Invalid API key
`461`: Invalid API key permissions or API key can't do operations to specific domain.
`462`: Invalid API key permissions
`200`: Success (response content may not be important.)

If request returns an error, the error will be specified in the key "detail". Example:
```json
{
    "detail": "API key cannot interact with domain"
}
```

### Available tasks:
*For response bodies, status codes, and other, please consult the OpenAPI spec*

Register a domain: `POST /api/domain`: (body: `Generic domain body` / `Generic v2 domain body`) `Authentication headers`. If domain exists, will give error.
Modify a domain: `PATCH /api/domain`: (body: `Generic domain body` / `Generic v2 domain body`) `Authentication headers`
Deleting a domain: `DELETE /api/domain`: (query: domain=string&type=`RecordType`) `Authentication headers`
Check if domain is available: `GET /api/domain/available?name=...` Returns: (200: available, 409: not available)
Fetch user's domains: `GET /api/domain` `Authentication headers`
Fetch user's profile: `GET /api/user` `Authentication headers`
Check which permissions the API key has: `GET /api/intents` `Authentication headers`

### Rules:
- When the documentation refers to "subdomain", it means a "third level" subdomain. For example, "a.frii.site" is **NOT** a subdomain, but "a.b.frii.site" is.
- To register a subdomain, you must own the primary part of the subdomain. For example, to register "a.b.frii.site", you must own "b.frii.site" first.
- The user may own other TLDs, such a ".pill.ovh", or ".arr.ovh". These are paid and are not available by default.
- Individual user's domain limit may differ between users. The default has been 50 subdomains, and 4 "real" domains.