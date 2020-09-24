// let dby2 = document.getElementsByTagName("body");

let hong = {
    name: "홍길동",
    age: 25,
    hobby: "독서"
};

let $table = document.createElement("table");
$table.setAttribute("border", "1")
let $tr, $td;//$text;
for(let field in hong) {
    $tr = document.createElement("tr");
    
    console.log(`field: ${field}, value: ${hong[field]}`);
    $td = document.createElement("td")
    $text = document.createTextNode(field);
    $td.appendChild($text);
    $tr.appendChild($td);

    $td = document.createElement("td")
    $text = document.createTextNode(hong[field]);
    $td.appendChild($text);
    $tr.appendChild($td);

    $table.appendChild($tr);
}

document.getElementsByTagName("body")[0].appendChild($table);