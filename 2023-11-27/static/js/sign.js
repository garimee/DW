$(function () {

    // select 선택 option 변경
    $("#route option").eq(2).prop("selected", true);

    // 체크박스에 체크 시 전체 체크로 변하게 또는 반대 상황
    $("#all").on("click", function() {
        let isCheck = $(this).is(":checked");
        if(isCheck)
        $(".ability_list").prop('checked', true);
        else
        $(".ability_list").prop('checked', false);
    });
  
    $(".ability_list").on("click", function() {
        var chk_count = $(".ability_list:checked").length;   // 능력 체크박스에 체크된 개수
        var all_chk = $(".ability_list").length;   // 능력 체크박스 총 개수
        if(chk_count == all_chk)  // 체크된 개수와 총 개수 비교
            $("#all").prop('checked' , true);  // 체크 개수와 총 개수가 같다면 전체 체크박스에 채크
        else
            $("#all").prop('checked', false);  // 체크 개수와 총 개수가 다르면 전체 체크박스에 체크 해제
    });

    $("#mypw").on("keyup", function () {
    if ($(this).val().length < 6 || $(this).val().length > 12) {
      $(".pwvaild").text("비밀번호 6~12자입니다.");
    } else {
      $(".pwvaild").text("비밀번호 안전");
    }
  });

  $("#myphone").on("keyup", function() {
    let num = $(this).val();
    num = num.replace(/[^0-9]/g, '').replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, `$1-$2-$3`).replace(/(\-{1,2})$/g, "");
    $(this).val(num);
  });

  $("#join").on("click", function () {

    // 파일 업로드 확장자 검증
    console.log($("#myface")[0].files[0].name);
    var fname = $("#myface")[0].files[0].name;
    if(!fname.toLowerCase().includes(".png"))
        alert("png 형식의 이미지만 가능합니다.")

    // select 값 가져오기
    var v = $("#route").val();
    alert(v);

    // var len = $(".ability_list:checked").length;
    // alert(len);

    let chk = '';  // 체크박스에 체크된 값들 저장 변수
    $.each($(".ability_list:checked"), function() {  // 체크 되어있는 체크박스만 반복문 처리
        chk += $(this).val() + " ";
    });
    alert(chk);

    if ($("#myid").val() == "") {
      alert("아이디를 입력하세요");
      $("#myid").focus();
    }
    if ($("#mypw").val() != $("#pwre").val()) {
      alert("비밀번호가 같지 않습니다.");
      $("#mypw").val("");
      $("#pwre").val("");
      $("#mypw").focus();
    }
  });
});