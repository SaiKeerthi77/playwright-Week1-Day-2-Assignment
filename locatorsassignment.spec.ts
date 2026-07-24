import { test } from "@playwright/test"
test("Locators assignment ", async ({ page }) => {
await page.goto("http://leaftaps.com/opentaps/control/main")

await page.getByRole('textbox',{name:"Username"}).fill('Demosalesmanager');
//await page.getByLabel('Password').fill('crmsfa');
await page.locator('label').filter({hasText:"Password"}).fill("crmsfa")
await page.getByRole('button',{name:"Login"}).click()
await page.getByText('CRM/SFA').click()
await page.waitForTimeout(2000)

// lead creation 
await page.getByRole('link',{name:'Leads'}).click()
await page.getByRole('link',{name:'Create Lead'}).click()
await page.getByLabel('Company Name').fill('TestLeaf');
await page.locator('#createLeadForm_firstName').fill('Sai');
//await page.locator('[name="firstName"]').fill('Sai');
await page.locator('#createLeadForm_lastName').fill('C');
await page.locator('[name="personalTitle"]').fill('Mrs');
await page.locator('#createLeadForm_generalProfTitle').fill('Quality analyst');
await page.locator('#createLeadForm_annualRevenue').fill('300000');
await page.locator('#createLeadForm_departmentName').fill('Testing');
await page.locator('#createLeadForm_primaryPhoneNumber').fill('9876654321');
//await page.getByRole('button', { name: "Create Lead" }).click();
await page.locator('.smallSubmit').click();




})