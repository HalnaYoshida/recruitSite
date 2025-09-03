
/*----------------------------------------
 init
----------------------------------------*/



    
/*----------------------------------------
 Function
----------------------------------------*/




	//スカウト一覧でのスクロール時の挙動
	$(document).ready(function () {
		var lastScrollTop = 0;
		$(window).on('scroll', function () {
			var currentScrollTop = $(this).scrollTop();

			if (currentScrollTop > 100) { // 100px以上スクロールした場合
				if (currentScrollTop < lastScrollTop) { //上スクロール時
					$('.js_scrollUp').fadeIn();
				} else if (currentScrollTop > lastScrollTop) { //下スクロール時
					$('.js_fixTop').addClass('fixed');
					$('.js_scrollUp').fadeOut();
				}
			} else { 
				$('.js_fixTop').removeClass('fixed');
				$('.js_scrollUp').fadeOut();
			}
			lastScrollTop = currentScrollTop;
		});
	});
		//タブ選択時の挙動
	$(".md_tag").click(function () {
		$(this).toggleClass('active');
	});

	//並び替え
	$('.js_selectSort').on('click', function () {
		$(this).addClass('js_sortX');
		$(this).next('.md_list--sort').toggleClass('be_hide');
	});
	$('.js_sortX').on('click', function () {
		$('.md_list--sort').addClass('be_hide');
	});



	$(function() {
		$('.js_scoutOpen').on('click', function() {
			$(this).hide().parent().next().show(); 
		});
		$('.js_actionOpen').on('click', function() {
			$('.js_sliderTrigger').slideToggle(); 
			$(this).toggleClass('active'); 
		});
	
		$('#keep_101').on('click', function() {
			$('#keep_102').prop('checked', $(this).is(':checked'));  // checkbox1の状態に合わせてcheckbox2をオン・オフ
		});
	
		$('#keep_102').on('click', function() {
			$('#keep_101').prop('checked', $(this).is(':checked'));  // checkbox2の状態に合わせてcheckbox1をオン・オフ
		});
	
		$('.js_actionHidden').on('click', function() {
			window.location.href = 'index.html?hidden';
	
		});
	});
	

	//企業・担当者情報ドロワーの表示タブ制御

	$(function() {
		$('.recruiter.js_drawerOpen').click(function () {
			var $mdTabCompany = $('.drawer_company').find('.md_tab[data-tab="tab01"]');
			var $mdTabRecruiter = $('.drawer_company').find('.md_tab[data-tab="tab02"]');
		
			$mdTabRecruiter.addClass('active'); 
			$mdTabCompany.removeClass('active');
			$('.tab01').hide();
			$('.tab02').show();
			
		});
		$('.drawer_company').find('.js_drawerX').click(function () {
			var $mdTabCompany = $('.drawer_company').find('.md_tab[data-tab="tab01"]');
			var $mdTabRecruiter = $('.drawer_company').find('.md_tab[data-tab="tab02"]');
	
			$mdTabRecruiter.removeClass('active'); 
			$mdTabCompany.addClass('active');
			$('.tab02').hide();
			$('.tab01').show();
	
		});
	});
	


	//変数処理用の記述
	// イベントデリゲーションを使用して、動的に追加された要素にも対応

	//モーダルを開く
	$('body').on('click', '.js_modalOpen', function() {

		console.log('Button clicked!');
		event.preventDefault(); // フォーム送信を防ぐ
		var modalClass = $(this).attr('data-modal');
		$('.md_modal.' + modalClass).fadeIn();
		$('.md_modal').not('.' + modalClass).fadeOut();
	
	});
	//ハーフモーダルをスライドアップさせる
  	$('body').on('click', '.js_modalSlideUp', function() {
        console.log('Button clicked!');
		event.preventDefault(); // フォーム送信を防ぐ
		var modalClass = $(this).attr('data-modal');
		$('.md_modal.' + modalClass).addClass("md_modal--slideUp");
		$('.md_modal.' + modalClass).children('.bgLayer').show();
			
    });


	
$(function() {//辞退理由選択時のボタンの制御
	$('#reasonTxt').on('input', function() {
		if (this) { 
			$("#stopBtn").removeClass('md_btn--disable'); 
		} else {
			$("#stopBtn").addClass('md_btn--disable');
		}
	});

});
$(function() {//辞退理由選択時のテンプレ切り替え
	$('.js_txtSelect').on('change', function(){
		var selectedValue = $(this).val();  
		
		if (selectedValue === "reason1") {
			$('#reasonTxt').html("GRASグループ株式会社&NewLine;藤本 健太様&NewLine;&NewLine;ご連絡ありがとうございます。&NewLine;青山学院大学の中村と申します。&NewLine;&NewLine;～～～～～～～～～～～に興味をもっているため、&NewLine;今回は辞退させていただきます。&NewLine;&NewLine;どうぞよろしくお願いいたします。");
		} else if (selectedValue === "reason2") {
			$('#reasonTxt').html("GRASグループ株式会社&NewLine;藤本 健太様&NewLine;&NewLine;ご連絡ありがとうございます。&NewLine;青山学院大学の中村と申します。&NewLine;&NewLine;現在、～～～～～～～～～～～のため&NewLine;就職活動を行っておりません。&NewLine;&NewLine;せっかくのお誘いですが、&NewLine;今回は辞退させていただきます。&NewLine;&NewLine;どうぞよろしくお願いいたします。");
		} else if (selectedValue === "reason3") {
			$('#reasonTxt').html("GRASグループ株式会社&NewLine;藤本 健太様&NewLine;&NewLine;ご連絡ありがとうございます。&NewLine;青山学院大学の中村と申します。&NewLine;&NewLine;～～～～～～～～～のため、&NewLine;今回は辞退させていただきます。&NewLine;&NewLine;どうぞよろしくお願いいたします。");
		}
	});

});