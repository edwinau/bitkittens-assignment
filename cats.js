$(function() {

  $('.summon-cats').on('click', function() {
    url = 'http://bitkittens.herokuapp.com/cats.json',
    $.ajax({
      url: url,
      method: 'GET',
      // data:
      dataType: 'json'
    }).done(function(data) {
      var cats = data.cats;
      var catsArray = [];
      for (var i = 0; i < cats.length; i++) {
        var source = cats[i]['photo'];
        var image = $('<img>').attr('src', source).appendTo('#cat' + (i + 1));
        catsArray.push(image);
      }
    $('.cat-box').each(function(i){
    $(this).html(catsArray[i]);
  });
});
});
});
