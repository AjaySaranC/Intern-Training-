## Milestone 2

### 1. HTML

- HTML is the standard language used to create and structure content on the World Wide Web.
- **Structure Components:**
  - `<!DOCTYPE html>`: Defines the document type and HTML version.
  - `<html>`: Root element that contains all other elements.
  - `<head>`: Contains meta-information.
  - `<meta charset="UTF-8">`: Specifies the character encoding for the document.

### 2. DOM (Document Object Model)

- The DOM defines a standard for accessing documents.
- Stands for Document Object Model. The browser creates a DOM when the webpage is loaded.
- **Finding HTML Elements with JavaScript:**
  - Finding by ID:
     ```javascript
    var element = document.getElementById('myDiv');
     ```
  - Finding by Tag Name:
    ```javascript
    var elements = document.getElementsByTagName('p');
    ```
  - Finding by Class Name:
    ```javascript
    var elements = document.getElementsByClassName('myClass');
    ```
  - Using CSS Selector:
     ```javascript
     var elements = document.querySelectorAll('.myClass');
    ```
  - HTML Object Collections:
    ```javascript
    var forms = document.forms;
    ```

#### 1.1 DOM Methods

- Property is a value (changing elements) and method (actions).
- `innerHTML`: Useful for getting and setting content to an HTML element.

#### 1.2 DOM Document

- **Finding HTML Elements:**
  ```javascript
  document.getElementById()
  ```, etc.
- **Changing HTML Elements:**
   ```javascript
  element.innerHTML = newHTMLContent;
   ```
  ```javascript
  element.attribute = newValue;
  ```
- **Adding and Deleting Elements:**
  ```javascript
  document.createElement(element);`
  paragraph.parentNode.removeChild(paragraph);
  ```
- **Replacing an Element:**
  - Example: 
    ```javascript
    var oldParagraph = document.getElementById('oldParagraph');
    oldParagraph.parentNode.replaceChild(newParagraph, oldParagraph);
    ```
- **Attribute Change:**
  ```javascript
  document.getElementById("myImage").src = "landscape.jpg";
  ```
- Using `document.write()` after the document has loaded will overwrite the document, so it is not a good practice.

#### 1.3 DOM Forms

- **Retrieving Data from Form:**
  - Using `document.forms["myForm"]["fname"].value;` or `document.forms.myForm`.
- The browser automatically validates empty fields.
- **Data Validation:**
  - Purpose: Ensures required fields are filled with valid data.
  - Server and Client-Side Validation.
  - **Validation with HTML Input Attributes:** `disabled`, `max`, `min`, `pattern`, `required`, `type`.

#### 1.4 DOM CSS and Others

- **Changing a CSS Property:** `
  ```javascript
  document.getElementById("p2").style.color = "blue";
  ```
