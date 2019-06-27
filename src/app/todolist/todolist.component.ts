import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
todos: Todo[];
todoTitle: string;
todoDesc: string;
idForTodo: number;
beforeEditCache: string;

  constructor() { }

  ngOnInit() {

  	this.beforeEditCache = "";
  	this.idForTodo = 4;
  	this.todoTitle = "";
  	this.todoDesc = "";
  	this.todos = [
  	{
  		'id' : 1,
  		'title': "Finish Angular",
  		'completed': false,
  		'editing': false,
  		'description': "description 1",
  		'show': false
  	},
  	{
  		'id' : 2,
  		'title': "One more task",
  		'completed': false,
  		'editing': false,
  		'description': "description 2",
  		'show': false
  	},
  	{
  		'id' : 3,
  		'title': "Last task",
  		'completed': false,
  		'editing': false,
  		'description': "description 3",
  		'show': false
  	},
  	];
  }

addTodo(): void {
	console.log("Ajout d'un item");
	if(this.todoTitle.trim().length === 0){
		return;
	}

	this.todos.push({
		id: this.idForTodo,
		title: this.todoTitle,
		completed: false,
		editing: false,
		description: this.todoDesc,
		show: false
	})

	this.todoTitle = '';
	this.todoDesc = '';
	this.idForTodo++;
}

deleteTodo(id: number): void {
	console.log("Item supprimer");
	this.todos = this.todos.filter(todo => todo.id !== id);
}

editTodo(todo: Todo): void {
	console.log("Edite Lancer");
	this.beforeEditCache = todo.title;
	todo.editing = true;
	console.log("editing");
}

doneEdit(todo: Todo): void {
	console.log("Edite finis");
	if(todo.title.trim().length === 0){
		todo.title = this.beforeEditCache;
	}
	todo.editing = false;
}

cancelEdit(todo: Todo): void {
	console.log("L'edit a étais cancel");
	todo.title = this.beforeEditCache;
	todo.editing = false;
}

showDesc(todo: Todo): void {
	console.log("Montrer la description");
	// todo.show = true;
	if(todo.show === false){
		todo.show = true;
	} else if( todo.show === true){
		todo.show = false;
	}
}
}

interface Todo {
	id: numer,
	title: string,
	completed: boolean,
	editing: boolean
}