//Cards, by Eli Moreta-Feliz

"use strict";


//create a game object
var Cards = {

	currentLevel: 0,

	currentElements: [],

	//powerup definitions 
	clearLevel: {
		current: 0,

		target: 50,

		full: false,

		execute: function(){
			if(this.full){
				$('.tile').each(function(){
					if(!$(this).hasClass('active')){
						$(this).addClass('active');
					}
				});
				this.full = false;
				this.current = 0;
				$('#clearLevel').val(this.current);
				Cards.win = true;
				Cards.end(Cards.levels[Cards.currentLevel].type);
			}else{
				$('#message').text("Clear Level is not full yet!");
				return;
			}
		}
	},

	wildcard: {
		current: 0,

		target: 30,

		full: false,

		execute: function(){
			if(this.full){
				if(!Cards.slot){
					alert('select a card first');
					return;
				}
				var el = $('button[data="' + Cards.slot + '"]').not('.active');
				Cards.reveal(el);
				this.full = false;
				this.current = 0;
				$('#wildcard').val(this.current);
			}else{
				$('#message').text("Wildcard is not full yet!");
				return;
			}
		}
	},

	showBoard: {
		current: 0,

		target: 40,

		full: false,

		execute: function(){
			if(this.full){
				$('.tile').each(function(){
					if(!$(this).hasClass('active')){
						$(this).addClass('active');
					}
				});
				setTimeout(function(){
					$('.tile').each(function(){
						if(!$(this).hasClass('locked')){
							$(this).removeClass('active');
						}
					});
				}, 2000);

				this.full = false;
				this.current = 0;
				$('#showBoard').val(this.current);
			}else{
				$('#message').text("Show Board is not full yet!");
				return;
			}
		}
	},

	extraTime: {
		current: 0,

		target: 20,

		full: false,

		execute: function(){
			if(this.full && Cards.levels[Cards.currentLevel].type === 'time'){
				Cards.levels[Cards.currentLevel].targetSeconds += 20;

				this.full = false;
				this.current = 0;
				$('#extraTime').val(this.current);
			}else{
				$('#message').text("Extra Time is not full yet!");
				return;
			}
		}
	},

	extraMoves: {
		current: 0,

		target: 20,

		full: false,

		execute: function(){
			if(this.full && Cards.levels[Cards.currentLevel].type === 'moves'){
				var extras = Cards.levels[Cards.currentLevel].targetMoves += 10;
				$('#moves').text(extras);	

				this.full = false;
				this.current = 0;
				$('#extraMoves').val(this.current);
			}else{
				$('#message').text("Extra Moves is not full yet!");
				return;
			}
		}
	},

	win: false,

	lives: 3,

	score: 0,

	slot: false, //this is the placeholder for when the user clicks on the first (of two) cards to match

	currentMatches: 0,

	respawnCounter: 0,

	currentMoves: 0, 

	currentSeconds: 0, //for timed levels

	colors: ['blue', 'red', 'pink', 'green', 'orange', 'black'],

	shapes: ['circle', 'square', 'triangle', 'diamond', 'heart', 'crown1', 'star', 'crown2', 'moon', 'crown3', 'spade', 'club'],

	//displays the current cardset
	display: function(){
		$('#board').html(''); //clear the board

		//variable that will pair elements with images
		var val = 1, colorCounter = 0, shapeCounter = 0;

		for(var i = 1; i <= this.levels[this.currentLevel].numberOfTiles; i++){ 
			this.currentElements[(i - 1)] = '<td><button class="tile" data="' + val + '"><img src="shapes/' + this.shapes[shapeCounter] + '-' + this.colors[colorCounter] + '.png"></button></td>';
			
			if((i % 2) === 0){
				val++; //pair data values with each button
				if(colorCounter === 5){
					shapeCounter++;
					colorCounter = 0;
				}
				colorCounter++;
			}	

			//if this is the last iteration, sort and organize
			if(i === this.levels[this.currentLevel].numberOfTiles){
				this.currentElements.sort(function(){
					return Math.random() - 0.5;
				});
				var newContainer = '<tr>';
				for(var j = 1; j <= this.currentElements.length; j++){ //second loop, since I'm randomizing the elements first
					newContainer += this.currentElements[j - 1];
					if((j % 4) === 0){
						if(j < this.currentElements.length){
							newContainer += '</tr><tr>';
						}else{
							newContainer += '</tr>';
						}
					}
					
				}
			}
		}
		
		$('#board').html(newContainer); //once randomized, put the tiles in the board 

		this.respawnCounter = val;
	},

	shuffle: function(){
		this.currentElements.sort(function(){
			return Math.random() - 0.5;
		});
		$('#board').fadeOut(500, function(){
			$('#board').html(this.currentElements); //once randomized, put the tiles in the board
			
			$('.tile').on("click", function(){
				Cards.reveal($(this)); //ensure they can still be clicked
			});
		});
		$('#board').fadeIn(500);
		this.slot = false; //ensure board is reset
	},

	//for timed levels, displays how much time is left
	countdown:  function(){
		if(!this.win){
			$('#time').html(this.currentSeconds);
			if(this.currentSeconds > 0){
				this.currentSeconds -= 1; //change this so that it affects the current level
				
				setTimeout(function(){
					this.countdown();
				}.bind(this), 1000);
			}else{
				//if they run out of time, end the game
				this.end('time');	
			}
		}
	},

	trackMoves: function(){
		if(this.currentMoves === this.levels[this.currentLevel].targetMoves){
			this.end('moves');
		}
		var ppp = this.levels[this.currentLevel].targetMoves - this.currentMoves;
		$('#moves').text(ppp);
	},

	//for scored levels, tracks the score and matches it against the target score
	trackScore: function(){
		if(this.score >= this.levels[this.currentLevel].targetScore){
			this.win = true;
			this.end('score');
		}
	},


	reveal: function(el){
		//increase the number of moves
		this.currentMoves += 1;

		//depending on what type of level it is, run the appropriate function
		switch(this.levels[this.currentLevel].type){
			case 'time':
				break;
			case 'score':
				this.trackScore();
				break;
			case 'moves':
				this.trackMoves();
				break;
			default:
				break;

		}

		//when you click on the tiles, remove the 'hidden' class or attribute and show the "back" of the card
		if(el.hasClass('active') || el.hasClass('locked')){
			return;
		}
		el.removeClass('hidden');
		el.addClass('active');

		//if the 'slot' variable is empty, assign this node's data value to it. Otherwise, call the match function
		if(!this.slot){
			this.slot = el.attr('data');
		}else{
			this.match(el.attr('data'));
		}
	},

	//matches what the user inputs
	match: function(val){

		//see if the stored value and the currently revealed value are equal. If so, leave as is. If not, hide both tiles again.
		if(this.slot === val){
			//check to see if the match text is on the screen, add it if it isn't
			if($('#message').text() === "Match!"){
				$('#message').addClass('accent');
			}else{
				$('#message').text('Match!');
			}
			
			//lock the matches
			$('.active').addClass('locked').removeClass('active'); 

			//remove the accent (if necessary)
			setTimeout(function(){
				if($('#message').hasClass('accent')){
					$('#message').removeClass('accent');
				}
			}, 500);

			//increase score
			this.score += 100;
			$('#score').text(this.score);

			this.trackMatches();
		}else{
			if($('#message').text() === "Not a Match!"){
				$('#message').addClass('accent');
			}else{
				$('#message').text('Not a Match!');
			}
			setTimeout(function(){
				$('.active').addClass('hidden').removeClass('active'); //this needs some more work. Maybe use replaceWith or remove altogether?
				if($('#message').hasClass('accent')){
					$('#message').removeClass('accent');
				}
			}, 500);
		}
		this.slot = false;
		
		//set the current value to how many matches have happened, then call the track function
	},

	respawn: function(){
		//replace matched tiles with new tiles
		// var yey = $('.locked').each(function(){
		// 	setTimeout(function(){
		// 		$(this).removeClass('locked');
		// 	}.bind($(this)), 500);
		// });
		
		setTimeout(function(){
			var yey = $('.locked').first();
			if(yey.length <= 0){
				this.shuffle();
				return;
			}
			yey.remove();
			this.respawn();
		}.bind(this), 300);

		
	},

	//tracks each match and keeps score
	trackMatches: function(){
		//increas the number of matches and compare against target
		this.currentMatches += 1;

		this.fillBars();
		if(this.currentMatches === this.levels[this.currentLevel].targetMatches){
			this.win = true;
			this.end(this.levels[this.currentLevel].type);
		}
	},

	//starts the game
	start: function(){
		
		this.win = false;
		this.score = 0;
		this.currentMoves = 0;
		this.currentMatches = 0;
		this.display();
		$('#title').text("Level " + (this.currentLevel + 1));
		$('#message').text(this.levels[this.currentLevel].levelMessage);
		$('#score').text(this.score);
		$('.tile').on("click", function(){
			Cards.reveal($(this));
		});

		//update powerup bars
		if(this.currentLevel % 10 === 0 && this.currentLevel > 1){
			this.updateBars();
		}

		switch(this.levels[this.currentLevel].type){
			case 'time':
				this.currentSeconds = this.levels[this.currentLevel].targetSeconds;
				this.countdown();
				break;

			case 'moves':
				$('#moves').text(this.levels[this.currentLevel].targetMoves);
				break;

			default:
				break;
		}
		
		$('#shuffle').prop('disabled', false);
		$('#reset').prop('disabled', true).css('opacity', '.5');
	},

	//move to the next level or play again
	end: function(type){ 
		//depending on the type of level, do different things
		if(this.win){
			$('#message').html('Onward!');
			$('#reset').val('Next Level');
			
			//determine scoring and other end-of-game mechanics
			switch(type){
				case 'time':
					this.score *= this.levels[this.currentLevel].targetSeconds; 
					$('#score').text(this.score);
					break;

				case 'moves':
					this.score *= this.levels[this.currentLevel].targetMoves;
					$('#score').text(this.score);
					break;
			}
			this.currentLevel += 1; 
		}else{
			$('#message').html('Almost...');
			$('#reset').text('Play Again');
		}
		$('#shuffle').prop('disabled', true);
		$('#reset').prop('disabled', false).css('opacity', '1');
	},

	//powerup functions
	updateBars: function(){
		//update targets
		this.clearLevel.target += 10;
		this.showBoard.target += 7;
		this.wildcard.target += 5;
		this.extraTime.target += 3;
		this.extraMoves.target += 3;

		//update status bars
		$('#clearLevel').attr('max', this.clearLevel.target);
		$('#wildcard').attr('max', this.wildcard.target);
		$('#showBoard').attr('max', this.showBoard.target);
		$('#extraTime').attr('max', this.extraTime.target);
		$('#extraMoves').attr('max', this.extraMoves.target);
		
	},

	fillBars: function(){
		if(this.clearLevel.current === this.clearLevel.target){
			this.clearLevel.full = true;
		}else{
			this.clearLevel.current += 1;
			$('#clearLevel').val(this.clearLevel.current);
		}
		if(this.wildcard.current === this.wildcard.target){
			this.wildcard.full = true;
		}else{
			this.wildcard.current += 1;
			$('#wildcard').val(this.wildcard.current);
		}
		if(this.showBoard.current === this.showBoard.target){
			this.showBoard.full = true;
		}else{
			this.showBoard.current += 1;
			$('#showBoard').val(this.showBoard.current);
		}
		if(this.extraMoves.current === this.extraMoves.target){
			this.extraMoves.full = true;
		}else{
			this.extraMoves.current += 1;
			$('#extraMoves').val(this.extraMoves.current);
		}
		if(this.extraTime.current === this.extraTime.target){
			this.extraTime.full = true;
		}else{
			this.extraTime.current += 1;
			$('#extraTime').val(this.extraTime.current);
		}
		
	},

	useBars: function(type){
		this[type].execute();
	}

};


