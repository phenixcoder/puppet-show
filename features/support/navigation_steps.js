const { Given, When, Then, After, Before } = require("cucumber");
const puppeteer = require("puppeteer");
const notifier = require("node-notifier");

Given("User is on {string}", async function(url) {
  console.log(url);
  this.browser = await puppeteer.launch();
  this.page = await this.browser.newPage();
  await this.page.goto(url);
});

When("click on selector {string}", async function(selector) {
  await this.page.click(selector);
});

Then("display text of first {string}", async function(selector) {
  console.log(`[${selector}]`);
  await this.page.waitFor(selector);
  const text = await this.page.$eval(selector, element => {
    return element.innerText;
  });

  console.log(`Output (${typeof text}) [${text}]`);
  return true;
});
Then("Notify text of first {string}", async function(selector) {
  console.log(`[${selector}]`);
  await this.page.waitFor(selector);
  const text = await this.page.$eval(selector, element => {
    return element.innerText;
  });

  // String
  notifier.notify(`Output (${typeof text}) [${text}]`);

  return true;
});
