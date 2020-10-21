import { Component, OnInit } from '@angular/core';

interface Task{
name: string;
isCompleted: boolean;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public list: Array<Task> = [
    {name : "Wyprowadzić psa", isCompleted : false},
    {name : "Zrobić matematykę ", isCompleted : false},
    {name : "Rower", isCompleted : true}


  ]

  public inputValue: string;

  constructor() { }

  ngOnInit(): void {
  }

  public handleClick(): void {
    this.list.push({
      name: this.inputValue,
      isCompleted: false
    }) 
    this.inputValue = "";
  }

  public remove(task: Task){
    const index = this.list.indexOf(task);
    this.list.splice(index, 1);
  }
  public removeAll(task: Task){
    const index = this.list.indexOf(task);
    this.list.splice(index, index);
  }
 public MarkAsCompleted(task:Task){
   alert('Oznaczono zadanie jako wykonane')
   task.isCompleted = true;
   
 }
public onKeyDownEvent(event: KeyboardEvent){
    if(event.keyCode === 13){
      this.handleClick();
        }
}

}
