interface ITodoItemContent {
    content: string
}


interface ITodoItem extends ITodoItemContent{
    id: string,
    fin: boolean,
    editing: boolean,
}