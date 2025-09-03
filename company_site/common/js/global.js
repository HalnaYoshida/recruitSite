


/*----------------------------------------
 init 
----------------------------------------*/

$(function(){

	// 動くラベルのフォーム用
	if($('.md_input--moveLabel').length){
	
		var labelForm = $('.md_input--moveLabel'); 

		// 入力時
		$('.md_input--moveLabel input').blur(movingLabel);
		$('.md_input--moveLabel textarea').blur(movingLabel);

		// デフォルト表示用
		labelForm.each(movingLabelDisplay)
	}

	// 所定の位置にスクロール
	$(document).on('click','.js_scrollTrigger',scrollMove);
	
	// アコーディオン
	$(document).on('click','.js_accoSwitch', accordion);

	// タブ
	$(document).on('click','.js_tab a', tabAction);

	// モーダル
	$(document).on('click', '.js_modalOpen', modalOpen);
	$(document).on('click', '.js_modalX', modalX);

	// ドロワー
	$(document).on('click','.js_drawerOpen', drawerOpen);
	$(document).on('click','.js_drawerX', drawerX);
	$(document).on('click', '.js_drawerAllX', drawerAllX);

	// radioボタンで切り替わるモーダル
	$(document).on('click', '.js_radioModal input[type=radio]', radioModal);
	
	// インフォバー
	$(document).on('click','.js_infoBarX', infoBarX);

	// ポップアップ
	$('.js_popup').click(function(){ popupOpen($(this).attr('href'),'', 900, 600, 'yes'); return false; });
	
	// ステータス変更（Select）
	$('.js_statusSelect').change(statusSelect);

	// サジェスト
	$('.js_suggestOpen').keyup(suggestOpen);
	$(document).on('click','.js_suggestX', suggestX);

	// 文字数カウント
	$('.js_txtCounter').keyup(txtCounter);

	// テキストエリアのリサイズ
	$('.js_autoResize').autoResize({
		onResize : function() { // On resize
			$(this).css({opacity:0.8});
		},
		animateCallback : function() { // After resize
			$(this).css({opacity:1});
		},
		animateDuration : 300,
		extraSpace : 0,
		limit: 500 // Max
	});
	$('.js_autoResize').trigger('change'); 

	// スイッチ型ラジオボタン（テキストあり）
	$(document).on('click','.js_switchChange',radioSwitchAction);

	// 一括チェック
	$('.js_easyCheckParent').find('input[type="checkbox"]').fastClick(easyCheckParent);
	$('.js_easyCheckChild').find('input[type="checkbox"]').fastClick(easyCheckChild);

	// 削除できるチップ
	$('.js_chipX').fastClick(chipX);

	// ？マークにマウスオーバーで吹き出し
	$('.js_balloon').on('mouseover', balloon);
	$('.js_balloon').on('mouseout', balloonX);

	// プルダウンの幅をボタンに合わせる
	sortPullDown();
	// プルダウンをクリックした時の動作
	$(document).on('click', '.js_sortBtn', sortPullDownOpen);

	// リストの：クリックでメニュー出現
	$(document).on('click', '.js_cmdLink', cmdLink);

	// 一括スカウトの学生削除
	$(document).on('click', '.js_cardRemove', cardRemove);

	// 学生検索のその他言語オープン
	$(document).on('click', '.js_slideOpen--language', slideOpenL);

	// 特性のプルダウン刻み値変更
	$('.js_changeTypePullDown').change(pulldownChange);
	
	// ボタンの波形エフェクト
  var ripple, ripples, RippleEffect,loc, cover, coversize, style, x, y, i, num;
	ripples = document.querySelectorAll('.md_btn'); //クラス名rippleの要素を取得
	RippleEffect = function(e) { 
	ripple = this;//クリックされたボタンを取得
	cover = document.createElement('span');//span作る
	coversize = ripple.offsetWidth;//要素の幅を取得
	loc = ripple.getBoundingClientRect();//絶対座標の取得
	x = e.pageX - loc.left - window.pageXOffset - (coversize / 2);
	y = e.pageY - loc.top - window.pageYOffset - (coversize / 2);
	pos = 'top:' + y + 'px; left:' + x + 'px; height:' + coversize + 'px; width:' + coversize + 'px;';
	ripple.appendChild(cover);
	cover.setAttribute('style', pos);
	cover.setAttribute('class', 'wave');
	setTimeout(function() {
		var list = document.getElementsByClassName( "wave" ) ;
		for(var i =list.length-1;i>=0; i--){//末尾から順にすべて削除
			list[i].parentNode.removeChild(list[i]);
	}}, 2000)};
	for (i = 0, num = ripples.length; i < num; i++) {
		ripple = ripples[i];
		ripple.addEventListener('mousedown', RippleEffect);
	}

	// ボタンエリアで消えるバー
	if($('.js_fixBarHide').length){ $(window).scroll(fixBarHide); }

	// Polifill / Sticky Header
	var elem = document.querySelectorAll('.md_header');
	Stickyfill.add(elem);

});

