# Milestone 6
# CDN(Content Delivery Network)
## What is CDN?
- CDN stands for Content Delivery Network
- It is a geagraohically distributed group of servers that caches content clode to end users.It allows for the quick transfer of assets needed for loading internet content,including html pages, js files , stylesheets, images and videos.
- A properly configured CDN may also help protect websites against some common malicious attacks, such as Distributed Denial of Service (DDOS) attacks.
## Benefits of using a CDN:
The primary benefits includes:
1. Improves website load times:
  By distributing content closer to website visitors by using a nearby CDN server , visitors experience faster page loading times. As visitors are more inclined to click away from a slow-loading site, a CDN can reduce bounce rates and increase the amount of time that people spend on the site. In other words, a faster a website means more visitors will stay and stick around longer.

2. Reduces bandwidth costs:
   Bandwidth consumption costs for website hosting is a primary expense for websites. Through caching and other optimizations, CDNs are able to reduce the amount of data an origin server must provide, thus reducing hosting costs for website owners.
   
3. Increased availability and redundancy:
  Large amounts of traffic or hardware failures can interrupt normal website function. Thanks to their distributed nature, a CDN can handle more traffic and withstand hardware failure better than many origin servers.
4. Website security improved :
  A CDN may improve security by providing DDoS mitigation, improvements to security certificates, and other optimizations.

## Metrics of CDN:
There are 3 metrics for CDN:
- RTT:
  `Round-trip time` is the duration in millisecond(ms) it takes for a network request to go from a starting point to a destination and back again to the starting point.
  Factors that affects RTT:
    >Transmission medium nature
    >LAN traffic
    >Server response time
    >Node count
    >Physical Distance

- TTL:
  `Time to live`  refers to the amount of time or “hops” that a packet is set to exist inside a network before being discarded by a router.
  Working:
   >packets are designed with an expiration called a time-to-live or hop limit.
   >Every time a router receives a packet, it subtracts one from the TTL count and then passes it onto the next location in the network
   >At any point,if the TTL is zero the router discards.

- Cache hit ratio: It is the measurement of how many content requests a cache is able to fill successfully, compared to how many requests it receives.

- Cache hit ratio =No. of cache hits/(No. of cache hits + No. of cache misses)

  ## Static and Dynamic Cache:
  - `Static Cache` :Static content is any file that is stored in a server and is the same every time it is delivered to users.
  - `Dynamic Cache` :Dynamic content is content that changes based on factors specific to the user such as time of visit, location, and device.

## Data Center
Housing where networked computers work together to process, store, and share data.

## Origin Server:
It is the Actual main physical server of a website or other service providers.

## Edge Server:
A CDN edge server is a computer that exists at the logical extreme or “edge” of a network.

## IXP:
Stands for Internet exchange point.physical location through which Internet infrastructure companies connect with each other.

## GSLB:
Global server load balancing or GSLB used in distributing Internet traffic amongst a large number of connected servers dispersed around the world.

## SSL/TLS Encryption:
Its a protocol for encrypting data.It is designed to provide 3 components:
- Authentication
- Encryption
- Integrity
  ## SSL Certificate:
  Certificates are files containing information about the owner of a site and the public half of an asymmetric key pair.
  ## TCP/IP Handshake:
  1. Client send SYN PAcket to server.
  2. Server Responds SYN/ACK packet, for acknolegdement.
  3. Client send ACK back to server.


## BootStrap Landing Page:
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Bootstrap Example</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        <style>
            .card-img-top {
                height: 200px;
                width: 100%;
                object-fit: cover;
            }
        </style>
    </head>
