const vg_1 = "js/daily_cost_bar_chart.vg.json";

vegaEmbed("#bar_chart", vg_1)
  .then(function(result) {
    console.log(result);
  })
  .catch(console.error);