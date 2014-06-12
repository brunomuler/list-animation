(function(){
	'use strict';
	var app = app || {};

	app.sushiMarkup = $('#item-template').html().trim();
	app.$sushiList = $('#sushi-list');
	app.$addOne = $('#add-one');

	app.$addOne.on('click', function(){
		var rand = Math.floor( (Math.random() *3) +1);
		var newSushi = $(app.sushiMarkup.replace(/%/g, rand));
		
		newSushi.addClass('new-item');

		app.$sushiList.prepend(newSushi);

	});



	function removeElement(event) {
		if (event.originalEvent.animationName === 'disapear') {
			$(event.target).remove();
		}
	}


	$('#sushi-list').on('click', '.remove', function(){
		var $sushiItem = $(this).parent();

		$sushiItem.removeClass('new-item').addClass('removed');
		$sushiItem.bind('webkitAnimationEnd', removeElement);
	});

	$('#sushi-list').on('click', '.controls', function(event){
		console.log(event.target);

		var $counter = $(this).siblings('.counter'),
		counterValue = Number($counter.html());

		$counter.addClass('highlight-counter');



		var buttonClass = $(event.target).attr('class');

		if(buttonClass === 'add-one'){
			counterValue++;
		}
		else if (buttonClass === 'remove-one') {
			counterValue--;
		}

		$counter.html(counterValue);

		$(this).siblings('.counter').addClass('highlight-counter');


		//todo listen to end event
		$counter.bind('webkitAnimationEnd', function(){ $counter.removeClass('highlight-counter'); } );

	});




	var rand = Math.floor( (Math.random() *3) +1);
	var newSushi = $(app.sushiMarkup.replace(/%/g, rand));
	app.$sushiList.append(newSushi);
	rand = Math.floor( (Math.random() *3) +1);
	newSushi = $(app.sushiMarkup.replace(/%/g, rand));
	app.$sushiList.append(newSushi);
	rand = Math.floor( (Math.random() *3) +1);
	newSushi = $(app.sushiMarkup.replace(/%/g, rand));
	app.$sushiList.append(newSushi);


})();