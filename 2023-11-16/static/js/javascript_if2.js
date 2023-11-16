// 브라우저에 html 태그가 모두 로드 되면 실행되는 스크립트 코드
window.onload = function () {

    /* // 컴퓨터와 사용자가 주사위 두 개씩 던지고 합이 큰 쪽이 이기는 
    // 두 주사위 값이 같은 숫자가 나온 쪽이 이긴다
    // 둘 다 같은 숫자가 나온다면 합이 큰 쪽이 이긴다
    var com1 = Math.floor(Math.random() * 6) + 1;
    var com2 = Math.floor(Math.random() * 6) + 1;
    var user1 = Math.floor(Math.random() * 6) + 1;
    var user2 = Math.floor(Math.random() * 6) + 1;

    var com = com1 + com2;
    var user = user1 + user2;

    if (user > com) {
        if ((com1 == com2) && (user1 != user2)) {
            alert("패");
        } else {
            alert("승");
        }
    } else if (user < com) {
        if ((user1 == user2) && (com1 != com2)) {
            alert("승");
        } else {
            alert("패");
        }
    } else {
        if ((user1 == user2) && (com1 != com2)) {
            alert("승");
        } else if ((user1 != user2) && (com1 == com2)) {
            alert("패");
        } else {
            alert("무");
        }
    } */

    /* var a = 234;
    switch (a) {
        case 1:
            alert(1);
            break;
        case 1000:
            alert(1000);
            break;
        case 234:
            alert(234);
            break;
        case 10:
            alert("10 선택");
            break;
    } */

    /* var alp = "t";
    switch (alp) {
        case "t":
            document.write("table");
            break;
        case "d":
            document.write("dog");
            break;
        case "a":
            document.write("apple");
            break;
    } */

    var score = 75;
    switch(parseInt(score / 10)) {
        case 10: case 9:
            document.write("A학점"); break;
        case 8:
            document.write("B학점"); break;
        case 7:
            document.write("C학점"); break;
        default:
            document.write("F학점"); break;
        }

        // 과제
        // 기본 주차비 천 원, 기본 시간 30분 / 30분 이내 천 원, 5분 천 원, 39분까지 천 원
        // 10분당 100원씩 추가 / 40분 1100원, 54분 1200원
        // 2시간 이상 주차 기본 요금 1500원, 2시간 1분 1500원, 2시간 34분 1800원
        // 4시간 이상 주차 시 기본 요금 변경 - 2500원
        // 8시간 이상 주차 시 - 10000원 
        // 10시간, 12시간, 9시간 43분 전부 다 10000원
        // 주차 시간을 분 단위로 입력하여 주차 요금이 얼마인지 출력
        var time = parseInt(prompt("주차 시간"));
        var cost = 1000;

        cost = (time >=120) ? 1500 : cost;

        time = (time >= 120) ? time -120 : (time >= 30) ? time - 30 : 0;

        var price = parseInt(time / 10) * 100 + cost;
        console.log(`주차 요금: ${price}원`);
}