/*----------------------------------------
 Function 
----------------------------------------*/


// 所定の位置にスクロール
var scrollMove = function(){
		
	var attr = $(this).attr('name');
	if($(this).attr('href') == '#toTop'){ // toTopならばページの先頭へ
		var HashOffset= 0;
	}else if($(this).attr('href').indexOf('#',0) == 0){ // ハッシュがあったらそのハッシュ先へ
		var Hash = $(this.hash);
		var HashOffset = $(Hash).offset().top;
	}
	// スクロールする
	$("html,body").animate({ scrollTop: HashOffset }, 800);
	return false;

}


// 動くラベルのフォーム用
var movingLabel = function(){ // 入力時

	var valNum = $(this).val().length; 

	if(valNum > 0){ $(this).addClass('js_inputted'); }
	else{ $(this).removeClass('js_inputted'); }

}
var movingLabelDisplay = function(){ // デフォルト表示用

	var input = $(this).find('input', 'textarea'); 
	var valNum = input.val().length; 

	if(valNum > 0){ input.addClass('js_inputted'); }
	else{ input.removeClass('js_inputted'); }

}


// アコーディオン
var accordion = function(){

	var hideContents = $(this).next('.md_accoContent');

	if($(this).hasClass('js_open')){
		$(this).removeClass('js_open');
		hideContents.slideUp();
	}else{
		$(this).addClass('js_open');
		hideContents.slideDown();
	}
	return false;

}


// $(function() {
//   $('.menuList .js_menuOpen').click(function() {
//     var $this = $(this);
//     var $menuInner = $this.siblings('.menuInner'); // .menuInnerを兄弟要素から探す

//     // 現在のメニューをトグルする
//     $menuInner.slideToggle();
//     $this.toggleClass('open');

//     // 他のメニューを閉じる
//     $('.menuList .js_menuOpen').not($this).each(function() {
//       $(this).siblings('.menuInner').slideUp();
//       $(this).removeClass('open');
//     });
//   });
// });



// タブ
var tabAction = function(){

	var tabBase = $(this).parents('.js_tab'); 
	var tgtClass = $(this).attr('data-tab');
	var contentSet = tabBase.next('.tabContentSet');

	tabBase.find('.tab--active').removeClass('tab--active');
	$(this).parent('.tab').addClass('tab--active');
	contentSet.find('.tabContent').hide();
	contentSet.find('.tabContent.'+tgtClass+'').fadeIn();

	return false;
}

// モーダル
var modalOpen = function () {
	//e.preventDefault(); // フォーム送信を防ぐ
	var modalClass = $(this).attr('data-modal');
	$('.md_modal.' + modalClass).show();
	$('.md_modal').not('.' + modalClass).hide();
}

var modalX = function () {
	$(".md_modal").hide();
}

// radioボタンで切り替わるモーダル
var radioModal = function () {
	var radioname = $(this).attr('name');
	var modalbutton = $(this).parents('.js_radioModal').find('button')
	var modalClass = $('input[name="' + radioname + '"]:checked').attr('data-modal');
	modalbutton.off('click').on('click', function () {
		$('.md_modal.' + modalClass).show();
		$('.md_modal').not('.' + modalClass).hide();
	});
}


// ドロワー
var drawerOpen =	function(){

	var tgtClass = $(this).attr('data-drawer');
	$('.md_drawer.'+tgtClass+'').addClass('show');
	
	
	// No Scroll
	current_scrollY = $( window ).scrollTop(); 
	$( 'body' ).css({ position: 'fixed', width: '100%', top: -1 * current_scrollY});

	return false;
}
var drawerX = function(){
	$(this).parents('.md_drawer').removeClass('show');
	$( 'body' ).attr( { style: '' } ); 
	$( 'html, body' ).prop( { scrollTop: current_scrollY } );
	return false;
}
var drawerAllX = function () {
	$('.md_drawer').removeClass('show');
	$('body').attr({ style: '' });
	$('html, body').prop({ scrollTop: current_scrollY });
	return false;
}

