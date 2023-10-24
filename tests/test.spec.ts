import { PageManager } from '../core/page-objects/page-manager';
import {test} from '@playwright/test'


test.skip('Test test', async ({page})=>{

    const pageManager = new PageManager(page);

    await pageManager.loginPage().openSauceDemo();

    await pageManager.loginPage().loginToThePageUsingStandardUserCredentials();
    await pageManager.navigationMenu().allItemsPage();
    
    await pageManager.allItemsPage().applyAllFilterOptions();

})


test.skip('Full smoke test', async ({page}) =>{


    const pageManager = new PageManager(page);
    await pageManager.loginPage().openSauceDemo();

    await pageManager.loginPage().loginToThePageUsingStandardUserCredentials();
    await pageManager.allItemsPage().openSauceLabsBackpackItem();
    await pageManager.productItemPage().addSauceLabsBackpackFromProductDetailsPage();
    await pageManager.productItemPage().openCart();
    await pageManager.cartPage().validateThatCartPageIsOpened();
    await pageManager.cartPage().validateThatItemIsAddedToCart('Sauce Labs Backpack')
    await pageManager.cartPage().clickCheckoutButton();
    await pageManager.checkoutFormPage().fillOutCheckoutForm();
    await pageManager.checkoutFormPage().clickContinueButton();
    await pageManager.checkoutOverviewPage().clickFinishButton();
    await pageManager.checkoutCompletePage().clickBackHomeButton();
    await pageManager.navigationMenu().logOutFromPage();
})


test.skip('buttons',async ({page}) => {

    const pageManager = new PageManager(page);
    await pageManager.loginPage().openSauceDemo();

    await pageManager.loginPage().loginToThePageUsingStandardUserCredentials();
    await pageManager.allItemsPage().clickAllAddToCartButtons();
    await pageManager.allItemsPage().checkIfAllButtonsAreClicked();
    await pageManager.allItemsPage().checkIfAllItemsAreAddedOnCartSpan(pageManager.allItemsPage().count)    
    await pageManager.allItemsPage().openCart();
    await pageManager.cartPage().validateAddedItemsToCart(pageManager.allItemsPage().count)

    await pageManager.cartPage().clickCheckoutButton();
    await pageManager.checkoutFormPage().fillOutCheckoutForm();

    await pageManager.checkoutFormPage().clickContinueButton();

    await pageManager.checkoutOverviewPage().clickFinishButton();

    await pageManager.checkoutCompletePage().clickBackHomeButton();

    await pageManager.navigationMenu().logOutFromPage();

})


test.skip('product item pages', async ({page}) => {

    const pageManager = new PageManager(page);
    await pageManager.loginPage().openSauceDemo();

    await pageManager.loginPage().loginToThePageUsingStandardUserCredentials();
    await pageManager.productItemPage().addAllItemsFromProductItemPage();
    await pageManager.allItemsPage().checkIfAllButtonsAreClicked();
    await pageManager.allItemsPage().checkIfAllItemsAreAddedOnCartSpan(pageManager.productItemPage().countAddedItemsFromProductPages)    
    await pageManager.allItemsPage().openCart();
    await pageManager.cartPage().validateAddedItemsToCart(pageManager.productItemPage().countAddedItemsFromProductPages)

})





