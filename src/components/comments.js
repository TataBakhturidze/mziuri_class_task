import React from 'react'

function CommentsComponent({
    name,
    email,
    body,
    created
}) {
    return (
        <div>
            {name}
            {email}
            {body}
            {created}
        </div>
    )
}

export default CommentsComponent
