// document.getElementsByClassName("btnum").onclick = function() {
//     console.log(this.innerHTML);
// }
function counttext(numb) {
    if (document.getElementById("answertext").innerHTML == '0' && numb.innerHTML != '.') {
        document.getElementById("answertext").innerHTML = "";
        console.log("" + "0");
    }
    if (numb.innerHTML == '.' && document.getElementById("answertext").innerHTML.indexOf('.') != -1) {
        document.getElementById("dot").disabled = true;
    } else
        document.getElementById("answertext").innerHTML += numb.innerHTML;

    console.log("" + numb.innerHTML);
}

function countnumb(cb) {
    //加減乘除SWITHC
    if (document.getElementById("counttext").innerHTML == "_") {
        document.getElementById("counttext").style.color = "#5e5e5e";
        document.getElementById("counttext").innerHTML = "";

    }



    document.getElementById("counttext").innerHTML += document.getElementById("answertext").innerHTML;
    document.getElementById("counttext").innerHTML += cb.innerHTML;
    document.getElementById("answertext").innerHTML = "0";
    document.getElementById("dot").disabled = false;
    if (document.getElementById("counttext").innerHTML.indexOf("÷0") != -1) {
        document.getElementById("answertext").innerHTML = "無法除以零";
        //還沒做完 不能除0，重新來過cleartext(even) 灰字變色#5e5e5e
    }

}


//等於計算結果 變回預設值
function ans(even) {
    var x = RegExp("<i class='fas fa-times '></i>");
    var ans = document.getElementById("counttext").innerHTML.replace('÷', "/").replace('×', "*") + document.getElementById("answertext").innerHTML;
    console.log(ans);
    // console.log(document.getElementById("counttext").innerHTML.replace("<i class='fas fa-times '></i>", '*'));

    document.getElementById("answertext").innerHTML = eval(ans);
    document.getElementById("counttext").innerHTML = "_"
    document.getElementById("counttext").style.color = "#ececec";

}

function back(even) {
    if (document.getElementById("answertext").innerHTML.length > 1)
        document.getElementById("answertext").innerHTML = document.getElementById("answertext").innerHTML.slice(0, document.getElementById("answertext").innerHTML.length - 1);
    else
        document.getElementById("answertext").innerHTML = '0';
}

function cleartext(even) {
    document.getElementById("dot").disabled = false;
    document.getElementById("answertext").innerHTML = "0";
    document.getElementById("counttext").innerHTML = "_"
    document.getElementById("counttext").style.color = "#ececec";
    //灰字變回預設
}

function cetext(even) {
    document.getElementById("dot").disabled = false;
    document.getElementById("answertext").innerHTML = "0";
    //灰字不變
}