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
            var infoArray = content.split(';');
            var name = infoArray[0];
            var additionalInfo = infoArray.slice(1).join('<br>'); // Separa as informações com quebra de linha
            var linkedinLink = infoArray.find(item => item.toLowerCase().includes('linkedin'));
            openPopup(name, additionalInfo, linkedinLink);
        });
    }

    function openPopup(name, additionalInfo, linkedinLink) {
        var popupContent = document.getElementById('popup-content');
        var popupName = document.getElementById('popup-name');
        var popupInfo = document.getElementById('popup-info');
        var popupLinkedinLink = document.getElementById('linkedin-link');
    
        popupName.innerHTML = `<span style="color: #3498db">${name}</span>`;
        popupInfo.innerHTML = additionalInfo;
    
        if (linkedinLink) {
            popupLinkedinLink.setAttribute('href', linkedinLink);
            popupLinkedinLink.style.display = 'block';
        } else {
            popupLinkedinLink.style.display = 'none';
        }
    
        document.getElementById('popup').style.display = 'block';
    }
    
    function addLinks(infoArray, linkedinLink) {
        linkedinLink.innerHTML = ""; // Limpa os links existentes
    
        for (var i = 3; i < infoArray.length; i++) {
            var linkInfo = infoArray[i].split(':');
            var linkText = linkInfo[0].trim();
            var linkValue = linkInfo[1].trim();
    
            if (linkText.toLowerCase() === 'linkedin') {
                linkedinLink.setAttribute('href', linkValue);
                linkedinLink.style.display = 'block'; // Mostra o link do LinkedIn
                linkedinLink.innerHTML = `<i class="fab fa-linkedin"></i> Visitar LinkedIn`;
            }
            // Adicione mais lógica para outros tipos de links, se necessário
        }
    }
    
    
    function closePopup() {
        document.getElementById('popup').style.display = 'none';
    }

});

