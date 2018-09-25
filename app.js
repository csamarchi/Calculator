var result = [];
var d;
var e;
var f

$('.clear').on('click', function() {
  result.splice(0);
  $('#input').empty();

});

$('#1').on('click', function() {
  result.push(1);
  $('#input').html(result);
});

$('#2').on('click', function() {
  result.push(2);
  $('#input').html(result);
});

$('#3').on('click', function() {
  result.push(3);
  $('#input').html(result);
});

$('#4').on('click', function() {
  result.push(4);
  $('#input').html(result);
});

$('#5').on('click', function() {
  result.push(5);
  $('#input').html(result);
});

$('#6').on('click', function() {
  result.push(6);
  $('#input').html(result);
});

$('#7').on('click', function() {
  result.push(7);
  $('#input').html(result);
});

$('#8').on('click', function() {
  result.push(8);
  $('#input').html(result);
});

$('#9').on('click', function() {
  result.push(9);
  $('#input').html(result);
});

$('#0').on('click', function() {
  result.push(0);
  $('#input').html(result);
});

$('#decimal').on('click', function() {
  result.push('.');
  $('#input').html(result);
});
