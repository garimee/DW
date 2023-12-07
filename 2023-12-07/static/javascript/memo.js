// 생성자 함수
function memo(num, content, importance) {
  this.num = num;
  this.content = content;
  this.importance = importance;
}

memo.prototype.create = function() {
    return `<div class='memoItem'>
            <b>${this.num}</b>
            <h3>${this.content}</h3>
            <div style='width:70px; background:${this.importance.color}'></div>
            <div class='del' onclick='del_memo(${i})'><i class="bi bi-trash"></i></div>
        </div>`
}

function importStyle(text, color) { // 메모의 중요도 스타일 객체
  this.text = text;
  this.color = color;
}

// 전역 변수 - 함수, 객체메서드, 제어문 등 어느 곳에서 사용 가능한 변수
const memo_list = new Array(); // 메모 객체가 저장될 배열
// 배열 앞에 타입으로 const를 붙여주면 배열 안에 데이터는 변경 가능하지만 다른 배열로 변경할 수 없다
const import_list = new Array(); // 중요도 스타일 객체 저장 배열
let num = 1; // 메모 번호

// 초기화 - document 객체가 모두 로드되면 실행할 초기 작업
//          document 객체 로드 - window.onload를 뜻함
$(function() {
  $("#save").on("click", save); // 등록 버튼 클릭 시 출력

  // option 태그에 사용할 텍스트를 위해 importStyle 객체를 먼저 생성한다
  import_list.push(new importStyle("매우 중요", "red"));
  import_list.push(new importStyle("중요", "orange"));
  import_list.push(new importStyle("보통", "green"));
  import_list.push(new importStyle("낮음", "yellow"));
  import_list.push(new importStyle("매우 낮음", "white"));

  // importStyle 객체를 option 태그에 넣어 select에 추가
  // $.each(배열, function(i, v) {})  i - 배열의 인덱스, v - 배열의 값
  $.each(import_list, function (i, v) {
    $("#import").append($("<option>").attr("value", i).text(v.text));
    // $("import") > id가 import인 태그 선택
    // .append() > 태그에 자식으로 추가하기
    // $("<option>") > option 태그 생성
    // .attr("value", i) > 태그에 value 속성을 i 값으로 지정하기
    // .text(v.text) > 태그에 텍스트를 v 객체에 text 키의 value로 넣기
  });
});

function save() {
  // 등록 버튼 클릭하면 동작 함수
  // 함수의 기능: 작성한 메모와 중요도를 화면에 출력하는 기능
  var text = $("#memo").val(); // id가 memo인 input 태그에 작성한 값 가져오기
  var 중요도 = $("#import").val(); // id가 import인 select 태그에서 선택한 option 값

  memo_list.push(new memo(num, text, import_list[중요도]));

  var last = memo_list.length - 1;  // memo_list 배열에 memo 객체를 저장 후 저장된 memo 객체의 인덱스 구하기

  // append - 태그에 자식으로 마지막으로 추가 (자식)
  // after - 현재 선택한 태그 뒤에 추가 (형제)
  // prepend - 태그의 자식으로 앞에 추가 (자식)
  // before - 현재 선택한 태그 앞에 추가 (형제)
  $(".memoList").prepend(memo_list[last].create(num));
  num++;


  // 삭제 아이콘 클릭 기능 적용
  $(".del").on("click", del_memo);

  console.log(text + " " + 중요도);
}

let f = true;
function del_memo(n) {
    $.each(memo_list, function(i, v) {
        if(n == v.num) {
            $(".memoItem").eq(i).remove();
            memo_list.splice(i, 1);
        }
    });


    // parent(): 바로 위의 부모 태그 가져오기
    // parents(): 위에 있는 모든 부모 태그 
    // empty() > 선택한 태그 안에 있는 내용을 완전히 비운다
    // remove() > 선택한 태그 안에 전부를 삭제하고 자기 자신도 삭제된다
    // unwrap() > 선택한 태그의 부모를 삭제
}



// var select = document.getElementById("import");
// var opt = document.createElement("option");
// var text = document.createTextNode("매우중요");
// select.appendChild(opt);
// 새로운 html 태그 생성 - document.createElement("태그 이름")
// text 생성 - document.createTextNode("텍스트");
// 태그 속성 추가 - 태그.setAttribute("id", "myname"); - 태그에 id를 넣어준다

// createElement("div") -> $("div")
// createTextNode("div") -> .text("div")
// .appendChild(태그 또는 텍스트) -> .append(태그 또는 텍스트)
// setAttribute("id", "aa") -> .attr("id", "aa")
// getAttribure("id") -> .attr("id")