<body>
    <nav class="navbar navbar-expand-lg" style="background-color: #f86238;">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="logo.jpg" alt="logo" class="rounded-circle" style="height: 70px; width: auto;"/>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" style="font-size: 1.2rem;" aria-current="page" href="#homesection">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" style="font-size: 1.2rem;" href="#item">Items</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" style="font-size: 1.2rem;" href="#footer">Footer</a>
              </li>
            </ul>
            <!-- <span class="navbar-text">
              Navbar text with an inline element
            </span> -->
          </div>
        </div>
      </nav>

      <div class="container-fluid" id="homesection">
        <header class="jumbotron text-center">
            <h1 class="display-3 mt-5">Welcome to Tomato Online Food Ordering Site</h1>
            <p class="lead">
                Order Your Favourite food and get it on your doorstep
            </p>
            <img src="homeimage.jpg" alt="homeimage" style="height: 30rem;"/>
        </header>
      </div>

      <div class="container" id="item">
        <div class="row">
            <div class="col-sm-4 mb-3">
                <div class="card">
                    <img src="chicken.jpg" class="card-img-top" alt="Chicken Dish">
                    <div class="card-body">
                      <p class="card-text">Chicken Breast.</p>
                      <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#myModal">Order</button>

                    </div>
                </div>
            </div>
            <div class="col-sm-4 mb-3">
                <div class="card">
                    <img src="salad.jpg" class="card-img-top" alt="Salad Dish">
                    <div class="card-body">
                      <p class="card-text">Veg Salad</p>
                      <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#myModal">Order</button>
                    </div>
                </div>
            </div>
            <div class="col-sm-4 mb-3">
                <div class="card">
                    <img src="tuna.jpg" class="card-img-top" alt="Tuna Dish">
                    <div class="card-body">
                      <p class="card-text">Tuna Fish</p>
                      <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#myModal">Order</button>
                    </div>
                </div>
            </div>
            <div class="col-sm-4 mb-3">
                <div class="card">
                    <img src="paneer.jpg" class="card-img-top" alt="Paneer Dish">
                    <div class="card-body">
                      <p class="card-text">Paneer Tikka</p>
                      <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#myModal">Order</button>
                    </div>
                </div>
            </div>
            <div class="col-sm-4 mb-3">
                <div class="card">
                    <img src="whey.jpg" class="card-img-top" alt="Whey Dish">
                    <div class="card-body">
                      <p class="card-text">Whey Smoothie</p>
                      <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#myModal">Order</button>
                    </div>
                </div>
            </div>
            <div class="col-sm-4 mb-3">
                <div class="card">
                    <img src="egg.jpg" class="card-img-top" alt="Whey Dish">
                    <div class="card-body">
                      <p class="card-text">Egg Spaghetti</p>
                      <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#myModal">Order</button>
                    </div>
                </div>
            </div>

        </div>
      </div>
      <br/><br/>
      <section id="footer">
        <div class="container-fluid bg-dark pb-5">
            <div class="row">
                <div class="col-sm-6">
                    <h3 class="text-light mt-5">Follow Us On</h3>
                    <p class="text-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consectetur distinctio explicabo pariatur accusamus voluptate cumque odit repudiandae? Quaerat velit ex alias amet, nemo est exercitationem harum eius unde accusamus.
                    </p>
                    <div class="row">
                        <div class="col-sm-3">
                            <i class="fab fa-instagram text-light fs-1"></i>
                        </div>
                        <div class="col-sm-3 ">
                            <i class="fab fa-twitter text-light fs-1"></i>
                        </div>
                        <div class="col-sm-3">
                            <i class="fab fa-facebook text-light fs-1"></i>
                        </div>
                        <div class="col-sm-3">
                            <i class="fab fa-linkedin text-light fs-1"></i>
                        </div>
                    </div>
                </div>
    
                <div class="col-sm-2">
                    <img src="logo.jpg" alt="logo" class="rounded-circle pt-5" style="height: 10rem; width: auto;"/>
                </div>
    
                <div class="col-sm-4">
                    <p class="text-light pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tenetur delectus sit molestiae maxime veritatis accusamus odio. Odit necessitatibus voluptatibus, dolor laboriosam reiciendis rerum sit porro libero numquam ut nihil!</p>
                </div>
            </div>
        </div>
    </section>
    
</body>
</html>

