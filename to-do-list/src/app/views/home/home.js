
function createHome(name, todos, userId) {


    return `<!DOCTYPE html>
                <html lang="pt-br">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>TODO App</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                    <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet">

                    <script defer src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                    <script defer src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                    <script defer src="/static/home/home.js"></script>
                </head>
                <body>
                    <nav class="nav bg-dark mb-4" style="text-align: center;">
                        <h1 class=" py-2 text-light" style="font-family: 'Indie Flower'; width:100%">TODO app</h1>
                    </nav>
                    <div class="d-flex justify-content-center">
                        <div class="w-50 p-4 border rounded shadow-sm"> 
                            <form class="flex-fill" id="form" method="post">
                                <input type="hidden" name="_method" value="PUT">
                                <input type="hidden" name="idTodo" id="idTodo" value="null">
                                <div class="form-group">
                                    <label for="tituloTarefa"><b>Título:</b></label>
                                    <input type="text" name="title" class="form-control" id="tituloTarefa" placeholder="Título da tarefa">
                                    <input type="hidden" value="1" name="type">
                                    <input type="hidden" value="1" name="status_id">
                                </div>
                                <div class="form-group">
                                    <label for="important"><b>Important:</b></label>
                                    <select class="form-control" name="important_id" id="important">
                                        <option value="1">Not Important</option>
                                        <option value="2">Important</option>
                                        <option value="3">Very Important</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="descricaoTarefa"><b>Descrição:</b></label>
                                    <textarea class="form-control" id="descricaoTarefa" name="description" rows="3" placeholder="Insira a descrição da tarefa"></textarea>
                                </div>
                                <button type="submit" class="btn btn-secondary btn-sm">Add To-do</button>
                            </form>
                        </div>
                    </div>
                    ${name}
                    <div id="todoCard" class="d-flex mt-5 justify-content-around flex-wrap" data-user-id="${userId}">
                        <!-- Aqui entram os cards de TODO!-->
                        ${todos}
                    </div>

                    <!--MODAL-->
                    <div class="modal" id="deleteModal" tabindex="-1">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-body">
                                <p>The task was deleted</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal" id="notDeleteModal" tabindex="-1">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-body">
                                <p>The task was NOT deleted</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                </body>
                </html>`;
    }

module.exports = createHome;