// インフォバー
var infoBarX = function(){
	$(this).parents('.md_infoBar').fadeOut();
	return false;
}

// ポップアップ
var popupOpen = function(toLink, name, width, height, scrollbar){

	var windowName = 'win_'+name;
	windowName = window.open(toLink,name,'scrollbars='+scrollbar); 
	windowName.resizeTo(width,height);
	windowName.focus();
	return false;
					
}

// ステータス変更（Select）
var statusSelect = function(){
	
	var tgtClass = $(this).find('option:selected').attr('data-status');
	$(this).removeClass('md_statusSelect--on md_statusSelect--off md_statusSelect--alert md_statusSelect--important').addClass(tgtClass);
	
}


// サジェスト
var suggestOpen = function(){
	$(this).next('.md_list--suggest').slideDown();
}
var suggestX = function(){
	$('.md_list--suggest').hide();
	return false;
}


// 文字数カウント
var txtCounter = function(){

	var txtNum = $(this).val().length;
	var tgtClass = $(this).attr('data-count');
	var counter = $('.md_counter.'+tgtClass+'');
	var txtLimit = $(this).attr('data-limit');

	counter.find('em.num').text(txtNum);

	if(txtNum > txtLimit){ 
		counter.addClass('md_counter--limit');
		$(this).addClass('md_error');
	}else{
		counter.removeClass('md_counter--limit');
		$(this).removeClass('md_error');
	}

}


// スイッチ型ラジオボタン（テキストあり）
var radioSwitchAction = function(){
	
	var txton = $(this).attr('data-swon');
	var txtoff = $(this).attr('data-swoff');
	var tgtText = $(this).next('label'); 

	if($(this).is(':checked')) { 

		tgtText.text(txton);

	}else{ 

		tgtText.text(txtoff);

	}

}

// 一括チェック
var easyCheckParent = function(){

	var parentCheck = $(this).parents('.js_easyCheckParent'); 
	var childInput = parentCheck.next('.js_easyCheckChild').find('input'); 

	if($(this).is(':checked')) { childInput.prop('checked', true);
		}else{ childInput.prop('checked', false);
	}

}
var easyCheckChild = function(){

	var childCheck = $(this).parents('.js_easyCheckChild').find('.check'); 
	var childCheckNum = childCheck.length; 
	var checkedNum = childCheck.find('input:checked').length; 
	var parentCheck = $(this).parents(".js_easyCheckChild").prev('.js_easyCheckParent').find('input[type="checkbox"]');

	if(checkedNum < childCheckNum){ parentCheck.prop('checked',false);
		}else if(checkedNum == childCheckNum){ parentCheck.prop('checked',true);
	}
}

// 削除できるチップ
var chipX = function(){
	$(this).parent('.md_chip').hide();
	return false;
}

// ボタンエリアで消えるバー
var fixBarHide = function () {

	scrollH = $(document).height();
	scrollP = $(window).height() + $(window).scrollTop(); 
	footerH = $("#footer").innerHeight(); 

	if ( scrollH - scrollP  <= footerH + 150){
		$('.md_fixBar').hide();
	}else{
		$('.md_fixBar').fadeIn();
	}
	return false;

}

// ？マークにマウスオーバーで吹き出し
function balloon() { $(this).find('.fukidashi').addClass('show'); }
function balloonX() { $(this).find('.fukidashi').removeClass('show'); }

var sortPullDown = function () {
	// // sortBtnの幅を取得してSortInnerに反映する
	// $('.js_sortBtn').each(function (index) {
	// 	$(this).next('.sortInner').attr('id', 'sortid-' + (index + 1));
	// });

	// // 2回目のループ: "sortBtn" の幅を取得して "sortInner" に反映
	// $('.js_sortBtn').each(function (index) {
	// 	// "sortBtn" の幅を取得
	// 	var sourceWidth = $(this).outerWidth();

	// 	// 対応する "sortInner" の ID を指定して幅を設定
	// 	$('#sortid-' + (index + 1)).outerWidth(sourceWidth);
	// });
}

// プルダウンを開く
var sortPullDownOpen = function () {
	const inner = $(this).next('.sortInner');
	
	if (inner.hasClass('show')) {
		inner.removeClass('show').addClass('hide');
	} else if (inner.hasClass('hide')) {
		inner.removeClass('hide').addClass('show');
	} else {
		inner.addClass('show');
	}
	$('.sortInner').not(inner).removeClass('show');

	const offset = inner.offset();
	const x = offset.left;
	const width = inner.outerWidth();
	const windowWidth = $(window).width();
	if (x + width > windowWidth) {
		inner.addClass('overflow');
	}
}

