const productos=[{"nombre":"Death Note","precio":567.89,"imagen":"https://http2.mlstatic.com/D_NQ_NP_805388-MLA44665758739_012021-O.jpg","id":1},{"nombre":"Chainsaw Man","precio":601.56,"imagen":"https://www.normaeditorial.com/upload/media/albumes/0001/07/fb73dc7a21d6a8f594f276d740675be20348aa57.jpeg","id":2},{"nombre":"Naruto Shippuden","precio":598.23,"imagen":"https://i.pinimg.com/736x/f3/5a/19/f35a190feaedcb257518c09d0f79b14f.jpg","id":3}]


const getProductos = (req, res)=>{
    res.render('productos.hbs', {productos})
}

const createProductos = (req, res)=>{
    res.render('form.hbs', {productos})
}

const postProductos = (req, res) => {
    productos.push(req.body)
    res.redirect('/productos/crear')
}

module.exports = {
    getProductos,
    postProductos,
    createProductos
}