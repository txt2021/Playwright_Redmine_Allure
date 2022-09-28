const { expect } = require('@playwright/test');

/*exports.Page = class Page {


  async click(locator) {
    await locator.click();
  }

  async type(locator1,text){
    await page.locator(locator1).type(text);
  }
}*/
class Page {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
      this.page = page;
        }
  
    async getElement(locator) {
            return await this.page.locator(locator);
        }
     
    async click(locator) {
             await (await this.getElement(locator)).click();
        }
     
     
    async type(locator, text) {
              await (await this.getElement(locator)).fill(text);
        }

   
  
  
  }
module.exports = { Page };