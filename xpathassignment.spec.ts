import { test } from "@playwright/test"
test("xpath assignment ", async ({ page }) => {
    await page.goto("https://login.salesforce.com/?locale=in")

    await page.locator('//input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com')

    await page.locator('//input[@type="password"]').fill('TestLeaf@2025')

    await page.locator('//input[@value="Log In"]').click();

    await page.waitForTimeout(2000)

    //click on Applauncher
    await page.locator('//button[@title="App Launcher"]').click();

    await page.locator('//button[text()="View All"]').click(); //click on view all 

    await page.locator('(//input[@type="search"])[2]').fill('Accounts')//search as accounts 

    await page.locator('//mark[contains(text(),"Accounts")]').click();//click on accounts

    await page.waitForTimeout(3000)

    await page.locator('//div[text()="New"]').click();
    
    //click on new button,create new account 
    await page.locator('//input[@name="Name"]').fill('saving account')

    await page.locator('//button[@aria-label="Type"]').click()

    await page.locator('//span[text()="Analyst"]').click()

    await page.locator('//button[@aria-label="Industry"]').click()

    await page.locator('(//span[text()="Banking"])[1]').click()
    
    await page.locator('//button[text()="Save"]').click()

})
