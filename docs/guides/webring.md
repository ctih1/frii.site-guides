# The frii.site webring

We actually have an official webring!


## How to join

### Requirements:
* No NSFW content
* Common sense

You **don't need to be on a .frii.site subdomain** to join the webring!

## Joining:
Email us at webring@frii.site with the following info:
* Your website's URL
* Name for your website 
* Your nickname

Add the following into the `<head>` of your website:

```html
<head>
    ...
    <script src="https://webring.frii.site/script.js" defer></script>
</head>
```

And the following to your `<body>` (the location doesn't matter):
```html
<div id="fs-webring" data-url="http(s)://yourwebsite.com"></div>
```

The `data-url` is meant to make identifying your website more reliable. While technically this isn't mandated, you should specify it anyways in case your URL changes, or you're previewing your website locally.
