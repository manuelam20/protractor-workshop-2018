import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private agreeCheckbox: ElementFinder;
  private proceedCheckoutButton: ElementFinder;

  constructor () {
    this.agreeCheckbox = $('#cgv');
    this.proceedCheckoutButton = $('#form > p > button > span');
  }

  public async shippingPageForm(): Promise<void> {
    await this.agreeCheckbox.click();
    await this.proceedCheckoutButton.click();
  }
}
