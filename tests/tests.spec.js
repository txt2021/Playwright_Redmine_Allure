const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pageObjects/loginPage');
const { SignUpPage } = require('./pageObjects/signupPage');
const { MainPage } = require('./pageObjects/mainPage');

const testmail = 'testuser';
const testmail_valid = 'txt2021';
const pass = 'testpassword';
const pass_valid = 'testpass';



test('TC-01: Should sign in to Redmine with valid credentials', async ({ page }) => {
  const loginpage = new LoginPage(page);
  
  await page.goto('https://www.redmine.org/login');

 
  await loginpage.enterEmail(testmail_valid);
  await loginpage.enterPassword(pass_valid);

  await loginpage.clicksubmitButton();
  
  await loginpage.usernameVisible;
});

test('TC-02: Should sign in to Redmine with invalid credentials', async ({ page }) => {
  const loginpage = new LoginPage(page);
  await page.goto('https://www.redmine.org/login');

 
  await loginpage.enterEmail(testmail);
  await loginpage.enterPassword(pass);

  await loginpage.clicksubmitButton();
  
  await expect(page).toHaveURL(/.*login/);
  await loginpage.ismessageVisible();
});

test('TC-03: Should sign up to Redmine with an already existing username', async ({ page }) => {
  const signuppage = new SignUpPage(page);
  await page.goto('https://www.redmine.org/account/register');

 
  await signuppage.enterUsername();
  await signuppage.enterPassword();
  await signuppage.confirmPassword();
  await signuppage.enterFirstname();
  await signuppage.enterLastname();
  await signuppage.enterEmail();
  await signuppage.enterEmail();
  await signuppage.enterNick();
  await signuppage.clicksubmitButton();

  await expect(page).toHaveURL(/.*register/);
  await signuppage.ismessageVisible();
});

test('TC-04: Should find the requested information using Redmine search', async ({ page }) => {
  const mainpage = new MainPage(page);
  await page.goto('https://www.redmine.org/');

 
  await mainpage.enterSearch();

  await mainpage.clicksubmitButton();
  
  await expect(page).toHaveURL(/.*=testing/);
  await mainpage.ismessageVisible();
});

test('TC-05: Should check user password recovery on Redmine', async ({ page }) => {
  const loginpage = new LoginPage(page);
  await page.goto('https://www.redmine.org/login');

 
  await loginpage.clickrecoveryButton();
  
  await loginpage.enterrecoveryEmail();

  await loginpage.clicksubmitButton();
  
  await expect(page).toHaveURL(/.*login/);
  await loginpage.ismessageVisible_recovery();
});