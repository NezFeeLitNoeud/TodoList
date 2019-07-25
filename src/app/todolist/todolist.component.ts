import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

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
// cook: number;

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
	// this.cook = 0;
 //  	const cookieExists: boolean = this.cookieService.check(this.cook);
 //  	console.log(cookieExists)
 //  	this.cook++;
 //  	console.log(this.cook)


	// document.getElementById("dem").innerHTML = allCookies.keys;
  	this.beforeEditCache = "";
  	this.idForTodo = 1;
  	this.todoTitle = "";
  	this.todoDesc = "";
  	this.todos = [
		// {	
	 //  		id: this.idForTodo,
	 //  		title: this.todoTitle,
	 //  		completed: false,
	 //  		editing: false,
	 //  		description: this.todoDesc,
	 //  		show: false
	 //  	}
		];
console.log(this.todos)
		// if(cookieExists === true){
		// 	console.log("Cookies est true")
		// } else {
		// 	console.log("Cookies est false")
		// }

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

	console.log(this.todos)
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
	id: number,
	title: string,
	completed: boolean,
	editing: boolean,
	description: string,
	show: boolean
}