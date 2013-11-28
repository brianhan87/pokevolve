$(document).ready(function(){
  $('#pokefetch').on('click', function(){
    var pokeid = Math.ceil(Math.random() * 150);
    
    $.ajax({
      'dataType': 'jsonp',
      'url': 'http://pokeapi.co/api/v1/pokemon/1',
      'success': function(data){
          
          $('#name').append(data.name);
          $('#level').append(data.evolutions.level);
          $('#method').append(data.evolutions.method);
          $('#evolves_into').append(data.evolutions.to);
      }
    });
    //$.get('http://pokeapi.co/api/v1/pokemon/' + pokeid, function(data){
     //   alert(data.name);
    //});
  });
});