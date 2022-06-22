const response = fetch('http://www.raydelto.org/agenda.php')
    .then(response => response.json())
    .then(data => {
        let contactList = document.getElementById('contactList')
        for (let contacto of data) {
            let list = document.createElement('li')
            list.innerHTML = contacto.nombre
            contactList.appendChild(list)
        }
    })

