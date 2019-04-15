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
var x = 101;
var st = 0;
var ed = 100;

function start() {
    x = 101;
    st = 0;
    ed = 100;
    alert("遊戲開始了，請繫好安全帶。");
    document.getElementById("counttext").innerHTML = "0~100";
    document.getElementById("answertext").innerHTML = "0";
    x = Math.floor(Math.random() * 101);
    console.log(x);
    document.getElementById("starbtn").innerHTML = "放棄重來";

}

function countnumb(cb) {
    if (x == 101) {
        alert("請開始遊戲");
        document.getElementById("counttext").innerHTML = "　";
        document.getElementById("answertext").innerHTML = "　";
    } else {
        if (document.getElementById("answertext").innerHTML > 100) {
            alert("請重新輸入");
            document.getElementById("answertext").innerHTML = "　";
        } else {
            if (document.getElementById("answertext").innerHTML > x) {
                ed = document.getElementById("answertext").innerHTML;

                document.getElementById("counttext").innerHTML = st + "~" + ed;
                document.getElementById("answertext").innerHTML = "　";
            } else if (document.getElementById("answertext").innerHTML < x) {
                st = document.getElementById("answertext").innerHTML;

                document.getElementById("counttext").innerHTML = st + "~" + ed;
                document.getElementById("answertext").innerHTML = "　";

            } else if (document.getElementById("answertext").innerHTML == x) {
                alert("遊戲結束，你贏了，稍後重新開始");
                start();

            }

        }

    }
}

// //等於計算結果 變回預設值
// function ans(even) {
//     var x = RegExp("<i class='fas fa-times '></i>");
//     var ans = document.getElementById("counttext").innerHTML.replace('÷', "/").replace('×', "*") + document.getElementById("answertext").innerHTML;
//     console.log(ans);
//     // console.log(document.getElementById("counttext").innerHTML.replace("<i class='fas fa-times '></i>", '*'));

//     document.getElementById("answertext").innerHTML = eval(ans);
//     document.getElementById("counttext").innerHTML = "_"
//     document.getElementById("counttext").style.color = "#ececec";

// // }

// function back(even) {
//     if (document.getElementById("answertext").innerHTML.length > 1)
//         document.getElementById("answertext").innerHTML = document.getElementById("answertext").innerHTML.slice(0, document.getElementById("answertext").innerHTML.length - 1);
//     else
//         document.getElementById("answertext").innerHTML = '0';
// }

function cleartext(even) {

    document.getElementById("answertext").innerHTML = "0";

    //灰字變回預設
}

// function cetext(even) {
//     document.getElementById("dot").disabled = false;
//     document.getElementById("answertext").innerHTML = "0";
//     //灰字不變
// }