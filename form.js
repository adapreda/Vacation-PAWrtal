window.onload = function(){

    let animalut = localStorage.getItem('animalutkey');
    let descriere = localStorage.getItem('dec_key');
    let email = localStorage.getItem('emailkey');
    let nastere = localStorage.getItem('nasterekey');
    let nume_animalut = localStorage.getItem('nume_animalutkey');
    let nume = localStorage.getItem('nume_key');
    let prenume = localStorage.getItem('prenumekey');
    let tel = localStorage.getItem('telkey');
    let varsta = localStorage.getItem('varstakey');

    let text = document.getElementById('text');

    let div1 = document.createElement('div');

    let prop = document.createElement('p');
    prop.textContent = 'Buna ziua, ' + nume + "!"; 
    prop.setAttribute ("class","bilet");
    div1.appendChild(prop);
    text.appendChild(div1);

    let div2 = document.createElement('div');

    let prop2 = document.createElement('p');
    prop2.textContent = 'Va multumim pentru interesul acordat hotelului nostru pentru animalute, Vacation Pawrtal!'; 
    prop2.setAttribute ("class","bilet");
    div2.appendChild(prop2);
    text.appendChild(div2);

    let div3  = document.createElement('div');

    let prop3 = document.createElement('p');
    prop3.textContent = 'Va vom trimite mai multe oferte pe datele de contact furnizate ' + tel + " si " + email + " !"; 
    prop3.setAttribute ("class","bilet");
    div3.appendChild(prop3);
    text.appendChild(div3);

    let div4  = document.createElement('div');

    let prop4 = document.createElement('p');
    prop4.textContent = 'Suntem nerabdatori sa il cunoastem pe animalutul dumneavoastra, ' + nume_animalut + " !"; 
    prop4.setAttribute ("class","bilet");
    div4.appendChild(prop4);
    text.appendChild(div4);
    
    let div5  = document.createElement('div');

    let prop5 = document.createElement('p');
    prop5.textContent = 'Avand in vedere varsta animalutului dumneavoastra, ' + varsta + " , precum si comportamentul sau, " + descriere + ", suntem siguri ca isi va face foarte multi prieteni!"
    prop5.setAttribute ("class","bilet");
    div5.appendChild(prop5);
    text.appendChild(div5);

    
}