// カードを消す
var cardRemove = function () {
	const $card = $(this).parents('.studentInfo');
	$card.addClass('remove');
	setTimeout(function () {
		$card.remove();
	}, 500); 
}

var slideOpenL = function () {
	$otherLanguage = $(this).parents('tbody').siblings('.otherLanguage')
	$otherLanguage.addClass('show');
	$(this).remove();
}

// リストの：クリックでメニュー出現
var cmdLink = function (event) {
	event.stopPropagation();

	// 次の兄弟要素で '.cmdActArea' クラスのものを取得
	var $inner = $(this).next('.cmdActArea');

	// 現在のクラスに応じて表示/非表示をトグル
	if ($inner.hasClass('show')) {
		$inner.removeClass('show').addClass('hide');
	} else {
		// 他の表示中のメニューを非表示にする
		$('.cmdActArea.show').not($inner).removeClass('show').addClass('hide');

		// 現在のメニューを表示する
		$inner.removeClass('hide').addClass('show');
	}
}

// 特性のプルダウン刻み値変更
function pulldownChange() { 
	const selectedValue = $(this).find('option:selected').text();
	const type3090 = $(this).parent('.md_select').siblings('.js_changeTypePullDown30-90');
	const type3070 = $(this).parent('.md_select').siblings('.js_changeTypePullDown30-70');
	const type15 = $(this).parent('.md_select').siblings('.js_changeTypePullDown1-5');
	type3090.hide();
	type3070.hide();
	type15.hide();
	if (selectedValue.includes('偏差値')) {	
		type3070.show();
	} else if (selectedValue.includes('満点100')) {
		type3090.show();
	} else if (selectedValue.includes('最大5')) {
		type15.show();
	}
}

/*----------------------------------------
 Original
----------------------------------------*/

$(document).on('click', function () {
	// 表示中のメニューを非表示にする
	$('.cmdActArea.show').removeClass('show').addClass('hide');
});


// タブ
$(document).ready(function () {
	$('.md_tabSet').each(function () {
		const $tabSet = $(this);

		// イベントデリゲーションを使用して動的タブに対応
		$tabSet.on('click', '.md_tab.js_tabSelect', function () {
			const tabClass = $(this).data('tab');

			// アクティブクラスの管理
			$tabSet.find('.md_tab.js_tabSelect').removeClass('active');
			$(this).addClass('active');

			// テキストエリアの表示・非表示
			$tabSet.find('.textArea').hide(); // 全てのテキストエリアを隠す
			$tabSet.find(`.${tabClass}`).show(); // クリックされたタブに対応するテキストエリアを表示
		});

		// 初期状態の設定
		$tabSet.find('.md_tab.js_tabSelect').first().click(); // 最初のタブをクリックして初期状態を設定
	});
});


// スナックバーA
$(document).ready(function() {
  // .js_snackBar 要素にクリックイベントを追加
  $('.js_snackBar').click(function() {
    // クリックされた要素のデータ属性から対応する .md_snackBar のクラスを取得
    var targetClass = $(this).data('target');
    $('.md_snackBar.' + targetClass).addClass('show');
    
    // 3秒後に .show クラスを削除して非表示にする
    setTimeout(function() {
      $('.md_snackBar.' + targetClass).removeClass('show');
    }, 4500); // 4500ミリ秒 = 4.5秒
  });
});

$(document).on('click', '.md_snackBar .js_snackBarX', function() {
    $('.md_snackBar').removeClass('show');
});

// スナックバーB
var URL = location.href;
var URLSet = URL.split('?');

$(function () {
	if (URLSet[1]) {
		var snackBarClass = '.md_snackBar.' + URLSet[1].replace('snackBar', 'Bar');
		$(snackBarClass).addClass('show');
		setTimeout(function () {
			$('.md_snackBar').removeClass('show');
		}, 4500); // 4500ミリ秒 = 4.5秒
	}
});

$(document).on('click', '.md_snackBar .js_snackBarX', function() {
    $('.md_snackBar').removeClass('show');
});

