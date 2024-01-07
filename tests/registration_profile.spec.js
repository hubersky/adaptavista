import { test, expect } from "@playwright/test";

test("Registration in Luma", async({page})=>{
await page.goto('https://magento.softwaretestingboard.com/')

await page.getByRole('link', { name: 'Create an Account' }).click();
await page.locator("//input [@id='firstname']").fill("TestName");
await page.locator("//input [@id='lastname']").fill("TestLastName");
await page.locator("//input [@id='email_address']").fill("test.vald0@gmail.com");
await page.locator("//input [@id='password']").fill("iRHq.FR9Gz3u3pw");
await page.locator("//input [@id='password-confirmation']").fill("iRHq.FR9Gz3u3pw");
await page.getByRole('button', {name:'Create an Account'}).click();

await expect(page.locator("//div [@class='box-content']/p")).toHaveText("TestName TestLastName test.vald0@gmail.com")
})