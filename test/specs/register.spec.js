describe('register', () => {
    
    it('success register', async () => {

        browser.url('https://magento.softwaretestingboard.com/customer/account/create/')

        await $('#firstname').setValue('putra')
        await $('#lastname').setValue('test')
        await $('#email_address').setValue('putra@gmail.com')
        await $('#password').setValue('@putra123')
        await $('#password-confirmation').setValue('@putra123')
        await $('#form-validate').click()
        const elem = await $('#maincontent')
        await expect(elem).toHaveText('Thank you for registering')


    })
})