$.fn.lazyload = function(){
	this.each(function(){
		var $self = $(this)
		, $img = $self.data('uri')
		, ev = 'inview';

		$self.bind(ev,function(event, visible){	
			if(visible === true){
				$self.css({'background-image':'url("'+$img+'")','background-size':'cover'});
			}
		});
		
	});
	return this;
}