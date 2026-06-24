import { Page } from '@playwright/test'

import { LoginPage } from '@pages/LoginPage'

import { DashBoardPage } from '@pages/DashBoardPage'

export class PageManager {
    private loginPage?: LoginPage;
    private dashBoardPage?: DashBoardPage;
    constructor(private page: Page) { }

    getLoginPage() {
        if (!this.loginPage) {
            this.loginPage = new LoginPage(this.page);
        }
        return this.loginPage;
    }

    getDashboardPage() {
        if (!this.dashBoardPage) {
            this.dashBoardPage = new DashBoardPage(this.page);
        }
        return this.dashBoardPage;
    }


}