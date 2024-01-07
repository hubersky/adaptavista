import { test, expect } from "@playwright/test";


test("Registration in Luma", async({page})=>{
await page.goto('https://magento.softwaretestingboard.com/')

await page.getByRole('link', { name: 'Sign in' }).click();
await page.locator("//input [@id='email']").fill("test.vald0@gmail.com");
await page.locator("//input [@id='pass']").fill("iRHq.FR9Gz3u3pw");
await page.getByRole('button', {name:'Sign in'}).click();

await expect(page.locator("//span [@class='logged-in']").first()).toHaveText(/Welcome, TestName TestLastName!/)
})