$(function() {
    var click_count = 0;    // ボタンカウント用変数

    if (typeof Blob !== "undefined") {
        // alert('このブラウザに対応しています');
    } else {
        alert('このブラウザには対応していません');
    }

    $("#count").click(function(){
        click_count++; // ボタンを押した数をカウント
        // text_boxクラスのテキストの値を変更
        $("#contents_sample_wrap .text_box").text("ボタンが" + click_count + "回クリックされました");
    });

    $("#export").click(function(){  // 出力ボタンを押した場合は、setBlobUrl関数に値を渡して実行
        setBlobUrl("download", click_count);
    });
});


function setBlobUrl(id, content) {

 // 指定されたデータを保持するBlobを作成する。
    var blob = new Blob([ content ], { "type" : "application/x-msdownload" });
 
 // Aタグのhref属性にBlobオブジェクトを設定し、リンクを生成
    window.URL = window.URL || window.webkitURL;
    $("#" + id).attr("href", window.URL.createObjectURL(blob));
    $("#" + id).attr("download", "tmp.txt");
}