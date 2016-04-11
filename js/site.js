// jQuery for page scrolling feature - requires jQuery Easing plugin
$( document ).ready(function() {

	
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
		$('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
	
	$('.button-background').click(function(){
		if($('#myvideo').get(0).paused == true)
		{
			$('#myvideo').get(0).play();
			$('.playbtn').removeClass("fa-play-circle");
			$('.playbtn').addClass("fa-pause");
			$('.button-background').css("background-color","transparent");
		}
		else
		{
			$('#myvideo').get(0).pause();
			$('.playbtn').removeClass("fa-pause");
			$('.playbtn').addClass("fa-play-circle");
		}
	});
	
	// Highlight the top nav as scrolling occurs
	$('#content').scrollspy({
		target: '.navbar-fixed-top'
	});
	//Flex slider in home section
	 $('.flexslider').flexslider({
        animation: "slide",
		direction: "vertical",
		controlNav: false,               
		directionNav: false,           
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
	// Floating label headings for the contact form

	$("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
	
	
	var $appeared = $('#appeared');
	var $disappeared = $('#disappeared');
	$('.animateup').appear();
	$(document.body).on('appear', '.animateup', function(e, $affected) {
		
	  
		$affected.each(function() {
			$(this).addClass('animated fadeInUp');    
		})
	  });
	$('.animateleft').appear();
	$(document.body).on('appear', '.animateleft', function(e, $affected) {
		
	  
		$affected.each(function() {
			$(this).addClass('animated fadeInLeft');    
		})
	  });
	$('.animateright').appear();
	$(document.body).on('appear', '.animateright', function(e, $affected) {
		
	  
		$affected.each(function() {
			$(this).addClass('animated fadeInRight');    
		})
	  });
	  $('.animatezoomin').appear();
		$(document.body).on('appear', '.animatezoomin', function(e, $affected) {
		
	  
		$affected.each(function() {
			$(this).addClass('animated zoomIn');    
		})
	  });
	  var countflag = true;
	  $('.countup').appear();
	  $(document.body).on('appear', '.countup', function(e, $affected) {
			if(countflag){
			// Count up javascript
				var options = {
				  useEasing : true, 
				  useGrouping : true, 
				  separator : ',', 
				  decimal : '.' 
				}
				var demo1 = new countUp("counting_elem1", 0, 2967, 0, 2, options);
				demo1.start();
				var demo2 = new countUp("counting_elem2", 0, 987, 0, 2, options);
				demo2.start();
				var demo3 = new countUp("counting_elem3", 0, 25890, 0, 2, options);
				demo3.start();
				var demo4 = new countUp("counting_elem4", 0, 30, 0, 2, options);
				demo4.start();
				
				countflag = false;
			 }    
		});
	  var flag = true;
	 $('.knob').appear();
	 $(document.body).on('appear', '.knob', function(e, $affected) {
		if(flag){
			$affected.each(function () {
				var $this = $(this);
			   var myVal = $this.attr("value");
			   // $(this).val(myVal + '%');
						
					$this.knob({
						'draw' : function () { $(this.i).val(this.cv + '%');}
					});
				  $({
					   value: 0
				   }).animate({

					   value: myVal
				   }, {
					   duration: 2000,
					   easing: 'swing',
					   step: function () {
						$this.val(Math.ceil(this.value)).trigger('change');
						  $($this).val( myVal + '%');

					   }
				   });
			});
			flag = false;
		}
	  });
	  
		
	  
	/*Knobs JS*/
	 $(".knob").knob({
                    change : function (value) {
                        //console.log("change : " + value);
                    },
                    release : function (value) {
                        //console.log(this.$.attr('value'));
                        console.log("release : " + value);
                    },
                    cancel : function () {
                        console.log("cancel : ", this);
                    },
                    /*format : function (value) {
                        return value + '%';
                    },*/
                    draw : function () {

                        // "tron" case
                        if(this.$.data('skin') == 'tron') {

                            this.cursorExt = 0.3;

                            var a = this.arc(this.cv)  // Arc
                                , pa                   // Previous arc
                                , r = 1;

                            this.g.lineWidth = this.lineWidth;

                            if (this.o.displayPrevious) {
                                pa = this.arc(this.v);
                                this.g.beginPath();
                                this.g.strokeStyle = this.pColor;
                                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
                                this.g.stroke();
                            }

                            this.g.beginPath();
                            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
                            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
                            this.g.stroke();

                            this.g.lineWidth = 2;
                            this.g.beginPath();
                            this.g.strokeStyle = this.o.fgColor;
                            this.g.arc( this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                            this.g.stroke();

                            return false;
                        }
                    }
                });

                // Example of infinite knob, iPod click wheel
                var v, up=0,down=0,i=0
                    ,$idir = $("div.idir")
                    ,$ival = $("div.ival")
                    ,incr = function() { i++; $idir.show().html("+").fadeOut(); $ival.html(i); }
                    ,decr = function() { i--; $idir.show().html("-").fadeOut(); $ival.html(i); };
                $("input.infinite").knob(
                                    {
                                    min : 0
                                    , max : 20
                                    , stopper : false
                                    , change : function () {
                                                    if(v > this.cv){
                                                        if(up){
                                                            decr();
                                                            up=0;
                                                        }else{up=1;down=0;}
                                                    } else {
                                                        if(v < this.cv){
                                                            if(down){
                                                                incr();
                                                                down=0;
                                                            }else{down=1;up=0;}
                                                        }
                                                    }
                                                    v = this.cv;
                                                }
                                    });

	
	//home section image size to window size.
	var height = $(window).height();
    $(".home").css("height",height);
	$(".home").css("height",height);
	$(".home").css("max-width","100%");
	
	
	
	  
	  
	  function initialize()
		{
		var mapProp = {
		  center:new google.maps.LatLng(51.508742,-0.120850),
		  zoom:5,
		  mapTypeId:google.maps.MapTypeId.ROADMAP
		  };
		var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
		}

		google.maps.event.addDomListener(window, 'load', initialize);
	
	  
  
        /*Javascript for portfolio*/
    var $container = $('#container');
    $container.isotope({
      itemSelector : '.element',
      masonry : {
        columnWidth : 0
      },
      masonryHorizontal : {
        rowHeight: 0
      },
      cellsByRow : {
        columnWidth : 0,
        rowHeight : 0
      },
      cellsByColumn : {
        columnWidth : 0,
        rowHeight : 0
      },
      getSortData : {
        symbol : function( $elem ) {
          return $elem.attr('data-symbol');
        },
        category : function( $elem ) {
          return $elem.attr('data-category');
        },
      /*  number : function( $elem ) {
          return parseInt( $elem.find('.number').text(), 10 );
        },
        weight : function( $elem ) {
          return parseFloat( $elem.find('.weight').text().replace( /[\(\)]/g, '') );
        },
        name : function ( $elem ) {
          return $elem.find('.name').text();
        }
		*/
      }
    });
    
	var $sortBy = $('#sort-by');
    $('#shuffle a').click(function(){
      $container.isotope('shuffle');
      $sortBy.find('.selected').removeClass('selected');
      $sortBy.find('[data-option-value="random"]').addClass('selected');
      return false;
    });
	
	
	/*Portfolio JS*/
	 // init Isotope
  var $container = $('.isotope').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
	getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function( itemElem ) {
        var weight = $( itemElem ).find('.weight').text();
        return parseFloat( weight.replace( /[\(\)]/g, '') );
      }
    }
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };

  // bind filter button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $container.isotope({ filter: filterValue });
  });

  
  // change is-checked class on buttons
  $('.filter_group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.active').removeClass('active');
      $( this ).addClass('active');
    });
  });

 
	
});


