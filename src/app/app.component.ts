import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello World!!';

  username: string = '';
  mytext: string = '';

  evenNumbers: number[] = [];
  oddNumbers: number[] = [];


  emptyUsername() {
    console.log('function is called');
    this.username = "";
    this.title = 'aaaa';
  }

  onUpdateName(event: Event) {
    console.log(event);
  }

  showMyName(mytest: string) {
    console.log('show my name');
    this.mytext = mytest;
  }

  notifyStartGame(cnum: number) {
    console.log('game started parent notified');

    if (cnum % 2 == 0) {
      this.evenNumbers.push(cnum);
    } else {
      this.oddNumbers.push(cnum);
    }
  }
}
