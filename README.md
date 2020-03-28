# 👣 Footsteps Extension
A search 🔎engine for community-made 🧑‍🤝‍🧑learning resources for the 21st-century learner.👨‍💻👩‍💻Learn by following the footsteps (resources) of experts or make your own, giving others the right advice/resources to learn. This chrome extension let's you track your learning footsteps and also inspire others to follow them.

This app complements [footsteps-app](https://github.com/fnplus/footsteps-app) . The browser extension for Footsteps App helps you to quickly save your learning footsteps with a click of a button.

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Ffnplus%2Fproject-footsteps-chrome.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Ffnplus%2Fproject-footsteps-chrome?ref=badge_shield)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d4e157de374b4db4a5277592bd6f4d7e)](https://www.codacy.com/manual/fnplus/footsteps-extension?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=fnplus/footsteps-extension&amp;utm_campaign=Badge_Grade)
[![CodeFactor](https://www.codefactor.io/repository/github/fnplus/footsteps-extension/badge)](https://www.codefactor.io/repository/github/fnplus/footsteps-extension)

## 🤷 About
We envisioned the project to solve the problems faced by 21st-century learners. A modern learner finds a flood of resources from Google Search but doesn't always find the right resources since it's the website with the best SEO (search engine optimisation) that wins. There are so many free resources available on the internet made by experts in their field and yet we pay for outdated courses promoted by big companies and universities.

With Footsteps [app](https://github.com/fnplus/footsteps-app) & [browser extension](https://github.com/fnplus/footsteps-extension), we take a mentor/subject knowledge expert first approach to solve the problem. The domain experts save their learning journey with our app and browser extension & make it available for everyone else to follow. Every resource is called a 'footstep' (added in a chronological manner) and a collection of footsteps makes up a learning path. The learner can "fork" the learning path made by the expert and keep a track of his progress. The app suggests resources & keeps an updated list with users upvotes & collaborative filtering.

## 🧐 The Need (as seen on the web)

Here are few examples of why we came up with footsteps:

[**Reddit thread - "About IBMs Data Science Certification"**](https://www.reddit.com/r/datascience/comments/eleuz9/about_ibms_data_science_certification/)

## ⏪ Prerequisites

* NodeJS (check for it's installation on terminal using npm -v)



## 🚀 Steps to setup development environment
 1. **Install Node v12**
 
    [**Link for Node installation (Latest LTS Version)**](https://nodejs.org/en/download/)


 2. **Clone the repo** 
 ```bash
 git clone github.com/your_username/footsteps-extension.git
 ```

 3. **Install dependencies**
 ```bash
 npm install
 ```
 Or
 ```bash
 yarn install
 ```
 
 4. **To build you code and add the extention to your chrome, run:**
 ```bash
 npm run build
 ```
 Or
 ```bash
 yarn run build
 ```

 5. **Load the `/build` folder in `chrome://extensions/` on chrome (Load unpacked)**

## 🏆 Contributing
Please read [CONTRIBUTING.md](https://github.com/fnplus/footsteps-extension/blob/master/CONTRIBUTING.md) for information on how to contribute to footsteps-extension.

## 💻 Development guidelines

 1. Put all the code in one of the existing files in `/src`. If you add a new file, make a relavent modification to `build.js`.

 2. If you want to modularize the code, use the `/src/lib` folder. Put all the modules there and `require()` them from `/src`. This will not need any modification to the `build.js` file.

 3. Push all the code to your own branch. Once you are sure its working, merge it with `dev` branch. Let's maintain only the stable and released versions on the `master` branch.

 4. Write kick-ass, readable and clean code.

 5. Please follow the PR Template to create the PR.

 6. Please read our [Code of Conduct](https://github.com/fnplus/footsteps-extension/blob/master/CODE_OF_CONDUCT.md)

## 👨 Owner

[Abhishek Uniyal](https://github.com/xlogix)

## 👬 Mentors

[Abhishek Uniyal](https://github.com/xlogix) 

[Arjun Mahishi](https://github.com/arjunmahishi) 

## 📜 License
Licensed under the [GPL v3 License](./LICENSE).

## ❤️ Thanks
