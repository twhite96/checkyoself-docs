---
title: "Shipping v1, With or Without Grammar Checking"
author: Tiffany White
authorURL: http://twitter.com/tiffanywhitedev
authorImageURL: https://res.cloudinary.com/twhiteblog/image/upload/v1578436739/twhiteblog-avi.png
---

One of the lessons I've had to learn the hard way since becoming a professional dev is that, if you have a feature and it works, but you have a grander vision of your product that isn't finished, *ship your product anyway*.

My job was lost in part because I didn't ship fast enough, though there were other reasons out of my control.

## Thomas Frank and finishing projects

I am a really big fan of [Thomas Frank](https://instagram.com/tomfrankly). I've been watching his YouTube videos for 5 or 6 years now.

This evening I sat down to catch up on his latest and the latest happened to be about finishing projects you start. While watching it, I began to realize, especially with this project, where I have gone wrong, why I haven't shipped anything, and what I plan on doing about it.

<iframe width="100%" height="380" src="https://www.youtube-nocookie.com/embed/Ai8Irb7L_JM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Starting too big without the necessary skills

When I started this project my idea for it was to use jQuery, write-good, Heroku to host it, and Material.css. I was going to store the text in local storage and that would be that. Simple. Effective.

But then I started adding features in my head. I need a database. *Postgres*, I thought. Oh I know very little about SQL databases so I'll use a JavaScript ORM like Sequelize.

Fast-forward a year and only the [UI was built with Material.css templates](https://tiffanywhite.dev/2017/04/25/making-tedious-easy-mdl-templates/) and all I kept hearing about in the JavaScript community was *React*. *React everything you build*. I wanted to learn React. And so I decided to make it a React app, which was a technology I knew *nothing* about.

I was able to buy Wes Bos' excellent [React For Beginners](https://reactforbeginners.com/) with the money I was earning interning. I started that and went halfway through it and decided I knew enough to actually build Check Yo Self.

## Mistakes were made

Turns out, *React is hard*. And I wasn't going to learn it properly in 2 months. I didn't have the proper JavaScript foundations, I didn't understand the technical details, and I hadn't really practiced JavaScript *itself* enough to even remotely try to build this app the way I wanted, with the features I wanted. Thus, it has taken me three years, a bunch of fretting and perfectionitis, to decide that I have a working version. I can ship this. I can add the grammar checker and Firebase firestore at a later date.

I have worked professionally as a dev without being completely ready and that was the best thing to ever happen to me and this project. So, I am shipping this for now.

It works, you can check your spelling. You can preview your markdown. And in the meantime I will be working on getting the grammar checker up and running.

You can find the app at: [Check Yo Self](https://check-yoself.app/).