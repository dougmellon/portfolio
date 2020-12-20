---
title: Creating and deploying a Node.js Rest API
description: A tutorial on building a Node API using MongoDB and deploying to DigitalOcean.
date: 2020-12-20
path: /node-mongodb-digitalocean-tutorial
featuredImage: ./images/node_mongo_digitalocean.jpg
featuredImageAlt: "Dark abstract shapes"
tags: ["programming"]
author: Doug Mellon
---
* Please note that this tutorial is still in development.
## A brief look into the history of Node
Node.js, created by Ryan Dahl in 2009, is a response to what he considered limited capabilities with Apache HTTP Servers handling of concurrent connections. The project, which combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API, was unveiled during the 2009 European JSConf. The following year, Isaac Schlueter, now the Principal Engineer at GitHub, introduced the NPM package manager - the largest software registry in the world having added its one-millionth package in 2019.

So what is Node.js? Well, technically, it allows for event-driven and scalable web servers in Javascript, without threading, by relying on callbacks to complete a required task. Less verbose, it allows you to run Javascript as a general-purpose programming language where it was once only used in the browser.

With Node.js, we can now use Javascript to develop command-line interfaces, backend services that connect to databases, and more.
## Installing Node
#### Installing Node on a Mac
Open up your Mac terminal and enter the following command:
```console
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Next update your system by entering the following:
```console
brew update
```

Finally, install Node.js:
```console
brew install node
```
To ensure that it is correctly installed, check the version by entering the following into terminal:
```console
node -v
```
This should produce a version number. If there is an error, you can visit the official Node documentation [here](https://nodejs.org/en/docs/). Here

You should also check to ensure that you have NPM installed by checking its version as well:
```console
npm -v
```

#### Installing Node on Debian and Ubuntu based Linux distributions
Open up your Linux terminal and complete a quick update:
```console
sudo apt update
```
Install Node using the apt package manager:
```console
sudo apt install nodejs
```
Additionally, install the NPM package manager:
```console
sudo apt install npm
```
Verify the verson to ensure it is installed:
```console
nodejs -v
```
#### Installing Node on Arch distributions
Node and NPM are both available in the community repository:
```console
pacman -S nodejs npm
```

#### Installing Node on CentOS (RIP), Fedora and Red Hat Enterprise Linux
Node is currently available as a module. To install, check to see which major version of Node is available:
```console
dnf module list nodejs
```
Then enter the following in your terminal - replacing VERSION_NUMBER with the major version from the above step:
```console
dnf module install nodejs:VERSION_NUMBER
```

#### Installing Node on Windows systems
Download the official [Windows installer](https://nodejs.org/en/#home-downloadhead) directly from the Node website.

## Building our first Node server