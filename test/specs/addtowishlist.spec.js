describe('add to wishlist', () => {
    
    it('success register', async () => {

        browser.url('https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html')

        await $('#product-price-1396').getText()
        await expect($('#product-price-1396')).toHaveTextContaining('$')
        await $('#option-label-size-143-item-167').click()
        await $('.action towishlist').click()

    })
})