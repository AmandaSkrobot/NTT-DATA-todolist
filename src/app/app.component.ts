import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from './todo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})



export class AppComponent {
  title = 'todolist';


  id:number;
  todos :  Todo[]= [];
  newTodo: string;
  i:number


  done(id:number) {
    this.todos[id].completed = !this.todos[id].completed;
}
 

removeItem(id:number){

    this.todos = this.todos.filter((v,i)=> i !== id);
}

  saveTodo() {
    if(this.newTodo) {

        let todo = new Todo();
        todo.task = this.newTodo;
        todo.completed = true 
        this.todos.push(todo);
        this.newTodo = ''

    } else {

        alert('Preencha o campo!')

    }

   
}







}
