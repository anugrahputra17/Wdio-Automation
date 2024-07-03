describe('register', () => {
    
    it('success register', async () => {

        browser.url('https://magento.softwaretestingboard.com/customer/account/forgotpassword/')

        await $('#email_address').setValue('aroma@gmail.com')
        await $('.primary').click()
        await browser.pause(5000)
        const elem = await $('.base')
        await expect(elem).toHaveText('Customer Login')
    })
})