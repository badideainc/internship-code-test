# Waffle Studio Summer Internship 2026 Code Test

Congratulations on advancing to the next stage of our application process! We
would like to invite you to undertake our code test which is outlined as a
small project brief below. We look forward to your submission and hope that you
find some joy and satisfaction in what you make.

The deadline for your submission will have been sent to you by the
Hiring Manager.

**Quick Links:**

- [Project brief](#project-brief)
- [Submission](#submission)
- [Getting Started](#getting-started)
- [Use of AI](#use-of-ai)
- [Questions](#questions)

## Project brief

We have begun implementing the game of
[Tic-tac-toe](https://en.wikipedia.org/wiki/Tic-tac-toe) in the accompanying
HTML, CSS and JS files. In fact, it is _mostly_ functional already.
Broadly speaking, your task is to finish implementing the game such that it can
(at the very least) be played solo against a computer.

Going into more detail, there are three parts to this code test we would like
you to address. Please ensure you address all of them.

### Part 1: Identify and fix bugs

In it’s current state there are <strong>three</strong> bugs that will need to
be addressed for every part of the game to properly work. Your first task is to
find and fix those bugs.

> **Hint:**
> There is an error that will occasionally occur after making a move, in the
> browser console, the error reads:
>
> ```
> main.js:80 Uncaught TypeError: Cannot set properties of undefined (setting 'textContent')
> 	at simulateComputerTurn (main.js:80:30)
> 	at HTMLButtonElement.handleCellClick (main.js:111:3)
> ```

### Part 2: Complete the game loop

The `checkWinner` function has intentionally been left for you to implement.
This function will need to call `setWinner` to finish the game. There may be
additional functionality required too.

### Part 3: Improve the player experience

The game currently has barely any styling at all and makes for quite a "dull"
player experience, even by Tic-tac-toe standards!

For this final part, we would you like you to spend some time improving the
player experience. This is intentionally open-ended and is your opportunity to
showcase your own creativity and taste. You can spend as little or as much time
on this as you'd like.

## Submission

- Partial or full completion of your game is to be submitted no later than the deadline
- The full source code of your submission must be [made publicly available on Github](https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories) for us to review
- Submit your project by sending a public Github link to your project in an email to [jobs@waffle.dev](mailto:jobs@waffle.dev?subject=Summer%20Internship%20%20Code%20Test%20Submission) with the subject line: "Summer Internship Code Test Submission".
- Tip: check that the link to your Github repo is publicly viewable by opening the link in an incognito browser _before_ sending it to us.

## Getting started

To get started we recommend either [cloning](https://github.com/studiowaffle/code-test), [forking](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo), or simply [downloading
the zip file](https://docs.github.com/en/repositories/working-with-files/using-files/downloading-source-code-archives#downloading-source-code-archives-from-the-repository-view) of this repository.

The project is pure HTML, CSS and Javascript, so you should be able to just open
the root `index.html` with your preferred browser to see the project in action.

With this approach you will need to refresh the page in the browser for any
changes to your code to be reflected.

For a more convenient development experience where the browser automatically
keeps in sync with your code changes, we recommend using the
web server library we’ve added to this project.

To take advantage of that, you will need to have installed NodeJS on your system. Instructions for installing Node can be found here: https://nodejs.org/en/download

Once Node is installed, open a terminal in the root of the project folder:

- **Windows:** Right-click the project folder in File Explorer and select "Open in Terminal" (or search for "Command Prompt" / "PowerShell" in the Start menu, then use `cd` to navigate to the folder)
- **macOS:** Right-click the project folder in Finder, select "New Terminal at Folder" (or open Terminal from Applications > Utilities and use `cd` to navigate)
- **Linux:** Right-click the project folder in your file manager and look for "Open Terminal Here", or open a terminal and use `cd` to navigate

Then run the following two commands — the first installs the project's dependencies (you only need to do this once), and the second starts the development server:

```
npm install
npm start
```

After running `npm start`, you should see a message in the terminal with a local address such as `http://localhost:3000`. Your browser may open automatically. If not, copy that address and paste it into your browser.

Any changes you save to the HTML, CSS or JS files will now be reflected in the browser automatically — no manual refresh needed.

## Use of AI

We are not averse to you using AI to help complete this code test but please
keep the following in mind:

- The purpose of this code test is to get a feel for _your_ programming abilities,
  _your_ creative abilities, and _your_ approach to work.
- We do not want to see a complete rewrite of this project, you should aim to
  extend and improve the existing codebase, not replace it.
- If you successfully move forward to the next stage of the application process,
  you will be asked about the game program you wrote. If you are unable to
  demonstrate understanding of the code that was written, it will obviously
  reflect poorly on your application as a whole.
- Finally, but perhaps most importantly, one of our core studio values is
  **honesty**. If you decide to use AI to assist in this code test, we would
  like you to tell us in detail how you have used it and for what you have used
  it for. This can be done in code comments or written in the submission email
  you send.

To clarify once more, we are not averse to using AI, we use it ourselves too.
Being open about it is important to us however.

## Questions

If you have any questions about the project, please don’t hesitate to send
an email to the Hiring Manager or to jobs@waffle.dev, and we will aim to get
back to you as soon as possible.
