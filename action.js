function init(){
  firstGraph();
  // secondGraph();
};

$(document).ready(init);


function firstGraph(){

  $.ajax({
    url: "api.php",
    method: "GET",
    success: function(data){
      console.log(data);
      monthLineChart(data);
    },
    error: function(data){
      console.log("Something is wrong");
    }
  });
};


function monthLineChart(data){

  var month = getMonths();

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: month,
          datasets: [{
              label: 'Profit',
              data: data
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
};


function getMonths(){
  var getMonth = moment.months();
  console.log(getMonth);

  return getMonth;
};



function secondGraph(){

  $.ajax({
    url: "api.php",
    method: "GET",
    success: function(data){
      console.log(data);

    },
    error: function(data){
      console.log("Something is wrong");
    }
  });
};
