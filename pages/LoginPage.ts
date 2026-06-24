import { Page } from '@playwright/test'

export class LoginPage {

    page: Page
    constructor(page: Page) {
        this.page = page;
    }


    async login() {

        await this.page.goto('https://www.saucedemo.com/')

        await this.page.getByPlaceholder('Username').fill('standard_user')

        await this.page.getByPlaceholder('Password').fill('secret_sauce')

        await this.page.getByRole('button',{name:'Login'}).click()

    }

}