describe('share wishlist', () => {
    
    it('success register', async () => {

        browser.url('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS93aXNobGlzdC9pbmRleC9pbmRleC93aXNobGlzdF9pZC8yNTI3NC8%2C/')

        
        await $('#email').setValue('aroma@gmail.com')
        await $('#pass').setValue('test123@')
        await $('#send2').click()
        await $('.nav item').getText()
        await expect($('.nav item')).toHaveTextContaining('My Wish List')
    })
})