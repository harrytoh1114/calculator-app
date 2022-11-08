# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Links

- Solution URL: [Add solution URL here](https://github.com/harrytoh1114/calculator-app)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com](https://fancy-tarsier-3ea5b0.netlify.app/)

## My process

### Built with

- SCSS
- Flexbox
- MathJS
- [React](https://reactjs.org/) - JS library

### What I learned

Makes calculation operation possible with the evaluate method provided by MathJS

To see how you can add code snippets, see below:

```js

  const calcHandler = (e) => {
    e.preventDefault();
    try {
      setError(false);
      setTotal(evaluate(total).toString());
    } catch (e) {
      setTotal("0");
      setError(true);
    }
  };
```
## Author

- Frontend Mentor - [@harrytoh1114](https://www.frontendmentor.io/profile/harrytoh1114)
