function deleteElement(id, idFather){
    let element = document.getElementById(`${id}`);
    idFather.removeChild(element)
}

function deleteTodo(id){
    fetch(`http://localhost:3000/todo/${id}`, {method: 'DELETE'})

    let father = document.querySelector('#todoCard')
    deleteElement(`card${id}`, father)
}