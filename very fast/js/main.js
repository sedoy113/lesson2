
var week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

document.writeln( '<H1>Дни недели</H1>');
document.write(  week[0]  + '<br>');
document.write(  week[1]  + '<br>' );
document.writeln( '<i>'+ week[2] +'</i>'+ '<br>');
document.writeln(  week[3] + '<br>');
document.writeln(  week[4] + '<b>' + '<br>' );
document.writeln(  week[5] + '<br>');
document.writeln(  week[6] );


/*var arr = ['33333333', '44444', '8888', '77777777', '222222', '9999', '33333'];
const result = arr.filter(arr => arr.length > 7);
console.log(result);*/

var arr = ['33333333', '44444', '8888', '77777777', '222222', '9999', '33333'];
function filterItems(query) {
  return arr.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}
console.log(filterItems('3'));
console.log(filterItems('7'));