# How to use your own DNS with frii.site?


> [!NOTE]
> Unless you are self hosting your own DNS, **this will most likely not work**. Companies such as **Cloudflare** will not allow you to do this, since we are not on the [Public Suffix List](https://github.com/publicsuffix/list) yet 

## 1. Create a new NS record
Create an `NS` record inside frii.site

![frii.site record register](/register_ns.png)

## 2. Set the value to your DNS server
Set the value of your new `NS` record to **your DNS server**. For this example, we are going to be using `ns1.frii.site`
![frii.site NS value modified to ns1.frii.site](/domain_modify_ns.png)

## 3. Create a DNS zone for your new domain
We need to create a new zone for your record. For this guide, we are going to be using PowerDNS's web portal, but you could use something like BIND9.
![DNS portal creating new zone](/external_dns_create_zone.png)
> [!NOTE]
> Most of the settings listed above can be left as is.

## 4. Create the required records for your domain
We need to create DNS records for your domain. Only one record is required, but we recommend you to create two, since we are going to be supporting multiple NS records over on frii.site in the future.

Create an apex NS record (@), pointing to your DNS server.

`@   IN   NS   (your DNS server)`

![DNS portal creating two apex records pointing to self](/external_dns_records.png)

## 5. Try it out!
Create a new record on your new zone, and try pinging it.
![DNS portal containing records](/external_dns_records_done.png)

This is what a succesfull response should look like
![Terminal ping command](/command_ping_subdomain.png)

If you see an error, you have most likely done something wrong. You can either try figuring out the problem yourself, or ask help over on our discord server. https://discord.gg/ANeVwQ5yWq