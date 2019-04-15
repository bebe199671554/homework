var result = [];
var word = "";



function removeto() {

    document.getElementById("goo").disabled = true;
    $('.carousel').carousel({
        interval: 30
    })
    if (result.length != 1) {

        n = getRandom(result.length) - 1;

        setTimeout(function() {

            $('.carousel').carousel(n);
            console.log("移除" + result[n]);
            document.getElementById("numb").innerHTML += result[n] + " ";
        }, 5000);

        setTimeout(function() {
            if (n == 0) { $('.carousel').carousel(n + 1); } else { $('.carousel').carousel(n - 1); }

            $("#b" + result[n]).remove();
            result.splice(n, 1);
            console.log(result);
            $('.carousel').carousel({
                interval: 30
            })
            document.getElementById("goo").disabled = false;
        }, 10000);
        //沒出現過的話就寫進字串裡
    } else {


        $('.carousel').carousel('pause');
        document.getElementById("numb").innerHTML += r[0] + " ";

    }





};

function carougo() {

}

function getPowerNum() {

    document.getElementById("make").disabled = true;

    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //原有陣列放全部數字


    var ranNum = 10;
    for (var i = 0; i < ranNum; i++) {
        var ran = Math.floor(Math.random() * arr.length);
        result.push(arr.splice(ran, 1)[0]); //舊陣列去除數字轉移到新陣列

        var div = document.createElement("div");
        if (i == 0) {
            div.className = "carousel-item active lottbg";
        } else {
            div.className = "carousel-item  lottbg";
        }

        div.id = 'b' + result[i];
        div.innerHTML = result[i];
        document.getElementById("box").appendChild(div);
        $('.carousel').carousel({
            interval: 30
        })
        $('.carousel').carousel('pause')


    };


    console.log(result);








    return result;





    //     var status = '';
    //     var NewArray = new Array(10);
    //     var n = 0;
    //     for (i = 0; i < 10;) {

    //         n = getRandom(x);
    //         if (status.indexOf(n) != -1) {


    //         } else {
    //             status += n + ' ';
    //             NewArray[i] = n;
    //             var div = document.createElement("div");
    //             if (i == 0) {
    //                 div.className = "carousel-item active lottbg";
    //             } else {
    //                 div.className = "carousel-item  lottbg";
    //             }

    //             div.id = 'b' + NewArray[i];
    //             div.innerHTML = NewArray[i];
    //             document.getElementById("box").appendChild(div);
    //             $('.carousel').carousel({
    //                 interval: 30
    //             })
    //             $('.carousel').carousel('pause')

    //             i++
    //         };
    //     };
    //     r = NewArray;
    //     console.log(r);

    //     return r;


};

function getRandom(x) {
    return Math.floor(Math.random() * x) + 1;

};