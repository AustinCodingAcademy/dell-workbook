# assignment 3: floats

view my project [here](https://nntrn.github.io/dell-workbook/03floats/)

> **requirements:**
>
> * Replicate the site below, use HTML and CSS.
> * Do not use the ID tag attribute. Hint: Stay classy `<p class="my-paragraph">...</p>`
> * Write your CSS in top to bottom fashion as much as possible. Hint: Target elements in your CSS file in the order they appear in your HTML Document.
> * Make images responsive using CSS. Hint: set image width: 100% and height: auto.
> * Feel free to use a Google Fonts to try and match the font.
> * Tutorial HTML markup completion. At least 95% of the complete HTML Document must be written.
> * Bonus: Use actual input form elements for the fields

---

* [setting up](#setting-up)
* [making the header](#making-the-header)
  * [logo](#logo)
  * [navigation](#navigation)
  * [display nav icons](#display-nav-icons)
    * [using an image file](#using-an-image-file)
    * [using a webfont](#using-a-webfont)
* [create section](#create-section)
* [div .content](#div-content)
* [additional](#additional)
  * [add gradient to background](#add-gradient-to-background)
  * [responsive page design](#responsive-page-design)
* [base](#base)
  * [HTML](#html)
  * [CSS](#css)

## setting up

```HTML
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.css">

<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet">

<link href="https://fonts.googleapis.com/css?family=Roboto:400,500" rel="stylesheet">
```

* [fontawesome](https://fontawesome.com/v4.7.0/icons/) for displaying webicons
* [normalize](https://necolas.github.io/normalize.css/):  render all elements more consistently
* [roboto](https://fonts.google.com/specimen/Roboto?selection.family=Roboto:400,500): google font (font-weight: 400 and 500)

## making the header

the first level elements in `<header>` are `<div>` and `<nav>` - we want the div block to display the website logo and the nav block to hold our links (to display them side by side, i used `float:left`)

```CSS
.website-logo { float: left;}
nav { float: left; }
```

### logo

```HTML
<div class="website-logo">
    <img src="img/logo.png">
</div>
```

### navigation

i used a list to hold the navigation links:

* remove all padding and margin in `ul`
* set `list-style-type:none` in `ul`
* display the individual links as `inline-block` in the `li`

```HTML
<nav>
  <ul class="navigation">

    <li class="home">
      <a href="#">home</a></li>

    <li class="deals">
      <a href="#">travel deals</a></li>

    <li class="schedule">
      <a href="#">flight schedule</a></li>

    <li class="register">
      <a href="#">register/login</a></li>

  </ul>
</nav>
```

### display nav icons

#### using an image file

* i display the nav icons using the `::before` selector
* `.navigation *::before{..}` this styles ALL the nav icons

```CSS
.navigation *::before { padding: .5rem;}

.home::before { content: url(img/home-icon.png); }
.deals::before { content: url(img/deal-icon.png); }
.schedule::before { content: url(img/schedule-icon.png); }
.register::before { content: url(img/login-icon.png); }
```

> another way to do this would be using `background-image` but doing this requires an additional line of code `content: "";`

#### using a webfont

i'm using [font-awesome](https://fontawesome.com/v4.7.0/icons/) v4.7

```HTML
<nav>
  <ul class="navigation">
    <li class="fa-home"><a href="#">home</a></li>
    <li class="fa-plane"><a href="#">travel deals</a></li>
    <li class="fa-calendar"><a href="#">flight schedule</a></li>
    <li class="fa-sign-in"><a href="#">register/login</a></li>
  </ul>
</nav>
```

* `.fa-home` for home
* `.fa-plane` for deals
* `.fa-calendar` for schedule
* `.fa-sign-in` for sign-in/register

> **NOTE:** set the font for your `::before` selectors to  FontAwesome
> ```CSS
> .navigation *::before {font-family: FontAwesome; }
> ```

v4.7 icon search tool at: [faicons.com](https://faicons.com/)

## create section

```HTML
<section>
    <div class="content"></div>
</section>
```

`<section>` is the entire rest of the page after header

``` CSS
section {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(img/airline.jpg);
  background-size: 100% 100%;
}
```

`background-size: 100% 100%;` makes the background-image responsive
  
## div .content

**`<div class="content">`**
this block holds the tabbed buttons on top and form contorl inputs below

i suppose i could have used `<article>` but i went with a `<div> + .class` instead

```HTML
<div class="content">

  <div class="clearfix tabs">
    <div class="tab plane"> </div>
    <div class="tab hotel"> </div>
    <div class="tab car"> </div>
  </div>

  <div class="page flights-page">
    <form></form>
  </div>

</div>
```


```CSS
.content {
  min-width: 40%;
  max-height: 40%;
  margin: 2rem;
  position: absolute;
  display: table;
  z-index: 5;
}
```

---

## additional

### add gradient to background

this code layers on top of the section background to add a gradient. `z-index` of `section::before` needs to be greater than `<section>`

```CSS
section::before {
  position: absolute;
  background: linear-gradient(to bottom, #0a2761, #0542b4, #a3d2f6);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: .7;
  content: "";
  z-index: 1;
  mix-blend-mode: lighten;
}
```

### responsive page design

```css
@media (max-width: 500px) {
  nav li, .navigation {
      display:block;
      width: 100%;
      font-size: 1.em;
  }

  input[type="date"], input[type="text"], select {
      width: 100%;
      display: table-row;
      margin: .4rem 0;
  }
}
```

`@media` query explained:

* the first style, `nav li, .navigation` will make the navigation horizontal with a slightly bigger font
* the second, `input[type="date"], input[type="text"], select` will make stack the input elements stack on top of each other

> **NOTE**: `@media (max-width: 480px)` is NOT "[mobile first](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)" - instead of changing styles when the width gets smaller than 768px, *we should change the design when the width gets larger than 768px*

---

## base

### HTML

```HTML
<body>
  <header>
    <div class="website-logo"></div>
    <nav></nav>
  </header>
  <section>

    <div class="content">

      <div class="clearfix tabs">
        <div class="tab plane"> </div>
        <div class="tab hotel"> </div>
        <div class="tab car"> </div>
      </div>

      <div class="page flights-page">
        <form></form>
      </div>

    </div>

  </section>
</body>
```

### CSS

```CSS
/* Base Styles
*****************************  */

* {
    box-sizing: border-box;
    outline: 0;
}

/* Typography
*****************************  */
a {}
a:hover {}

/* Layout
*****************************  */

header {}
nav {}
section {}


/* Forms
*****************************  */
fieldset {}
form {}
select {}
input[type="date"] {}
input[type="text"] {}
input[type="checkbox"] {}
input[type="radio"] {}
input[type="button"] {}
input[type="submit"] {}
label {}


/* clearfix
*****************************  */
.clearfix:after,
.clearfix::before {
    content: " ";
    display: table;
}

.clearfix:after { clear: both; }


/* Media Queries
*****************************  */
/* For devices smaller than 500px - note this is not mobile design first */
@media (max-width: 500px) {}
```