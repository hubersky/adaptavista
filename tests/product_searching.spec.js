import { test, expect } from "@playwright/test"

test("Registration in Luma", async({page})=>{
await page.goto('https://magento.softwaretestingboard.com/')

await page.locator("//input[@id='search']").fill("Jackets for men")
await page.locator("//input[@id='search']").press('Enter')

await expect(page.locator("//span [@class='base']")).toHaveText(/Search results for: 'Jackets for men'/)

})