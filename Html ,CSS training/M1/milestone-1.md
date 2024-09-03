
# Milestone 1

## 1. Internet and How It Works

### OSI Layers and What is Intranet
- The OSI model consists of 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application.
- Intranet: A private network accessible only to an organization's staff.

### Routers and Switches
- **Routers**: Devices that forward data packets between computer networks.
- **Switches**: Network devices that connect devices within a single network, using MAC addresses to forward data to the correct destination.

### Protocols
- Set of rules that govern data communications.
- Examples: TCP/IP, UDP, FTP, HTTP.

### Packets
- Units of data transmitted over a network.
- Each packet contains a header (with control information) and payload (the actual data).

### Types of Networks
- **LAN**: Local Area Network.
- **WAN**: Wide Area Network.
- **MAN**: Metropolitan Area Network.
- **PAN**: Personal Area Network.

### Proxy
- An intermediary server separating end users from the websites they browse.

## 2. HTTP

### A Stateless Protocol
- Two messages: request and response.
- HTTP request carries encoded data.

### HTTP Request
- Contains HTTP version, URL, HTTP methods, request headers, and body.
- Initial version 0.9 with only GET method. Current version: HTTP/3.

### HTTP Response
- Contains status code, HTTP response headers, and body.
- Status codes:
  - 1xx: Informational
  - 2xx: Success
  - 3xx: Redirection
  - 4xx: Client error
  - 5xx: Server error

### HTTPS
- Secure version of HTTP using SSL/TLS.

## 3. Domain Name

### Human Readable
- An alternative to the IP address of a webpage.

### Structure of Domain Name
- **Top-level domain**: ex: .com, .net
- **Second-level domain**: "example".com
- **Subdomain**: blog.example.com
- **Root domain**: Combination of second-level and top-level domain.

### Domain Name Resolution
- Our computer queries the domain name to each DNS server.

### Types of Domain Names
- **Generic Top-level Domains**: ex: .com
- **Country code Top-level Domains**: ex: .uk, .in
- **Sponsored Top-level Domains**: ex: .mil, .edu, .gov

## 4. Hosting

### Service of Providing Storage Space and Access for Websites on Servers
- Components include: Webserver, Hosting Provider, and Domain name.

### Types
- **Shared Hosting**
- **Virtual Private Server (VPS)**
- **Dedicated Hosting**
- **Cloud Hosting**
- **Managed Hosting**
- **Colocation Hosting**

## 5. DNS and Its Working

### Overview
- Purpose and functionality of DNS.

### Components
- **Domain name**
- **DNS Records**:
  - **A Record**: Maps to IPv4 Address.
  - **AAAA Record**: Maps to IPv6 Address.
  - **CNAME**: Maps to another domain.
  - **MX Record**: Specifies mail servers for handling email.
  - **TXT Record**: Contains text info for email validation.
  - **NS Record**: Specifies authoritative name servers for the domain.

### DNS Server Types
- **Root name server**
- **Top-level domain (TLD) server**
- **Authoritative name server**
- **Recursive resolver**

### DNS Cache
- Time to live (TTL).

## 6. Browser and How They Work

### Components of Web Browser
- **UI**: User Interface
- **Browser Engine**
- **Rendering Engine**: Responsible for displaying web content.
- **Networking**
- **JavaScript Engine**
- **UI Backend**
- **Data Storage**

### Browser Working
- **URL Parsing** > **DNS Resolution** > **Establishing a Connection** > **Sending HTTP Request** > **Receiving Response** > **Parsing and Rendering Content**.

### Features
- Tabs, Bookmarks, History, Incognito mode, etc.
