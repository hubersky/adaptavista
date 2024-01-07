import { test, expect } from "@playwright/test"

test('API Test GET Method List of Users', async({request})=>{

    const url ='https://reqres.in/api/users?page=2'
    const response = await request.get(url)
    expect(response.status()).toBe(200)

    const responseBody = await response.json();
    expect(responseBody.page).toBe(2);
    expect(responseBody.total).toBe(12);
})