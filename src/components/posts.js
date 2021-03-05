import React from 'react'

function PostsComponent({body,title}) {
    return (
        <div>
            <p>{body}</p>
            <p>{title}</p>
        </div>
    )
}

export default PostsComponent
