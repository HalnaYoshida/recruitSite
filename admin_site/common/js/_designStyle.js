

/*----------------------------------------
 init 
----------------------------------------*/

$(function(){ 

	// View Code
	$('.js_codeView').click(viewCode);

	// モーダル内のソース、ワンクリックで全選択
  $('.md_modal--code').find('textarea').focus(modalOneClick);

	// フォントサイズ
  $('.typoList').find('.typo').each(function(){
	
		var size = $(this).find('.word').css('font-size');
		
		$(this).find('.data').text(size);
		
	
	});

});


/*----------------------------------------
 Function 
----------------------------------------*/

// View Code
var viewCode = function(){

	var TgtElment = $(this).parents('.component');
	var source = TgtElment.find('.code').html();

	var modal = $('.md_modal--code');
	
	modal.addClass('md_modal--show');
	modal.find('.preview').html(source);
	modal.find('.code').text(source);
	
	return false; 
	
}


// モーダル内のソース、ワンクリックで全選択
var modalOneClick = function(){
	$(this).select();

}