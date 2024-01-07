import { test, expect } from "@playwright/test"

test('API Test POST Method Create User', async({request})=>{

    const url ='https://reqres.in/api/users'
    const response = await request.post(url,{  
    data: {
    name: 'morpheus',
    job: 'leader'
    },
});

expect(response.status()).toBe(201)

const responseBody = await response.json();
    expect(responseBody.name).toBe('morpheus');
    expect(responseBody.job).toBe('leader');

})