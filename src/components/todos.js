import React from 'react'

function TodosComponent({
    title,
    completed
}) {
    return (
        <div>
           {title}
           {completed}
        </div>
    )
}

export default TodosComponent
