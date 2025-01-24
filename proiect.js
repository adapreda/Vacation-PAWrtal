
var index=0;

const poze = ["joc1.jpg", "joc2.jpg", "joc3.jpg", "joc4.jpg", "joc5.jpg", "joc6.jpg"];
const poze_text = ["prieteni noi", "joaca cu prietenii", "ma distrez si singur", "prieten nou", "locul meu de joaca", "sunt aici!!!"];

function schimb_design(){
    let titlu = document.getElementById('title_paw');
    titlu.id="title_paw_2";
    titlu.style.color = '#5B9AA0';

    let titlu2 = document.getElementById('dcnoi');
    titlu2.style.fontFamily = 'Trebuchet MS';
    titlu2.style.color = '#5B9AA0';

    let header2 = document.getElementsByTagName('h2');
    for( let i=0; i < header2.length ; i++){
        header2[i].style.color = '#5B9AA0';
        header2[i].style.fontSize = '220%';
    }

    let header3 = document.getElementsByTagName('h3');
    for(let i=0; i<header3.length; i++){
        header3[i].style.color = '#419ba6';
        header3[i].style.color = '140%';
    }

    let imagine1 = document.getElementById('pisicut');
    imagine1.src = 'pisica_birmaneza_fericita.jpg';

    let btn = document.getElementsByClassName('buton');
    btn[0].style.border = '2px solid #5B9AA0';
    
    let text = document.getElementsByClassName('text_in_button');
    text[0].style.fontSize = '100%';
    text[0].style.textTransform = 'capitalize';

    let text2 = document.getElementsByTagName('p');
    for(let i=0; i<text2.length; i++){
        text2[i].style.letterSpacing = '0.35px';
    }

    let text3 = document.getElementById('casuta');
    text3.style.color = '#419ba6';
}


function adaug_elemente(){


    let footer = document.getElementsByClassName('footer_class');

    let cop1 = document.createElement('p');
    cop1.setAttribute('class','footer_text');
    cop1.textContent = 'Contact';
    cop1.style.color = '#5B9AA0';
    cop1.style.fontWeight = 'bold';
    footer[0].appendChild(cop1);

    let contacte = document.createElement('div');
    contacte.setAttribute('class','contacte_div');
    
    let poza1 = document.createElement('img');
    poza1.src = 'phone-call.png';
    poza1.style.height = '50%';
    contacte.appendChild(poza1);

    let tel = document.createElement('span');
    tel.setAttribute('class','text_in_footer');
    tel.textContent = '  0123456789 ';
    tel.style.color = '#419ba6';
    contacte.appendChild(tel);

    let poza2 = document.createElement('img');
    poza2.src = 'mail.png';
    poza2.style.height = '50%';
    contacte.appendChild(poza2);

    let email = document.createElement('span');
    email.setAttribute('class','text_in_footer');
    email.textContent = ' vacation.pawrtal@miau.ro ';
    email.style.color = '#419ba6';
    contacte.appendChild(email);
 
    let poza3 = document.createElement('img');
    poza3.src = 'location.png';
    poza3.style.height = '50%';
    contacte.appendChild(poza3);

    let loc = document.createElement('span');
    email.setAttribute('class','text_in_footer');
    loc.textContent = ' Bulevardul Regina Elisabeta ';
    loc.style.color = '#419ba6';
    contacte.appendChild(loc);

    footer[0].appendChild(contacte);

    let cop2 = document.createElement('p');
    cop2.setAttribute('class','footer_text');
    cop2.textContent = 'Social Media';
    cop2.style.color = '#5B9AA0';
    cop2.style.fontWeight = 'bold';
    footer[0].appendChild(cop2);

    let excl = document.createElement('p');
    excl.textContent = 'Va asteptam la pauza de relaxare!';
    excl.setAttribute('class','text_in_footer');
    excl.style.color = '#5B9AA0';
    excl.style.textAlign = 'center';
    excl.style.fontSize = '95%';
    footer[0].insertBefore(excl, cop2);
    
    let social = document.createElement('div');
    social.setAttribute('class','contacte_div');
    social.style.height = '10vh';
    
    let fb = document.createElement('img');
    fb.src = 'facebook-app-symbol.png';
    fb.style.height = '30%';
    social.appendChild(fb);

    let textfb = document.createElement('span');
    textfb.setAttribute('class','text_in_footer');
    textfb.textContent = 'Vacation PAWrtal';
    textfb.style.color = '#419ba6';
    social.appendChild(textfb);

    let insta = document.createElement('img');
    insta.src = 'instagram.png';
    insta.style.height = '30%';
    social.appendChild(insta);

    let texti = document.createElement('span');
    texti.setAttribute('class','text_in_footer');
    texti.textContent = ' vacation_pawwwrtal';
    texti.style.color = '#419ba6';
    social.appendChild(texti);

    let tt = document.createElement('img');
    tt.src = 'tik-tok.png';
    tt.style.height = '30%';
    social.appendChild(tt);

    let texttt = document.createElement('span');
    texttt.setAttribute('class','text_in_footer');
    texttt.textContent = ' vacation_pawwratl_holidayz';
    texttt.style.color = '#419ba6';
    social.appendChild(texttt);

    footer[0].appendChild(social);
    
}


