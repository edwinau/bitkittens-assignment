$(function() {

  $('.summon-cats').on('click', function() {
    url = 'http://bitkittens.herokuapp.com/cats.json'
    $.ajax({
      url: url,
      method: 'GET',
      // data:
      dataType: 'json'   
    })
  })

})
