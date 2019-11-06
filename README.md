# Footsteps
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Ffnplus%2Fproject-footsteps-chrome.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Ffnplus%2Fproject-footsteps-chrome?ref=badge_shield)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d4e157de374b4db4a5277592bd6f4d7e)](https://www.codacy.com/manual/fnplus/footsteps-extension?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=fnplus/footsteps-extension&amp;utm_campaign=Badge_Grade)

The chrome extension that let's you track your learning footsteps and also inspire others to follow them

### Steps to setup development environment

- Install node, yarn/npm
- Clone the repo 
    ```bash
    git clone git@github.com:fnplus/footsteps.git
    ```

- Install dependencies
    ```bash
    npm install
    ```
    or 
    ```bash
    yarn
    ```
- To build you code and add the extention to your chrome, run:
    ```bash
    yarn run build
    ```
    or
    ```bash
    npm run build
    ```
    and load the `/build` folder in `chrome://extensions/` on chrome (Load unpacked)

### Developing guidelines

- Put all the code in one of the existing files in `/src`. If you add a new file, make a relavent modification to `build.js`
- If you want to modularize the code, use the `/src/lib` folder. Put all the modules there and `require()` them from `/src`. This will not need any modification to the `build.js` file.
- Push all the code to your own branch. Once you are sure its working, merge it with `dev` branch. Let's maintain only the stable and released versions on the `master` branch.
- Write kick-ass, readable and clean code.

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Ffnplus%2Fproject-footsteps-chrome.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Ffnplus%2Fproject-footsteps-chrome?ref=badge_large)
