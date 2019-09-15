function buttonToggle(buttonName, textName) {
    var x = document.getElementById(buttonName);
    var y = document.getElementById(textName)
    if (x.style.backgroundColor === "white") {
        x.style.backgroundColor = "#E56B5D";
        y.style.color = "white";
    } else {
        y.style.color = "#494A4F";
        x.style.backgroundColor = "white";
    }
    if (buttonName == "peBut") {
        var x = document.getElementById("myForm2");
        var y = document.getElementById("content");

        if (x.style.display == "block") {
            x.style.display = "none";
            y.style.opacity = "1";
        }
        else {
            x.style.display = "block";
            y.style.opacity = "0.2";
            x.style.opacity = "1";

        }
    }
}
function violation(){
    var x = document.getElementById("peBut");
    var y = document.getElementById("pe")
    x.style.backgroundColor = "#E56B5D";
    y.style.color = "white";
    document.getElementById("myForm2").style.display = "none";

}

function getType() {
    var x = document.getElementById("offense");
    x = x.options[x.selectedIndex].value;
    if (x === "minor") {
        items = ["Unauthorized sale or vending",
        "Unauthorized solicition of money or any contribution",
        "Removing, defacing, tearing, mutilating or  altering the contents of any official poster",
        "Violation to the policies, rules, guideliens, and regulations",
        "Not returning school materials or equipemt or bringing out the same without approval",
        "Playing games in the cafeteria during lunch hours",
        "Misuse or loss of school furniture, equipment or resources",
        "Scandalous display of affection",
        "Violation of the dress code",
        "Littering",
        "Smoking"];
    } else {
        items = ["Any act that endangers the life or security of the members of the APC Community",
        "Cutting Classes (for Senior High School)",
        "Forgery, alteration, misuse or tampering with school documents",
        "Sexual Harrasment",
        "Sexual Advances",
        "Physical Assault",
        "Vandalism",
        "Use or posseion of firearms and/or other deadly weapons",
        "Use, possession or distribution of prohibited drug substances",
        "Use, possession or distribution of alcoholic drinks within 200 meters radius of school",
        "Unauthorized access to or use of school facilities",
        "Violation of the policies regarding use of school facilities",
        "Act of lewdness, commission of any act of immorality or display",
        "Stealing",
        "Acts of embezzlement",
        "Gross acts of disrespect",
        "Act that tend to destroy the good name of the college",
        "Gambling",
        "Membership in any fraternity",
        "Intentional insubordination",
        "Fifth and succeeding loss of an ID",
        "Threatening another with infliction upon his person, honor or property",
        "Criminal offense involving moral crime",
        "Bribery",
        "Boycotting",
        "Cheating in any form",
        "Plagiarism",
        "Fabrication and falsification of data",
        "Deception or providing false information",
        "Aiding in the violation of school policies",
        "Bullying of any kind",
        "Unauthorized use of personal data of other individual",
        "Act be determined by the Discipline Office"];
    }
    var str = ""
    for (var item of items) {
        str += "<option>" + item + "</option>";
    }
    document.getElementById("desc").innerHTML = str;
}

function clearButtons() {
    var buttons = ["peBut", "skirtBut", "blazBut", "footBut", "denimBut", "neckBut", "shirtBut", "otherBut"];
    var texts = ["pe", "skirt", "blaz", "foot", "denim", "neck", "shirt", "other"];
    for (i = 0; i < buttons.length; i++) {
        var x = document.getElementById(buttons[i]);
        var y = document.getElementById(texts[i]);
        y.style.color = "#494A4F";
        x.style.backgroundColor = "white";
    }


}

function submit() {
    var x = document.getElementById("myForm");
    var y = document.getElementById("content");

    if (x.style.display == "block") {
        x.style.display = "none";
        y.style.opacity = "1";
    }
    else {
        x.style.display = "block";
        y.style.opacity = "0.2";
        x.style.opacity = "1";

    }
}
