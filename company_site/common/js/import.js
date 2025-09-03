$(document).ready(function () {
    // 全ての非同期リクエストが完了するのを待つ
    $.when(
        $.get('/company_site/navi.html'),
        $.get('/company_site/scout/drawer-solo-001.html'),
        $.get('/company_site/scout/drawer-solo-002.html'),
        $.get('/company_site/scout/drawer-solo-003.html'),
        $.get('/company_site/scout/drawer-scoutSolo-001.html'),
        $.get('/company_site/scout/drawer-scoutSolo-002.html'),
        $.get('/company_site/scout/drawer-scoutSolo-003.html'),
        $.get('/company_site/scout/drawer-requestSolo-001.html'),
        $.get('/company_site/scout/drawer-requestSolo-002.html'),
        $.get('/company_site/scout/drawer-requestSolo-003.html'),
        $.get('/company_site/scout/drawer-manageSolo-001.html'),
        $.get('/company_site/scout/drawer-manageSolo-002.html'),
        $.get('/company_site/scout/drawer-manageSolo-003.html'),
        $.get('/company_site/scout/drawer-batch-001.html'),
        $.get('/company_site/scout/drawer-scoutBatch-001.html'),
        $.get('/company_site/scout/modal-solo-001.html'),
        $.get('/company_site/scout/modal-solo-002.html'),
        $.get('/company_site/scout/modal-solo-003.html'),
        $.get('/company_site/scout/modal-solo-004.html')
    ).done(function (...responses) {
        const htmlClasses = [
            '#navi',
            '.drawer-solo-001',
            '.drawer-solo-002',
            '.drawer-solo-003',
            '.drawer-scoutSolo-001',
            '.drawer-scoutSolo-002',
            '.drawer-scoutSolo-003',
            '.drawer-requestSolo-001',
            '.drawer-requestSolo-002',
            '.drawer-requestSolo-003',
            '.drawer-manageSolo-001',
            '.drawer-manageSolo-002',
            '.drawer-manageSolo-003',
            '.drawer-batch-001',
            '.drawer-scoutBatch-001',
            '.modal-solo-001',
            '.modal-solo-002',
            '.modal-solo-003',
            '.modal-solo-004'
        ];

        responses.forEach((response, index) => {
            $(htmlClasses[index]).html(response[0]);
        });

        // 関数の呼び出し
        sidemenu();
        mainfunction();
        graphorder();
    });
});

