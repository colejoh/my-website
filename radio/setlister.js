function songPrint() {
    var weekOne = [
        ["","","Sound & Color","Alabama Shakes"],
        ["","","Wendell Walker","Andy Shauf"],
        ["","","The Night They Drove old Dixie Down","The Band"],
        ["","","For Emma","Bon Iver"],
        ["","","Sons & Daughters","The Decemberists"],
        ["","","1984","Devarrow"],
        ["","","Im Writing a Novel","Father John Misty"],
        ["","","Astronaut","Gregory Alan Isakov"],
        ["","","Thief and a Liar","Jeffrey Martin"],
        ["","","I Need Never Get Old","Nathaniel Rateliff & The Night Sweats"],
        ["","","Panzy Waltz","Shakey Graves"],
        ["","","To cure what ails...","Shakey Graves"],
        ["","","It's Midnight","St. Paul & The Broken Bones"],
        ["","","I Won't Be Found","The Tallest Man on Earth"]
    ];

    var html = "";
    for (var i = 0; i < weekOne.length; i++) {
        html = html + "<a href='";
        console.log(html);
        html = html + weekOne[0];
        console.log(html);
        html = html + "'><div class='song'><div class='art'><img src='";
        console.log(html);
        html = html + weekOne[1];
        console.log(html);
        html = html + "width='100px' height ='100px'></div><div class='right'><div class='name'>";
        console.log(html);
        html = html + weekOne[2] + " - " + weekOne[3];
        console.log(html);
        html = html + "</div></div></div></a>";
        console.log(html);
    }
    return html;
};

function doItAll() {
    var html = songPrint;
    console.log(html);
    document.getElementById('songs').innerHTML = html;
}
