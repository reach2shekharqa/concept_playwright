import { Page } from '@playwright/test'

import { Env } from '@config/Env'

import { LoginPageLocators } from '@locators/LoginPageLocators';

export class LoginPage {

    // readonly username;
    // readonly password;
    // readonly loginBtn;

    constructor(private page: Page) {
        // this.username = page.getByPlaceholder(LoginPageLocators.username)
        // this.password = page.getByPlaceholder(LoginPageLocators.password);
        // this.loginBtn = page.getByRole("button",{name:LoginPageLocators.loginBtn})
        this.page = page;
    }

    async login(user: string, pass: string) {

        await this.page.goto(Env.baseUrl)
        await this.page.getByPlaceholder(LoginPageLocators.username).fill(user)
        await this.page.getByPlaceholder(LoginPageLocators.password).fill(pass)
        await this.page.getByRole("button", { name: LoginPageLocators.loginBtn }).click()
    }
}