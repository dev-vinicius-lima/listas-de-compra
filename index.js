const item = document.getElementById('item');
const addBtn = document.getElementById('adicionou');
const show = document.getElementById('show');
const result = document.getElementById('res')
const clear = document.getElementById('clear')
const esconder = document.querySelector('.esconder')

let lista = []; // cria a lista com um array OBS: lista vazia

addBtn.addEventListener('click', function() { // cria um evento de click no botão adicionar
    if(item.value !== "") { // se o valor do input for diferente de "vazio" faça...
        let newItem = item.value;  // variavel para receber novos itens
        lista.push(newItem); // adicona o novo item a variavel
        addBtn.innerText = 'Adicionado'
        item.value = "" // define como "" para zerar os campos
        result.innerHTML = 'Itens da lista de compra <br> -${lista.join("<br>-")}';
        
    } else { 
        alert('Insira um item no campo de texto') // se o input estiver vazio aparece o alert
    }
});


show.addEventListener('click', function () {
    result.innerHTML ='Itens da lista de compra: <br> -${lista.join("<br>-")}';
    esconder.classList.toggle('none')
    esconder.style.display = esconder.classList.contains('none') ? 'flex' : 'none'
})
 

clear.addEventListener('click', function() {
    const remove = item.value
    if(item.value !== "") {
        novaLista = lista.filter(itens => itens !== remove)

        if(novaLista.length < lista.length){
            lista = novaLista
        }
    }
    result.innerHTML = 'Itens da lista de compra <br> -${lista.join("<br>-")}';
})