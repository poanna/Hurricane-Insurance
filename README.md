# Welcome to Sure!

Hi! I'm your first foray into automation as a Quality Engineer here at **Sure**! You'll remember [this project](https://www.notion.so/sure/Sure-QA-Technical-Challenge-8ac9b18e1f7b4317ba104968e60c8d91) from your take home test that got you here in the first place! Now's the time to automate some (or all) of your work.

If this is your first time working with Cypress, it's the automation tool we use at **Sure**. Both our front-end developers ("fronters") and we in the QA department use it, albeit in slightly different ways: The important difference for you to know is that we in QA use Cypress to mimic an end-user. For this we conduct end-to-end tests (e.g. without [stubbing API calls](https://docs.cypress.io/api/commands/stub)) by clicking and typing around the web app.

# Cypress

[Cypress](https://www.cypress.io/) is a powerful automation tool that works slightly different than normal javascript/typescript: **Cypress commands** (e.g. `cy.wait()`) **are queued** which means some common javascript syntax will not work properly. For example, in order to assign a selector's inner text to a variable you will need to utilize a syntax similar to the following:

```
cy.get([data-testid="element"].then((foo) => {
	const bar = foo.text();
});
```

Then, `bar` will only be available within the `.then()` block. It'll take a bit of time to get used to, but once you get the hang of it it'll be second nature. [Aliasing](https://docs.cypress.io/guides/core-concepts/variables-and-aliases#Closures) is another way to go about this, which you'll soon come to understand as well.

Additionally our web applications utilize a `data-testid` attribute on most elements. This is an easy way to get at elements you'll need to interact with without having to navigate via `<divs>` or such the like.

Ultimately, be sure to check out the cypress examples listed in the `1-getting-started` and `2-advanced-examples` under `cypress` -> `integrations` to learn more, and check out [Cypress's docs hub](https://docs.cypress.io/api/table-of-contents).

### Files & Folder Structure

We utilize a [Page Object Model](https://www.toolsqa.com/cypress/page-object-pattern-in-cypress/) to manage the selectors on a given page of a given web app. You can find these under `cypress` -> `support` folder. They are broken down by product and then further broken down by page. Automations ("specs") are kept in the `integrations` folder, again along product lines. You can find how page objects and specs are integrated in the `smokeTest.spec.js` file under `3-takehome` folder. Data (`.json` files, files to be uploaded, etc...) are housed in the `fixtures` folder. Check out [this Notion page](https://www.notion.so/sure/File-Structure-Organization-146629eb77374b8aa43cee1e7aae52f6) for a in depth explanation.

## Automation Task

After you've cloned the repository to your local machine, next you'll need to create a personal branch for you to work in. We organize our spec files to follow gherkin principles of **Given, When, Then** using `describe()`, `context()`, and `it()` as seen in the `smokeTest.spec.js` file.

To understand this a bit better, install the [CodeTour](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.codetour) extension, and follow the guide inside VSCode!

Your task with this repository is to create more automations that test different parts of the take home test website. As a good starting point, taking a look at the [PRDs](https://www.notion.so/sure/Hurricane-Insurance-PRD-fd391ae8337a46d9b8d4474281c8b91e) again will give you a good guideline as to the areas we want to automate the testing on our web apps.

## Running tests

As we have a single repository for all specs across all products, we utilize environment files to set `baseUrl`'s, among other variables, for products. `baseUrl`'s are utilized in the `cy.visit('/')` command where `('/')` targets the base url (rather than needing to set a url (e.g. `https://google.com`) in the `cy.visit()` command. These environment files are seen in the top level directory, and in the case of this take home, the file is `cypress.takehome.json`. To initialize the takehome environment to utilize the baseUrl and execute the tests successfully, in the terminal you'll need to run `yarn run cy:open-takehome` to open cypress using the correct environment or `yarn run cy:run-takehome` to run the tests in the terminal.

## Github

After you've completed your tests, please push the to the `qa-takehome-automation` repository on github for review!

# Closing

We're so happy to have you here at **Sure**! Feel free to reach out for any questions you may have. Jane and Whitney are the primary points of contact for QA automation, but we're all here to help and collaborate for the betterment of everyone.

# Addendum

If you need help with [git commands](https://www.edureka.co/blog/git-commands-with-example/) (e.g. creating a branch, adding files to the branch, committing changes, and pushing to the repository) or [navigating github](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners) take a look at the relevant hyperlins, otherwise feel free to reach out! Or try to flex your google-fu!
