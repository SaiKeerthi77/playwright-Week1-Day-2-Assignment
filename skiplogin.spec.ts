import {test,expect} from "@playwright/test"
test.use(
    {
        storageState:'playwright/.auth/user.json'
    }
)
test ("Storage state ",async ({page})=> {

 await page.goto("https://leaftaps.com/opentaps/control/login")
 const URL=page.url()
 
expect(URL).toBe("https://leaftaps.com/opentaps/control/login")
console.log("Asseretion successfull")






})

