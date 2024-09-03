# Milestone1-JavaScript

### 1. Java Script Versions:
JavaScript was developed by Brendan Eich in 1995.
- Developed at Netscape Communications Corporation.
- Originally named `Mocha` later `LiveScript`.
- Co-marketing deal between netscape and Sun Microsystems became JavaScript.

In 1997, Netscape submitted it to the European Computer Manufacturers Association (ECMA).Internet Explorer (IE4) was the first browser to support ECMA-262 Edition 1 (ES1). ECMA-262 released in June 1997.
A technical committee (TC39) was created for developing Java script in ECMA.

### 2.ECMA Script:
- ES stands for ECMA Script.
- It is a scripting language standardized by Ecma International.
- Developed to be a general purpose scripting language to create dynamic and interactive content on the web.
- Has defined syntax for writting scripts, rules for comments ,identifier ,keywords.

  ##### Versions
  - ECMAScript 1: Released in 1997.
  - ECMAScript 2: Released in 1998, includes editorial changes and corrections.
  - ECMAScript 3: Released in 1999, had RedExp.
  - ECMAScript 4: Not officially released.
  - ECMAScript 5: Released in 2009 , added strict mode, json support.
  - ECMAScript 6: Released in 2015.`let` and `const` keyword.

 ### 3.How JS and ECMA related? :
  - ECMA Standardised the Java Script.
  - ECMA Script provides core language features for interactive Web development.
  - The ECMA version corresponds to different editions of javascript.
  - Writting javascript code in the implementation which follows ECMA Standards.
  - Understanding the ECMA standards and version helps the developer to write js code with core features supporting different browsers.

### 4.DOM and Browser Object Model:
- When webpage is loaded, the browser displays the content using dom properties of the page.
- It creates a Tree of Object which follows a hierarchy flow.
- The W3C DOM standard is separated into 3 different parts:
   - Core DOM: standard model for all document types.
   - XML DOM : modelfor xml documents.
   - HTML DOM : model for html documents. 

#### Browser Object Model:
This allows JS to manipulate the browser actions.
- Window Object:
  - The `window` object reprsents the browser window.
  - The JSglobal functions, variables and objects are also a member of Window Object
###### Window Size:
- `window.innerHeight` calculates inner height if browser window in px.
- `window.innerWidth` calculates inner width of the browser window in px.
```html
  <!DOCTYPE html>
  <html>
  <body>
  <p id="sample"></p>

  <script>
  document.getElementById("sample").innerHTML = "Window Height " + window.innerHeight + "px <br/>" + "Window Width " + window.innerWidth + "px";

  </script>

  </body>
  </html>
```

- `window.open()` : Creates and opens a new window according to provided height and width to open a link when an event triggered.
- `window.open()` : Closes the window.
- `window.moveTo()` - move the current window
- `window.resizeTo()` - resize the current window

```html
<!DOCTYPE html>
<html>
<body>
    <button onclick="openNewWindow()">Open New Window</button>
    <button onclick="closeWindow()">Close This Window</button>

    <script>
        function openNewWindow() {
            window.open('samplelink', '_blank', 'width=800,height=600');
        }
        function closeWindow() {
            window.close();
        }
    </script>
</body>
</html>
```
###### Window Screen
`window.screen` can also be written `screen` omitting the `window` keyword.
- `screen.width` : returns the width of user screen.
- `screen.height`: returns the height of user screen.
- `screen.availWidth` : returns the width of user screen in px excluding interface like windows taskbar.
- `screen.availHeight`: same as above but for height.

###### Window Location Href:
`window.location` used to to get current page url and redirection.
- Ex: The code to get current page URL.
```html
    <!DOCTYPE html>
    <html>
    <body>

    <p id="sample"></p>

    <script>
    document.getElementById("sample").innerHTML = 
    "URL of this page:<br>" + window.location.href;
    </script>

    </body>
    </html>
```
- Can also omit the prefix as window screen.
- Also has:
  - `window.location.hostname` : returns host name of current page.
  - `window.location.pathname` : pathname.
  - `window.location.protocol` :protocol used in current page.
  - `window.location.port` : port of current page.
  - `window.location.assign()` : assigns a new page to current page window.

  ###### Window History:
  - `history.back()` : similar to clicking back menu in a webpage.
  - `history.forward()` : similar to clicking forward menu in a webpage.

 ###### Window Navigator:
 - `window.navigator` : conatains info about user info.
 - `cookieEnabled` :returns true if cookie enabled.
 - `appName` : Returns the app name of the browser.
 - `appVersion` : returns version info of browser.
 - `userAgent` : returns the user-agent sent by the browser to server.
 - `language` :returns the browser's language.
 - `onLine` : returns whether the browser is online or not.


 ###### Window Alert Box:
 - `window.alert()` : Gives a pop-up alert message..
 - `window.confirm()` :popup confirmation.
 - `window.prompt()` : pop-up input fields.
 ```html
  <!DOCTYPE html>
  <html>
  <body>

  <button onclick="alert('Hello?')">Alert</button>
  <button onclick="confirm('Press')">Confirm</button>
  <button onclick="prompt('Please enter your name:')">Prompt</button>

  </body>
  </html>

 ```
 ###### WindowTiming Events:
 - `setTimeout(function, milliseconds)` : Executes a function after waiting for given milliseconds
 - `setInterval(function, milliseconds)` : Executes the function in the given interval.
 - `clearTimeout()` : Stops the timeout function.
 - `clearInterval()` : Stops the interval function.
 ```html
 <!DOCTYPE html>
<html>
<body>

<h2>Clock</h2>

<p id="demo"></p>

<script>
setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
</script>

</body>
</html>

 ```
###### Cookies:
- Cookies are used to store info in webpages temperorily.
- Cookies are small data on the client web page. 
- Saved in name-valu e pairs.`username = Some_name`.
- Create Cookie:
  - `document.cookie = "username=name";`
  - Expiry : `document.cookie = "username=name; expires=Thu, 18 July 2024 12:00:00 UTC";`
  - path: `document.cookie = "username=name; expires=Thu, 18 July 2024 12:00:00 UTC; path=/ "`
 
- Read Cookie:
  - Using JavaScript: `let x = document.cookie;`
-Change Cookie:
  -OverWrite : `document.cookie = "username=name2; expires=Thu, 18 July 2024 12:00:00 UTC; path=/ "`
-Delete Cookie:
  -Blank the value : `document.cookie = "username=; expires=Thu, 18 July 2024 12:00:00 UTC; path=/ "`