import { test } from '@fixtures/PageFixture'


test("@smoke demo", async ({ pages }) => {

    await pages.getLoginPage().login('standard_user','secret_sauce')
    await pages.getDashboardPage().verifydashBoard()

})