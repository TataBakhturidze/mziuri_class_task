import React from 'react'

function CategoriesComponent({
    name,
    description
}) {
    return (
        <div>
            {name}
            {description}
        </div>
    )
}

export default CategoriesComponent
