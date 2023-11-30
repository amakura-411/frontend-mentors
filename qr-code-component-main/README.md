# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - QR code component solution](#frontend-mentor---qr-code-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Acknowledgments](#acknowledgments)


## Overview

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

Given feedback  is

**HTML**:
- Good job on including the `<main>`, most beginners are not aware of its importance. However, you have way too many divs. In such a simple component, you only need a `<main>`, which can also act as the card. So, I would remove all `divs`.
- The image must have `alt` text. This is essential for screen readers to understand the image. The alt text should be descriptive, and in this example, it also needs to say where it leads (frontendmentor.io).
- "Scan the QR code" and the footer text should both be wrapped in a `<p>`.

Hence, you should end up with the following HTML structure:
```
| <body>
||   <main>
|||     <img>
        <h1>
        <p>
||   </main>
||  < footer>
|||     <p>
||   </footer>
```


**CSS**:

- Performance-wise, it's better to link fonts in the `<head>` of the HTML then using @import.
It's good practice to include a at the top.
- Remove width: 100% on html, main and body - they are 100% wide by default, because they are block elements.
- Change height: 100vh to min-height: 100vh. And you only need to put it on the body.
- Background color and text alignment should be moved from the card to the body. Additionally, add Flexbox to center the card horizontally and vertically:
```
background-color: hsl(212, 45%, 89%);
text-align: center:
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 100vh;
```
- max-width on the card is way too big, and should not be in px but in rem. 1440px equals to 90 rem, but around 20rem should be all you need.
- Remove width: min-content.
- Font-size . Use rem instead.
- Remove the fixed width and height on the image. You rarely want to set fixed dimensions, as this easily creates issues with responsiveness.
Do add display: block and max-width: 100% on the image. The max-width prevents the image from overflowing the card.
```



### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources


## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
