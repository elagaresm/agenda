
const response = fetch('http://www.raydelto.org/agenda.php')
    .then(response => response.json())
    .then(data => {
        let contactList = document.getElementById('contactList')
        var numero = 1
        let color_fondo = '';
        for (let contacto of data) {

            let div = document.createElement('div');
            let div2 = document.createElement('div');
            let div3 = document.createElement('div');
            let div4 = document.createElement('div');
            let h1 = document.createElement('h1');
            let a = document.createElement('a');
if(numero%2==0){
    
    color_fondo="bg-blue-600";

}else if(numero%2!=0){
    color_fondo ="bg-yellow-600";


}else{
    color_fondo ="bg-yellow-600";

}
    
div.setAttribute('class',`transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 ${color_fondo} text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0`)
            div2.setAttribute('class','w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0')

            div3.setAttribute('class','w-10 h-1 bg-blue-300 absolute -left-10 z-0')

            div4.setAttribute('class','flex-auto py-7')
            h1.setAttribute('class','text-xl font-bold')
            h1.innerText=contacto.nombre +" "+ contacto.apellido;

            a.setAttribute('class','text-center text-white hover:text-gray-300')
            a.setAttribute('href','#')
            a.innerText = contacto.telefono

            contactList.appendChild(div)
            div.appendChild(div2)
            div.appendChild(div3)
            div.appendChild(div4)
            div.appendChild(div4)
            div4.appendChild(h1)
            div.appendChild(a)

            
numero++;
            
/*             let list = document.createElement('li')
            console.log(numero)

            list.innerHTML = contacto.nombre + numero
            numero++;

            contactList.appendChild(list) */
        }
    })
    const button = document.getElementById('open_modal');

    const button_cerrar = document.getElementById('close_modal');

const modal = document.getElementById('contact');
button.addEventListener('click',()=>{
modal.classList.remove('hidden')

})
button_cerrar.addEventListener('click',()=>{
    modal.classList.add('hidden')
    
    })

    //nombre son id
    //Apellido son id
    //Telefono son id
