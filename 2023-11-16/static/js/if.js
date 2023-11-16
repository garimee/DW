// var num = 20;
// if (num > 0) {
//     console.log("양수");
// } else {
//     console.log("음수");
// }

// var birth = parseInt(prompt("생년월일 8자리"));
// if (birth <= 20041231) {
//     console.log("성인");
// } else {
//     console.log("미성년자");
// }

/* // 국 영 수 3과목 점수 입력 받기
// 평균 점수가 65점 이상이면 통과라고 출력
// 65점 미만이면 낙제
var ko = parseInt(prompt("국어 점수"));
var en = parseInt(prompt("영어 점수"));
var ma = parseInt(prompt("수학 점수"));
var avg = (ko + en + ma) / 3;

if (avg >= 65) {
    document.write("통과");
} else {
    document.write("낙제");
} */

// 동전 앞뒷면 맞추기
// 브라우저에 html 태그가 모두 로딩(화면 표시)되면 자바스크립트 코드를 실행시키는 방법  
var com = parseInt(Math.random() * 3) + 1;
window.onload = function () {

    // 1 가위 2 바위 3 보
   
    var user = parseInt(prompt("1. 가위 2. 바위 3. 보"));

    var scis = document.getElementById("scissors");
    var rock = document.getElementById("rock");
    var paper = document.getElementById("paper");

    scis.addEventListener("click", function() { 
        if(com == 1) {
            alert("비김");
        } if(com == 3) {
            alert("이김");
        } else {
            alert("짐");
        }
        com = parseInt(Math.random() * 3) + 1;
        scis.style.background="black";
        rock.style.background="white";
        paper.style.background="white";
    });

    rock.addEventListener("click", function() {
        if(com == 2) {
            alert("비김");
        } else if(com == 3) {
            alert("이김");
        } else {
            alert("짐");
        }
        com = parseInt(Math.random() * 3) + 1;
    });

    paper.addEventListener("click", function() {
        if(com == 3) {
            alert("비김");
        } else if(com == 1) {
            alert("이김");
        } else {
            alert("짐");
        }
        com = parseInt(Math.random() * 3) + 1;
    });

    if (com == user) {
        alert("비김");
    } else if 
        (com == 1 && user == 2 || com == 2 && user == 3 || com == 3 && user == 1) {
            alert("승리"); 
    } else {
        alert("패배");
    }

    /* // 세 개의 정수를 입력 받아 가장 작은 수 출력, 모두 같다면 같다고 출력
    var num1 = parseInt(prompt("첫 번째 정수"));
    var num2 = parseInt(prompt("두 번쨰 정수"));
    var num3 = parseInt(prompt("세 번쨰 정수"));

    if(num1 == num2 && num1 == num3) {
        alert("모두 같은 숫자");
    } else if((num1 < num2 || num1 == num2) && (num1 < num3 || num1 == num3)) {
        alert("작은 수: " + num1);
    } else if((num2 < num1 || num2 == num1) && (num2 < num3 || num2 == num3)) {
        alert("작은 수: " + num2);
    } else if((num3 < num1 || num3 == num1) && (num3 < num2 || num3 == num2)) {
        alert("작은 수: " + num3);
    } */

    /* if(num1 < num2) {
        if(num1 < num3) {
            alert("작은 수: " + num1);
        } else {
            alert("작은 수: " + num3);
        }
    } else if(num2 < num3) {
        alert("작은 수: " + num2);
    } else {
        alert("작은 수: " + num3);
    } */



    //     var coin = Math.floor(Math.random() * 2) + 1;
    //     var front = document.getElementById("front"); // html 태그를 자바스크립트로 가져오는 방법
    //     var back = document.getElementById("back");

    //     front.addEventListener("click", function() {
    //         if(coin == 1) {
    //             alert("정답");
    //         } else {
    //             alert("오답");
    //         }
    //     });

    //     back.addEventListener("click", function() {
    //         if(coin == 2) {
    //             alert("정답");
    //         } else {
    //             alert("오답");
    //         }
    //     });
};