let num = [10, 20, 30, 40, 50, 60];

// num 배열에 10 단위로 100까지 숫자를 추가로 저장
// num.push(70, 80, 90, 100);

// num 배열에 저장된 숫자를 한 줄에 하나씩 출력, 반복문 사용
/* for (var i = 0; i < num.length; i++) {
  document.write(num[i] + "<br>");
} */

// num 배열에 저장된 숫자들에게 +3을 해 주고 결과 출력
/* for (var i = 0; i < num.length; i++) {
  num[i] = num[i] + 3;
  document.write(num[i] + " ");
} */

// num 배열에서 55보다 큰 숫자들만 출력
/* for (var i = 0; i < num.length; i++) {
  if (num[i] > 55) {
    document.write(num[i] + " ");
  }
} */

/* let num1 = [1, 2, 3];
let num2 = [4, 5, 6]; */

// 두 배열에 같은 인덱스 위치에 있는 숫자들끼리의 합 출력
// 결과 > 5 7 9
/* for (var i = 0; i < num1.length; i++) {
  document.write(num1[i] + num2[i] + " ");
} */

// num1과 num2 배열에서 짝수에 해당하는 숫자만 num3이라는 배열에 저장하고 출력
/* let num3 = new Array();

for (var i = 0; i < num.length; i++) {
  if (num1[i] % 2 == 0)
  num3.push(num1[i]);

  if (num2[i] % 2 == 0)
  num3.push(num2[i]);
}
document.write(num3.sort() + " "); */

// 과제
// 한화이글스 투수들의 평균 자책점
// name = ["주현상", "윤대경", "이민우", "이태양", "페냐", "박상원", "장시환"]
// era = [1.96, 2.45, 2.63, 3.23, 3.60, 3.65, 3.38] (era > 평균자책점)
// 7명 선수들의 평균자책점의 평균치를 구하라
// 평균치 이상인 선수들이 누군지 출력

const name = ["주현상", "윤대경", "이민우", "이태양", "페냐", "박상원", "장시환"];
const era = [1.96, 2.45, 2.63, 3.23, 3.60, 3.65, 3.38];
var total = 0;  // 평균자책점의 총점을 구하기 위한 누적 변수

for(var i = 0; i < era.length; i++) {
  total += era[i];  // 평균자책점 총점 구하기
}

var avg = total / era.length;  // 평균자책점 평균 구하기

for(var i = 0; i < era.length; i++) {
  if(avg <= era[i]) {  // 평균자책점 평균 이상인 값 찾기
    document.write(name[i] + " ");  // 평균자책점 평균 이상인 값의 인뎃그를 name의 인덱스로 사용
  }
}