// 複数選択のプルダウン
/* $(document).ready(function() {
	$('.js_selectOpen').click(function(event) {
			$(this).closest('.multiSelect').toggleClass('hide');
			$('.js_selectOpen').not(this).next('.multiSelect').addClass('hide');
	});

	// ドキュメントのどこかをクリックしたときに、開いている .multiSelect を閉じる
	$(document).click(function(event) {
			if (!$(event.target).closest('.multiSelect, .js_selectOpen').length) {
					$('.multiSelect').addClass('hide');
			}
	});
});

$(".js_selectOpen").click(function (e) {
	// クリックされた要素に対応する .multiSelect を取得
	var $multiSelect = $(this).siblings('.multiSelect');

	// .multiSelect に .hide クラスがあれば削除、なければ追加
	if ($multiSelect.hasClass("hide")) {
		$multiSelect.removeClass("hide");
	} else {
		$multiSelect.addClass("hide");
	}

	e.stopPropagation(); // バブリングを防ぐ
}); */

$(document).ready(function () {
	const suggestions = [
		'京都大学大学院',
		'京都大学',
		'京都工芸繊維大学',
		'京都外国語大学',
		'京都産業大学',
		'京都女子大学',
		'東京都市大学',
		'京都造形芸術大学'
	];

	$('#autocomplete').on('input', function () {
		const input = $(this).val().toLowerCase();
		$('#suggestions').empty();

		if (input.length === 0) {
			return;
		}

		const filteredSuggestions = suggestions.filter(function (item) {
			return item.toLowerCase().includes(input);
		});

		filteredSuggestions.forEach(function (suggestion) {
			$('#suggestions').append('<li>' + suggestion + '</li>');
		});
	});

	const suggestionsFaculty = [
		'経済学部',
		'教育学部',
		'文学部',
		'経営学部',
		'工学部',
		'法学部',
		'医学部',
		'薬学部',
		'理学部',
		'理工学部',
		'保健医療学部',
		'人文学部',
		'国際学部',
		'農学部',
		'人間科学部',
		'外国語学部',
		'商学部',
		'健康科学部',
		'社会学部',
		'看護学部'
	];

	$('#autocompleteFaculty').on('input', function () {
		const input = $(this).val().toLowerCase();
		$('#suggestionsFaculty').empty();

		if (input.length === 0) {
			return;
		}

		const filteredSuggestionsFaculty = suggestionsFaculty.filter(function (item) {
			return item.toLowerCase().includes(input);
		});

		filteredSuggestionsFaculty.forEach(function (suggestionsFaculty) {
			$('#suggestionsFaculty').append('<li>' + suggestionsFaculty + '</li>');
		});
	});

	$('#suggestions').on('click', 'li', function () {
		$('#autocomplete').val($(this).text());
		$('#suggestions').empty();
	});

	$('#suggestionsFaculty').on('click', 'li', function () {
		$('#autocompleteFaculty').val($(this).text());
		$('#suggestionsFaculty').empty();
	});

	$(document).on('click', function (event) {
		if (!$(event.target).closest('#autocomplete, #suggestions').length) {
			$('#suggestions').empty();
		}
	});
	$(document).on('click', function (event) {
		if (!$(event.target).closest('#autocompleteFaculty, #suggestionsFaculty').length) {
			$('#suggestionsFaculty').empty();
		}
	});

	$('.heartSet').on('mouseover', function () {
		$(this).find('.fukidashi').addClass('show');
	}).on('mouseout', function () {
		$(this).find('.fukidashi').removeClass('show');
	});
});

$(function () {
	// プルダウン変更時に遷移
	$('select[name=pulldownlink]').change(function () {
		if ($(this).val() != '') {
			window.location.href = $(this).val();
		}
	});
});

// ドロワー
// $(document).ready(function () {
// 	$('.js_drawerOpen').click(function (event) {
// 		event.preventDefault(); // フォーム送信を防ぐ
// 		var drawerClass = $(this).attr('data-drawer');

// 		// スライドインアニメーションを適用
// 		$('.md_drawer.' + drawerClass).addClass('show');
// 		$('.md_drawer').not('.' + drawerClass).removeClass('show');
// 	});
// });

// // ドロワーを消す
// $(".js_drawerX").click(function () {
// 	$(".md_drawer").removeClass('show');
// });


/*----------------------------------------
 Library 
----------------------------------------*/


/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuart',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	}
});


/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-flexbox_legacy-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-cssclassprefix:mod!
 */