function gallery(directie){
    let p1 = document.getElementById('poza1');
    let p2 = document.getElementById('poza2');
    let t1 = document.getElementById('poza1_text');
    let t2 = document.getElementById('poza2_text');
    
    if(directie == 1){
        if(index == 5){
            index = -1;
        }
        index += directie;
        p1.src = poze[index];
        t1.textContent = poze_text[index];
        if(index == 5){
            index = -1;
        }
        index += directie;
        p2.src = poze[index];
        t2.textContent = poze_text[index];
        index -= 1;

    }
    else if(directie == -1){
        p2.src = poze[index];
        t2.textContent = poze_text[index];
        if(index == 0){
            index=6;
        }
        index += directie;
        p1.src = poze[index];
        t1.textContent = poze_text[index];
    }
}

function ajutor_extensie(){
    let princ = document.querySelector('.ajutor');
    princ.addEventListener('click', disparitie);
}
function disparitie(){
    let sec = document.querySelector('.ajutor_extensie');
    if(sec.style.display == 'none' || sec.style.display == '' || sec.style.display == null){
        sec.style.display = 'block';
    }
    let close = document.getElementById('pop_extensie');
    close.addEventListener('click', inchidere);
}
function inchidere(){
    let sec = document.querySelector('.ajutor_extensie');
    if(sec.style.display != 'none' || sec.style.display != '' || sec.style.display != null){
        sec.style.display = 'none';
    }
}


function patratele(){
    let c1 = document.getElementById('cerc1');
    let p1 = document.getElementById('patrat1');
    c1.addEventListener('click', () => patrat(p1));
    let c2 = document.getElementById('cerc2');
    let p2 = document.getElementById('patrat2');
    c2.addEventListener('click', () => patrat(p2));
    let c3 = document.getElementById('cerc3');
    let p3 = document.getElementById('patrat3');
    c3.addEventListener('click', () => patrat(p3));
    let c4 = document.getElementById('cerc4');
    let p4 = document.getElementById('patrat4');
    c4.addEventListener('click', () => patrat(p4));
    let c5 = document.getElementById('cerc5');
    let p5 = document.getElementById('patrat5');
    c5.addEventListener('click', () => patrat(p5));
    let c6 = document.getElementById('cerc6');
    let p6 = document.getElementById('patrat6');
    c6.addEventListener('click', () => patrat(p6));
}
function patrat(p){
     if(p.style.opacity == 0 || p.style.opacity == '' || p.style.opacity == null){
         p.style.opacity = 1;
     }
     p.addEventListener('click', () => papa(p));
}
function papa(p){
    if(p.style.opacity != 0 || p.style.opacity != '' || p.style.opacity != null){
        p.style.opacity = 0;
    }
}

function joc(){
    let play = document.getElementById('play');
    play.addEventListener('click', big_game);
}
function big_game(){
    let cadru = document.querySelector('.cadru_joc');
    let res = document.querySelector('.rezultat');
    if(cadru.style.display == 'none' || cadru.style.display == '' || cadru.style.display == null){
        cadru.style.display = 'block';
        res.style.display = 'flex';
    }
    let closee = document.getElementById('pop_extensie2');
    closee.addEventListener('click', pop_game);
}
function pop_game(){
    let cadru = document.querySelector('.cadru_joc');
    let res = document.querySelector('.rezultat');
    if(cadru.style.display != 'none' || cadru.style.display != '' || cadru.style.display != null){
        cadru.style.display = 'none';
        res.style.display = 'none';
    }
}

var pis_negru=0;
var bishon=0;
var pis_alb=0;
var husky=0;
var pis_porto=0;
var pis_gri=0;
var pn1=0,pn2=0,bi1=0,bi2=0,pa1=0,pa2=0,h1=0,h2=0,pp1=0,pp2=0,pg1=0,pg2=0;
var counterr = 0;

function game_timer(){
    let but = document.getElementById('play');
    let counter = document.querySelector('.counter');
    let cc = document.querySelector('.counter_text');
    but.addEventListener('click', () => {
        counter.style.opacity = '1';
        const seconds = setInterval(() => {
            ++counterr;
            cc.textContent = counterr;
            if(pis_negru == 2 && (pn1 ==1 || pn2 == 1)){
                clearInterval(seconds);
                castig();
            }
            if(bishon == 2 && (bi2 == 1 || bi1 == 1)){
                clearInterval(seconds);
                castig();
            }
            if(pis_alb == 2 && (pa2 == 1 || pa1 == 1)){
                clearInterval(seconds);
                castig();
            }
            if(husky == 2 && (h2 == 1 || h1 == 1)){
                clearInterval(seconds);
                castig();
            }
            if(pis_porto == 2 && (pp2 == 1 || pp1 == 1)){
                clearInterval(seconds);
                castig();
            }
            if(pis_gri == 2 && (pg2 == 1 || pg == 1)){
                clearInterval(seconds);
                castig();
            }
            if(counterr == 10){
                console.log('Ai pierdut!');
                clearInterval(seconds);
                pierzator();
            }
        }, 1000);
    });
}

