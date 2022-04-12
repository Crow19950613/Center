@extends('layouts.app')

@section('content')
<div class="container">
	<div class="row justify-content-center">
		<div class="col-md-8">
			<div class="card">
				<div class="card-header">{{ __('Dashboard') }}</div>

				<div class="card-body">
					@if (session('status'))
					<div class="alert alert-success" role="alert">
						{{ session('status') }}
					</div>
					@endif

					{{ __('You are logged in!') }}
				</div>
			</div>
		</div>
	</div>
</div>
@endsection


<script>
am4core.ready(function() {

	// Themes begin
	am4core.useTheme(am4themes_kelly);
	am4core.useTheme(am4themes_animated);
	// Themes end

	var data = [


		{
			"years": "2019",
			"units": 16631.1,
			"pie": [{
					"value": 1293.3,
					"title": "Пахта толаси",
					//"color": am4core.color("#95CEFF"),
				},
				{
					"value": 1500,
					"title": "Озиқ-овқат маҳсулотлари ",
					//"color": am4core.color("#003DD9"),
				},
				{
					"value": 876.9,
					"title": "Кимёвий маҳсулотлар",
					//"color": am4core.color("#FFED50"),
				},
				{
					"value": 2500,
					"title": "Энергия ташувчилари ва нефть маҳсулотлари",
					//"color": am4core.color("#104E8B"),
				},
				{
					"value": 1138.4,
					"title": "Саноат товарлари",
					//"color": am4core.color("#999EFF"),
				},
				{
					"value": 373.3,
					"title": "Машина ва ускуналар",
					//"color": am4core.color("#FFCC0F"),
				},
				{
					"value": 3600,
					"title": "Хизматлар ",
					//"color": am4core.color("#297BCA"),
				},
				{
					"value": 5349.2,
					"title": "Бошқалар",
					//"color": am4core.color("#FFF28E"),
				},
			]
		},

		{
			"years": "2020",
			"units": 15858.1,
			"pie": [{
					"value": 2110.9,
					"title": "Пахта толаси",
					//"color": am4core.color("#95CEFF"),
				},
				{
					"value": 1160.8,
					"title": "Озиқ-овқат маҳсулотлари ",
					//"color": am4core.color("#003DD9"),
				},
				{
					"value": 479.5,
					"title": "Кимёвий маҳсулотлар",
					//"color": am4core.color("#FFED50"),
				},
				{
					"value": 658.9,
					"title": "Энергия ташувчилари ва нефть маҳсулотлари",
					//"color": am4core.color("#104E8B"),
				},
				{
					"value": 324.8,
					"title": "Саноат товарлари",
					//"color": am4core.color("#999EFF"),
				},
				{
					"value": 216.5,
					"title": "Машина ва ускуналар",
					//"color": am4core.color("#FFCC0F"),
				},
				{
					"value": 2003.8,
					"title": "Хизматлар ",
					//"color": am4core.color("#297BCA"),
				},
				{
					"value": 8902.9,
					"title": "Бошқалар",
					//"color": am4core.color("#FFF28E"),
				},
			]
		},

		{
			"years": "2021",
			"units": 16610,
			"pie": [{
					"value": 3155.1,
					"title": "Пахта толаси",
					//"color": am4core.color("#95CEFF"),
				},
				{
					"value": 1419.3,
					"title": "Озиқ-овқат маҳсулотлари ",
					//"color": am4core.color("#003DD9"),
				},
				{
					"value": 1130.8,
					"title": "Кимёвий маҳсулотлар",
					//"color": am4core.color("#FFED50"),
				},
				{
					"value": 889.9,
					"title": "Энергия ташувчилари ва нефть маҳсулотлари",
					//"color": am4core.color("#104E8B"),
				},
				{
					"value": 841.3,
					"title": "Саноат товарлари",
					//"color": am4core.color("#999EFF"),
				},
				{
					"value": 533.8,
					"title": "Машина ва ускуналар",
					//"color": am4core.color("#FFCC0F"),
				},
				{
					"value": 2547.4,
					"title": "Хизматлар ",
					//"color": am4core.color("#297BCA"),
				},
				{
					"value": 6092.4,
					"title": "Бошқалар",
					//"color": am4core.color("#FFF28E"),
				},
			]
		},

	];


	// Create chart instance
	var chart = am4core.create("export_d", am4charts.XYChart);
	chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

	// Add data
	chart.data = data;

	// Create axes
	var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
	categoryAxis.dataFields.category = "years";
	categoryAxis.renderer.grid.template.disabled = true;
	categoryAxis.renderer.labels.template.fill = am4core.color("#ffffff");

	var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
	valueAxis.title.text = "";
	valueAxis.min = 0;
	valueAxis.renderer.baseGrid.disabled = true;
	valueAxis.renderer.grid.template.strokeOpacity = 0.07;
	valueAxis.renderer.labels.template.disabled = true;
	valueAxis.renderer.grid.template.disabled = true;

	// Create series
	var series = chart.series.push(new am4charts.ColumnSeries());
	series.dataFields.valueY = "units";
	series.dataFields.categoryX = "years";
	series.tooltip.pointerOrientation = "vertical";


	var columnTemplate = series.columns.template;
	// add tooltip on column, not template, so that slices could also have tooltip
	columnTemplate.column.tooltipText = "{valueY}";
	columnTemplate.column.tooltipY = 0;
	columnTemplate.column.cornerRadiusTopLeft = 20;
	columnTemplate.column.cornerRadiusTopRight = 20;
	columnTemplate.strokeOpacity = 0;


	// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
	columnTemplate.adapter.add("fill", function(fill, target) {
		var color = chart.colors.getIndex(target.dataItem.index * 3);
		return color;
		// return am4core.color("#ffffff")
	});

	// create pie chart as a column child
	var pieChart = series.columns.template.createChild(am4charts.PieChart);
	pieChart.width = am4core.percent(80);
	pieChart.height = am4core.percent(80);
	pieChart.align = "center";
	pieChart.valign = "middle";
	pieChart.dataFields.data = "pie";


	var pieSeries = pieChart.series.push(new am4charts.PieSeries());
	pieSeries.dataFields.value = "value";
	pieSeries.dataFields.category = "title";
	pieSeries.labels.template.disabled = true;
	pieSeries.ticks.template.disabled = true;
	//pieSeries.slices.template.stroke = am4core.color("#ffffff");
	pieSeries.slices.template.strokeWidth = 1;
	pieSeries.slices.template.strokeOpacity = 0;

	pieSeries.slices.template.adapter.add("fill", function(fill, target) {
		return am4core.color("#ffffff")
	});

	pieSeries.slices.template.adapter.add("fillOpacity", function(fillOpacity,
		target) {
		return (target.dataItem.index + 1) * 0.2;
	});

	pieSeries.hiddenState.properties.startAngle = -90;
	pieSeries.hiddenState.properties.endAngle = 270;

}); // end am4core.ready()
</script>


