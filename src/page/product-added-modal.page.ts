import { $, ElementFinder } from 'protractor';
import { OrderSummaryPage } from './order-summary.page';

export class ProductAddedModalPage{
  private proceedToCheckOutButton: ElementFinder;

  constructor () {
    this.proceedToCheckOutButton = $('[style*="display: block;"] .button-container > a');
  }

  public async proceedToCheckOut(): Promise<OrderSummaryPage> {
    await this.proceedToCheckOutButton.click();
    return new OrderSummaryPage();
  }

}
