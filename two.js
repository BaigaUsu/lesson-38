document.addEventListener('DOMContentLoaded', function() {
    function loadJSON(language) {
        const jsonFile = language + '.json';
            fetch(jsonFile)
            .then(response => response.json())
            .then(data => {
                document.getElementById('content').innerHTML = '';
            
            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    let p = document.createElement('p');
                    p.textContent = key + ': ' + data[key];
                    document.getElementById('content').appendChild(p);
                }
            }
            localStorage.setItem('selectedLanguage', language);
        })
        .catch(error => console.error('Ошибка при загрузке JSON файла:', error));
    }

    function checkSavedLanguage() {
        var savedLanguage = localStorage.getItem('selectedLanguage');
        if (savedLanguage) {
            loadJSON(savedLanguage);
        }
    }

    document.getElementById('en').addEventListener('click', function() {
        loadJSON('en');
    });

    document.getElementById('ru').addEventListener('click', function() {
        loadJSON('ru');
    });

    document.getElementById('kg').addEventListener('click', function() {
        loadJSON('kg');
    });

    checkSavedLanguage();
});

