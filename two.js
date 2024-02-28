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
        })
        .catch(error => console.error('Ошибка при загрузке JSON файла:', error));
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
});
