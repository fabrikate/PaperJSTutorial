$(document).ready(function() {
	//populate the list on getting started
	function populateGetStart() {
		var bullets = [
		'Paper Script requires an HTML canvas.',
		'When writing in the Paper Script tags, include the canvas id.',
		'When using an external file Paper Script uses Ajax to get the script and load it.']
		for (var i = 0; i < bullets.length; i++) {
			$('#getStartList').append('<li>'+ bullets[i] + '</li>');

		}
	}
	populateGetStart();

	function drawing() {
		$('#girlCanvas').hide();
		var bullets = [
		'Paper Script uses constructors to create primitive shapes like circles, rectangles and arcs.',
		'Make an instance of the constructors to make points, paths, circles, rectangles and arcs.',
		'Group items together in a single object to manipulate or turn into a symbol.',
		'Instances of symbols save memory because it refers to the original item.'];
		for (var i = 0; i < bullets.length; i++) {
			$('#drawingList').append('<li>'+ bullets[i] + '</li>');

		}
		$('#drawing').on('click', 'p', function() {
			$('#girlCanvas').fadeIn(700);
		});
		$('#drawing').on('dblclick', 'p', function() {
			$('#girlCanvas').hide();
		});
	}
	drawing();

	function animation() {
		$('#myCanvas').hide();
		var bullets = [
		'Paper Script has ready-made functions, some are called upto 60 times a second for seamless animation.',
		'Animation based on mouse movement is because of the ready-made functions.',
		'What makes Paper Script unique is creating layers on the #myCanvas, making manipulating and moving items easier.'];
		for(var i = 0; i < bullets.length; i++) {
			$('#animationList').append('<li>'+ bullets[i] + '</li>');
		}
		$('#animation').on('click', 'p', function() {
			$('#myCanvas').fadeIn(700);
		});
		$('#animation').on('dblclick', 'p', function() {
			$('#myCanvas').hide();
		});
	}
	animation();

	function prosCons() {
		var bullets = [
		'Pro: Layers make manipulating items easy.',
		'Pro: Symbol instances make creating several items different with 2 lines of code.',
		'Con: Documentation is weak, many of the examples are too simple.',
		'Con: External Paper scripts are only loaded with Ajax.'];
		for(var i = 0; i <bullets.length; i++) {
			$('#prosConsList').append('<li>'+ bullets[i] + '</li>');
		}
	}
	prosCons();

})