- CSS changes triggered by events, e.g., `onclick="document.getElementById('id1').style.color = 'red'"`.
- **HTML Events Using DOM:** 
  ```html
  <script>
  document.getElementById("myBtn").onclick = displayDate;
  </script>



#### 1.5 DOM Events
- **The onload and onunload Events:**
  - Triggered when the user enters or leaves the page.
  - Can be used to check visitor's browser type and version:
    ```html
    <body onload="checkCookies()">
    ```

- **Onchange Event:**
  - Often used for input field validation:
    ```html
    <input type="text" id="fname" onchange="upperCase()">
    ```

- **EventListener:**
  - Attaches an event handler without overwriting existing ones:
    ```javascript
    document.getElementById("myBtn").addEventListener("click", displayDate);

    function displayDate() {
      document.getElementById("demo").innerHTML = Date();
    }
    ```
  - Can be removed using `removeEventListener()`.

- **Multiple Event Handlers:**
  ```javascript
  var x = document.getElementById("myBtn");
  x.addEventListener("click", myFunction);
  x.addEventListener("click", someOtherFunction);
  ```

- **Event Handler on Window Object:**
  ```javascript
  window.addEventListener("resize", function(){
    document.getElementById("demo").innerHTML = Math.random();
  });
  ```

- **Passing Parameters:**
  ```javascript
  let p1 = 5;
  let p2 = 7;
  document.getElementById("myBtn").addEventListener("click", function() {
    myFunction(p1, p2);
  });
  ```

- **Event Bubbling and Capturing:**
  - Bubbling: Inner to outer
  - Capturing: Outer to inner
  - Default is bubbling (false), set to true for capturing:
    ```javascript
    document.getElementById("myDiv").addEventListener("click", function() {
      alert("You clicked the orange element!");
    }, true); // Use capturing
    ```

#### 1.6 DOM Nodes
- Everything in an HTML document is a node.
- Nodes have hierarchical relationships.
- **Accessing Node Values:**
  ```javascript
  myTitle = document.getElementById("demo").innerHTML;
  // or
  myTitle = document.getElementById("demo").firstChild.nodeValue;
  ```

- **Common Node Properties:**
  - `document.body`: The body of the document
  - `document.documentElement`: The full document
  - `nodeName`: Specifies the name of a node

- **Creating and Appending Nodes:**
  ```javascript
  const para = document.createElement("p");
  const node = document.createTextNode("This is new.");
  para.appendChild(node);

  const element = document.getElementById("div1");
  element.appendChild(para);
  ```

- **Node Manipulation Methods:**
  - `appendChild()`: Adds at end
  - `insertBefore()`: Adds at beginning
  - `remove()`: Removes a node
  - `replaceChild()`: Replaces a node

- **HTML Collections:**
  ```javascript
  const myCollection = document.getElementsByTagName("p");
  document.getElementById("demo").innerHTML = "The innerHTML of the second paragraph is: " + myCollection[1].innerHTML;
  ```


### HTML and XHTML
- HTML is the standard markup language for creating web pages.
- XHTML is a stricter and more XML-based version of HTML.
  - Developed to be more compatible with XML tools.
  - Ensures cleaner, more reliable code.

### 1.6 Elements, Tags, Attributes and Layouts

#### HTML Elements
- An HTML element is everything from the start tag to the end tag:
  ```html
  <tagname>Content goes here...</tagname>
  ```
- Examples of HTML elements:
  ```html
  <h1>My First Heading</h1>
  ```
- The `<html>` element is the root element and defines the whole HTML document.
- The `<body>` element defines the document's body.
- Some HTML elements display correctly even without an end tag:
  ```html
  <p>This is a paragraph
  <p>This is a paragraph
  ```

#### HTML Attributes
- All HTML elements can have attributes.
- Attributes provide additional information about elements.
- Attributes are always specified in the start tag.
- Attributes usually come in name/value pairs like: `name="value"`
- Example:
  ```html
  <a href="www.sample.com">SampleWebsite</a>
  ```

#### URL Specification
Two ways to specify the URL in the src attribute:
1. Absolute URL: Links to an external website
2. Relative URL: Links to an image within the website

#### Other Attributes
- The `title` attribute: Defines extra information about an element.
- The `lang` attribute: Should be included in the `<html>` tag to declare the language of the web page. Assists search engines and browsers.

#### HTML Layout
- HTML has several semantic elements that define different parts of a web page.
- Four techniques to create multicolumn layouts:
  1. CSS framework
  2. CSS float property
  3. CSS flexbox
  4. CSS grid


### 1.7 Semantic and Non-Semantic Elements

- A semantic element clearly describes its meaning to both the browser and the developer.
  - Examples: `<article>`, `<footer>`, `<header>`, `<nav>`, `<section>`

- Non-semantic elements don't add meaning to a context.
  - Examples: 
    ```html
    <div class="container">
        <p>This is a paragraph inside a div.</p>
    </div>
    ```
  - Other examples include `<span>`.

#### Class Attribute
- Used to define a group of elements that share the same style or behavior.
- Multiple elements can have the same class, and an element can have multiple classes.
- Syntax: `<tag class="classname">Content</tag>`

#### ID Attribute
- Used to identify a unique element on the page.
- Each ID must be unique within the document.
- Syntax: `<tag id="unique-id">Content</tag>`

#### Combining Classes and IDs
An element can have both a class and an ID, allowing for versatile styling and scripting.

Example:
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .common-style {
            font-size: 18px;
        }
        #special-element {
            color: red;
        }
    </style>
</head>
<body>
    <!-- Content here -->
</body>
</html>
```

### 1.8 Formatting and Charsets

#### Text Formatting
- `<strong>` vs `<b>`:
  - `<strong>`: Indicates strong importance or urgency (semantic).
    ```html
    <p>This is a <strong>very important</strong> message.</p>
    ```
  - `<b>`: Makes text bold without implying importance (presentational).
    ```html
    <p>This is a <b>bold</b> statement.</p>
    ```

- `<i>`: Defines text in an alternate voice or mood (typically italic).
  ```html
  <i>This text is italic</i>
  ```

- `<em>`: Defines emphasized text (typically italic).

#### Other Formatting Elements

| Tag | Description |
|-----|-------------|
| `<b>` | Defines bold text |
| `<em>` | Defines emphasized text |
| `<i>` | Defines a part of text in an alternate voice or mood |
| `<small>` | Defines smaller text |
| `<strong>` | Defines important text |
| `<sub>` | Defines subscripted text |
| `<sup>` | Defines superscripted text |
| `<ins>` | Defines inserted text |
| `<del>` | Defines deleted text |
| `<mark>` | Defines marked/highlighted text |

#### Charset
- Specifies the character encoding for the HTML document.
- Typically used within the `<meta>` tag inside the `<head>` section.
  ```html
  <head>
      <meta charset="UTF-8">
      <title>Document Title</title>
  </head>
  ```

#### Common Character Encodings
1. UTF-8:
   - Most commonly used
   - Can represent any character in the Unicode standard

2. ISO-8859-1 (Latin-1):
   - Older encoding for Western European languages
   - Limited to 256 characters

3. UTF-16:
   - Uses 16-bit units
   - Can represent all Unicode characters
