import { $, ElementFinder, browser } from 'protractor';
import { OrderSummaryPage } from './order-summary.page';
import { protractor } from 'protractor/built/ptor';

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
