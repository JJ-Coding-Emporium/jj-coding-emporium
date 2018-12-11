[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# jj-coding-emporium

The source code for our coding blog, written by devs, for devs.

If you want to contribute, make a PR under content/posts and if we like it we'll publish it :)

The source code for the actual live site lives here, built by [hugo](https://gohugo.io/): https://github.com/JJ-Coding-Emporium/jj-coding-emporium.github.io.


# Testing Locally

Changes can be tested locally by using `hugo server -D` (-D to include draft posts) to start the server, and then navigating to http://localhost:1313.


# Building/deploying to Production

Run `./scripts/deploy.sh <commit msg>`. Note that this script must be run on the `master` branch.
