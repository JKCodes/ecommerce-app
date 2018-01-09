module.exports = {

  'get to signup page': (browser) => {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('.navbar', 1000)
      .click('a[href="/signup')

    browser.assert.urlContains('signup')
    browser.assert.cssClassPresent("form", "signup_form")
  },

  'signup user and redirect to profile': (browser) => {
    browser
      .setValue('input[type=email]', 'test@test.com')
      .setValue('input[type=password]', 'password')
      .click('button[type=submit]')
      .waitForElementVisible('.navbar', 1000)
      .getText('h1', function(response) {
        this.assert.equal(response.value, 'Thank you for signing up')
      })

    browser.assert.urlEquals('/users/test/profile')
  },

  'close': (browser) => browser.end()
}