<script>
am4core.ready(function() {

	// Themes begin
	am4core.useTheme(am4themes_kelly);
	am4core.useTheme(am4themes_animated);
	// Themes end

	var data = [{
			"years": "2019",
			"units": 24276.2,
			"pie": [

				{
					"value": 1313.3,
					"title": "Озиқ-овқат маҳсулотлари ",
					//"color": am4core.color("#003DD9"),
				},

				{
					"value": 2687.5,
					"title": "Кимёвий маҳсулотлар",
					//"color": am4core.color("#FFED50"),
				},

				{
					"value": 928.1,
					"title": "Энергия ташувчилари ва нефть маҳсулотлари",
					//"color": am4core.color("#104E8B"),
				},

				{
					"value": 4147.9,
					"title": "Саноат товарлари",
					//"color": am4core.color("#999EFF"),
				},

				{
					"value": 9569.1,
					"title": "Машина ва ускуналар",
					//"color": am4core.color("#FFCC0F"),
				},

				{
					"value": 2421.8,
					"title": "Хизматлар ",
					//"color": am4core.color("#297BCA"),
				},

				{
					"value": 3208.5,
					"title": "Бошқалар",
					//"color": am4core.color("#FFF28E"),
				},
			]
		},

		{
			"years": "2020",
			"units": 21154.4,
			"pie": [

				{
					"value": 1594.6,
					"title": "Озиқ-овқат маҳсулотлари ",
					//"color": am4core.color("#003DD9"),
				},

				{
					"value": 2903.8,
					"title": "Кимёвий маҳсулотлар",
					//"color": am4core.color("#FFED50"),
				},

				{
					"value": 1093.8,
					"title": "Энергия ташувчилари ва нефть маҳсулотлари",
					//"color": am4core.color("#104E8B"),
				},

				{
					"value": 873.9,
					"title": "Саноат товарлари",
					//"color": am4core.color("#999EFF"),
				},

				{
					"value": 7955.2,
					"title": "Машина ва ускуналар",
					//"color": am4core.color("#FFCC0F"),
				},

				{
					"value": 1216.4,
					"title": "Хизматлар ",
					//"color": am4core.color("#297BCA"),
				},

				{
					"value": 5516.7,
					"title": "Бошқалар",
					//"color": am4core.color("#FFF28E"),
				},
			]
		},

		{
			"years": "2021",
			"units": 26532.9,
			"pie": [

				{
					"value": 2144.8,
					"title": "Озиқ-овқат маҳсулотлари ",
					//"color": am4core.color("#003DD9"),
				},

				{
					"value": 4720.2,
					"title": "Кимёвий маҳсулотлар",
					//"color": am4core.color("#FFED50"),
				},

				{
					"value": 1540.9,
					"title": "Энергия ташувчилари ва нефть маҳсулотлари",
					//"color": am4core.color("#104E8B"),
				},

				{
					"value": 4720.2,
					"title": "Саноат товарлари",
					//"color": am4core.color("#999EFF"),
				},

				{
					"value": 8252.7,
					"title": "Машина ва ускуналар",
					//"color": am4core.color("#FFCC0F"),
				},

				{
					"value": 3417.3,
					"title": "Хизматлар ",
					//"color": am4core.color("#297BCA"),
				},

				{
					"value": 1736.8,
					"title": "Бошқалар",
					//"color": am4core.color("#FFF28E"),
				},
			]
		},

	];


	// Create chart instance
	var chart = am4core.create("import_d", am4charts.XYChart);
	chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

	// Add data
	chart.data = data;

	// Create axes
	var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
	categoryAxis.dataFields.category = "years";
	categoryAxis.renderer.grid.template.disabled = true;
	categoryAxis.renderer.labels.template.fill = am4core.color("#ffffff");

	var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
	valueAxis.title.text = "";
	valueAxis.min = 0;
	valueAxis.renderer.baseGrid.disabled = true;
	valueAxis.renderer.grid.template.strokeOpacity = 0.07;
	valueAxis.renderer.labels.template.disabled = true;
	valueAxis.renderer.grid.template.disabled = true;

	// Create series
	var series = chart.series.push(new am4charts.ColumnSeries());
	series.dataFields.valueY = "units";
	series.dataFields.categoryX = "years";
	series.tooltip.pointerOrientation = "vertical";


	var columnTemplate = series.columns.template;
	// add tooltip on column, not template, so that slices could also have tooltip
	columnTemplate.column.tooltipText = "{valueY}";
	columnTemplate.column.tooltipY = 0;
	columnTemplate.column.cornerRadiusTopLeft = 20;
	columnTemplate.column.cornerRadiusTopRight = 20;
	columnTemplate.strokeOpacity = 0;


	// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
	columnTemplate.adapter.add("fill", function(fill, target) {
		var color = chart.colors.getIndex(target.dataItem.index * 3);
		return color;
		// return am4core.color("#ffffff")
	});

	// create pie chart as a column child
	var pieChart = series.columns.template.createChild(am4charts.PieChart);
	pieChart.width = am4core.percent(80);
	pieChart.height = am4core.percent(80);
	pieChart.align = "center";
	pieChart.valign = "middle";
	pieChart.dataFields.data = "pie";


	var pieSeries = pieChart.series.push(new am4charts.PieSeries());
	pieSeries.dataFields.value = "value";
	pieSeries.dataFields.category = "title";
	pieSeries.labels.template.disabled = true;
	pieSeries.ticks.template.disabled = true;
	pieSeries.slices.template.strokeWidth = 1;
	pieSeries.slices.template.strokeOpacity = 0;

	pieSeries.slices.template.adapter.add("fill", function(fill, target) {
		return am4core.color("#ffffff")
	});

	pieSeries.slices.template.adapter.add("fillOpacity", function(fillOpacity,
		target) {
		return (target.dataItem.index + 1) * 0.2;
	});

	pieSeries.hiddenState.properties.startAngle = -90;
	pieSeries.hiddenState.properties.endAngle = 270;

}); // end am4core.ready()
</script>




