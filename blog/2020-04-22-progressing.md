---
title: "Progressing"
author: Tiffany White
authorURL: http://twitter.com/tiffanywhitedev
authorImageURL: https://res.cloudinary.com/twhiteblog/image/upload/v1578436739/twhiteblog-avi.png
---

After many failed attempts at understanding core React concepts to help me complete Check Yo Self, I have found a pattern that will work, the pattern that will work best.

I [wrote about it early last year](/blog/2019/03/10/text-component-issue-number-one-solved):

> But then, after looking over the writeGood component, I realized that, I could basically just pass that function as a prop to the SimpleMDE component...

This is the correct pattern. The `render prop` pattern will allow me to render the data from `writeGood` *inside* of the `SimpleMDE` editor.

My thinking was as such:

![](/static/img/component_tree.svg)

What I didn't realize was that *a pattern existed specifically for this*. I also didn't know *how* this pattern worked.

## Searching the docs

I searched and researched and read over the React docs but I it *still* didn't make as much sense as it needed to for me to continue.

Then I came across [an *excellent* article](https://tylermcginnis.com/react-render-props/) by [Tyler McGinnis](https://twitter.com/tylermcginnis), *React Render Props*.

I've read this article four times and am currently getting to a place where I feel I can work this stuff out, finally.

You can have a look on Codesandbox.

:::danger
**Note**: this code is *extremely broken*.
:::

<iframe
     src="https://codesandbox.io/embed/7m427yrqxj?fontsize=18&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FText.js&theme=dark&view=editor"
     style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
     title="checkyoself"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
 