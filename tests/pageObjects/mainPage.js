const { expect } = require('@playwright/test');
const { Page } = require('./page.js');



const search_field = ('[id="q"]');
const search_data = ('testing');
const error_message = ('h3');
exports.MainPage = class MainPage extends Page{   
    constructor(page) {
        super(page);
        this.page = page;
        }

  
  async enterSearch() {
    await super.type(search_field,search_data);
  }

  async clicksubmitButton(){
    await this.page.keyboard.press('Enter');

  }

  async ismessageVisible(){
    await expect(this.page.locator(error_message)).toBeVisible();
  }



}