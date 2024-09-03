## Milestone 5

### 1.Selectors and Combinators:

# 1.1 Selectors:
Selectors are used in finding the html elements.Can be divided into
- Simple selector
- Combinators
- Pseudo class selectors
- Pseudo elements selector

Simple Selectors:
 based on name ,id, classname.
 - id:
 ```css
  #para1 {
    text-align: center;
    color: red;
  }
```

-element:
 ```css
  p {
    text-align: center;
    color: red;
  }
```

- class selector:
  
 ```css
  .center {
    text-align: center;
    color: red;
  }
```
We can also call the element of specific class.
 ```css
  p.center {
    text-align: center;
    color: red;
  }
```
- Universal Selector:
  The universal selector (*) selects all HTML elements on the page.
  ```css
      * {
        text-align: center;
        color: blue;
      }


# 1.2 Combinators:
Explains the relationship between the selectors.Includes
- descendant selector (space):
   matches all elements descendants of a specified element .
    ```css
        div p {
              background-color: yellow;
         }

  ```

- child selector (>):
  The child selector selects all elements that are the children of a specified element.
   ```css
  div > p {
    background-color: yellow;
  }
  ```

- adjacent sibling selector (+):
  include the immediate element below to it (Siblins)
   ```css
  div + p {
    background-color: yellow;
  }


- general sibling selector (~):
 all elements that are next siblings of a specified element.
 ```css
  div ~ p {
  background-color: yellow;
}
```

## 2.Pseudo Classes and Elements:
Used in specifying special states
- visited
- hover
- focus

```css
  selector:pseudo-class {
    property: value;
  }
```
Anchor Pseudo class:

```css

<html>
<head>
<style>
a:link {
  color: red;
}


a:visited {
  color: green;
}

a:hover {
  color: hotpink;
}

a:active {
  color: blue;
}
</style>
</head>
<body>

<p><b><a href="" target="_blank">This is a link</a></b></p>

</body>
</html>

```

The :first-child Pseudo class:
Matches the firstchild of another element
ex:
```css
  p:first-child {
    color: blue;
  }
```
the above snippet targets all the <p> tag first element inside an element.

- The :lang pseudo class:
 The :lang pseudo-class allows you to define special rules for different languages.

  Ex:
  ```html
   <html>
     <head>
     <style>
     q:lang(sample) {
       quotes: "(" "~)";
     }
     </style>
     </head>
     <body>
     
     <p>Hello <q lang="sample">World</q></p>
     
     </body>
   </html>

Other Classes : `:last-child` `:in-range` `:out-of-range` `:target `

# Pseudo Elements:
pseudo elements used to style specific part of an element.Ex: first letter,line of an element and inserting content before or after to a content in an element.
- Syntax:
```css
  selector::pseudo-element {
    property: value;
  }
```
1. ::first-line : Used to add style to first line of an element.
```css
p::first-line  {
  color: red;
}
```

2. ::before and ::after  :Used in adding content before a content.
```css
p::after {
  content: ' \2605';
  color: gold;
}
```

-Other Pseudo elements includes :  `::first-letter` `::first-line` `::marker` `::selection` .

# !important:
!important rule is used to override a styling in css.It used to add more importance to a element with some property and value.
Ex:
```html

     <html>
     <head>
     <style>
     #myid {
       background-color: blue;
     }
     
     p {
       background-color: red !important;
     }
     </style>
     </head>
     <body>
     
     <p>Hello</p>
     
     
     <p id="myid">World</p>
     
     </body>
     </html>
```

- the only way to override !important rule is to include another !important rule.

## CSS Functions:
The CSS functions are used to invoke special data processing or calculations to return a css value for a css property.

- Transform function: Used to transform a element.
Ex:
```html
   <html>
   <head>
   <style>
   .box {
     width: 50px;
     height: 50px;
     background-color: blue;
     transform: rotate(45deg) ;
   }
   </style>
   </head>
   <body>
   
   <div class="box"></div>
   
   </body>
   </html>
```
Other functions: `translate()` `scale()` `skew()`.

- Math Function: Used to to mathematical calculation.
Ex:
```css
  width: calc(10px + 100px);
```
Other functions: `sqrt()` `sin()` `round()` `min()` .
- Filter Functions:Used in adding graphical effects.
 includes : `blur()` `contrast()` `opacity()` 

 - Color Functions: Applies different color representation.
   Ex:
 ```html
      <html>
   <head>
   <style>
   #para {
   	background-color:rgb(255,0,0);
   }
   
   </head>
   <body>
   <p id="para">Hello</p>
   
   </body>
   </html>
 ```
- Easing Function:USed in transition and animation .
Ex:cubic-bezier() :timing functions for animations and transitions, allowing for more complex and precise control over how an element's property  `cubic-bezier(x1, y1, x2, y2)`.

- Counter function: returns the current value of the named counter, as a string.
  ```css
        body {
        counter-reset: section;
      }
      
      h2::before {
        counter-increment: section;
        content: "Section " counter(section) ": ";
      }
  ```
  - var() function:
    Act as a variable,used to insert values.
Ex:
```css
   :root {
     --bg-color: red;
   }
   #div1 {
     background-color: var(--bg-color);
   }
```


## CSS Comments:
CSS comments are used to explain a snippet, action and logic.They are mostly used for the developers understanding.Placed inside <style> tags Starts with /* and ends with */.

```css
/* This is a Comment Section */
 body {
        counter-reset: section;
      }
      
      h2::before {
        counter-increment: section;
        content: "Section " counter(section) ": ";
      }
```
CSS comments are ignored by the browser during display.It can also be in multi-line.
  


   

  
  





