var keys = '   123456789QWERTYUIOPASDFGHJKLZXCVBNM'.split(''), // so'zlar
		beginTime,
		started = false,
		stroken = 0,
		current;

reset.addEventListener( 'click', function(){
	
	content.contentEditable = true;
	content.textContent = '';
	
	reset.textContent = 'Keyingisi';
	started = false;
	
	main.style.setProperty( 'background-color', '#eee' )
	
	setCurrent();
	stroken = 0;
});
content.addEventListener( 'keydown', function(e){
	
	if( !started ){
		
		started = true;
		beginTime = Date.now();
	}
	
	++stroken;
	
	
	if( e.keyCode === 13 ){ // return key
		
		if( content.textContent === toImitate.textContent )
			setCurrent();
		else
			--stroken;
		
		e.preventDefault();
	} else if( e.keyCode === 8 ) --stroken; // delete
});
function setCurrent(){
	
	current = '';
	
	var returnChance = 3 / keys.length,
			max = 20;
	
	while( ( --max > 0 && Math.random() > returnChance ) || max > 15 )
		current += keys[ ( Math.random() * keys.length ) |0 ]
	
	toImitate.textContent = current;
	content.textContent = '';
}

var interval = window.setInterval( function(){
	
	if( started ){
		
	main.style.setProperty( 'background-color', content.textContent === toImitate.textContent.substring( 0, content.textContent.length ) ? '#dfd' : '#fdd' )
		
		var span = ( Date.now() - beginTime )
				min = span / 60000;
		
		kpm.textContent = ( stroken / min ) |0;
		wpm.textContent = ( stroken / min / 5 ) |0;
		time.textContent = ( min | 0 ) + ':' + ( ( ( span % 60000 ) / 1000 ) |0 );
	}
}, 100 )