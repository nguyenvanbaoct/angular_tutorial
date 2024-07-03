import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  //props được nhận từ component cha
  @Input('total') all: number = 0;
  @Input() available: number = 0;
  @Input() notAvailable: number = 0;

  seletedValue: string = 'All';

  //theo dõi value từ selected
  @Output()
  filterRadioButtonSelectionChange: EventEmitter<string> =
    new EventEmitter<string>();

  //được gọi mỗi khi value của select thay đổi
  onRadioButtonSelectionChange() {
    this.filterRadioButtonSelectionChange.emit(this.seletedValue);
    // console.log(this.seletedValue);
  }
}