<script>
Highcharts.chart('export_d', {

	chart: {
		type: 'column',
		backgroundColor: '#0f6a9a',
	},

	title: {
		text: 'Экспорт динамикаси',
		style: {
			color: '#fff',
			"fontSize": "16px"
		}
	},

	xAxis: {
		categories: [
			'2019',
			'2020',
			'2021',
		],
		labels: {
			style: {
				color: '#fff'
			}
		},

	},

	yAxis: {
		allowDecimals: false,
		min: 0,
		labels: {
			enabled: false
		},
		style: {
			color: '#fff'
		},
		title: {
			text: '' // 'млн.долл.США'
		},
		gridLineColor: '#0f6a9a'
	},

	tooltip: {
		formatter: function() {
			return '<b>' + this.x + '</b><br/>' +
				this.series.name + ': <br/><b>' + this.y + '</b>';
			// 'Total: ' + this.point.stackTotal;
		}
	},

	plotOptions: {
		column: {
			stacking: 'normal',
			dataLabels: {
				enabled: false,
			}
		}
	},

	legend: {
		itemHoverStyle: {
			color: '#0f6a9a'
		},
		enabled: false
	},

	series: [{
			name: 'Пахта толаси',
			data: [
				1293.3,
				2110.9,
				3155.1,

			],
			color: '#95CEFF'
		},
		{
			name: 'Озиқ-овқат маҳсулотлари ',
			data: [
				1500,
				1160.8,
				1419.3,

			],
			color: '#003DD9'
		},
		{
			name: 'Кимёвий маҳсулотлар',
			data: [
				876.9,
				479.5,
				1130.8,

			],
			color: '#FFED50'
		},
		{
			name: 'Энергия ташувчилари ва нефть маҳсулотлари',
			data: [
				2500,
				658.9,
				889.9,

			],
			color: '#104E8B'
		},
		{
			name: 'Саноат товарлари',
			data: [
				1138.4,
				324.8,
				841.3,

			],
			color: '#999EFF'
		},
		{
			name: 'Машина ва ускуналар',
			data: [
				373.3,
				216.5,
				533.8,

			],
			color: '#FFCC0F'
		},
		{
			name: 'Хизматлар ',
			data: [
				3600,
				2003.8,
				2547.4,

			],
			color: '#297BCA'
		},
		{
			name: 'Бошқалар',
			data: [
				5349.2,
				8902.9,
				6092.4,

			],
			color: '#FFF28E'
		},
	]
});
</script>