# Record types

### A:
Used to point to an IPv4 address (e.g 192.168.1.1). 
Potential use cases:
    * A server that uses IPv4
    * Hosting a Minecraft server with port forwarding

NOTE: Using an A record does NOT hide or mask your public IPv4. If someone wants to know your IP address, they can still get it.

### AAAA:
Used to point to an IPv6 record (e.g 2001:db8:85a3:0000:0000:8a2e:0370:7334)
Potential use cases:
    * A self-hosted server that uses IPv6 
    * A server that uses IPv6

### CNAME:
An alias for another domain. Also used for many Cloud services.
Potential use cases:
    * Have an alias for a domain (e.g domain1.frii.site and domain2.frii.site both lead to the same server)
    * Have multiple services running on a single IP or machine (with something like NGINX)
    * Using Cloud services (such as Vercel) with frii.site

### TXT:
Often used as a way to verify you.
Potential use cases:
    * Verifying a discord connection
    * Verifying Google Search Console

### NS:
Specify which name servers are responsible for your domain.
Potential use cases:
    * Aternos Minecraft server hosting
    * Self hosting your own DNS