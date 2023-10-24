import { PageManager } from '../../core/page-objects/page-manager';
import {test} from '@playwright/test'


test.beforeEach(async ({page})=>{
    const pageManager = new PageManager(page);
    
    await pageManager.loginPage().openSauceDemo();
})

test('Purchasing one item from All items page', async ({page}) =>{
    const pageManager = new PageManager(page);
    
    await pageManager.loginPage().loginToThePageUsingStandardUserCredentials();
    await pageManager.allItemsPage().addSauceLabsBackPackToTheCart();
    await pageManager.allItemsPage().openCart();
    await pageManager.cartPage().validateThatCartPageIsOpened();
    await pageManager.cartPage().validateThatItemIsAddedToCart('Sauce Labs Backpack')
    await pageManager.cartPage().clickCheckoutButton();
    await pageManager.checkoutFormPage().fillOutCheckoutForm();
    await pageManager.checkoutFormPage().clickContinueButton();
    await pageManager.checkoutOverviewPage().clickFinishButton();
    await pageManager.checkoutCompletePage().clickBackHomeButton();
    await pageManager.navigationMenu().logOutFromPage();
})