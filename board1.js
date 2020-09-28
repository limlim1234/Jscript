class Board {
    // 변수이름에 _랑 $ 써주는 이유는, 겟셋메소드 없을때 그게 밖에 노출되지 않게 하려고.. private 적인 의미라고 생각하면 됨
    constructor(boardNo, title, content, writer) { // 생성자
        this._boardNo = boardNo;
        this._title = title;
        this._content = content;
        this._writer = writer;
    }
    // getter, setter 메소드
    get boardNo() {
        return this._boardNo;
    }
    set boardNo(boardNo) {
        this._boardNo = boardNo;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get content() {
        return this._content;
    }
    set content(content) {
        this._content = content;
    }
    get writer() {
        return this._writer;
    }
    set writer(writer) {
        this._writer = writer;
    }
}

let boardDB = [];
boardDB.push(new Board(1, '자바스크립트', '웹언어', '가나다'));
boardDB.push(new Board(2, '자바', '컴파일러', '라마바'));
boardDB.push(new Board(3, '오라클', '데이터베이스관리', '사아자'));

// let b1 = new Board(1, 'title', 'content', 'writer');
// console.log(b1.boardNo); // 필드형식으로 호출..

let titles = ['checkbox', 'boardNo', 'title', 'content', 'writer', 'button'];

let table, tr, td, text, checkbox, button;

let defaultNo = boardDB[boardDB.length - 1].boardNo;

// 타이틀영역
function createTitle() { // 이 펑션 작업한다음에 리턴값ㅇ르 낸다
    tr = document.createElement("tr");
    for (let field of titles) {
        th = document.createElement('th');
        if (field === 'checkbox') {
            checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.onchange = function () {
                let chks = document.querySelectorAll('td input[type="checkbox"]');
                // td태그의 input태그중 타입이 checkbox인 애들만
                // console.log(chks);
                for (let i = 0; i < chks.length; i++) {
                    // 루핑돌면서 다 체크시키는거?
                    chks[i].checked = this.checked; // 체크되어있으면 true / 아니면 false -> 이 설정으로 밑에서도 쓴다?
                }
            }

            th.append(checkbox);
        } else if (field === 'button') {
            th.append('상세보기');
        } else {
            text = document.createTextNode(field);
            th.append(text);
        }
        tr.append(th);
    }
    return tr;
}

function getBoardList() { // 펑션 없으면 board.html 켜지자마자 스크립트실행돼서, 바디에있는 이부분은 읽어오지 못하니까..?

    // boardDB라는 배열의 -> 마지막 번째(길이-1) 배열의 -> boardNO 를 찾아서 담아준다
    document.getElementById('boardNo').value = ++defaultNo;

    table = document.createElement("table");
    table.setAttribute('border', '1');
    table.setAttribute('id', 'tbl');
    table.setAttribute('style', 'text-align: center;');
    table.append(createTitle()); // 타이틀 row 만드는 펑션을 여기에 

    // 데이터영역
    boardDB.forEach(function (obj, idx) {
        tr = document.createElement('tr');
        // 각각의 tr에 id값 부여
        tr.setAttribute('id', obj.boardNo); // 각 행에 해당되는 보드번호를 인덱스값처럼 id로 부여
        table.append(tr);
        for (let field of titles) {
            td = document.createElement('td');
            if (field === 'checkbox') {
                checkbox = document.createElement('input');
                checkbox.setAttribute('type', 'checkbox');
                checkbox.onchange = function () { // 체크박스 값이 바껴지면
                    synchCheckbox(); // 싱크체크박스 펑션을 호출
                }
                td.append(checkbox);
            } else if (field === 'button') {
                button = document.createElement('button');
                button.innerHTML = '상세보기'; // 버튼의 라벨이름이 상세보기
                td.append(button);
                button.onclick = showDetail; // 클릭할때 상세보기 기능을 실행하라고 이름만 적어줌 (콜백함수)
            } else {
                text = document.createTextNode(obj[field]);
                // 이 필드가 타이틀 배열이고.. obj가 값인건 알겠는데 왜 쓰는걸 obj[field]로 쓰는지 모르겟어)
                td.append(text);
            }
            tr.append(td);
        }
    });
    document.getElementById('main').append(table);
}


let createSeq = function () {
    return ++defaultNo;
};

function insertData() {


    let boardNo = document.getElementById('boardNo').value;

    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    let writer = document.getElementById('writer').value;

    boardDB.push(new Board(boardNo, title, content, writer));

    let tbl = document.getElementById('tbl');
    tr = document.createElement('tr');
    tr.setAttribute('id', boardNo); // id값을 보드넘버로 설정해줘야함
    td = document.createElement("td");
    // 체크박스 만들기
    checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.onchange = function () { // 추가된 데이터에도 체크박스 펑션을 추가해줘야함
        synchCheckbox();
    }
    td.append(checkbox);
    tr.append(td);

    // 게시글번호
    td = document.createElement('td');
    td.append(boardNo);
    tr.append(td);

    // 제목
    td = document.createElement('td');
    td.append(title);
    tr.append(td);

    // 내용
    td = document.createElement('td');
    td.append(content);
    tr.append(td);

    // 작성자
    td = document.createElement('td');
    td.append(writer);
    tr.append(td);

    // 상세보기 버튼
    td = document.createElement('td');
    button = document.createElement('button');
    button.innerHTML = '상세보기';
    button.onclick = showDetail;
    td.append(button);
    tr.append(td);

    // 테이블에 붙여넣기
    tbl.append(tr);

    // 입력 버튼 눌렀을때 되는지 확인용ㅇㅇ..
    console.log(boardDB);

    // input 칸에 적은거 추가입력됐으면 초기화시켜줘야함 clear 초기화
    let inputs = document.querySelectorAll("input[type]");
    for (let i = 0; i < inputs.length; i++) {
        if (i == 0) {
            let bNo = createSeq();
            document.getElementById('boardNo').value = bNo;
        } else {
            inputs[i].value = "";
        }
    }

}

function updateData() {
    // element 정보를 가지고 오도록 하자
    // 이 document.getElementById('boardNo').value; 를 변수로 설정하자
    // 그리고 boardNo를 키 key로 생각하자
    let boardNo = document.getElementById('boardNo').value;
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    let writer = document.getElementById('writer').value;

    // 배열에서 수정 -> 수정하는거나 그 자리에 변경된 새걸 넣어주는거나 같음
    for (let i = 0; i < boardDB.length; i++) {
        if (boardDB[i].boardNo == boardNo) { // 여기 뒤에꺼가 let으로 설정한 새 변수인가..
            boardDB[i] = new Board(boardNo, title, content, writer);
            break; // 찾아서 수정했으면 더 루핑돌지말고 빠져나와라고 break 걸어줌
        }
    }
    console.log('break');
    console.log(boardDB);

    // 화면에서 수정. boardNo 기준으로 tr태그 하나씩 가져와서 비교해야함(루핑돌아야함)
    // 헤드부분(th태그)은 필요없음. 데이터만 필요
    let trs = document.querySelectorAll('#tbl tr[id]'); // id값이 tbl인 테이블의, tr중에 id값이 있는놈만 갖고오겠다
    for (let i = 0; i < trs.length; i++) {
        console.log(trs[i].id, boardNo)
        if (trs[i].id == boardNo) { // 인덱스 0번이 체크박스, 1번이 boardNo
            trs[i].children[2].innerHTML = title; // textNode 볼필요없어서 칠드런으로 했다..? 뭔의미지
            trs[i].children[3].innerHTML = content;
            trs[i].children[4].innerHTML = writer;
            break;
        }
    }
}

function getBoard(id) {
    // id값을 기준으로 db에서 찾아옴
    let oneBoard;
    for (let board of boardDB) {
        if (board.boardNo == id) {
            // oneBoard = new Board(board.boardNo, board.title, board.content, board.writer);
            oneBoard = board;
        }
    }
    return oneBoard;
}

function showDetail() { // 상세보기 기능
    // console.log(this.parentNode.parentNode.getAttribute('id')); // 체크박스 클릭한 부분의 id값을 볼수있음
    let id = this.parentNode.parentNode.id;
    console.log(getBoard(id));
    let board = getBoard(id);
    document.getElementById('boardNo').value = board.boardNo;
    document.getElementById('title').value = board.title;
    document.getElementById('content').value = board.content;
    document.getElementById('writer').value = board.writer;
}

function synchCheckbox() { // 헤드의 전체선택 체크박스와 데이터별 체크박스 연동(동기화)
    // checkAll true로 가정. 
    // checkAll false : 데이터영역에 있는 값 중하나라도 체크가 안되어있는 경우
    let th_ckb = document.querySelectorAll('th input[type="checkbox"]');
    // th태그의 input 태그중 타입이 체크박스인것을 가져와라 -> 한개밖에없어도 배열방식
    let td_ckb = document.querySelectorAll('td input[type="checkbox"]');
    // td태그의 input 태겨중 타입이 체크박스인것

    th_ckb[0].checked = true; // th는 체크박스가 한개뿐임ㅇㅇ 그게 체크가 되어있다는걸 기본으로 뒀을때
    for (let i = 0; i < td_ckb.length; i++) { // td의 체크박스의 갯수만큼 루핑을 돌면서
        if (!td_ckb[i].checked) { // td의 체크박스가 체크가 되어있지 않다면(앞에 붙여준 ! 때문에 not의 의미를 가진다)
            th_ckb[0].checked = false; // th의 체크박스도 false가 된다
            break;
        }
    }
}
// 체크박스로 선택한 데이터를 삭제
function deleteChecked() {
    // 삭제할대상을 배열에 담아서 화면에서 삭제
    let checkedNo = [];
    let chks = document.querySelectorAll('td input[type="checkbox"]');
    for (let i = 0; i < chks.length; i++) { // 몇개체크할진 모르겠고 그 가지고 올 갯수만큼만 루핑돌자
        if (chks[i].checked == true) { // 해당인덱스의 체크박스가 체크되어있다면
            checkedNo.push(chks[i].parentNode.parentNode.id); // tr의 id를 찾아온거.. 위에서 그걸 boardNo로 설정해놨었다
            // 위에서 설정한 checkedNo라는 배열에 id값만 담게(push)된거
            chks[i].parentNode.parentNode.remove(); // remove() : element 자체를 삭제하는것
        }
    }
    // 배열에서 삭제
    checkedNo.forEach(function (obj, idx) { // 삭제할 대상(checkedNo)을 배열(boardDB ?)에서 반복시키겠다
        // obj : 배열의 요소, idx : 인덱스, 배열자체인 ary는 지금필요x라서 안씀
        // id값을 찾아야함
        for (let i = 0; i < boardDB.length; i++) {
            if (boardDB[i].boardNo == obj) {
                // delete boardDB[i]; // 이렇게지우면 데이터는 null만 되고 공간차지는 하게된다. 인덱스가 비게 된다
                // boardDB.splice(i, 1, ''); // splice : 해당되는 인덱스i를 1개 지우면서 그 공간을 __로 대체하겠다는 뜻
                boardDB.splice(i, 1); // 대체값이 없으면 그 공간도 삭제하겠다는 뜻!
            }
        }
    });
    document.querySelectorAll('th input[type="checkbox"]')[0].checked = false;

}