describe('button filter', () => {
    
    it('filter success', async () => {

        browser.url('https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html')

        await $('#sorter').click()
        await browser.pause(2000)
        const selectBoxOne = $("#sorter");
        selectBoxOne.selectByAttribute("value", "price");
        selectBoxOne.click()
        await browser.pause(5000)
    })
})