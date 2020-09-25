class Board {
    constructor(boardNo, title, content, writer) {
        this._boardNo = boardNo;
        this._title = title;
        this._content = content;
        this._writer = writer;

    }
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
} // class

let boardDB = [];

boardDB.push(new Board(1, '자바스크립트', '웹언어입니다.', '최재영'));
boardDB.push(new Board(2, '자바', '컴파일러언어입니다.', '김현동'));
boardDB.push(new Board(3, '오라클', '데이터베이스관리', '허성준'));


// let b1 = new Board(1, 'title', 'content', 'writer');
// console.log(b1.title); // b1.title은 get, set 정의 안되어 있으면 안나옴 언더바 써야해  b1._title

let titles = ['checkbox', 'boardNo', 'title', 'content', 'writer', 'button'];
let table, tr, td, text, checkbox,button;

function createTitle() {
    // 타이틀 넣기
    tr = document.createElement('tr');

    for (let field of titles) {

        td = document.createElement('th');

        if (field === 'checkbox') {
            checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
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

// 데이터 넣기
function getBoardList() {

    table = document.createElement("table");
    table.setAttribute('border', '1');
    table.setAttribute('id', 'tbl');

    table.append(createTitle()); // 타이블 붙이기 함수 사용

    boardDB.forEach(function (obj, idx) {
        tr = document.createElement('tr');
        tr.setAttribute('id', obj.boardNo)
        table.append(tr);

        // 배열이 of / 필드는 in
        for (let field of titles) {
            td = document.createElement('td');

            if (field === 'checkbox') {
                checkbox = document.createElement('input');
                checkbox.setAttribute('type', 'checkbox');
                checkbox.onclick = function () {
                  
                }
                td.append(checkbox);
            } else if (field === 'button') {
                button=document.createElement("button");
                button.innerHTML='상세보기';
                button.onclick= showDetail;
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
    button=document.createElement('button');
    button.innerHTML='상세보기'; //버튼이름

    button.onclick= showDetail;


    td.append(button);
    tr.append(td);

    tbl.append(tr);

    console.log(boardDB);

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
    let board =getBoard(id);
    document.getElementById('boardNo').value = board.boardNo;
    document.getElementById('title').value = board.title;
    document.getElementById('content').value = board.content;
    document.getElementById('writer').value = board.writer;
}