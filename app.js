const response = fetch('http://www.raydelto.org/agenda.php')
    .then(response => response.json())
    .then(data => {
        let contactList = document.getElementById('contactList')
        var numero = 1
        for (let contacto of data) {
            let list = document.createElement('li')
            numero++;
            console.log(numero)
            if(numero%2 == 0){
                list.setAttribute('class',' sticky top-0 absolute bg-gray-200 text-center text-slate-800 text-xl font-semibold')
            }else{
                list.setAttribute('class',' sticky top-0 absolute bg-white text-center text-slate-800 text-xl font-semibold')
            }
   
            list.innerHTML = contacto.nombre
            contactList.appendChild(list)
        }
    })