// サイドメニュー呼び出し後に行う
var sidemenu = function () {
    var pathName = location.pathname;
    var filenameOnly = pathName.match(/.+\/(.+?)\.[a-z]+([\?#;].*)?$/)[1];
    var prefix = filenameOnly.split("_")[0];

    // フォルダ名が合致する親メニューを開く
    var folderName = pathName.split("/")[2];
    $('.js_navi_' + folderName).addClass('selected open').next('.menuInner').addClass('open');

    // URLの前方（_まで）が合致したリンクをアクティブに
    $('.menuInner a[href*="' + prefix + '"], .menuCell a[href*="' + prefix + '"], .subMenuArea a[href*="' + prefix + '"]').addClass('selected');

    // サイドメニューのトグル機能
    $('.menuList').on('click', '.js_menuOpen', function () {
        var $this = $(this);
        var $menuInner = $this.siblings('.menuInner');

        // 現在のメニューをトグル
        $menuInner.slideToggle();
        $this.toggleClass('open');

        // 他のメニューを閉じる
        $('.menuList .js_menuOpen').not($this).each(function () {
            $(this).siblings('.menuInner').slideUp();
            $(this).removeClass('open');
        });
    });
}

var mainfunction = function () {
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
    $('.js_selectOpen').click(function (event) {
        $(this).closest('.multiSelect').toggleClass('hide');
        $('.js_selectOpen').not(this).next('.multiSelect').addClass('hide');
    });

    // ドキュメントのどこかをクリックしたときに、開いている .multiSelect を閉じる
    $(document).click(function (event) {
        if (!$(event.target).closest('.multiSelect, .js_selectOpen').length) {
            $('.multiSelect').addClass('hide');
        }
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
    });
    // .js_snackBar 要素にクリックイベントを追加
    $('.js_snackBar').click(function () {
        // クリックされた要素のデータ属性から対応する .md_snackBar のクラスを取得
        var targetClass = $(this).data('target');
        $('.md_snackBar.' + targetClass).addClass('show');

        // 3秒後に .show クラスを削除して非表示にする
        setTimeout(function () {
            $('.md_snackBar.' + targetClass).removeClass('show');
        }, 4500); // 4500ミリ秒 = 4.5秒
    });
    $(document).on('click', '.md_snackBar .js_snackBarX', function () {
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

    $(document).on('click', '.md_snackBar .js_snackBarX', function () {
        $('.md_snackBar').removeClass('show');
    });

    // ？マークにマウスオーバーで吹き出し
    $('.js_balloon').on('mouseover', balloon);
    $('.js_balloon').on('mouseout', balloonX);

    $(document).on('click', '.js_modalOpen', modalOpen);
    $(document).on('click', '.js_modalX', modalX);

    $('input[type="checkbox"]').each(function (index) {
        var checkbox = $(this);
        var uniqueID = 'checkbox-' + (index + 1);
        checkbox.attr('id', uniqueID);

        var label = checkbox.next('label');
        label.attr('for', uniqueID);
    });

    $('input[type="radio"]').each(function (index) {
        var radio = $(this);
        var uniqueID = 'radio-' + (index + 1);
        radio.attr('id', uniqueID);

        var label = radio.next('label');
        label.attr('for', uniqueID);
    });
    $(document).on('click', '.js_drawerOpen', drawerOpen);
    $(document).on('click', '.js_drawerX', drawerX);
    $(document).on('click', '.js_drawerAllX', drawerAllX);
    
    $(document).on('click', '.templateArea .selectBtn button', function () {
        $('.templateArea').find('.selectArea').addClass('show');
        $('.templateArea').find('.selectBtn').removeClass('show');
    });
    $(document).on('click', '.templateArea .selectArea .close button', function () {
        $('.templateArea').find('.selectArea').removeClass('show');
        $('.templateArea').find('.selectBtn').addClass('show');
    });
    $(document).on('click', '.md_modal .insertLink', function () {
        $(this).parents('.modalSet').hide();
        $(this).parents('.md_modal').find('.modalSet--reserve').show();
    });
    $('.heartSet').on('mouseover', function () {
        $(this).find('.fukidashi').addClass('show');
    }).on('mouseout', function () {
        $(this).find('.fukidashi').removeClass('show');
    });
    $(document).on('focus', '.js_focus', focus).on('click', removeFocus);
    $(document).on('click', '.js_attachmentX', attachmentX);

    let targets = document.querySelectorAll('.messageScroll');

    // すべての要素に対して scrollIntoView を実行
    targets.forEach(target => {
        target.scrollIntoView(false);
    });
}

function focus() { $(this).parents('.inputArea').addClass('focus'); }
function removeFocus(e) { 
    if ($(e.target).closest('.js_attachmentX').length) {
        return; 
    }

    if (!$(e.target).closest('.inputArea').length) {
        $('.inputArea').removeClass('focus');
    }
 }
function attachmentX() { 
    var $li = $(this).parents('.li');
    var $ul = $li.parents('.attachmentFile');

    $li.remove();

    if ($ul.find('.li').length === 0) {
        $ul.parents('.attachment').remove();
    }
}

// ？マークにマウスオーバーで吹き出し
function balloon() { $(this).find('.fukidashi').addClass('show'); }
function balloonX() { $(this).find('.fukidashi').removeClass('show'); }

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
var drawerOpen = function () {

    var tgtClass = $(this).attr('data-drawer');
    $('.md_drawer.' + tgtClass + '').addClass('show');


    // No Scroll
    current_scrollY = $(window).scrollTop();
    $('body').css({ position: 'fixed', width: '100%', top: -1 * current_scrollY });

    return false;
}
var drawerX = function () {
    $(this).parents('.md_drawer').removeClass('show');
    $('body').attr({ style: '' });
    $('html, body').prop({ scrollTop: current_scrollY });
    return false;
}
var drawerAllX = function () {
    $('.md_drawer').removeClass('show');
    $('body').attr({ style: '' });
    $('html, body').prop({ scrollTop: current_scrollY });
    return false;
}


// graph.html呼び出し後に行う
var graphorder = function () {
    // キャリアタイプ指向性
    const careertypeChartData = {
        labels: ['経営幹部', 'アントレプレナー', 'チャレンジャー', '自立', 'スペシャリスト', '安定思考', '私生活重視', '社会奉仕'],
        datasets: [{
            label: '',
            data: [47, 65, 55, 69, 84, 52, 86, 75],
            borderWidth: 1,
            fill: true,
            backgroundColor: 'rgba(66, 119, 178, 0.3)',
            borderColor: 'rgba(66, 119, 178, 1)',
            pointBackgroundColor: 'rgba(66, 119, 178, 1)',
            pointBorderColor: '#fff',
            pointRadius: 4,
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(66, 119, 178, 1)',
        }]
    };
    // 性格特性
    const personalityChartData = {
        labels: ['主体性', '変革性', '外向性', '持続性', '協調性'],
        datasets: [{
            label: '',
            data: [45, 60, 28, 58, 50],
            borderWidth: 1,
            fill: true,
            backgroundColor: 'rgba(66, 119, 178, 1)',
            borderColor: 'rgba(66, 119, 178, 1)',
            pointBackgroundColor: 'rgba(66, 119, 178, 1)'
        }]
    };
    // 創造的思考性
    const creativeChartData = {
        labels: ['発想性', '論理性'],
        datasets: [{
            label: '',
            data: [45, 70],
            borderWidth: 1,
            fill: true,
            backgroundColor: 'rgba(66, 119, 178, 1)',
            borderColor: 'rgba(66, 119, 178, 1)',
            pointBackgroundColor: 'rgba(66, 119, 178, 1)'
        }]
    };
    // コミュニケーション力
    const communicationChartData = {
        labels: ['意思伝達力', '論理的表現力', '好感表現力', '対人調和'],
        datasets: [{
            label: '',
            data: [45, 70, 80, 70, 30],
            borderWidth: 1,
            fill: true,
            backgroundColor: 'rgba(66, 119, 178, 1)',
            borderColor: 'rgba(66, 119, 178, 1)',
            pointBackgroundColor: 'rgba(66, 119, 178, 1)'
        }]
    };
    // エネルギー量
    const energyChartData = {
        labels: ['行動性', '競争性', '野心性', '決断性'],
        datasets: [{
            label: '',
            data: [22, 43, 26, 49],
            borderWidth: 1,
            fill: true,
            backgroundColor: 'rgba(66, 119, 178, 1)',
            borderColor: 'rgba(66, 119, 178, 1)',
            pointBackgroundColor: 'rgba(66, 119, 178, 1)'
        }]
    };
    // ストレス耐性
    const stressChartData = {
        labels: ['人付き合い', '仕事の負荷量', '評価・評判', '理想と現実とのギャップ'],
        datasets: [{
            label: '',
            data: [50, 72, 60, 40],
            borderWidth: 1,
            fill: true,
            backgroundColor: 'rgba(66, 119, 178, 1)',
            borderColor: 'rgba(66, 119, 178, 1)',
            pointBackgroundColor: 'rgba(66, 119, 178, 1)'
        }]
    };
    // 職務適正
    const jobfitChartData = {
        labels: ['多くの人と接し、サービスする', '他者と連携・協調していく', '専門性を身につけ、活かす', '正確かつ着実に進める', '新しいアイデアを生み出す', '知識を深め、探究していく', '自分の判断で自律的に進める', '基本に従い定期的に進める', '迅速に判断して進める', '合理的に物事を進める'],
        datasets: [{
            label: '',
            data: [50, 72, 60, 40, 50, 72, 60, 40, 50, 72],
            borderWidth: 1,
            fill: true,
            backgroundColor: 'rgba(66, 119, 178, 1)',
            borderColor: 'rgba(66, 119, 178, 1)',
            pointBackgroundColor: 'rgba(66, 119, 178, 1)'
        }]
    };

    const raderchartOptions = {
        padding: 0,
        plugins: {
            legend: { display: false }
        },
        responsive: true,
        scales: {
            r: {
                min: 0,
                max: 100,
                ticks: {
                    stepSize: 20
                },
                pointLabels: { font: { size: 12 } }
            }
        }
    };
    const barchartOptions = {
        indexAxis: 'y',
        responsive: true,
        plugins: { legend: { display: false, } }, scales: {
            x: {
                min: 0, max: 100, ticks: { stepSize: 50, },
                pointLabels: { font: { size: 12 } }
            },
        },
    };

    // グラフ描画
    $('.charts-careerType').each(function () {
        const canvas = $(this).find('canvas')[0];

        new Chart(canvas, {
            type: 'radar',
            data: careertypeChartData,
            options: raderchartOptions
        });
    });
    $('.charts-personality').each(function () {
        const canvas = $(this).find('canvas')[0];

        new Chart(canvas, {
            type: 'bar',
            data: personalityChartData,
            options: barchartOptions
        });
    });
    $('.charts-energy').each(function () {
        const canvas = $(this).find('canvas')[0];

        new Chart(canvas, {
            type: 'bar',
            data: energyChartData,
            options: barchartOptions
        });
    });
    $('.charts-creative').each(function () {
        const canvas = $(this).find('canvas')[0];

        new Chart(canvas, {
            type: 'bar',
            data: creativeChartData,
            options: barchartOptions
        });
    });
    $('.charts-communication').each(function () {
        const canvas = $(this).find('canvas')[0];

        new Chart(canvas, {
            type: 'bar',
            data: communicationChartData,
            options: barchartOptions
        });
    });
    $('.charts-stress').each(function () {
        const canvas = $(this).find('canvas')[0];

        new Chart(canvas, {
            type: 'bar',
            data: stressChartData,
            options: barchartOptions
        });
    });
    $('.charts-jobfit').each(function () {
        const canvas = $(this).find('canvas')[0];

        new Chart(canvas, {
            type: 'bar',
            data: jobfitChartData,
            options: barchartOptions
        });
    });
}
