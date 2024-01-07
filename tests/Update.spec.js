import { test, expect } from "@playwright/test"

test('API Test PUT Method Update User', async({request})=>{

    const url ='https://reqres.in/api/users/2'
    const response = await request.put(url,{
    
    data: {
    name: 'morpheus',
    job: 'zion resident'
    },
});

expect(response.status()).toBe(200)

const responseBody = await response.json();
    expect(responseBody.name).toBe('morpheus');
    expect(responseBody.job).toBe('zion resident');

})