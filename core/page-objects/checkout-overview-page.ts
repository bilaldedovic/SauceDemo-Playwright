import {Page, expect} from '@playwright/test';
import url from '../data/urls.json'

export class CheckoutOverviewPage {

    private readonly page:Page;

    constructor(page:Page){
        this.page = page;
    }

    async clickFinishButton(){
        await this.page.getByRole('button', {name:'Finish'}).click();

        expect(await this.page.url()).toEqual(url.checkoutCompletePage);
    }
}