### *ngFor
mapping item
```html
<div *ngFor="let item of [1, 2, 3]">
  <p>Number is: {{ item }}</p>
</div>
```

### [ngStyle]
```html
<h6
  [ngStyle]="{color: item.available === 'Available' ? 'green' : 'red'}"
>
```

### [(ngModal)]
get value input form
```html
<input type="text" [(ngModel)]="searchValue" />
```

### [ngClass]
add class 
```hmtl
<div class="search-div" [ngClass]="{ changeBackground: searchValue }">
```

### *ngIf
render with if
```hmtl
<span *ngIf="searchValue"> You searched for "{{ searchValue }}"</span>
```

### props component parent to child
-Parent
```hmtl
<div style="display: flex; justify-content: center">
  <app-filter
    [total]="getTotalProducts()"
    [available]="getAvailableProducts()"
    [notAvailable]="getNotAvailableProducts()"
    (filterRadioButtonSelectionChange)="
      onFilterRadioButtonSelectionChange($event)
    "
  ></app-filter>
```

-Child
```hmtl
export class FilterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input('total') all: number = 0;
  @Input() available: number = 0;
  @Input() notAvailable: number = 0;

  seletedValue: string = 'All';

  @Output()
  filterRadioButtonSelectionChange: EventEmitter<string> =
    new EventEmitter<string>();

  onRadioButtonSelectionChange() {
    this.filterRadioButtonSelectionChange.emit(this.seletedValue);
    // console.log(this.seletedValue);
  }
}
```
### props component child to parent
-Parent
```html
productCountRadioButton: string = 'All';
  onFilterRadioButtonSelectionChange(data: string) {
    this.productCountRadioButton = data;
    console.log('data', data);
  }
```
```html
<div style="display: flex; justify-content: center">
  <app-filter
    [total]="getTotalProducts()"
    [available]="getAvailableProducts()"
    [notAvailable]="getNotAvailableProducts()"
    (filterRadioButtonSelectionChange)="
      onFilterRadioButtonSelectionChange($event)
    "
  ></app-filter>
</div>
<ng-container *ngFor="let item of products">
  <div
    class="products"
    *ngIf="
      productCountRadioButton === 'All' ||
      productCountRadioButton === item.available
    "
  >
    <div>
      <div class="product-container">
        <div class="image-container">
          <img
            src="{{ item.source }}"
            style="max-width: 50px; max-height: 50px"
            alt=""
          />
        </div>
        <div>
          <div class="name-container">
            <h6
              [ngStyle]="{
                color: item.available === 'Available' ? 'green' : 'red'
              }"
            >
              {{ item.name }}
            </h6>
          </div>
          <div class="detail-container">
            <div class="details">${{ item.price }}</div>
            <div class="details">{{ item.available }}</div>
          </div>
        </div>
        <div class="options">
          <button class="btn btn-primary">Show details</button>
          <button
            class="btn btn-warning"
            *ngIf="item.available === 'Available'; else notifyme"
          >
            Buy now
          </button>
          <ng-template #notifyme>
            <button class="btn btn-danger">Notify me</button>
          </ng-template>
        </div>
      </div>
    </div>
  </div>
</ng-container>
```
-Child
```hmtl
//theo dõi value từ selected
  @Output()
  filterRadioButtonSelectionChange: EventEmitter<string> =
    new EventEmitter<string>();

  //được gọi mỗi khi value của select thay đổi
  onRadioButtonSelectionChange() {
    this.filterRadioButtonSelectionChange.emit(this.seletedValue);
    // console.log(this.seletedValue);
  }
```
```html
<div class="filter-container">
  <span>Filter:</span>
  <input
    type="radio"
    name="filter"
    value="All"
    [(ngModel)]="seletedValue"
    (change)="onRadioButtonSelectionChange()"
  />
  <span>{{ "All products(" + all + ")" }}</span>
  <input
    type="radio"
    name="filter"
    value="Available"
    [(ngModel)]="seletedValue"
    (change)="onRadioButtonSelectionChange()"
  />
  <span>{{ "Available products(" + available + ")" }}</span>
  <input
    type="radio"
    name="filter"
    value="NotAvailable"
    [(ngModel)]="seletedValue"
    (change)="onRadioButtonSelectionChange()"
  />
  <span>{{ "Not Available products(" + notAvailable + ")" }}</span>
</div>
````

### ng-content



















































