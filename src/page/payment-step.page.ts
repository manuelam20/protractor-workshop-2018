import { $, ElementFinder } from 'protractor';

export class PaymentPage {
  private payByBankWireButton: ElementFinder;

  constructor () {
    this.payByBankWireButton = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async payBankWireSelection(): Promise<void> {
    await this.payByBankWireButton.click();
  }
}
