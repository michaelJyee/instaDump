module.exports = {
  'lets test some functions': function (test) {
    test.open('https://instagram.com')
      .assert.exists('a[href="/accounts/login/"]', 'contact exists')
      .click('a[href="/accounts/login/"]')
      .wait(3000)
      .toFrame('.hiFrame')
      .type('input[name="username"]', (config.instaUsername))
      .wait(1000)
      .type('input[name="password"]', (config.instaPassword))
      .click('.lfSubmit')
      .wait(3000)
      .assert.exists('.link-profile', 'logged in')
    test.open('http://instagram.com/james_hinders')
    .assert.title().is('james_hinders on Instagram', 'We are in...')
    .click('.photo-wrapper')
    .wait(2000)
    .done();
  }
};