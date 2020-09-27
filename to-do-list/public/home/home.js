function deleteTodo(event){
    const elementToDelete = event.target.parentNode.parentNode
    const id = elementToDelete.dataset.id

    fetch(`/todo/${id}`, {method: 'DELETE'})
        .then((response)=>{
            if(response.ok) return response.json()
        })
        .then((informationRunDB) => {
            if(informationRunDB.changes!=0) deleteCard(elementToDelete)
            else $('#notDeleteModal').modal()       
        })
        .catch(() => {
             $('#notDeleteModal').modal()
        })

}

function deleteCard(elementToDelete){
    elementToDelete.remove()
    $('#deleteModal').modal()
}

function formatTodo(event){
    const elementToFormat = event.target.parentNode.parentNode
    const todoId = elementToFormat.dataset.id
    const idTodo = document.querySelector('#idTodo')
    idTodo.value = todoId
    const form = document.querySelector('#form')
    const userId = elementToFormat.parentNode.dataset.userId
    form.action = `/${userId}/todo/${todoId}`
    const tituloTarefa = document.querySelector('#tituloTarefa')
    tituloTarefa.focus()
}
