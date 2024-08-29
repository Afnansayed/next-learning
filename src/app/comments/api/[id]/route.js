export async function PATCH(request, { params }) {
    const { id } = params;
    const body = await request.json();
    const index = comments.findIndex(comment => comment.id === parseInt(id));
    console.log(index)

    comments[index] = {
        text  : body.text,
    }
    return Response.json({
        "message": "comment updated",
        comments
    })
}

export async function DELETE(request, { params }) {
    const newComment =  comments.filter(comment => comment.id !== parseInt(params.id));
    return Response.json({
        "message": "comment deleted",
        newComment
    })
}

const comments = [
    {
        id:  1,
        text: "Comment 1"
    },{
        id:  2,
        text: "Comment 2"
    },{
        id:  3,
        text: "Comment 3"
    }
]