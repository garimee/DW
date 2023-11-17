// 문자열
// 자바스크립트 문자열은 string 객체라는 것으로 저장이 되고 사용된다
// string 객체에는 다양한 문자열을 처리하기 위한 메서드가 있다

/* 1. 문자열의 문자 개수가 몇 개? 
var word = "member";
var len = word.length; 
console.log(`문자열 개수 : ${len}`); */ 

/* 2. 문자열에서 한 글자만 가져오기 - charAt() 
var at = word.charAt(3);
console.log(at); */

/* 3. 문자열에서 특정 문자 또는 문자열이 존재하는지 존재한다면 몇 번째에 있는지 - indexOf()
word = "i like html";
var idx = word.indexOf("love");
console.log(idx);
if(word.indexOf("love") == -1) {
    console.log("없음");
} */

// 4. indexOf는 문자열의 첫 번째부터 검색을 하기 때문에 뒤쪽에 있는 문자나 문자열이 결과로 나오지 않을 수 있다
// lastIndexOf > 문자열의 뒤에서부터 검색

/* 5. replace > 문자열에서 특정 문자열을 다른 문자열로 변경
word = "i like css like like";
var word2 = word.replace("like", "love");
console.log(word); */

/* 정규 표현식 
// g(global) > 문자열 내의 모든 패턴 검색
// i(ignore) > 대소문자 구별 없이 검색
word = " i like css like like";
word2 = word.replace(/like/gi, "love");
console.log(word2); */

/* 정규 표현식의 기본 구조 > /값/표현식 (/like/g) | /regexr/i (패턴/플래그)
// /.[A-Z]/g > 1문자와 대문자의 조합을 문자열 전체에서 검색
// replace(/\-/g, '') > 특정문자 제거 (-)
const regex = /good/; // good이라는 단어가 있는지 검색하기 위해 표현식 생성
var test = "banana appple cat good nice good cat apple cat good";
console.log(regex.test(test));  // .test() > 문자열에 패턴이 존재하는지 알려 준다 (true / false)
console.log(test.match(regex)); */  // .match() > 패턴에 매칭되는 문자열들을 가지고 온다

// i > ignore case 대소문자 구별없이 검색
// g > global 문자열 내 모든 패턴 검색
// m > multi line 문자열의 행이 바뀌더라도 검색을 계속한다
// s > 모든 문자 검색 (특수문자 포함)  :특수문자(\n, \r, \t, \p, \a 등등)
// u > 유니코드 검색
// y > sticky 문자열 내 특정 위치에서 검색을 진행

/* console.log(test.match(/cat /g ));

word = "banana \napple \n member!!";
console.log(word.match(/^apple/gm)); */  // ^apple > 문장이 apple로 시작하는지 검사

// 정규 표현식 기호
/* 
영어 알파벳: a-z, A-Z
한글: ㄱ-ㅎ, 가-힣
숫자: 0-9
모든 문자열(숫자, 한글, 영어, 특수기호, 공백 포함) (단 줄바뀌면 안 됨): .
\d: 숫자 전체 검색
\D: 숫자 제외 검색
\w: 영어와 숫자 검색
\W: 영어와 숫자가 아닌 것만 검색
\s: 스페이스바로 만든 공백
\S: 스페이스 공백이 아닌 것

패턴 검색 기준
/패턴/
| : or  (/\D | \S/)
[] : or 처리 묶음  (/[123]/) >> 1 또는 2 또는 3을 검색하라는 뜻 
^ : 특정문자열로 시작(행의 시작점)  [^문자열] >> 대괄호 안의 문자를 제외하고 검색
문자열$ : 특정문자열로 끝남(행의 마지막)

이메일 유효 검사 정규표현식
^[a-zA-Z0-9+-\_.] + @[a-zA-z0-9] + \.[a-zA-Z] + $

핸드폰 정규표현식
/^010-?([0-9]{4})-?([0-9]{4})$/
*/

/* word = "나는 20살입니다. \n전화번호는 010-1234-1234입니다.";
console.log("원본 : " + word);
console.log(word.replace(/\-/g, ''));
console.log(word.replace(/\./g, ''));
console.log(word.replace(/\s/g, ''));
console.log(word.replace(/..살/g, '45살')); */

/* 전화번호에서 1234-1234 부분을 xxxx-1234로 변경
console.log(word.replace(/1234/, "xxxx")); */

/* var tmoney = "3,410,200원";
// var money = tmoney.replace(/\,/g, "").replace(/원$/, '');
var money = tmoney.replace(/[^0-9]/g, '');
console.log(money); */

// 문자열 나누기 - split()
/* word = "이순신, 강감찬, 김유신, 장보고, 최무선, 장영실";
const name = word.split(",");
console.log(name[3]); */

/* word = "nice123@naver.com";
var id = word.split("@")[0];
console.log(id); */

/* // 7. 문자열 추출 - substring()
console.log(word.substring(0, 7)); // 0번째부터 7번째 전까지
console.log(word.substring(4)); // 4번째부터 끝까지
console.log(word.substring(0, word.indexOf("@"))); */

// 생년월일 중에서 몇 월생인지 표시하기
/* var birth = "19971209";
console.log(birth.substring(4, 6)); */