;window.Modernizr=function(a,b,c){function A(a){j.cssText=a}function B(a,b){return A(n.join(a+";")+(b||""))}function C(a,b){return typeof a===b}function D(a,b){return!!~(""+a).indexOf(b)}function E(a,b){for(var d in a){var e=a[d];if(!D(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function F(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:C(f,"function")?f.bind(d||b):f}return!1}function G(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return C(b,"string")||C(b,"undefined")?E(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),F(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={},s={},t={},u=[],v=u.slice,w,x=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["­",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},y={}.hasOwnProperty,z;!C(y,"undefined")&&!C(y.call,"undefined")?z=function(a,b){return y.call(a,b)}:z=function(a,b){return b in a&&C(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=v.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(v.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(v.call(arguments)))};return e}),r.flexbox=function(){return G("flexWrap")},r.rgba=function(){return A("background-color:rgba(150,255,150,.5)"),D(j.backgroundColor,"rgba")},r.hsla=function(){return A("background-color:hsla(120,40%,100%,.5)"),D(j.backgroundColor,"rgba")||D(j.backgroundColor,"hsla")},r.multiplebgs=function(){return A("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},r.backgroundsize=function(){return G("backgroundSize")},r.borderimage=function(){return G("borderImage")},r.borderradius=function(){return G("borderRadius")},r.boxshadow=function(){return G("boxShadow")},r.textshadow=function(){return b.createElement("div").style.textShadow===""},r.opacity=function(){return B("opacity:.55"),/^0.55$/.test(j.opacity)},r.cssanimations=function(){return G("animationName")},r.csscolumns=function(){return G("columnCount")},r.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return A((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),D(j.backgroundImage,"gradient")},r.cssreflections=function(){return G("boxReflect")},r.csstransforms=function(){return!!G("transform")},r.csstransforms3d=function(){var a=!!G("perspective");return a&&"webkitPerspective"in g.style&&x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},r.csstransitions=function(){return G("transition")},r.fontface=function(){var a;return x('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},r.generatedcontent=function(){var a;return x(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a};for(var H in r)z(r,H)&&(w=H.toLowerCase(),e[w]=r[H](),u.push((e[w]?"":"no-")+w));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)z(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" mod-"+(b?"":"no-")+a),e[a]=b}return e},A(""),i=k=null,e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.testProp=function(a){return E([a])},e.testAllProps=G,e.testStyles=x,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" mod-js mod-"+u.join(" mod-"):""),e}(this,this.document); 



/**
 * jQuery.fastClick.js
 *
 * Work around the 300ms delay for the click event in some mobile browsers.
 *
 * Code based on <http://code.google.com/mobile/articles/fast_buttons.html>
 *
 * @usage
 * $('button').fastClick(function() {alert('clicked!');});
 *
 * @license MIT
 * @author Dave Hulbert (dave1010)
 * @version 1.0.0 2013-01-17
 */

/*global document, window, jQuery, Math */

(function($) {

$.fn.fastClick = function(handler) {
	return $(this).each(function(){
		$.FastButton($(this)[0], handler);
	});
};

$.FastButton = function(element, handler) {
	var startX, startY;

	var reset = function() {
		$(element).unbind('touchend');
		$("body").unbind('touchmove.fastClick');
	};

	var onClick = function(event) {
		event.stopPropagation();
		reset();
		handler.call(this, event);

		if (event.type === 'touchend') {
			$.clickbuster.preventGhostClick(startX, startY);
		}
	};

	var onTouchMove = function(event) {
		if (Math.abs(event.originalEvent.touches[0].clientX - startX) > 10 ||
			Math.abs(event.originalEvent.touches[0].clientY - startY) > 10) {
			reset();
		}
	};

	var onTouchStart = function(event) {
		event.stopPropagation();

		$(element).bind('touchend', onClick);
		$("body").bind('touchmove.fastClick', onTouchMove);

		startX = event.originalEvent.touches[0].clientX;
		startY = event.originalEvent.touches[0].clientY;
	};

	$(element).bind({
		touchstart: onTouchStart,
		click: onClick
	});
};

$.clickbuster = {
	coordinates: [],

	preventGhostClick: function(x, y) {
		$.clickbuster.coordinates.push(x, y);
		window.setTimeout($.clickbuster.pop, 2500);
	},

	pop: function() {
		$.clickbuster.coordinates.splice(0, 2);
	},

	onClick: function(event) {
		var x, y, i;
		for (i = 0; i < $.clickbuster.coordinates.length; i += 2) {
			x = $.clickbuster.coordinates[i];
			y = $.clickbuster.coordinates[i + 1];
			if (Math.abs(event.clientX - x) < 25 && Math.abs(event.clientY - y) < 25) {
				event.stopPropagation();
				event.preventDefault();
			}
		}
	}
};

$(function(){
	if (document.addEventListener){
		document.addEventListener('click', $.clickbuster.onClick, true);
	} else if (document.attachEvent){
		// for IE 7/8
		document.attachEvent('onclick', $.clickbuster.onClick);
	}
});

}(jQuery));

/*
 * jQuery autoResize (textarea auto-resizer)
 * @copyright James Padolsey http://james.padolsey.com
 * @version 1.04
 */

(function(a){a.fn.autoResize=function(j){var b=a.extend({onResize:function(){},animate:true,animateDuration:150,animateCallback:function(){},extraSpace:20,limit:1000},j);this.filter('textarea').each(function(){var c=a(this).css({resize:'none','overflow-y':'hidden'}),k=c.height(),f=(function(){var l=['height','width','lineHeight','textDecoration','letterSpacing'],h={};a.each(l,function(d,e){h[e]=c.css(e)});return c.clone().removeAttr('id').removeAttr('name').css({position:'absolute',top:0,left:-9999}).css(h).attr('tabIndex','-1').insertBefore(c)})(),i=null,g=function(){f.height(0).val(a(this).val()).scrollTop(10000);var d=Math.max(f.scrollTop(),k)+b.extraSpace,e=a(this).add(f);if(i===d){return}i=d;if(d>=b.limit){a(this).css('overflow-y','');return}b.onResize.call(this);b.animate&&c.css('display')==='block'?e.stop().animate({height:d},b.animateDuration,b.animateCallback):e.height(d)};c.unbind('.dynSiz').bind('keyup.dynSiz',g).bind('keydown.dynSiz',g).bind('change.dynSiz',g)});return this}})(jQuery);


/*!
  * Stickyfill – `position: sticky` polyfill
  * v. 2.1.0 | https://github.com/wilddeer/stickyfill
  * MIT License
  */
!function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function d(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}function e(a){return parseFloat(a)||0}function f(a){for(var b=0;a;)b+=a.offsetTop,a=a.offsetParent;return b}function g(){function c(){a.pageXOffset!=m.left?(m.top=a.pageYOffset,m.left=a.pageXOffset,p.refreshAll()):a.pageYOffset!=m.top&&(m.top=a.pageYOffset,m.left=a.pageXOffset,n.forEach(function(a){return a._recalcPosition()}))}function d(){f=setInterval(function(){n.forEach(function(a){return a._fastCheck()})},500)}function e(){clearInterval(f)}if(!k){k=!0,c(),a.addEventListener("scroll",c),a.addEventListener("resize",p.refreshAll),a.addEventListener("orientationchange",p.refreshAll);var f=void 0,g=void 0,h=void 0;"hidden"in b?(g="hidden",h="visibilitychange"):"webkitHidden"in b&&(g="webkitHidden",h="webkitvisibilitychange"),h?(b[g]||d(),b.addEventListener(h,function(){b[g]?e():d()})):d()}}var h=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),i=!1,j="undefined"!=typeof a;j&&a.getComputedStyle?!function(){var a=b.createElement("div");["","-webkit-","-moz-","-ms-"].some(function(b){try{a.style.position=b+"sticky"}catch(a){}return""!=a.style.position})&&(i=!0)}():i=!0;var k=!1,l="undefined"!=typeof ShadowRoot,m={top:null,left:null},n=[],o=function(){function g(a){if(c(this,g),!(a instanceof HTMLElement))throw new Error("First argument must be HTMLElement");if(n.some(function(b){return b._node===a}))throw new Error("Stickyfill is already applied to this node");this._node=a,this._stickyMode=null,this._active=!1,n.push(this),this.refresh()}return h(g,[{key:"refresh",value:function(){if(!i&&!this._removed){this._active&&this._deactivate();var c=this._node,g=getComputedStyle(c),h={position:g.position,top:g.top,display:g.display,marginTop:g.marginTop,marginBottom:g.marginBottom,marginLeft:g.marginLeft,marginRight:g.marginRight,cssFloat:g.cssFloat};if(!isNaN(parseFloat(h.top))&&"table-cell"!=h.display&&"none"!=h.display){this._active=!0;var j=c.style.position;"sticky"!=g.position&&"-webkit-sticky"!=g.position||(c.style.position="static");var k=c.parentNode,m=l&&k instanceof ShadowRoot?k.host:k,n=c.getBoundingClientRect(),o=m.getBoundingClientRect(),p=getComputedStyle(m);this._parent={node:m,styles:{position:m.style.position},offsetHeight:m.offsetHeight},this._offsetToWindow={left:n.left,right:b.documentElement.clientWidth-n.right},this._offsetToParent={top:n.top-o.top-e(p.borderTopWidth),left:n.left-o.left-e(p.borderLeftWidth),right:-n.right+o.right-e(p.borderRightWidth)},this._styles={position:j,top:c.style.top,bottom:c.style.bottom,left:c.style.left,right:c.style.right,width:c.style.width,marginTop:c.style.marginTop,marginLeft:c.style.marginLeft,marginRight:c.style.marginRight};var q=e(h.top);this._limits={start:n.top+a.pageYOffset-q,end:o.top+a.pageYOffset+m.offsetHeight-e(p.borderBottomWidth)-c.offsetHeight-q-e(h.marginBottom)};var r=p.position;"absolute"!=r&&"relative"!=r&&(m.style.position="relative"),this._recalcPosition();var s=this._clone={};s.node=b.createElement("div"),d(s.node.style,{width:n.right-n.left+"px",height:n.bottom-n.top+"px",marginTop:h.marginTop,marginBottom:h.marginBottom,marginLeft:h.marginLeft,marginRight:h.marginRight,cssFloat:h.cssFloat,padding:0,border:0,borderSpacing:0,fontSize:"1em",position:"static"}),k.insertBefore(s.node,c),s.docOffsetTop=f(s.node)}}}},{key:"_recalcPosition",value:function(){if(this._active&&!this._removed){var a=m.top<=this._limits.start?"start":m.top>=this._limits.end?"end":"middle";if(this._stickyMode!=a){switch(a){case"start":d(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:this._offsetToParent.top+"px",bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"middle":d(this._node.style,{position:"fixed",left:this._offsetToWindow.left+"px",right:this._offsetToWindow.right+"px",top:this._styles.top,bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"end":d(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:"auto",bottom:0,width:"auto",marginLeft:0,marginRight:0})}this._stickyMode=a}}}},{key:"_fastCheck",value:function(){this._active&&!this._removed&&(Math.abs(f(this._clone.node)-this._clone.docOffsetTop)>1||Math.abs(this._parent.node.offsetHeight-this._parent.offsetHeight)>1)&&this.refresh()}},{key:"_deactivate",value:function(){var a=this;this._active&&!this._removed&&(this._clone.node.parentNode.removeChild(this._clone.node),delete this._clone,d(this._node.style,this._styles),delete this._styles,n.some(function(b){return b!==a&&b._parent&&b._parent.node===a._parent.node})||d(this._parent.node.style,this._parent.styles),delete this._parent,this._stickyMode=null,this._active=!1,delete this._offsetToWindow,delete this._offsetToParent,delete this._limits)}},{key:"remove",value:function(){var a=this;this._deactivate(),n.some(function(b,c){if(b._node===a._node)return n.splice(c,1),!0}),this._removed=!0}}]),g}(),p={stickies:n,Sticky:o,forceSticky:function(){i=!1,g(),this.refreshAll()},addOne:function(a){if(!(a instanceof HTMLElement)){if(!a.length||!a[0])return;a=a[0]}for(var b=0;b<n.length;b++)if(n[b]._node===a)return n[b];return new o(a)},add:function(a){if(a instanceof HTMLElement&&(a=[a]),a.length){for(var b=[],c=function(c){var d=a[c];return d instanceof HTMLElement?n.some(function(a){if(a._node===d)return b.push(a),!0})?"continue":void b.push(new o(d)):(b.push(void 0),"continue")},d=0;d<a.length;d++){c(d)}return b}},refreshAll:function(){n.forEach(function(a){return a.refresh()})},removeOne:function(a){if(!(a instanceof HTMLElement)){if(!a.length||!a[0])return;a=a[0]}n.some(function(b){if(b._node===a)return b.remove(),!0})},remove:function(a){if(a instanceof HTMLElement&&(a=[a]),a.length)for(var b=function(b){var c=a[b];n.some(function(a){if(a._node===c)return a.remove(),!0})},c=0;c<a.length;c++)b(c)},removeAll:function(){for(;n.length;)n[0].remove()}};i||g(),"undefined"!=typeof module&&module.exports?module.exports=p:j&&(a.Stickyfill=p)}(window,document);