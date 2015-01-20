'use strict';
var data = require('./config');
module.exports = {
  'lets test some functions': function (test) {
      test.open('https://instagram.com')
      .assert.exists('a[href="/accounts/login/"]', 'contact exists')
      .click('a[href="/accounts/login/"]')
      .wait(3000)
      .toFrame('.hiFrame')
      .type('input[name="username"]', data.instaUsername5)
      .wait(1000)
      .type('input[name="password"]', data.instaPassword)
      .click('.lfSubmit')
      .wait(3000)
      .assert.exists('.link-profile', 'logged in')
    for(var i=0; i<data.hash1.length; i++){
      for(var x=0; x<data.hash2.length; x++){
      test.wait(8000)
      test.open('http://instagram.com/'+data.victim)
      test.wait(8000)
      // .assert.title().is('james_hinders on Instagram', 'We are in...')
      test.click('.photo-wrapper')
      test.wait(2500)
      var random1 = Math.floor((Math.random() * data.hash1.length) + 0);
      var random2 = Math.floor((Math.random() * data.hash2.length) + 0);
      test.type('input[placeholder="Leave a comment..."]', "#"+data.hash1[random1]+"_"+data.hash2[random2])
      test.wait(2500)
      test.sendKeys('body', '\uE007')
      test.wait(2000)
      }
        }
    test.done();
  },
};