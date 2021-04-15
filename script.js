var count = false;

function changeImage() {

    if (count == true) 
    {
        document.getElementById("toggleImage").src = "Images/portrait.png";
        count = false;
    }
    else 
    {
        document.getElementById("toggleImage").src = "Images/memoji.png";
        count = true;
    };
};

function showText(id) {
    document.getElementById(id).style.display = "inline";
}
