import { browser } from 'protractor';
import { MenuContentPage } from '../src/page';
import { ProductListPage } from '../src/page/product-list.page';
import { ProductAddedModalPage } from '../src/page/product-added-modal.page';
import { OrderSummaryPage } from '../src/page/order-summary.page';
import { SigInPage } from '../src/page/sign-in-step.page';
import { AddressStepPage } from '../src/page/address-step.page';
import { ShippingStepPage } from '../src/page/shipping-step.page';
import { PaymentPage } from '../src/page/payment-step.page';
import { BankPaymentPage } from '../src/page/bank-payment.page';

describe('Given I open a purchase page', () => {
  beforeAll(async () => {
    await browser.get('http://automationpractice.com/');
  });
  describe('When I want to buy a T-shirt and added to the cart', () => {
    beforeAll(async () => {
      const menuContentPage: MenuContentPage = new MenuContentPage();
      const productListPage: ProductListPage = new ProductListPage();
      const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
      await menuContentPage.goToTShirtMenu();
      const productAddedModalPage: ProductAddedModalPage = (await
      (await productListPage.viewTheStock()).addTshirtToCart());
      await(browser.sleep(3000));
      await productAddedModalPage.proceedToCheckOut();
      await(browser.sleep(3000));
      await orderSummaryPage.proceedToCheckoutClick();
      await(browser.sleep(3000));
    });
    describe('And I need to log in to the app', () => {
      beforeAll(async () => {
        const signInPage: SigInPage = new SigInPage();
        await signInPage.signInForm('aperdomobo@gmail.com', 'WorkshopProtractor');
        await(browser.sleep(3000));
      });
      describe('And I need to select the default address', () => {
        beforeAll(async () => {
          const addressPage: AddressStepPage = new AddressStepPage();
          const shippingPage: ShippingStepPage = new ShippingStepPage();
          await addressPage.proceedToCheckOutClick();
          await(browser.sleep(3000));
          await shippingPage.shippingPageForm();
          await(browser.sleep(3000));
        });
        it('then I should pay and bought the T-shirt', () => {
          beforeAll(async() => {
            const paymentPage: PaymentPage = new PaymentPage();
            const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
            await paymentPage.payBankWireSelection();
            await(browser.sleep(3000));
            await bankPaymentPage.confirmOrderClcik();
            await(browser.sleep(3000));
            await expect(bankPaymentPage.getOrderText())
            .toBe('Your order on My Store is complete.');
          });
        });
      });
    });
  });
});
