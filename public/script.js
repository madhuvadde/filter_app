//var start_time = performance.now();
var cusDiv = document.createElement('div');
cusDiv.className = "container";
var fragment = document.createDocumentFragment();
var table = document.createElement('table');
table.className = "table table-bordered";
var row = document.createElement('tr');
row.bgColor ="red";
var arr = ["Date","City","State","Country","Shape","Duration","Comments"];


for(var i=0;i<arr.length;i++){
  var column = document.createElement('td');
  column.textContent = arr[i];
  row.appendChild(column);
}
table.appendChild(row);

var table_data = data;
function bodyAttachment(){
  cusDiv.appendChild(table);
  fragment.appendChild(cusDiv);
  document.body.appendChild(fragment);
}
function dataAttachment(i){
  var data_row = document.createElement('tr');
  for(var j = 0;j<7;j++){
    var data_col = document.createElement('td');
    switch(j){
      case 0: data_col.textContent = table_data[i].datetime;
          break;
      case 1: data_col.textContent = table_data[i].city;
          break;
      case 2: data_col.textContent = table_data[i].state;
          break;
      case 3: data_col.textContent = table_data[i].country;
          break;
      case 4: data_col.textContent = table_data[i].shape;
          break;
      case 5: data_col.textContent = table_data[i].durationMinutes;
          break;
      case 6: data_col.textContent = table_data[i].comments;
          break;
    }
    data_row.appendChild(data_col);
  }
  table.appendChild(data_row);
}
for(var i = 0;i<table_data.length;i++){
        dataAttachment(i);
}
bodyAttachment();
var btn      = document.getElementById('filter');
var date     = document.getElementById('date');
var city     = document.getElementById('city');
var state    = document.getElementById('state');
var country  = document.getElementById('country');
var shape    = document.getElementById('shape');
var time     = document.getElementById('time');
var comments = document.getElementById('comments');
var msg      = document.getElementById('msg');
btn.addEventListener('click',filterData,false);
function filterData(){
   if(date.value == "" && city.value == "" && state.value 
       == "" && country.value == ""&&
       shape.value ==  "" && time.value == ""
       &&comments.value == ""){
      msg.innerHTML = "Please enter one of the fields!!!!";
   }else{
   table.textContent = "";
    table.appendChild(row);
   for(var i = 0;i<table_data.length;i++){
     if(date.value == table_data[i].datetime || city.value == table_data[i].city || state.value 
       == table_data[i].state || country.value == table_data[i].country||
       shape.value ==  table_data[i].shape || time.value == table_data[i].durationMinutes 
       ||comments.value == table_data[i].comments){
        dataAttachment(i);
     } 
  }
  bodyAttachment();
}
}