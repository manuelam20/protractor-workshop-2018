import { $, ElementFinder } from 'protractor';

export class SigInPage{
  private emailAddressTextField: ElementFinder;
  private passwordTextField: ElementFinder;
  private signInButton: ElementFinder;

  constructor() {
    this.emailAddressTextField = $('#email');
    this.passwordTextField =  $('#passwd');
    this.signInButton =  $('#SubmitLogin > span');
  }

  public async signInForm(emailAddress: string, passwd: string): Promise<void> {
    await this.emailAddressTextField.sendKeys(emailAddress);
    await this.passwordTextField.sendKeys(passwd);
    await this.signInButton.click();
  }

}
