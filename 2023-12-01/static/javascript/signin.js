let mid = ["abc", "aaa", "bbb", "ccc", "ddd", "eee", "fff", "ggg"];
let mpw = ["1234", "1121", "2232", "3343", "4454", "5565", "6676", "7787"];

$(function() {
    $(".loginBt").on("click", function() {
        if($("#id").val() == '') {
            alert("아이디를 입력하세요.");
            $("#id").focus();
        } else if($("#pw").val() == '') {
            alert("비밀번호를 입력하세요.");
            $("#pw").focus();
        } else {
            var idx = mid.indexOf($("#id").val());
            if(idx == -1) {
                confirm("아이디가 존재하지 않습니다. \n회원가입 하시겠습니까?");
                if(ok) location.href="signup.html";
            } else if(mpw[idx] == $("#pw").val()) {
                alert("로그인 성공");
            } else {
                alert("비밀번호가 일치하지 않습니다.");
                $("#pw").val("").focus();
            }
        }
    });
});