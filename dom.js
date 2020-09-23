let days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
//     <table>
//     <tr>
//         <th>일요일</th>
//         <th>일요일</th>
//     </tr>
// </table>
function loadPage() {
    let $table = document.createElement("table");
    $table.setAttribute('border', '1');
    let $tr = document.createElement("tr");
    let $tr1 = document.createElement("tr");
    for (let day of days) {
        let $th = document.createElement("th");
        let text = document.createTextNode(day);
        $th.appendChild(text);
        $tr.appendChild($th);
    }
    $table.appendChild($tr);
    document.getElementById("bdy").appendChild($table);
    
    let dates=[];
    for (let i=1; i<=31; i++) {
        dates.push(i);
    }
    let $td,text;
    dates.forEach(function(a,b) {
        if(b%7==0) {
            $tr=document.createElement("tr");
            $table.appendChild($tr);
        }
        $td =document.createElement("td");
        text=document.createTextNode(a);
        $td.appendChild(text);
        $table.appendChild($td);
    });


    //let이 private같은거 자바에서는 int double 이런걸 스크립트에서는 $를 씀 //let이 var랑 같은데 
}
//     <tabel>
//     <tr>
//         <td>1</td>
//         <td>2</td>
//     </tr>
// </tabel>