var c = 0;

function pierzator(){
    let res = document.querySelector('.rezultat');
    let result = document.getElementById('result');
    let punctaj = document.getElementById('howmuch');
    let timp = document.getElementById('time');
    let calif = document.getElementById('calif');
    c = -5;
    calif.textContent = Math.sign(c);
    res.style.opacity = '1';
    result.textContent = 'Pierzator';
    punctaj.textContent = '0 p';
    timp.textContent = counterr + ' s';
}

function castig(){
    let res = document.querySelector('.rezultat');
    let result = document.getElementById('result');
    let punctaj = document.getElementById('howmuch');
    let calif = document.getElementById('calif');
    let timp = document.getElementById('time');
    res.style.opacity = '1';
    c = 5;
    setTimeout(() => {
        calif.textContent = Math.sign(c);
        result.textContent = 'Castigator';
        punctaj.textContent = '100 p';
        timp.textContent = counterr + ' s';
    },2000);
}

function tasta(){
    let c1 = document.getElementById('card1');
    let c2 = document.getElementById('card2');
    let c3 = document.getElementById('card3');
    let c4 = document.getElementById('card4');
    let c5 = document.getElementById('card5');
    let c6 = document.getElementById('card6');
    let c7 = document.getElementById('card7');
    let c8 = document.getElementById('card8');
    let c9 = document.getElementById('card9');
    let c10 = document.getElementById('card10');
    let c11 = document.getElementById('card11');
    let c12 = document.getElementById('card12');
    let cadru = document.querySelector('.cadru_joc');
    document.body.onkeyup = function(event){
        switch(event.key)
        {
            case "p":
                c1.style.opacity = '1';
                if(pn1 == 0){
                    pis_negru += 1;
                    pn1=1;
                }
                if(pis_negru == 2 && pn2 == 1){
                    console.log("felicitari, ai castigat!");
                    cc.textContent = '4';
                }
            break;
            case "n":
                if(pn2 == 0){
                    pis_negru += 1;
                    pn2=1;
                }
                if(pis_negru == 2 && pn1 == 1){
                    console.log("felicitari, ai castigat!");
                }
                c6.style.opacity = '1';
            break;
            case "b":
                c2.style.opacity = '1';
                if(bi1 == 0){
                    bishon += 1;
                    bi1 = 1;
                }
                if(bishon == 2 && bi2 == 1){
                    console.log("felicitari, ai castigat!");
                }
            break;
            case "s":
                c11.style.opacity = '1';
                if(bi2 == 0){
                    bishon += 1;
                    bi2 = 1;
                }
                if(bishon == 2 && bi1 == 1){
                    console.log("felicitari!");
                }
            break;
            case "i":
                c3.style.opacity = '1';
                if(pa1 == 0){
                    pis_alb += 1;
                    pa1 = 1;
                }
                if(pis_alb == 2 && pa2 == 1){
                    console.log("felicitari!");
                }
            break;
            case "a":
                c12.style.opacity = '1';
                if(pa2 == 0){
                    pis_alb += 1;
                    pa2 = 1;
                }
                if(pis_alb == 2 && pa1 == 1){
                    console.log("felicitari!");
                }
            break;
            case "h":
                c4.style.opacity = '1';
                if(h1 == 0){
                    husky += 1;
                    h1 = 1;
                }
                if(husky == 2 && h2 == 1){
                    console.log("felicitari!");
                }
            break;
            case "y":
                c10.style.opacity = '1';
                if(h2 == 0){
                    husky += 1;
                    h2 = 1;
                }
                if(husky == 2 && h1 == 1){
                    console.log("felicitari!");
                }
            break;
            case "c":
                c5.style.opacity = '1';
                if(pp1 == 0){
                    pis_porto += 1;
                    pp1 = 1;
                }
                if(pis_porto == 2 && pp2 == 1){
                    console.log("felicitari!");
                }
            break;
            case "o":
                c8.style.opacity = '1';
                if(pp2 == 0){
                    pis_porto += 1;
                    pp2 = 1;
                }
                if(pis_porto == 2 && pp1 == 1){
                    console.log("felicitari!");
                }
            break;
            case "g":
                c7.style.opacity = '1';
                if(pg1 == 0){
                    pis_gri += 1;
                    pg1 = 1;
                }
                if(pis_gri == 2 && pg2 == 1){
                    console.log("felicitari!");
                }
            break;
            case "r":
                c9.style.opacity = '1';
                if(pg2 == 0){
                    pis_gri += 1;
                    pg2 = 1;
                }
                if(pis_gri == 2 && pg1 == 1){
                    console.log("felicitari!");
                }
            break;
        }

    }
}

 
window.onload = function(){
    schimb_design();
    adaug_elemente();
    ajutor_extensie();
    patratele();
    joc();
    game_timer();
    tasta();
}
