
## 1. Forms, Lists and Tables

### 1.1 Forms

- An HTML form is used to collect user input. The user input is most often sent to a server for processing.
- The `<form>` element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.

#### Input Types

| Type | Description |
|------|-------------|
| `<input type="text">` | Displays a single-line text input field |
| `<input type="radio">` | Displays a radio button (for selecting one of many choices) |
| `<input type="checkbox">` | Displays a checkbox (for selecting zero or more of many choices) |
| `<input type="submit">` | Displays a submit button (for submitting the form) |
| `<input type="button">` | Displays a clickable button |

#### Label

The `<label>` tag defines a label for many form elements. It's useful for screen-reader users, as the screen-reader will read out loud the label when the user focuses on the input element.

```html
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>
```

#### Radio Buttons and Checkboxes

- The `<input type="radio">` defines a radio button.
- The `<input type="checkbox">` defines a checkbox.

#### Submit Button

```html
<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>
```

#### Form Attributes

- The `action` attribute defines the action to be performed when the form is submitted.
- The `target` attribute specifies where to display the response that is received after submitting the form:

| Value | Description |
|-------|-------------|
| `_blank` | The response is displayed in a new window or tab |
| `_self` | The response is displayed in the current window |
| `_parent` | The response is displayed in the parent frame |
| `_top` | The response is displayed in the full body of the window |
| `framename` | The response is displayed in a named iframe |

The default value is `_self`.

- The `method` attribute specifies the HTTP method to be used when submitting the form data.
- The `autocomplete` attribute specifies whether a form should have autocomplete on or off.

#### Select Element

The `<select>` element defines a drop-down list. The `<option>` element defines an option that can be selected.

```html
<label for="cars">Choose a car:</label>
<select id="cars" name="cars" size="4" multiple>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
```

Use the `size` attribute to specify the number of visible values. Use the `multiple` attribute to allow the user to select more than one value.

#### Textarea

The `<textarea>` element defines a multi-line input field (a text area):

```html
<textarea name="message" rows="10" cols="30">
The cat was playing in the garden.
</textarea>
```

#### Fieldset and Legend

The `<fieldset>` element is used to group related data in a form. The `<legend>` element defines a caption for the `<fieldset>` element.

```html
<form action="/action_page.php">
  <fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>
    <input type="submit" value="Submit">
  </fieldset>
</form>
```
```

## Input Types

Here are the different input types you can use in HTML:

- `<input type="button">`
- `<input type="checkbox">`
- `<input type="color">`
- `<input type="date">`
- `<input type="datetime-local">`
- `<input type="email">`
- `<input type="file">`
- `<input type="hidden">`
- `<input type="image">`
- `<input type="month">`
- `<input type="number">`
- `<input type="password">`
- `<input type="radio">`
- `<input type="range">`
- `<input type="reset">`
- `<input type="search">`
- `<input type="submit">`
- `<input type="tel">`
- `<input type="text">`
- `<input type="time">`
- `<input type="url">`
- `<input type="week">`

The input `readonly` attribute specifies that an input field is read-only.

## Lists

### Unordered HTML List

An unordered list starts with the `<ul>` tag. Each list item starts with the `<li>` tag.

The list items will be marked with bullets (small black circles) by default. The CSS `list-style-type` property is used to define the style of the list item marker. It can have one of the following values:

- `disc`: Sets the list item marker to a bullet (default)
- `circle`: Sets the list item marker to a circle
- `square`: Sets the list item marker to a square
- `none`: The list items will not be marked

Example:
```html
<ul style="list-style-type:none;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```

### Ordered HTML List

An ordered list starts with the `<ol>` tag. Each list item starts with the `<li>` tag.
The `type` attribute of the `<ol>` tag defines the type of the list item marker:

| Type | Description |
|------|-------------|
| `type="1"` | The list items will be numbered with numbers (default) |
| `type="A"` | The list items will be numbered with uppercase letters |
| `type="a"` | The list items will be numbered with lowercase letters |
| `type="I"` | The list items will be numbered with uppercase roman numbers |
| `type="i"` | The list items will be numbered with lowercase roman numbers |

Example:
```html
<ol type="1">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

## Tables

A table in HTML consists of table cells inside rows and columns. Each table cell is defined by a `<td>` and a `</td>` tag.

- `td` stands for table data.
- `th` stands for table header.

To make a cell span over multiple columns, use the `colspan` attribute:

```html
<table>
  <tr>
    <th colspan="2">Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>43</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>57</td>
  </tr>
</table>
```

To make a cell span over multiple rows, use the `rowspan` attribute:

```html
<table>
  <tr>
    <th>Name</th>
    <td>Jill</td>
  </tr>
  <tr>
    <th rowspan="2">Phone</th>
    <td>555-1234</td>
  </tr>
  <tr>
    <td>555-8745</td>
  </tr>
