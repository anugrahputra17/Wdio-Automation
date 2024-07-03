describe('sarch dropdown', () => {
    
    it('success register', async () => {

        browser.url('https://magento.softwaretestingboard.com')

        await $('#ui-id-4').click()
        await browser.pause(2000)
        await $('.#ui-id-9').click()
        await $('.#ui-id-11').click()
        await browser.pause(5000)
        const elem = await $('.base')
        await expect(elem).toHaveText('Customer Login')
    })
})