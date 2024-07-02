describe('register', () => {
    
    it('success register', async () => {

        browser.url('https://magento.softwaretestingboard.com/customer/account/forgotpassword/')

        await $('#email_address').setValue('aroma@gmail.com')
        await $('#form-validate').click()
        

    })
})