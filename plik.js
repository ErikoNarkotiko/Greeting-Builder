const bazaMultimediow = {
    'radecki': 'rex.jpg',
	'jankowski': 'kriss.jpg'
};

// Nowoczesny, jasny awatar zastępczy pasujący do nowej kolorystyki
const DOMYSLNY_AVATAR = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';

function wyswietl_greetings() {
    let imieInput = document.getElementById('name');
    let nazwiskoInput = document.getElementById('surname');
    let errorBox = document.getElementById('error-msg'); 
    let listaUzytkownikow = document.getElementById('users-list'); 

    let imie = imieInput.value.trim();
    let nazwisko = nazwiskoInput.value.trim().toLowerCase();
    
    // Walidacja pustych pól
    if (imie === "" || nazwisko === "") {
        errorBox.textContent = "Proszę uzupełnić oba pola formularza.";
        return;
    }
    
    errorBox.textContent = ""; 

    // Formatowanie tekstu (pierwsza litera wielka, reszta małe)
    let sformatowaneImie = imie.charAt(0).toUpperCase() + imie.slice(1).toLowerCase();
    let sformatowaneNazwisko = nazwisko.charAt(0).toUpperCase() + nazwisko.slice(1).toLowerCase();
    
    // Dobór zdjęcia (baza lub domyślny)
    let link_do_mediow = bazaMultimediow[nazwisko] ? bazaMultimediow[nazwisko] : DOMYSLNY_AVATAR;

    // Tworzenie elementu <li> 
    let nowyWpis = document.createElement('li');
    nowyWpis.className = 'user-item'; 
    
    // Wstrzyknięcie struktury (avatar + sformatowane dane)
    nowyWpis.innerHTML = `
        <img src="${link_do_mediow}" alt="Avatar" class="avatar">
        <div class="user-info">
            Pozdrowienia dla użytkownika<br>
            <strong>${sformatowaneImie} ${sformatowaneNazwisko}</strong>
        </div>
    `;

    // Wstawienie elementu na górę listy
    listaUzytkownikow.insertBefore(nowyWpis, listaUzytkownikow.firstChild);
    
    // Reset pól tekstowych i powrót focusu
    imieInput.value = "";
    nazwiskoInput.value = "";
    imieInput.focus();
}