</table>
```

## Accessibility

- Writing HTML code with accessibility is a good practice. Make HTML code as semantic as possible.
- Semantic HTML means using correct HTML elements for their correct purpose as much as possible. Semantic elements are elements with a meaning; if you need a button, use the `<button>` element (and not a `<div>` element).

### Best Practices for Accessible HTML

1. Use Semantic HTML: Favor semantic elements over generic ones (e.g., use `<button>` instead of `<div>` for buttons).
2. Provide Text Alternatives: Use `alt` attributes for images, `aria-label` for interactive elements, and captions/transcripts for multimedia.
3. Ensure Keyboard Navigation: Ensure that all functionality is available via keyboard.
4. Use ARIA Wisely: Enhance accessibility with ARIA roles and properties where necessary, but do not overuse them.
5. Label Form Elements: Always use `<label>` elements to associate text with form controls.
6. Maintain Focus Order: Ensure a logical tab order and use `tabindex` sparingly.
7. Test with Assistive Technologies: Regularly test your content with screen readers and other assistive tools.

### ARIA (Accessible Rich Internet Applications)

ARIA attributes can be used to enhance the accessibility of dynamic content and complex user interface controls that are not natively accessible.

Common ARIA attributes include:

- `aria-label`: Provides an accessible name for an element.
- `aria-hidden`: Hides elements from assistive technologies.
- `aria-live`: Indicates that an element will be updated dynamically.
- `aria-expanded`: Indicates whether a control is expanded or collapsed.

## SEO

Search Engine Optimization (SEO) in HTML involves optimizing web pages to improve their visibility and ranking on search engine results pages (SERPs). Effective SEO helps attract organic (unpaid) traffic from search engines like Google, Bing, and Yahoo.

### Title Tags

The `<title>` element defines the title of the document, which appears in the browser tab and as the clickable headline in search engine results.

Best Practices: Keep titles under 60 characters, include relevant keywords, and ensure they are unique for each page.

Example:
```html
<title>Learn HTML - Basics, Elements, and SEO</title>
```

### Meta Descriptions

The `<meta>` description tag provides a brief summary of the page content. It appears below the title in search results.

Best Practices: Keep descriptions under 160 characters, make them compelling, and include relevant keywords.

Example:
```html
<meta name="description" content="Learn the basics of HTML, including elements, attributes, and best practices for SEO.">
```

### Headings

Use `<h1>` to `<h6>` tags to define headings and subheadings, which help search engines understand the structure and hierarchy of your content.

Best Practices: Use one `<h1>` per page, incorporate keywords naturally, and maintain a logical hierarchy.

Example:
```html
<h1>Understanding HTML and SEO</h1>
<h2>What is HTML?</h2>
<h2>Importance of SEO in HTML</h2>
```

### Alt Attributes for Images

The `alt` attribute provides a text alternative for images, which helps search engines understand the content of images.

Best Practices: Describe the image concisely and include relevant keywords.

Example:
```html
<img src="html-basics.png" alt="HTML Basics Tutorial">
```

### URL Structure

Use clean, readable URLs that include keywords related to the page content.

Best Practices: Avoid special characters, use hyphens to separate words, and keep URLs short.

Example: `https://www.example.com/learn-html-basics`

### Structured Data and Schema Markup

Structured data helps search engines understand the content and context of your web pages, potentially enhancing SERP features like rich snippets.

Best Practices: Use JSON-LD for structured data, and validate using Google's Structured Data Testing Tool.

Example:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Learn HTML - Basics, Elements, and SEO",
  "description": "Learn the basics of HTML, including elements, attributes, and best practices for SEO.",
  "image": "https://www.example.com/images/html-seo.png",
  "author": {
    "@type": "Person",
    "name": "Jane Doe"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Example.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.example.com/logo.png"
    }
  },
  "datePublished": "2024-07-11",
  "dateModified": "2024-07-11"
}
</script>
```
```

# 4. HTML API

HTML APIs (Application Programming Interfaces) are interfaces provided by web browsers that allow developers to interact with and manipulate HTML and the browser itself.

## 4.1 Geolocation

```javascript
const myElement = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    myElement.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  myElement.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
```

## 4.2 Web Storage API

Provides mechanisms for storing key-value pairs in the browser. It includes localStorage (persists data) and sessionStorage (data is lost when the page session ends).

```javascript
// Store data
localStorage.setItem("username", "JohnDoe");

// Retrieve data
var username = localStorage.getItem("username");
console.log(username);
```

## 4.3 Fetch API

Provides a modern, promise-based way to make network requests (similar to XMLHttpRequest).

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

## 4.4 Notification API

Allows web pages to send notifications to the user's device.

```javascript
Notification.requestPermission().then(function(result) {
  if (result === 'granted') {
    var notification = new Notification('Hello, World!');
  }
});
```

## 4.5 Drag and Drop API

Enables elements to be draggable, allowing for interactive drag-and-drop functionality.

```html
<div id="draggable" draggable="true">Drag me!</div>
<div id="dropzone">Drop here</div>

<script>
  var draggable = document.getElementById('draggable');
  var dropzone = document.getElementById('dropzone');

  draggable.ondragstart = function(event) {
    event.dataTransfer.setData('text', 'Dragged element');
  };

  dropzone.ondragover = function(event) {
    event.preventDefault();
  };

  dropzone.ondrop = function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData('text');
    dropzone.textContent = data;
  };
</script>
```

- Third party APIs are not built into your browser.
  - YouTube API - Allows you to display videos on a web site.
  - Twitter API - Allows you to display Tweets on a web site.
  - Facebook API - Allows you to display Facebook info on a web site.

# 5. HTML Comments

- HTML comments are not displayed in the browser, but they can help document your HTML source code.
- You can add comments to your HTML source by using the following syntax:

```html
<!-- Comments goes here -->
```

- With comments you can place notifications and reminders in your HTML code. Comments can be used to hide content.
- This can be helpful if you hide content temporarily:

```html
<p>This is a paragraph.</p>
<!-- <p>This is another paragraph </p> -->
<p>This is a paragraph too.</p>
```

- Hide a part of a paragraph:

```html
<p>This <!-- great text --> is a paragraph.</p>
```
```

