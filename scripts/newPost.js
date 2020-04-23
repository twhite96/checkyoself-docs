#!/usr/bin/env node

const fs = require('fs');
const slugify = require('slug');
const dateFns = require('date-fns');

const title = process.argv[2];

if (!title) {
 throw 'a title is required!';
}
const slug = slugify(title.toLowerCase());
const date = dateFns.format(new Date(), "yyyy-MM-dd");
const dir = `./blog/${date}-${slug}`;

if (!dir) {
  throw 'this directory does not exist!';
}

fs.writeFileSync(
  `${dir}.md`,
 `---
title: "${title}"
author: Tiffany White
authorURL: http://twitter.com/tiffanywhitedev
authorImageURL: https://res.cloudinary.com/twhiteblog/image/upload/v1578436739/twhiteblog-avi.png
---`,
 function(err) {
 if (err) {
 return console.log(err)
 }
 console.log(`${title} was created!`)
 },
);
