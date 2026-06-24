import { Page, expect } from '@playwright/test'

export class DashBoardPage {

    page: Page
    constructor(page: Page) {
        this.page = page;
    }

    async verifydashBoard() {

        await expect(this.page.getByRole('button', { name: 'Open Menu' })).toBeVisible()


    }

}