$(window).load(function(){
	// Highlight the top nav as scrolling occurs
	$('body').scrollspy({
		target: '.navbar-collapse'
	});
	//Flex slider in home section
	 $('.flexslider').flexslider({
        animation: "slide",
		direction: "vertical",
		controlNav: false,               
		directionNav: false,           
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
	/*Javascript for portfolio*/
	   var $container = $('#container');
    
    
      // add randomish size classes
      $container.find('.element').each(function(){
        var $this = $(this),
            number = parseInt( $this.find('.number').text(), 10 );
        if ( number % 7 % 2 === 1 ) {
          $this.addClass('width2');
        }
        if ( number % 3 === 0 ) {
          $this.addClass('height2');
        }
      });
    
    $container.isotope({
      itemSelector : '.element',
      masonry : {
        columnWidth : 0
      },
      masonryHorizontal : {
        rowHeight: 0
      },
      cellsByRow : {
        columnWidth : 0,
        rowHeight : 0
      },
      cellsByColumn : {
        columnWidth : 0,
        rowHeight : 0
      },
      getSortData : {
        symbol : function( $elem ) {
          return $elem.attr('data-symbol');
        },
        category : function( $elem ) {
          return $elem.attr('data-category');
        },
      /*  number : function( $elem ) {
          return parseInt( $elem.find('.number').text(), 10 );
        },
        weight : function( $elem ) {
          return parseFloat( $elem.find('.weight').text().replace( /[\(\)]/g, '') );
        },
        name : function ( $elem ) {
          return $elem.find('.name').text();
        }
		*/
      }
    });
    
    
      var $optionSets = $('#options .option-set'),
          $optionLinks = $optionSets.find('a');

      $optionLinks.click(function(){
        var $this = $(this);
        // don't proceed if already selected
        if ( $this.hasClass('selected') ) {
          return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
  
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[ key ] = value;
        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
          // changes in layout modes need extra logic
          changeLayoutMode( $this, options )
        } else {
          // otherwise, apply new options
          $container.isotope( options );
        }
        
        return false;
      });


    
      // change layout
      var isHorizontal = false;
      function changeLayoutMode( $link, options ) {
        var wasHorizontal = isHorizontal;
        isHorizontal = $link.hasClass('horizontal');

        if ( wasHorizontal !== isHorizontal ) {
          // orientation change
          // need to do some clean up for transitions and sizes
          var style = isHorizontal ? 
            { height: '80%', width: $container.width() } : 
            { width: 'auto' };
          // stop any animation on container height / width
          $container.filter(':animated').stop();
          // disable transition, apply revised style
          $container.addClass('no-transition').css( style );
          setTimeout(function(){
            $container.removeClass('no-transition').isotope( options );
          }, 100 )
        } else {
          $container.isotope( options );
        }
      }


    
      // change size of clicked element
      $container.delegate( '.element', 'click', function(){
        $(this).toggleClass('large');
        $container.isotope('reLayout');
      });

      // toggle variable sizes of all elements
      $('#toggle-sizes').find('a').click(function(){
        $container
          .toggleClass('variable-sizes')
          .isotope('reLayout');
        return false;
      });


    
      $('#insert a').click(function(){
        var $newEls = $( fakeElement.getGroup() );
        $container.isotope( 'insert', $newEls );

        return false;
      });

      $('#append a').click(function(){
        var $newEls = $( fakeElement.getGroup() );
        $container.append( $newEls ).isotope( 'appended', $newEls );

        return false;
      });


    var $sortBy = $('#sort-by');
    $('#shuffle a').click(function(){
      $container.isotope('shuffle');
      $sortBy.find('.selected').removeClass('selected');
      $sortBy.find('[data-option-value="random"]').addClass('selected');
      return false;
    });
	
	
	/*Portfolio JS*/
	 // init Isotope
  var $container = $('.isotope').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
	getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function( itemElem ) {
        var weight = $( itemElem ).find('.weight').text();
        return parseFloat( weight.replace( /[\(\)]/g, '') );
      }
    }
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };

  // bind filter button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $container.isotope({ filter: filterValue });
  });

  
  // change is-checked class on buttons
  $('.filter_group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.active').removeClass('active');
      $( this ).addClass('active');
    });
  });
 
 
    
});

$( window ).resize(function() {
	//home section image size to window size.
	var height = $(window).height();
    $(".home").css("height",height);
	$(".home_wrap").css("height",height);
	$(".home").css("max-width","100%");
	
	
	
});

 $( window ).load(function() {
	jQuery('#portfolio #filters .filter.active').click();
	////code for closing the navbar
	$('.nav').click( function() {
        $('.navbar-collapse').removeClass('in');
    });
 
 });
 
