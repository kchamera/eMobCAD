document.addEventListener('DOMContentLoaded', () => {
    const buttons = {
        pl: document.getElementById('toggleButton-pl'),
        en: document.getElementById('toggleButton-en'),
    };
    const div = document.getElementById('hiddenDiv');

    const pageTitles = {
        pl: 'Elektryczna nagrzewnica wodna - Lekcja 1',
        en: 'Electric Water Heater - Lesson 1',
        // Add more languages as needed
    };

    // Funkcja do pobrania aktualnego języka
    function getCurrentLanguage() {
        for (let lang in buttons) {
            if (buttons[lang].style.display !== 'none') {
                return lang;
            }
        }
        return 'pl'; // Domyślny język
    }

    // Funkcja do przełączania widoczności przycisków
    function toggleButtons(currentLang) {
        for (let lang in buttons) {
            buttons[lang].style.display = lang === currentLang ? '' : 'none';
        }
    }

    // Obsługa kliknięcia przycisku
    for (let lang in buttons) {
        buttons[lang].addEventListener('click', () => {
            const currentLang = getCurrentLanguage();

            // Przełącz widoczność sekcji
            if (div.style.display === 'none' || div.style.display === '') {
                div.style.display = 'block';
                buttons[currentLang].textContent = currentLang === 'en' ? 'Hide dimensions' : 'Ukryj wymiary';
            } else {
                div.style.display = 'none';
                buttons[currentLang].textContent = currentLang === 'en' ? 'Show dimensions' : 'Pokaż wymiary';
            }
        });
    }

    // Inicjalizacja
    toggleButtons(getCurrentLanguage());
});


      
      document.addEventListener('DOMContentLoaded', () => {
        const languageSelect = document.getElementById('language-select');
        const content = document.getElementById('content');
    
        // Sprawdź, czy użytkownik wcześniej wybrał język
        const savedLanguage = localStorage.getItem('selectedLanguage') || 'pl';
        languageSelect.value = savedLanguage;
        switchLanguage(savedLanguage);
    
        languageSelect.addEventListener('change', (e) => {
            const selectedLanguage = e.target.value;
            switchLanguage(selectedLanguage);
            localStorage.setItem('selectedLanguage', selectedLanguage);
        });
    
        function switchLanguage(lang) {
            const elements = content.querySelectorAll('[data-lang]');
            elements.forEach(el => {
                el.style.display = el.getAttribute('data-lang') === lang ? '' : 'none';
            });
        }
    });
    
