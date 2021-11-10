MyFriendList = []

function invite() {
    var GuestToAdd = document.getElementById("input1").value;
    if (GuestToAdd == "") {
        
    } else {
        MyFriendList.push(GuestToAdd); 
    }
    document.getElementById("div1").innerHTML = MyFriendList;
    document.getElementById("input1").value = "";
}

function remove() {
    MyFriendList.splice(0);
    document.getElementById("div1").innerHTML = MyFriendList;
    document.getElementById("input1").value = "";
}

function display() {
    var DisplayedArray = []
    var LengthofArray = MyFriendList.length;
    for (let i = 0; i < LengthofArray; i++) {
        var MathimaticalNumber = 0;
        MathimaticalNumber = i + 1;
        DisplayedArray.push("<h4>"+MathimaticalNumber+"-"+MyFriendList[i]+"</h4>") ;
    }
    var Removed = DisplayedArray.join(" ");
    document.getElementById("div2").innerHTML = Removed;
    document.getElementById("button3").style.display = "none";
    document.getElementById("button4").style.display = "inline-block";
}

function sort() {
    MyFriendList.sort();
    DisplayedArray2 = []
    var LengthofArray2 = MyFriendList.length;
    for (let e = 0; e < LengthofArray2; e++) {
        var MathimaticalNumber2 = 0;
        MathimaticalNumber2 = e + 1;
        DisplayedArray2.push("<h4>"+MathimaticalNumber2+"-"+MyFriendList[e]+"</h4>") ;
    }
    var Removed2 = DisplayedArray2.join(" ");
    document.getElementById("div2").innerHTML = Removed2;
    document.getElementById("button4").style.display = "none";
    document.getElementById("button3").style.display = "inline-block";
}

function search() {
    var FriendToSearch = document.getElementById("input2").value
    var Found = 0
    var LengthofArray3 = MyFriendList.length;
    for (let q = 0; q < LengthofArray3; q++) {
       if (MyFriendList[q] == FriendToSearch) {
           Found = Found + 1
       }

    }
    if (Found > 1) {
        document.getElementById("div3").innerHTML = "The Name ("+ FriendToSearch+ ") Was Found "+ Found+" Times"
    }
    if (Found == 0) {
        document.getElementById("div3").innerHTML = "Couldn't Find Any Searches With The Name ("+ FriendToSearch+")"
    }
    if (Found == 1) {
        document.getElementById("div3").innerHTML = "The Name ("+ FriendToSearch+ ") Was Only Found 1 Time"
    }
}