```
![image](https://github.com/user-attachments/assets/ab461ce1-1556-4afe-9a9e-8e5c62a7db5a)
![image](https://github.com/user-attachments/assets/396a65c8-51a6-4b2d-b9ee-d8c68f118c29)
![image](https://github.com/user-attachments/assets/5636b858-e242-47e9-85f1-272d97cfb370)

Components Used:
- Navbar
- Grid
- Color (Contextual Class)
- Img


## Tailwind Landing Page:


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tailwind CSS with CDN</title>
  
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body class="bg-gray-100">
    <nav class="bg-yellow-100 p-5 shadow-lg">
        <div class="container mx-auto flex items-center justify-between">
            <a href="#" class="text-xl font-bold">My Website</a>
            <div class="hidden md:flex space-x-10">
                <a href="#Home" class="text-gray-800 text-lg">Home</a>
                <a href="#about" class="text-gray-800 text-lg">About</a>
                <a href="#footer" class="text-gray-800 text-lg">Footer</a>
            </div>
            <div class="md:hidden">
                <button id="menu-btn" class="text-gray-800 focus:outline-none">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
        </div>
        <div id="mobile-menu" class="hidden md:hidden">
            <a href="#Home" class="block text-gray-800 text-lg px-5 py-3">Home</a>
            <a href="#about" class="block text-gray-800 text-lg px-5 py-3">About</a>
            <a href="#footer" class="block text-gray-800 text-lg px-5 py-3">Footer</a>
        </div>
    </nav>

    <section id="Home" class="flex flex-col justify-center items-center h-screen">
        <div class="flex">
            <h1 class="text-6xl font-bold">Welcome To my Site</h1>
        </div>

        <p class="max-w-2xl pt-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat in est aliquam, soluta excepturi neque. Assumenda explicabo totam molestiae ullam inventore possimus aperiam. Quia animi reprehenderit repudiandae, quis saepe quos.
        </p>
    </section>

    <section id="about">
        <!-- Adjust the container width with max-w classes -->
        <div class="container p-4 max-w-5xl mx-auto">
            <div class="grid grid-cols-3 gap-4">
                <div class="bg-white p-4 shadow-md rounded-lg">
                    <img src="salad.jpg" alt="salad" class="object-contain" />
                    <h2 class="flex justify-center font-semibold">Content-Name</h2>
                  </div>
                  <div class="bg-white p-4 shadow-md rounded-lg">
                    <img src="salad.jpg" alt="salad" class="object-contain" />
                    <h2 class="flex justify-center font-semibold">Content-Name</h2>
                  </div>
                  <div class="bg-white p-4 shadow-md rounded-lg">
                    <img src="salad.jpg" alt="salad" class="object-contain" />
                    <h2 class="flex justify-center font-semibold">Content-Name</h2>
                  </div>
                  <div class="bg-white p-4 shadow-md rounded-lg">
                    <img src="salad.jpg" alt="salad" class="object-contain" />
                    <h2 class="flex justify-center font-semibold">Content-Name</h2>
                  </div>
                  <div class="bg-white p-4 shadow-md rounded-lg">
                    <img src="salad.jpg" alt="salad" class="object-contain" />
                    <h2 class="flex justify-center font-semibold">Content-Name</h2>
                  </div>
                  <div class="bg-white p-4 shadow-md rounded-lg">
                    <img src="salad.jpg" alt="salad" class="object-contain" />
                    <h2 class="flex justify-center font-semibold">Content-Name</h2>
                  </div>
            </div>
        </div>
    </section>

    <section id="footer" class="bg-gray-400 p-5 mt-5">
        <div class="container ">
            <div class="flex items-center justify-center"> 
                <i class="fa-regular fa-copyright text-xl mr-2"></i>
                <h1 class="text-2xl">All rights are reserved</h1>
            </div>
        </div>
    </section>

    <script>
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    </script>
</body>
</html>

```

![image](https://github.com/user-attachments/assets/e5b97691-468f-46af-9db2-3fa1d60d367e)
![image](https://github.com/user-attachments/assets/225eebac-bf81-45d0-866e-585e4ac18e24)
![image](https://github.com/user-attachments/assets/53f9fc27-e2dd-4872-aa80-bbac1440b368)



