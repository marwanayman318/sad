import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private baseUrl : string ="";

  constructor(private _HttpClient: HttpClient) { }

  getTodos()
  {
    return this._HttpClient.get('http://localhost:3000');
  }


  saveTodo(todo : Todo)
  {
    return this._HttpClient.post('http://localhost:3000', todo);
  }
}
