import { $, ElementFinder, browser, protractor } from 'protractor';
import { OrderSummaryPage } from './order-summary.page';

export class ProductAddedModalPage{
  private proceedToCheckOutButton: ElementFinder;

  constructor () {
    this.proceedToCheckOutButton = $('a[title="Proceed to checkout"]');
  }

  public async proceedToCheckOut(): Promise<OrderSummaryPage> {
    const EC = protractor.ExpectedConditions;
    await browser.wait(EC.elementToBeClickable(this.proceedToCheckOutButton), 3000);
    await this.proceedToCheckOutButton.click();
    return new OrderSummaryPage();
  }

}
