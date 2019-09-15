import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.css']
})
export class MyTestComponent implements OnInit {
  // @Input() testData: string;
  @Input() testData: string;

  @Output() myEvent = new EventEmitter<string>();

  emit() {
    this.myEvent.emit('I am message');
  }

  ngOnInit() {
  }

}