/* // 8. 문자열 추출 2 - slice() : 음수로도 표현할 수 있다
word = "자바스크립트 너무 좋아!"
console.log(word.slice(2, 7));
console.log(word.slice(-3)); // 뒤에서부터 세 번째
console.log(word.slice(-3, -2)); */

/* // 이땡땡이 보유한 현금은 얼마인가 (정수로 출력) - split, slice, substring, replace
// 김땡땡이 보유한 현금에 박땡땡의 돈을 빼면 얼마인가 - split, slice, substring, replace
// 최땡땡의 돈을 434,329원으로 변경하시오 - split, replace
var text = "김땡땡 105,000원-이땡땡 345,200원-박땡땡 10,000원-최땡땡 4,343,890원";
var member = text.split("-");
var money = parseInt(member[1].split(" ")[1].replace(/[^0-9]/, ''));
console.log(money);

var 김땡땡 = parseInt(member[0].split(" ")[1].replace(/[^0-9]/, ''));
var 박땡땡 = parseInt(member[2].split(" ")[1].replace(/[^0-9]/, ''));
console.log((김땡땡 - 박땡땡).toLocaleString() + "원");

// let 최땡땡 = member[3].replace("4,343,890", "434,329");

var n = member[3].split("")[0];
var m = parseInt(member[3].slice(n.length + 1).replace(/[^0-9]/g, ''));
m = m / 10;
member[3] = n + " " + (m.toLocaleString() + "원");
text = member.join("-");
console.log(text);

// 9. 소문자, 대문자 변경 - toLowerCase(), toUpperCase()
word = "i LOVE School";
console.log(word.toLowerCase());
console.log(word.toUpperCase());

// 10. 공백 제거 - trim() : 문자열의 양쪽 끝 공백 제거
console.log("공백 제거 전 :" + word);
console.log("공백 제거 후 :" + word.trim());

// 11. 문자열 반복 - repeat()
word = "apple";
console.log(word.repeat(3));

// 12. 문자열 위치 정렬 또는 채우기 - padStart(), padEnd()
console.log(word.padStart(10));
console.log(word.padEnd(10, "r"));

// 13. 문자열에 특정 문자열 포함 여부 (참, 거짓) - includes()
word = "이순싱. 장보고, 강감찬, 최영, 정도전, 정약용, 양만춘";
if(word.includes("정도전")) {
    console.log("회원입니다");
} else {
    console.log("회원이 아닙니다");
}

// 14. 문자열이 특정 문자나 문자열로 시작 - startsWith(), endWith()
var info = "이름 : 이순신, 직업 : 군인";
if(info.startsWith("이름")) {
    console.log("올바른 형식의 데이터입니다");
} else {
    console.log("잘못된 데이터입니다");
}

// 15. 문자열로 변환 - toString()
var num = 100;
console.log(typeof num.toString());

var birth = 19990101;
var year = parseInt(birth.toString().substring(0, 4));
console.log(year); */

/* 
    .length > 문자열의 길이 (문자열의 개수)
    .charAt(숫자) > 지정한 번호 위치의 문자 추출
    .indexOf(문자열) > 문자열에서 특정 문자 또는 문자열이 몇 번째에 있는지 알려 준다. 없으면 -1
    .lastIndexOf(문자열) > 문자열의 끝에서 문자 또는 문자열 몇 번째 있는지 검색
    .includes(문자열) > 문자열에 특정 문자 또는 문자열의 존재 여부 (true, false)
    .replace(원본문자열, 변환문자열) > 문자열에서 특정 문자 또는 문자열을 지정한 문자 또는 문자열로 반환
    .split(문자열) > 문자열을 특정 문자열을 기준으로 분리한다 (배열이라는 구조로 저장)
    .substring(시작번호, 끝번호), .substring(시작번호) > 문자열에서 지정된 위치의 문자열을 추출 
    .slice(시작번호, 끝번호), .slice(시작번호, 끝번호) > 문자열에서 지정된 위치의 문자열을 추출, 음수 사용 시 뒤에서부터 추출
    .toLowerCase(), .toUpperCase() > 소문자, 대문자 변환
    .padStart(), padEnd() > 자릿수 지정과 정렬 및 채우기
    .trim() > 문자열의 양쪽 끝 공백 제거
    .startsWith(문자열), .endsWith(문자열) > 문자열의 시작과 끝이 특정 문자열로 시작하는지 여부
    .toString() > 문자열로 변환
    .repeat(숫자) > 지정한 숫자만큼 반복 출력된다

    */

let info = "이순신: 군인, 34세, 아산 - 장보고: 군인, 41세, 완도 - 김춘추: 정치인, 28세, 경주";
let data = info.split(" - ");
var 이순신_name = data[0].substring(0, data[0].indexOf(":")); //data[0].split(":");
var 이순신_직업 = data[0].substring(data[0].indexOf(":") + 1, data[0].indexOf(","));
console.log(이순신_직업);

// 장보고의 나이는 몇인가 
var 장보고_나이 = data[1].substring(data[1].indexOf(",") + 1, data[1].lastIndexOf(","));
console.log(parseInt(장보고_나이));  //parseInt() : 앞쪽에 있는 숫자만 정수로 변환