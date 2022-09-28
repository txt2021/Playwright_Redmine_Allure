const { expect } = require('@playwright/test');
const { Page } = require('./page.js');


const username = ('[id="user_login"]');
const password = ('[id="user_password"]');
const pass_confirm= ('[id="user_password_confirmation"]');
const user_firstname = ('[id="user_firstname"]');
const user_lastname = ('[id="user_lastname"]');
const user_email = ('[id="user_mail"]');
const user_nick = ('[id="user_custom_field_values_3"]');
const submit_button = ('[type="submit"]');

const test_name = 'txt2021';
const test_pass = 'testpassword';
const test_firstname = 'testname';
const test_surname = 'testsurname';
const test_email = 'testmail@gmail.com';
const test_nick = 'tester';

const error_message = ('[id="errorExplanation"]');
exports.SignUpPage = class SignUpPage extends Page{   
    constructor(page) {
        super(page);
        this.page = page;
        }

  
  async enterUsername() {
    await super.type(username,test_name);
  }

  async enterPassword(){
    await super.type(pass_confirm,test_pass);
  }

  async confirmPassword(){
    await super.type(password,test_pass);
  }

  async enterFirstname(){
    await super.type(user_firstname,test_firstname);
  }

  async enterLastname(){
    await super.type(user_lastname,test_surname);
  }

  async enterEmail(){
    await super.type(user_email,test_email);
  }

  async enterNick(){
    await super.type(user_nick,test_nick);
  }

  async clicksubmitButton(){
    await super.click(submit_button);

  }

  async ismessageVisible(){
    await expect(this.page.locator(error_message)).toBeVisible();
  }


}