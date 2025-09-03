$(document).ready(function () {
    $.getJSON('data.json', function (data) {
        // プルダウンメニューにオプションを追加
        $.each(data, function (key) {
            $('#scheduleGroups').append($('<option>', {
                value: key,
                text: key
            }));
        });

        // 挿入ボタンのクリックイベント
        $('.js_insertBtn').click(function () {
            const selectedValue = $('#scheduleGroups').val();
            if (data[selectedValue]) {
                $('#name').val(data[selectedValue].name);
                $('#duration').val(data[selectedValue].duration);
                $('#note').val(data[selectedValue].note);
                $('#memo').val(data[selectedValue].memo);
                $('#date').val(data[selectedValue].date);
                $('#time').val(data[selectedValue].time);
                $('#scout').val(data[selectedValue].scout);
                $('#apply').val(data[selectedValue].apply);
                $('#place').val(data[selectedValue].place);
                $('#url').val(data[selectedValue].url);
            } 
            // else {
            //     alert('オプションを選択してください');
            // }
        });
    }).fail(function () {
        console.error('JSONの読み込みに失敗しました');
    });

    updateButtons();
});

$(document).on('click', '.deleteArea', function () {
    $(this).parent('div').remove();
    updateButtons();
});


$('#addButtonA').click(function () {
    if ($('.termAreaA').length + $('.termAreaB').length < 10) {
        const newTermAreaA = $('.termAreaA').first().clone();

        // 入力値のリセット処理を追加
        newTermAreaA.find('input').val('');  // inputの値をリセット
        newTermAreaA.find('select').val(''); // selectの値をリセット

        // .md_errorクラスをinputとselectから取り除く
        newTermAreaA.find('input').removeClass('md_error');
        newTermAreaA.find('select').removeClass('md_error');

        // 削除ボタンのクリックイベントの設定をリセットして再登録
        newTermAreaA.find('.deleteArea').off('click').on('click', function () {
            $(this).parent('.termAreaA').remove();
            updateButtons();
        });

        // クローンした要素を#addButtonAの前に追加
        $('#addButtonA').before(newTermAreaA);
    }
    updateButtons();
});



$('#addButtonB').click(function () {
    const valueA = parseInt($('#countSelectorA').val(), 10);
    const valueB = parseInt($('#countSelectorB').val(), 10);
    const difference = valueB - valueA;

    if (difference >= 1 && difference <= 4) {
        const times = ['14:15', '14:30', '14:45', '15:00'];
        const timeOptions = ['14:00', '14:15', '14:30', '14:45']; // 新しい時間設定用配列

        for (let i = 0; i < difference; i++) {
            if ($('.termAreaA').length + $('.termAreaB').length < 10) {
                const newTermAreaB = $('.termAreaA').first().clone();
                newTermAreaB.removeClass('termAreaA').addClass('termAreaB');

                // 元々の処理：selectSet内にtimesの時間を表示
                newTermAreaB.find('.selectSet').append(`<span>${times[i]}</span>`);

                // 追加処理：#time セレクトボックスに timeOptions の時間を設定
                newTermAreaB.find('#time').val(timeOptions[i]);

                $('#addButtonA').before(newTermAreaB);

                // 入力値のリセット処理を追加
                newTermAreaB.find('input').val('');  // inputの値をリセット

                // .md_errorクラスをinputとselectから取り除く
                newTermAreaB.find('input').removeClass('md_error');
                newTermAreaB.find('select').removeClass('md_error');
            }
        }
    }
    updateButtons();
});

// ボタンの表示制御
function updateButtons() {
    const totalCount = $('.termAreaA').length + $('.termAreaB').length;

    // 合計が10個以上の場合はAボタンとCボタンを非表示
    if (totalCount >= 10) {
        $('#addButtonA').hide();
        $('#addButtonC').hide();
    } else {
        $('#addButtonA').show();
        $('#addButtonC').show();
    }

    // termAreaが1つの場合は削除ボタンを非表示
    if (totalCount === 1) {
        $('.deleteArea').hide(); // 削除ボタンを非表示にする
    } else {
        $('.deleteArea').show(); // それ以外は表示
    }
}