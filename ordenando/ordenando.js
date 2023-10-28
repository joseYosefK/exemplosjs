//funcao swap para trocar posições de um vetor
let swap = (vetor, p1, p2) =>{
    var trca = vetor[p1];
    vetor[p1] = vetor[p2];
    vetor[p2] = trca;
    return vetor;
};
// função para mudar valores em indices
//-----------------------------------------------------
function shuffle(vetor,qt){
    fim = 0;
    while(fim <= qt){
        vetor.sort((a , b) => Math.random() - 0.5);
        fim++;
    };
    return vetor
};        
/*buble sorte compara a posição iterada a posição imediatamente a frent*/
let buble_sort = vetor=>{
    for ( var n=0; n <= vetor.length + 1; n++){
        for ( var i=0; i <= n; i++){
            if(vetor[i] > vetor[i + 1]){
                //realizando a troca
                var trca = vetor[i];
                vetor[i] = vetor[i + 1];
                vetor[i + 1] = trca;
            };
        };     
    }; return vetor;
};
/*selection sorte, compara um elemeto por vez o posicionando no local ordenado*/
//----------------------------------------------------
let selectio_sort = vetor =>{
    for (var i=0;i <= vetor.length;i++){
        for (var j=i; j <= vetor.length;j++){
            if(vetor[i] > vetor[j]){
                var troca = vetor[i];
                vetor[i] = vetor[j];
                vetor[j] = troca;
            };
        };
    };return vetor
}

//cria partições apartir de um pivo e as ordena
function quick_sort(vetor, inicio, fim){
    if(inicio < fim){
        var p = particionamento(vetor, inicio,fim); //realiza a partição
        var esq = quick_sort(vetor, inicio, p - 1); //ordena a partição esquerda
        var dir = quick_sort(vetor, p + 1, fim); //ordena a partição direita
        vetor = esq,dir;
    };return vetor;
};
//de apoio a função quick sort encontra, o local ideal do pivo
let particionamento = (lista, inicio, fim)=>{
    var pivot = lista[inicio];
    var l = inicio + 1;
    var r = fim;
    //percorre o array enquanto os indices l e r não se cruzarem.
    while(l <= r){
        //percorre o array da esquerda para a direita até encontar um valor na lista no indice cur_l que seja maior ou igual a lista no indice do pivot ou do cur_r. 
        while(l <= r && lista[l] <= pivot){l++};
        //percorre o array da esquerda para a direita até encontar um valor na lista no indice cur_r que seja menor ou igual a lista no indice do pivot ou do cur_l. 
        while(r >= l && lista[r] > pivot){r--};
        //depois de encontrar um valor maio que o pivot e menor que o lista na posição do cur_r ou versa. troca os de posição.
        if(l < r){
            swap(lista,l, r);
            l++;
            r--;
        };
    };
    swap(lista,inicio,r);
    return r;
};

//função adicionar
//------------------------------------------------
let btn_add = document.getElementById("add");
btn_add.addEventListener("click",add);
function add(){
    //pegando valor de entrada
    var entrada = document.getElementById("valor");
    var valor  = entrada.value;
    //atribuindo a entrada a um no de texto
    var texto = document.createTextNode(valor);
    //selecionando alista valores
    var lista = document.getElementById("valores");
    //cria um li para lista valores
    var node = document.createElement("li");
    //colocando texto como filho de node
    node.appendChild(texto);
    //passando node como filho de lista
    lista.appendChild(node);
    //limpando a entrada
    entrada.value = "";
    //obtendo a lista completa
};
//função ordenar
//------------------------------------------------
let btn_ord = document.getElementById("ordenar");
btn_ord.addEventListener("click",ordenar)
function ordenar(){
    let lista =  document.getElementById("valores");
    console.log(lista.innerHTML);

    let elementos = lista.children;
    elementos = [...elementos]
    var vetor = [] 
    for (i= 0; i < elementos.length;i++){
        vetor.push(parseInt((elementos[i].innerText)));
    };
    let selecao = document.getElementById("selecao");
    //selecionando o algoritimo  de ordenação
    if(selecao.selectedIndex == 0){
        vetor = buble_sort(vetor);
        console.log(vetor, "b")
    }
    else if(selecao.selectedIndex == 1){
        vetor = selectio_sort(vetor);
        console.log(vetor,"s")
    }else if(selecao.selectedIndex == 2){
        vetor = quick_sort(vetor, 0, vetor.length - 1);
        console.log(vetor,"q")
    };
    // alterando os valores da lista
    elementos.map((li, i)=>{li.innerHTML = vetor[i]});
};
//------------------------------------------------- 
//função misturar
let btn_mis = document.getElementById("misturar");
btn_mis.addEventListener("click",misturar)
function misturar(){
    let lista =  document.getElementById("valores");
    console.log(lista.innerHTML);

    let elementos = lista.children;
    elementos = [...elementos]
    var vetor = [] 
    for (i= 0; i < elementos.length;i++){
        vetor.push(Number.parseInt((elementos[i].innerText)));
    };
    console.log(vetor)
    var vmis = shuffle(vetor,vetor.length)
    console.log(vmis, "mis")
    //alterando o vetor
    vetor.reduce((an, vmis,i)=> an = vmis)
    console.log(vetor,"a");
    //alterando os valores da lista
    elementos.map((li, i)=>{li.innerHTML = vetor[i]});

};