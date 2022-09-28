const { expect } = require('@playwright/test');
const { Page } = require('./page.js');



const username = ('[id="username"]');
const password = ('[id="password"]');
const submitButton = ('[type="submit"]');
const error_message = ('[id="flash_error"]');
const user_name = ('[href="/users/627340"]');
const pass_recovery = ('[href="/account/lost_password"]');
const recovery_email = ('[id="mail"]');
const recovery_email_data = ('txt2021@ukr.net');
const error_message_rec = ('[id="flash_notice"]');
exports.LoginPage = class LoginPage extends Page{   
    constructor(page) {
        super(page);
        this.page = page;
        }

  
  async enterEmail(testmail) {
    await super.type(username,testmail);
  }

  async enterPassword(pass){
    await super.type(password,pass);
  }

  async clicksubmitButton(){
    await super.click(submitButton);

  }

  async clickrecoveryButton(){
    await super.click(pass_recovery);

  }

  async enterrecoveryEmail(){
    await super.type(recovery_email,recovery_email_data);
  }

  async ismessageVisible(){
    await expect(this.page.locator(error_message)).toBeVisible();
  }

  async ismessageVisible_recovery(){
    await expect(this.page.locator(error_message_rec)).toBeVisible();
  }

  async usernameVisible(){
    await expect(this.page.locator(user_name)).toBeVisible();
  }


}