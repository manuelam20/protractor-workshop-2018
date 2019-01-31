import { $, ElementFinder } from 'protractor';
import { ProductAddedModalPage } from './product-added-modal.page';

export class ProductListPage{
  private inStockbutton: ElementFinder;
  private addToCartButton: ElementFinder;

  constructor () {
    this.inStockbutton = $('#center_column > ul > li > div > div.right-block > span > span');
    this.addToCartButton = $('.ajax_add_to_cart_button');
  }

  public async viewTheStock(): Promise<ProductListPage> {
    await this.inStockbutton.click();
    return this;
  }

  public async addTshirtToCart(): Promise<ProductAddedModalPage> {
    await this.addToCartButton.click();
    return new ProductAddedModalPage();
  }
}
