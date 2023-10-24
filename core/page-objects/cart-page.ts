import {Page, expect} from '@playwright/test';
import url from '../data/urls.json'

export class CartPage {

    private readonly page:Page;

    constructor(page:Page){
        this.page = page;
    }


    async validateThatCartPageIsOpened(){
        expect(await this.page.url()).toEqual(url.cartPage);
    }

    async validateThatItemIsAddedToCart(item: string){
        expect(await this.page.locator('.cart_list .cart_item .cart_item_label a').textContent()).toContain(item);
    }

    async clickCheckoutButton(){
        await this.page.getByRole('button', {name:'Checkout'}).click();
        expect(await this.page.url()).toEqual(url.checkoutFormPage);
    }

    async clickContinueShoppingButton(){
        await this.page.getByRole('button', {name:'Checkout'}).click();
        expect(await this.page.url()).toEqual(url.allItemsPage);
    }

    async validateAddedItemsToCart(check:number){

        expect(await this.page.locator('.cart_item').count()).toEqual(check);
    }
}