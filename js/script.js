function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");

    var iconElement = document.getElementById("darkModeIcon");
    iconElement.classList.toggle("fa-moon");
    iconElement.classList.toggle("fa-sun");

    // Armazena a preferência de tema no localStorage
    var themePreference = body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", themePreference);
}

// Aplica o tema salvo no localStorage ao carregar a página
function applyThemeFromLocalStorage() {
    var themePreference = localStorage.getItem("theme");
    var body = document.body;

    if (themePreference === 'dark') {
        body.classList.add('dark-mode');
        document.getElementById('darkModeIcon').classList.remove('fa-moon');
        document.getElementById('darkModeIcon').classList.add('fa-sun');
    }
}

// Aplica o tema ao carregar a página
applyThemeFromLocalStorage();

document.addEventListener('DOMContentLoaded', function () {
    var squares = document.getElementsByClassName('square');
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', function () {
            var content = this.getAttribute('data-content');
            openPopup(content);
        });
    }

    // Adiciona um ouvinte de eventos de clique no pop-up para fechá-lo
    var popup = document.getElementById('popup');
    popup.addEventListener('click', function (event) {
        if (event.target === popup) {
            closePopup();
        }
    });

    // Adiciona um ouvinte de eventos de clique no botão de fechar do pop-up
    var closeButton = document.querySelector('.popup-content .close');
    closeButton.addEventListener('click', function () {
        closePopup();
    });
});

function openPopup(content) {
    var popupContent = document.getElementById('popup-content');
    popupContent.innerHTML = content;
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}