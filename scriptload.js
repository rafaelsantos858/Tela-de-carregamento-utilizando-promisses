new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('ok')
        }, 5000)
   
}).then(res => {
    document.getElementById('carregamento').innerHTML = '<h1>seja bem vindo</h1>'
}).catch(() => {
    document.getElementById('carregamento').innerHTML = '<h1> erro de carregamento</h1>'
})      