# How to self host the frii.site backend?

### Notice:
- We can't guarantee that it'll work perfeclty etc use at your own risk, there is no warranty.
- If you encounter any issues, join our discord for friendly support! (link located in https://guides.frii.site/contact.html)
- The self-hosted backend has not been completely tested
- Every service listed in the requirements can be either hosted for free, or self hosted. You might need your own domain to setup Resend.

### Requirements:
- A MongoDB database
- A PowerDNS server (for DNS)
- PowerDNS-Admin
- Python >3.11
- Services:
    * A [Resend](https://resend.com) account setup
    * IPInfo account

### Setting up
1. Setup a MongoDB server https://www.mongodb.com/docs/manual/installation/. Follow the instructions for your specific server
    * After installation, enter the mongo shell by executing the comamand `mongosh`. You'll see a "connecting to" message (2nd line), which should look somethihng like this:
        `Connecting to: mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.6`
    * Copy the URL part (`mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.6`), and change the appName to something else (e.g `mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=friidotsite`). Save this string somewhere, since we will be using it later

2. Setup Resend
    * Setup an account on Resend, go to "API Keys" tab on the sidebar, create a new API key with the permission "Sending access", and select your domain
    ![Resends new api key modal](/resend_new_key.png)
    * Copy your API key to somewhere safe

3. Setup PowerDNS
    * This is by far the most time consuming part of self hosting the backend.
    * Steps are different for each operating system
    * Here's an example of an article which covers PowerDNS and PowerDNS-Admin: https://www.howtoforge.com/how-to-install-powerdns-on-ubuntu-22-04/

    * Once you have setup PowerDNS and PowerDNS-Admin, setup your domain
    ![PowerDNS new domain](/external_dns_records_done.png)
        * The @ NS records should match your PowerDNS server's address

    * Create a new API key inside PowerDNS admin (/admin/manage-keys)
    * in "zone access" select your domain, and click "Create API key"
    * Copy your API token, and keep it somewhere safe

4. Setup Turnstile
    * Go to your Cloudflare dashboard, and create a new Turnstile widget
    * In the "hostnames", add the domain of your website, AND "localhost" for testing
    * Click Create
    * Copy both of the keys to somewhere safe

5. Run the setup script using `python setup.py`