function makeStory() {
    // get form values (2 points)
    var adj1 = document.getElementById('adj1').value;
    var adj2 = document.getElementById('adj2').value;
    var adj3 = document.getElementById('adj3').value;
    var adj4 = document.getElementById('adj4').value;
    var noun1 = document.getElementById('noun1').value;
    var noun2 = document.getElementById('noun2').value;
    var noun3 = document.getElementById('noun3').value;
    var noun4 = document.getElementById('noun4').value;
    var noun5 = document.getElementById('noun5').value;
    var noun6 = document.getElementById('noun6').value;
    var number = document.getElementById('number').value;
    var potb1 = document.getElementById('potb1').value;
    var potb2 = document.getElementById('potb2').value;
    var pnoun = document.getElementById('pnoun').value;
    var liquid = document.getElementById('liquid').value;

    // Set title of story. Use at least one form value in the title. (2 points)
    title = "Medical Q & A";

    // Build story. you can add as many paragraphs as you like. (3 points)
    p1 = "PATIENT: Doctor, whenever I stand up I get a " + adj1 + " pain in my " + potb1 + ". Is this serious?";

    p2 = "DOCTOR: Sounds as if you have an inflammation of your " + noun1 + ", You need an anti-" + noun2 + " shot.";

    p3 = "PATIENT: Doctor, I'm thinking of having my " + noun3 + " removed. Is this a " + adj2 + " operation?";

    p4 = "DOCTOR: No, the operation is quite " + adj3 + ", providing you have a " + adj4 + " " + noun3 + ".";

    p5 = "PATIENT: What are the symptoms of an overactive " + noun4 + "?";

    p6 = "DOCTOR: High " + liquid + " pressure. Also, severe " + pnoun + " in the abdomen.";

    p7 = "PATIENT: Doctor, is it possible for a " + number + "-year-old man to have a " + potb2 + " attack?";

    p8 = "DOCTOR: Only if he doesn't watch his " + noun5 + " and eats too much " + noun6 + ".";

    // Display story by putting title & paragraphs into appropriate divs. (3 points)
    document.getElementById('title').innerHTML = title;
    document.getElementById('p1').innerHTML = p1;
    document.getElementById('p2').innerHTML = p2;
    document.getElementById('p3').innerHTML = p3;
    document.getElementById('p4').innerHTML = p4;
    document.getElementById('p5').innerHTML = p5;
    document.getElementById('p6').innerHTML = p6;
    document.getElementById('p7').innerHTML = p7;
    document.getElementById('p8').innerHTML = p8;

}

function addPicture() {
    document.getElementById('picture').src = 'doctor.png'
}

function changeColor() {
    document.getElementById('story').style.color = "#6699ff"
}
