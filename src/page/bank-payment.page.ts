import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private confirmOrderButton: ElementFinder;
  private orderText: ElementFinder;

  constructor () {
    this.confirmOrderButton = $('#cart_navigation > button > span');
    this.orderText = $('#center_column > div > p > strong');
  }

  public async confirmOrderClcik(): Promise<void> {
    await this.confirmOrderButton.click();
  }

  public async getOrderText(): Promise<string> {
    return await this.orderText.getText();
  }

}
