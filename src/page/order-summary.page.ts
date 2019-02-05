import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage{
  private proceedCheckoutbutton: ElementFinder;

  constructor() {
    this.proceedCheckoutbutton = $('.cart_navigation span');
  }

  public async proceedToCheckoutClick(): Promise<void> {
    await this.proceedCheckoutbutton.click();
  }

}