//event handlers
$(document).ready(function(){
	$('#reset').hide();
	$('#shuffle').hide();
	var init = function(){
		/*window.addEventListener('contextmenu', function(ev) {
		    ev.preventDefault();
		    //alert('success!');
		    return false;
		}, false);*/
		$('#start').on("click", function(){
			$(this).hide();
			Cards.start();
			$('#shuffle').show().on("click", function(e){
			e.stopPropagation();
			Cards.shuffle();
			}).prop('disabled', false);
			$('#reset').show().on("click", function(){
				Cards.start();
			}).prop('disabled', true).css('opacity', '.5');
		});
		$('label[for="clearLevel"], label[for="wildcard"], label[for="showBoard"], label[for="extraTime"], label[for="extraMoves"]').on("click", function(){
			Cards.useBars($(this).attr('for'));
		});
	};
	$.ajax({
		url: 'http://misd.info/assets/data.php',
		success: function(e){
			//remember to set the levels when creating these (and maybe keep the cards themselves on the server?)
			// for(var i = 0; i < e.length; i++){
			// 	Cards.levels[i] = e[i];
			// }
			init();
		},
		error: function(){
			Cards.levels = [
					{
						type: 'normal', //for testing purposes only

						numberOfTiles: 4,

						levelMessage: 'Clear the board!',

						targetMatches: 2
					},
					{
						type: 'normal', //for testing purposes only

						numberOfTiles: 6,

						levelMessage: 'Clear the board!',

						targetMatches: 3
					},
					{
						type: 'normal', //for testing purposes only

						numberOfTiles: 8,

						levelMessage: 'Clear the board!',

						targetMatches: 4
					},
					{
						type: 'normal', //for testing purposes only

						numberOfTiles: 10,

						levelMessage: 'Clear the board!',

						targetMatches: 5
					},
					{
						type: 'normal', //for testing purposes only

						numberOfTiles: 12,

						levelMessage: 'Clear the board!',

						targetMatches: 6
					},
					{
						type: 'time', //for testing purposes only

						targetSeconds: 60, //these will be assigned

						numberOfTiles: 12,

						levelMessage: 'Clear the board in 60 seconds!',

						targetMatches: 6
					},
					{
						type: 'moves', //for testing purposes only

						targetMoves: 40, //and populated at runtime

						numberOfTiles: 12,

						levelMessage: 'Clear the board in 40 moves!',

						targetMatches: 6
					},
					{
						type: 'time', //for testing purposes only

						targetSeconds: 60, //these will be assigned

						numberOfTiles: 14,

						levelMessage: 'Clear the board in 60 seconds!',

						targetMatches: 7
					},
					{
						type: 'moves', //for testing purposes only

						targetMoves: 40, //and populated at runtime

						numberOfTiles: 14,

						levelMessage: 'Clear the board in 40 moves!',

						targetMatches: 7
					},
					{
						type: 'moves', //for testing purposes only

						targetMoves: 40, //and populated at runtime

						numberOfTiles: 16,

						levelMessage: 'Clear the board in 40 moves!',

						targetMatches: 8
					},
					{
						type: 'moves', //for testing purposes only

						targetMoves: 40, //and populated at runtime

						numberOfTiles: 16,

						levelMessage: 'Clear the board in 40 moves!',

						targetMatches: 8
					},
					{
						type: 'moves', //for testing purposes only

						targetMoves: 40, //and populated at runtime

						numberOfTiles: 16,

						levelMessage: 'Clear the board in 40 moves!',

						targetMatches: 8
					},
					{
						type: 'moves', //for testing purposes only

						targetMoves: 40, //and populated at runtime

						numberOfTiles: 16,

						levelMessage: 'Clear the board in 40 moves!',

						targetMatches: 8
					},
					{
						type: 'moves', //for testing purposes only

						targetMoves: 40, //and populated at runtime

						numberOfTiles: 16,

						levelMessage: 'Clear the board in 40 moves!',

						targetMatches: 8
					},
					{
						type: 'time', //for testing purposes only

						targetSeconds: 55, //and populated at runtime

						numberOfTiles: 16,

						levelMessage: 'Clear the board in 40 moves!',

						targetMatches: 8
					},
					{
						type: 'moves', //for testing purposes only

						targetMoves: 40, //and populated at runtime

						numberOfTiles: 16,

						levelMessage: 'Clear the board in 40 moves!',

						targetMatches: 8
					},
					{
						type: 'time', //for testing purposes only

						targetSeconds: 50, //and populated at runtime

						numberOfTiles: 16,

						levelMessage: 'Clear the board in 40 moves!',

						targetMatches: 8
					},
					{
						type: 'moves', //for testing purposes only

						targetMoves: 36, //and populated at runtime

						numberOfTiles: 16,

						levelMessage: 'Clear the board in 40 moves!',

						targetMatches: 8
					},
					{
						type: 'time', //for testing purposes only

						targetSeconds: 40, //and populated at runtime

						numberOfTiles: 16,

						levelMessage: 'Clear the board in 40 moves!',

						targetMatches: 8
					},
					{
						type: 'moves', //for testing purposes only

						targetMoves: 40, //and populated at runtime

						numberOfTiles: 16,

						levelMessage: 'Clear the board in 40 moves!',

						targetMatches: 8
					}

			];
			init();
		},
		dataType: 'json'
	});
});