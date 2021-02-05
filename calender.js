var $window = $(window);
var $year = $('#js-year');
var $month = $('#js-month');
var $tbody = $('#js-calendar-body');

//Dateインスタンスを生成し、今日の日付を取得します。ついでに、扱いやすいように、変数に年と月を代入しています。
var today = new Date();

let currentYear = "",
    currentMonth = "";

document.getElementById('btn').addEventListener('click',function(){
        currentYear = document.getElementById('year').value;
        currentMonth = document.getElementById('month').value - 1;
        calendarHeading(currentYear, currentMonth);
        calendarBody(currentYear, currentMonth, today);
    });

//日付のテーブルを表示する部分です。
function calendarBody(year, month, today){
  var todayYMFlag = today.getFullYear() === year && today.getMonth() === month ? true : false; // 本日の年と月が表示されるカレンダーと同じか判定
  var startDate = new Date(year, month, 1); // その月の最初の日の情報
  var endDate  = new Date(year, month , 0); // その月の最後の日の情報
  var startDay = startDate.getDay();// その月の最初の日の曜日を取得
  var endDay = endDate.getDate();// その月の最後の日の曜日を取得
  var textSkip = true; // 日にちを埋める用のフラグ
  var textDate = 1; // 日付(これがカウントアップされます)
  var tableBody =''; // テーブルのHTMLを格納する変数
  
  for (var row = 0; row < 6; row++){
    var tr = '<tr>';
    
    for (var col = 0; col < 7; col++) {
      
      if (row === 0 && startDay === col){
        textSkip = false;
      }
      if (textDate > endDay) {
        textSkip = true;
      }
      var addClass = todayYMFlag && textDate === today.getDate() ? 'is-today' : '';
      var textTd = textSkip ? ' ' : textDate++;
      var td = '<td class="'+addClass+'">'+textTd+'</td>';
      tr += td;
    }
    tr += '</tr>';
    tableBody += tr;
  }
  $tbody.html(tableBody);
}

function calendarHeading(year, month){
  $year.text(year);
  $month.text(month + 1);
}