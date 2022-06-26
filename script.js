function he() {
    var subcount = document.getElementById("eh").value;
    var marks1 = document.getElementById("num1").value;
    var marks2 = document.getElementById("num2").value;
    var marks3 = document.getElementById("num3").value;
    var marks4 = document.getElementById("num4").value;
    var marks5 = document.getElementById("num5").value;
    var marks6 = document.getElementById("num6").value;
    var marks7 = document.getElementById("num7").value;
    var marks8 = document.getElementById("num8").value;
    var marks9 = document.getElementById("num9").value;
    var marks10 =document.getElementById("num10").value;
    var marks11 =document.getElementById("num11").value;
    var marks12 =document.getElementById("num12").value;
    var marks13 = document.getElementById("num13").value;
    var marks14 = document.getElementById("num14").value;

    var marks = []

    marks.push(marks1)
    marks.push(marks2)
    marks.push(marks3)
    marks.push(marks4)
    marks.push(marks5)
    marks.push(marks6)
    marks.push(marks7)
    marks.push(marks8)
    marks.push(marks9)
    marks.push(marks10)
    marks.push(marks11)
    marks.push(marks12)
    marks.push(marks13)
    marks.push(marks14)

    const sum = marks.reduce((partialSum, a) => Number(partialSum) + Number(a), 0);

    document.getElementById("demo").textContent = "Your average is " + sum / Number(subcount)


}


