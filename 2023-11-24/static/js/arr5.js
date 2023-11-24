// 2차원 배열
/* let arr = [[1, 2, 3, 4, 5, 6, 7, 8], [10, 20, 30, 44, 55, 66, 77]];

for(var i = 0; i < arr.length; i++) {  // arr에는 저장 공간이 두 개
    for(var k = 0; k < arr[i].length; k++) {  // arr[0] 인덱스 length, arr[1] 인덱스 length
        document.write(arr[i][k] + " ");
    }
    document.write("<br>");
} */

/* let people = [
  ["김유신", 45, "군인"],
  ["이순신", 38, "군인"],
  ["서땡땡", 51, "변호사"],
  ["김땡땡", 32, "편의점알바"],
  ["송땡땡", 25, "농심연구원"],
  ["이땡땡", 29, "관람객"],
];

for (var i = 0; i < people.length; i++) {
  for(var k = 0; k < people[i].length; k++) {
  document.write(people[i][0]+ " ");
  }

  if(people[i][1] > 30) {
      document.write(people[i][0] + "," + people[i][2] + " ");
  }

  if(people[i][0].indexOf("이") != -1)
      document.write(people[i][1] + "," + people[i][2] + "<br>");  // 성만 오알 이름만 오알 풀네임 써도 찾을 수 있다 */

let board = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

let x = 0; y = 0; // k - x축  i - y축

function draw() {
  for (var i = 0; i < board.length; i++) {
    for (var k = 0; k < board[i].length; k++) {
      if (board[i][k] == 0)
        $("#box").append("&ensp;&ensp;");
      if (board[i][k] == 1)
        $("#box").append("■");
      if (board[i][k] == 2) {
        $("#box").append("♥");
        x = k; y = i;
      }
    }
    $("#box").append("<br>");
  }
}

$(function () {
  draw(); // function draw 실행 - draw 함수 실행
});

$(document).on("keyup", function (key) {
  board[y][x] = 0;
  switch (key.keyCode) {
    case 87: // w
      y = board[y - 1][x] == 1 ? y : --y;
      break;
    case 65: // a
      x = board[y][x - 1] == 1 ? x : --x;
      break;
    case 83: // s
      y = board[y + 1][x] == 1 ? y : ++y;
      break;
    case 68: // d
      x = board[y][x + 1] == 1 ? x : ++x;
      break;
    default:
      alert("w, a, s, d를 방향키로 사용합니다.");
  }
  board[y][x] = 2;
  $("#box").html("");
  draw();
});
