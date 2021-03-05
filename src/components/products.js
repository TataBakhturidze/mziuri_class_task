import React from 'react'

function ProductsComponent({
    name,
    description,
    image,
    price
}) {
    return (
        <div>
           {name}
           {description}
           {image}
           {price}
        </div>
    )
}

export default ProductsComponent
