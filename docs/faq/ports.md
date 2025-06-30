# How do I specify what port to use?

Why do you need to specify what port to use?
Short answer: **you can't change the port directly**. There are a few workarounds.
1. Using service's default port
    > Certain services use a default port, which they will try to conenct to first. For example, if you're hosting a minecraft server on the default port (25565), you most likely don't have to specify the port, since Minecraft automatically tries connecting there first.
    
2. Using a reverse proxy (such as NGINX)
    > If you are running a webserver, you can use a reverse proxy such as NGINX to redirect your requests. Here's an example where NGINX redirects requests from port 80 to 8080
    
    ```
    server {
        listen 80;
        server_name example.frii.site;

        location / {
            proxy_set_header   X-Forwarded-For $remote_addr;
            proxy_set_header   Host $http_host;
            proxy_pass         "http://127.0.0.1:8080";
        }
    }
    ```

3. Manually specifying the port along with your domain
    > If neither of thesae work, you can just simply use your port along with your domain using `domain.frii.site:port`. Example: mydomain.frii.site:5050 would use the IP of mydomain.frii.site and port 5050