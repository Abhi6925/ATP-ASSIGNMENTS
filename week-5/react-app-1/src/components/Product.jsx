
function Product(props){
    const {productObj}=props
    console.log(props)
    return (
        <div className="p-3 shadow-2xl ">
            <h2 className="text-amber-500">{productObj.title}</h2>
            <p>{productObj.price}</p>
            <p>{productObj.description}</p>
        </div>
    )
}

export default Product