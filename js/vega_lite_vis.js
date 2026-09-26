const vg_1 = "js/daily_cost_bar_chart.vg.json";
const vg_2 = "js/category_scatter_plot.vg.json";

vegaEmbed("#bar_chart", vg_1)
  .then(function(result) {
    console.log(result);
  })
  .catch(console.error);

vegaEmbed("#scatter_plot", vg_2)
  .then(function(result) {
    console.log(result);
  })
  .catch(console.error);