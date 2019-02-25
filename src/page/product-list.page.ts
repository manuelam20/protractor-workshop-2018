import { $, ElementFinder, ElementArrayFinder, $$, browser, protractor } from 'protractor';
import { ProductAddedModalPage } from './product-added-modal.page';

export class ProductListPage{
  private inStockbutton: ElementFinder;
  private addToCartButton: ElementFinder;
  private products: ElementArrayFinder;

  constructor () {
    this.inStockbutton = $('.available-now');
    this.addToCartButton = $('#add_to_cart');
    this.products = $$('.product-container');
  }

  public async viewTheStock(): Promise<ProductListPage> {
    await this.inStockbutton.click();
    return this;
  }

  public async addTshirtToCart(): Promise<ProductAddedModalPage> {
    const EC = protractor.ExpectedConditions;
    await browser.wait(EC.elementToBeClickable(this.addToCartButton), 3000);
    await this.addToCartButton.click();
    return new ProductAddedModalPage();
  }

  /*private findByProduct (productName : string) : ElementFinder {
    return this.products
    .filter((item: ElementFinder) =>
      item
      .$('.product-name')
      .getText()
      .then((text: string) => text.includes(productName)))
    .first();
  }*/

  private findByProduct (productName : string) : ElementFinder {
    return this.products.filter((item: ElementFinder) => {
      return item.$('.product-name')
        .getText().then((text: string) =>
           text === productName
        );
    }).first();
  }

  public async selectProduct(productName: string): Promise<void> {
    const product = await this.findByProduct(productName);
    await browser.actions().mouseMove(product.$('img')).perform();
    await product.$('.ajax_add_to_cart_button.btn.btn-default').click();
  }
}
