# My Personal Automation Scripts Collection

This repository is a collection of my personal automation scripts, designed to make everyday tasks more efficient and convenient. These scripts are written in various languages, depending on the task and requirements.

In this collection, you'll find scripts for various purposes, such as integrating with external services, automating repetitive tasks, and more. Feel free to explore, use, and modify the scripts as per your requirements.

# Table of Contents

- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
    - [Add article To Read in Feedly](#add-article-to-read-in-feedly)
- [Contributing](#contributing)
- [License](#license)

# Getting Started

To use these scripts, you'll need to clone this repository to your local machine.

```bash
git clone https://github.com/yourusername/automation-scripts.git
cd automation-scripts
```

# Prerequisites
- If you want to use feedly scripts, please generate a [Feedly developer access token](https://developer.feedly.com/v3/developer/).

# Available Scripts

## 1. Add article to read later in Feedly 

### Location

`feedly/add-article-to-read-from-clipboard.mjs`

### Summary
The script will automatically fetch the URL from your clipboard and add it to your Feedly "To read later" board.
To use this script, follow these steps:

### How to run

1. Ensure that you have Node.js installed on your machine. 
2. Install the required dependencies:

```bash
npm install
```
3. Get you feedly board ID using [Boards API](https://developer.feedly.com/v3/boards/). Select one you want to.
4. To add a URL to your Feedly "To read later" board, copy the URL to your clipboard, and then run the script (the best way is to
use macro and invoke this script using keyboard shortcut):

```
node feedly/add-article-to-read-from-clipboard.mjs <FEEDLY_ACCESS_TOKEN> <BOARD_ID>
```


# Contributing
If you'd like to contribute to this project, please feel free to reach me. I'd love to hear your ideas and suggestions and
work with you to make this collection better.

# License
This project is licensed under the MIT License. See the LICENSE file for details.
