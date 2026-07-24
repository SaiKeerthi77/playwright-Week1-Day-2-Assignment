import {test} from "@playwright/test"
test ("Storage state ",async ({page})=> {
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator('.inputLogin').nth(0).fill('democsr2')
    //password
    await page.locator('#password').fill('crmsfa')
    //login button 
    await page.locator('input[type="submit"]').click()

    await page.waitForTimeout(2000)
    await page.context().storageState({path:'playwright/.auth/user.json'})





})