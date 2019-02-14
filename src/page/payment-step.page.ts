import { $, ElementFinder } from 'protractor';

export class PaymentPage {
  private payByBankWireButton: ElementFinder;

  constructor () {
    this.payByBankWireButton = $('a[title="Pay by bank wire"]');
  }

  public async payBankWireSelection(): Promise<void> {
    await this.payByBankWireButton.click();
  }
}
