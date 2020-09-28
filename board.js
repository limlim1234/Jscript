//배열에 데이터베이스를 저장하는걸로치고 게시판만들기
class Board {
    constructor(boardNo, title, content, writer) {
        this._boardNo = boardNo;
        this._title = title;
        this._content = content;
        this._writer = writer;

    }
    //게터세터
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
} //클래스끝남

let boardDB = [];

boardDB.push(new Board(1, '자바스크립트', '웹언어입니다.', '최재영'));
boardDB.push(new Board(2, '자바', '컴파일러언어입니다.', '김현동'));
boardDB.push(new Board(3, '오라클', '데이터베이스관리', '허성준'));


// let b1 = new Board(1, 'title', 'content', 'writer');
// console.log(b1.title); // b1.title은 get, set 정의 안되어 있으면 안나옴 언더바 써야해  b1._title

let titles = ['checkbox', 'boardNo', 'title', 'content', 'writer', 'button'];
let table, tr, td, text, checkbox, button;

function createTitle() {
    //타이틀영역
    tr = document.createElement('tr');

    for (let field of titles) {

        td = document.createElement('th');

        if (field === 'checkbox') {
            checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.onchange = function () { //전체 체크박스
                let chks = document.querySelectorAll('td input[type="checkbox"]');
                console.log(chks);
                for (let i = 0; i < chks.length; i++) {
                    chks[i].checked = this.checked; //true or false //디스가 th
                }
            }
            td.append(checkbox);
        } else if (field === 'button') {
            td.append('상세보기');
        } else {
            text = document.createTextNode(field);
            td.append(text);
        }

        tr.append(td);
    }
    return tr;
}


function getBoardList() {
    //데이터영역
    table = document.createElement("table");
    table.setAttribute('border', '1');
    table.setAttribute('id', 'tbl');

    table.append(createTitle()); //타이틀 row

    boardDB.forEach(function (obj, idx) {
        tr = document.createElement('tr');
        tr.setAttribute('id', obj.boardNo)
        table.append(tr);

        // 배열이 of / 필드는 in
        for (let field of titles) {
            td = document.createElement('td');

            if (field === 'checkbox') { // ===타입까지 하기 위해서 세개를 해야함
                checkbox = document.createElement('input');
                checkbox.setAttribute('type', 'checkbox');
                checkbox.onchange = function () {
                    //console.log(getBoard(id);
                    synchCheckbox();
                }
                td.append(checkbox);
            } else if (field === 'button') {
                button = document.createElement("button");
                button.innerHTML = '상세보기';
                button.onclick = showDetail;
                td.append(button);

            } else {
                text = document.createTextNode(obj[field]);
                td.append(text);
            }
            tr.append(td);
        }

    });

    document.getElementById("main").append(table);

}
//db에 입력한거
function insertData() {
    let boardNo = document.getElementById('boardNo').value;
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    let writer = document.getElementById('writer').value;

    boardDB.push(new Board(boardNo, title, content, writer));
    //체크박스 부분
    let tbl = document.getElementById('tbl');
    tr = document.createElement('tr');
    td = document.createElement('td');
    tr.setAttribute("id", boardNo); //추가된 부분은 아이디가 없으니 줘야함
    checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');

    td.append(checkbox);
    tr.append(td);
    //게시글번호
    td = document.createElement('td');
    td.append(boardNo);
    tr.append(td);
    //제목
    td = document.createElement('td');
    td.append(title);
    tr.append(td);
    //내용
    td = document.createElement('td');
    td.append(content);
    tr.append(td);
    //작성자
    td = document.createElement('td');
    td.append(writer);
    tr.append(td);

    td = document.createElement('td');
    button = document.createElement('button');
    button.innerHTML = '상세보기'; //버튼이름

    button.onclick = showDetail;


    td.append(button);
    tr.append(td);

    tbl.append(tr);

    // console.log(boardDB);
    let a = parseInt(document.getElementById('boardNo').value); //boardNo이 문자열이니까 문자를 숫자로 바꿔줘야하니까 parseInt를 한다
    document.getElementById('boardNo').value=a+1; // 숫자가 된 a를 +1하면 됨
    document.getElementById('title').value = null;
    document.getElementById('content').value = null;
    content = document.getElementById('content').value = null;
    document.getElementById('writer').value = null;

    // boardDB.forEach((a, b) => {
    //     if (b == 0) {
    //         a.value++;
    //         boardDB[b].value = a.value;
    //     } else {

    //         boardDB[b].value = "";
    //     }
    // });

}

function getBoard(id) {
    let oneBoard;
    for (let board of boardDB) {
        if (board.boardNo == id) {
            //oneBoard = new Board(board.boardNo,board.title,board.content,board.writer);
            oneBoard = board;

        }
    }
    return oneBoard;
}

function showDetail() {
    //상세보기
    let id = this.parentNode.parentNode.id;
    let board = getBoard(id);
    document.getElementById('boardNo').value = board.boardNo;
    document.getElementById('title').value = board.title;
    document.getElementById('content').value = board.content;
    document.getElementById('writer').value = board.writer;
}

function updateData() {
    //element 정보를 가지고 오도록
    let boardNo = document.getElementById('boardNo').value;
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    let writer = document.getElementById('writer').value;

    //배열에서 수정
    for (let i = 0; i < boardDB.length; i++) {
        if (boardDB[i].boardNo == boardNo) {
            boardDB[i] = new Board(boardNo, title, content, writer)
            break;
        }
    }
    console.log('break');
    console.log(boardDB);

    //화면에서 수정

    let trs = document.querySelectorAll('#tbl tr[id]');
    for (let i = 0; i < trs.length; i++) {
        console.log(trs[i].id, boardNo)
        if (trs[i].id == boardNo) {
            trs[i].children[2].innerHTML = title;
            trs[i].children[3].innerHTML = content;
            trs[i].children[4].innerHTML = writer;
        }
    }
}
//전체선택 checkbox와 각 데이터별 checkbox동기화
function synchCheckbox() {
    //1)checkAll true가정 데이터영역에 있는 값중 false
    //2) checkAll false;
    let th_ckb = document.querySelectorAll('th input[type="checkbox"]'); //헤드에있는 쳌박
    let td_ckb = document.querySelectorAll('td input[type="checkbox"]');
    th_ckb[0].checked = true;
    for (let i = 0; i < td_ckb.length; i++) {
        // if(td_ckb[i].checked) {
        //     th_ckb[0].checked = true;
        //     break;
        // }
        if (!td_ckb[i].checked) {
            th_ckb[0].checked = false;
            break;
        }
    }
}

//선택한 데이터 삭제
function deleteChecked() {
    //화면에서 삭제
    let checkedNo = [];
    let chks = document.querySelectorAll('td input[type="checkbox"]');
    for (let i = 0; i < chks.length; i++) {
        if (chks[i].checked == true) {
            checkedNo.push(chks[i] //여기까지 체크박스
                .parentNode.parentNode.id); // td, tr태그 id값만 담는다
            chks[i].parentNode.parentNode.remove();

        }
    }
    //배열에서 삭제
    checkedNo.forEach(function (obj, idx) { //삭제할 대상 배열반복
        for (let i = 0; i < boardDB.length; i++) {
            if (boardDB[i].boardNo = obj) {
                boardDB.splice(i, 1, ''); //splice 대체
                break;
            }
        }

    });
    console.log(boardDB);
    document.querySelectorAll('th input[type="checkbox"]')[0].checked;
}