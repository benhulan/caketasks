# CakeTasks

This is the source code for CakeTasks, Alpha Version 0.a.1

[CakeTasks](http://caketasks.com) is being built with [Electron](http://electron.atom.io/) and [ReactJS](https://facebook.github.io/react/)

## Public Alpha
This application is in development. This is the Alpha prototype which will be used in user testing, specifically to gather design ideas and usability data around the main feature, which will be a visualization of prioritized tasks.

For more information, sign up on our [landing page](http://caketasks.com/), and follow our [blog](http://caketasks.com/caketasks/blog)

## Operation:
The UI consists of the header, Toolbar on the left, and the main task list area.

In the Header, you can type letters in the search box to quickly filter the task list
`Sort by:`  allows you to choose TaskName, DueDate, Subject, Effort and Notes, which you may sort in Ascending (A-Z / 0-9) or Descending (Z-A / 9-0) order
Tap `New Task` and fill in the form to create a new task
Mouse over your tasks in the main task list and you will see a small action menu
- The green checkbox allows you to track completion of a task without deleting it from your view
- The blue edit icon allows you to update the text, but currently only works for the most recently created `New Task`

### Known issues as of February 16, 2017
- `Import` and `Tell a Friend` pages have not been implemented -- they currently invoke the `About` page.
- ABC order does not properly alphebetize uppercase with lowercase text.
- `Sort by: DueDate` does not sort with consideration for `DueTime`
- `Edit task` form should be pre-populated with values from the selected task.
- `Edit task` feature currently only works on the most recent task you create.

## Installation:

### To run the code
- download this repository `git clone https://github.com/benhulan/caketasks.git`
- `cd` into the `caketasks` directory
- `npm-install` dependencies (may require additional system configuration)
- `gulp`
- If you want to restore the original 4 tasks
  - copy the contents from `caketasks/data/data_backup.json`
  - paste over the contents of `caketasks/data/data.json`
  - restart the app

### To install CakeTasks as an Application on a Mac
- [Download the app here!](https://www.dropbox.com/sh/vh0rgca3frs5ld0/AADXKAduuJCbxM5xr8eLv2Sla?dl=0)

OR

- download this repository
- `cd` into the project directory
- `electron-packager . 'CakeTasks' --out ~/Desktop --overwrite --icon ./icons/icon`

This will build the application package. The `CakeTasks-darwin-x64` project directory contains the application as well as license information. Feel free to drag the app image from `~/Desktop/CakeTasks-darwin-x64/CakeTasks` into your Applications folder and run it like all your other apps!

### Not on a Mac?
- download this repository, navigate to the project directory and try something like
- `electron-packager . 'CakeTasks' --all`

You may need `wine` or other dependencies. CakeTasks has only been tested on a Mac at this point.