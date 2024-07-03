describe('register', () => {
    
    it('success register', async () => {

        browser.url('https://magento.softwaretestingboard.com/customer/account/create/')

        await $('#firstname').setValue('putra')
        await $('#lastname').setValue('test')
        await $('#email_address').setValue('putra1234@gmail.com')
        await $('#password').setValue('@putra123')
        await $('#password-confirmation').setValue('@putra123')
        await $('.primary').click()
        await browser.pause(5000)
        const elem = await $('.base')
        await expect(elem).toHaveText('My Account')
        


    })
})