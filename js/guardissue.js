function buttonToggle(buttonName, textName) {
    var x = document.getElementById(buttonName);
    var y = document.getElementById(textName)
    if (x.style.backgroundColor === "white") {
        x.style.backgroundColor = "#E56B5D";
        y.style.color="white";
    } else {
        y.style.color = "#494A4F";
        x.style.backgroundColor="white";
    }
}

function clearButtons(){
    var buttons = ["peBut", "skirtBut", "blazBut", "footBut", "denimBut", "neckBut", "shirtBut", "otherBut"];
    var texts = ["pe", "skirt", "blaz", "foot", "denim", "neck", "shirt", "other"];
    for (i = 0; i < buttons.length; i++) {
        var x = document.getElementById(buttons[i]);
        var y = document.getElementById(texts[i]);
        y.style.color = "#494A4F";
        x.style.backgroundColor="white";
      }

    
}

function submit() {
    var x = document.getElementById("myForm");
    var y = document.getElementById("content");

    if (x.style.display == "block"){
        x.style.display = "none";
        y.style.opacity = "1";
    }
    else{
        x.style.display = "block";
        y.style.opacity = "0.2";
        x.style.opacity = "1";

    }
  }
