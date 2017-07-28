<!DOCTYPE html>
<html>
	<head>
		<title>Simple Map</title>
		<meta name="viewport" content="initial-scale=1.0">
		<meta charset="utf-8">
		<!-- Bootstrap core CSS -->
		<link rel="stylesheet" href="{{ URL::asset('css/bootstrap.min.css') }}" />
		<!-- Bootstrap theme -->
		<link rel="stylesheet" href="{{ URL::asset('css/bootstrap-theme.min.css') }}" />
		<!-- Custom styles for this template -->
		<link rel="stylesheet" href="{{ URL::asset('css/theme.css') }}" />
		
	</head>
	<body>
		
		<div class="container-fluid">	
			<div class="row">
				<div class ="col-sm-7 map">
					<div class="google-map-canvas" id="map">
						<script type="text/javascript" src="{{ URL::asset('js/map.js') }}"></script>
						<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCIrxGBBTlyP-Ztq4bvtzA0mh740i_K_lM&callback=initMap" async defer></script>
					</div>
				</div>
				<div class="col-sm-5 content">
					<div class="jumbotron jumbotron-fluid">
						<div class="container">
							<h1 class="display-1">VANCOUVER RAMEN GUIDE</h1>
							<p class="lead">Your local ramen authority</p>
						</div>
					</div>
					<p>Vancouver's ramen scene has exploded. There is a lot to choose from, and a lot of it is shitty. I often eat ramen with tears in my eyes, sometimes because its so good, other times because its so bad. We want to ensure you experience the former.</p>
				</div>
			</div>
		</div>
		
	</body>

</html>