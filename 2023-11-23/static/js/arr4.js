const movie_name = ["서울의봄", "프레디의피자가게", "사채소년", "헝거게임", "더와일드", "더마블스", "30일", "나폴레옹", "빅슬립"];

const grade = [8.7, 7.3, 7.3, 6.7, 8.2, 3.9, 6.9, 9.6, 9.0];

const nation = ["한국", "미국", "한국", "미국", "미국", "미국", "한국", "영국", "한국"];


// 영화 제목을 검색하여 평점과 국가를 출력
function search() {
    var movie = ($("#movie").val()).replace(/\s/g, "");
    var idx = movie_name.indexOf(movie);
    if(idx == -1) 
        $("#result").text("존재하지 않는 영화 제목입니다.");
    else {
        $("#result").text(`${grade[idx]}점이고, ${nation[idx]} 영화입니다.`);
    }
}

// 2차원 배열은 인덱스가 두 개이기 때문에 반복문도 두 번 사용된다
let num = [[1, 2, 3], [4, 5, 6], [11, 22, 33, 44]];
for(var i = 0; i < num.length; i++) {
    for(var k = 0; k < num[i].length; k++) {
        document.write(num[i][k] + " ");
    }
}