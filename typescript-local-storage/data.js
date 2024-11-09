"use strict";
let todos = readTodos();
function writeTodos() {
    const todosJSON = JSON.stringify(todos);
    localStorage.setItem('todos-storage', todosJSON);
}
function readTodos() {
    const todosJSON = localStorage.getItem('todos-storage');
    if (todosJSON !== null) {
        return JSON.parse(todosJSON);
    }
    else {
        return [];
    }
}
