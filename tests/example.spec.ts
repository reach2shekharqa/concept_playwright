import { test } from '@fixtures/PageFixture'


test("demo", async ({ pages }) => {

    await pages.getLoginPage().login()
    await pages.getDashboardPage().verifydashBoard()

})