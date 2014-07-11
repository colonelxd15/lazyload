$.fn.lazyload = function(){
	this.each(function(){
		var $self = $(this)
		, $img = $self.data('uri')
		, ev = 'inview'
		, $temp = $('<img />');

		$self.bind(ev,function(event, visible){	
			$temp.attr('src', $img);
			$temp.load(function(){
				if(visible === true){
					$self.css({'background-image':'url("'+$temp.attr('src')+'")','background-size':'cover'});
				}	
			})
		});
		
	});
	return this;
}