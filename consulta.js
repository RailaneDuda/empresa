var dataRef = new Firebase('https://supermercado-dudaru-f0f50-default-rtdb.firebaseio.com/supermercado/');

dataRef.on('value', function(snapshot) {

    var t = snapshot.val();
    var count = 0;

    for (var key in t) {
        var valor = t[key];

        console.log('chave', key);
        console.log('valor', valor);

        if(key === 'produtos') {

            var _itemsKey = Object.entries(valor);
    
            count++;
    
    
            for (const [key2, value2] of _itemsKey) {
    
                $("#tbProdutos tbody").append(
    
                    `<tr> +
    
                        <th scope="row">${count}</th> +

                        <td>${value2.nome}</td> +
    
                        <td>${value2.preco}</td> +
    
                    </tr>`
    
                );
    
            }
        }


    }

});
