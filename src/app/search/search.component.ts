import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  searchValue: string = 'MacBook Pro';

  // EventEmitter: dùng để bắt sự kiện từ componet child -> parent
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  OnSearchTextChanged() {
    this.searchTextChanged.emit(this.searchValue);
  }
}
