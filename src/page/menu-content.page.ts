import { $, ElementFinder } from 'protractor';
import { ProductListPage } from './product-list.page';

export class MenuContentPage {
  private tShirtMenu: ElementFinder;

  constructor () {
    this.tShirtMenu = $('#block_top_menu > ul > li > a[title="T-shirts"]');
  }

  public async goToTShirtMenu(): Promise<ProductListPage> {
    await this.tShirtMenu.click();
    return new ProductListPage();
  }
}
