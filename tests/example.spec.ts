import { test } from '@fixtures/PageFixture'


test("@smoke demo", async ({ pages }) => {

    await pages.getLoginPage().login()
    await pages.getDashboardPage().verifydashBoard()

})