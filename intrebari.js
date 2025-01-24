function storage(event){

    let nume = document.getElementById('nume').value;
    let prenume = document.getElementById('prenume').value;
    let nume_animalut = document.getElementById('nume_animalut').value;
    let tel = document.getElementById('tel').value;
    let email = document.getElementById('email').value;
    let animalut = document.getElementById('animalut').value;
    let nastere = document.getElementById('nastere').value;
    let varsta = document.getElementById('varsta').value;
    let desc = document.getElementById('descriere_comp').value;

    localStorage.setItem('nume_key',nume);
    localStorage.setItem('prenumekey',prenume);
    localStorage.setItem('nume_animalutkey',nume_animalut);
    localStorage.setItem('telkey',tel);
    localStorage.setItem('emailkey',email);
    localStorage.setItem('animalutkey',animalut);
    localStorage.setItem('nasterekey',nastere);
    localStorage.setItem('varstakey',varsta);
    localStorage.setItem('dec_key',desc);
}


