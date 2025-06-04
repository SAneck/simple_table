import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent {

  @Input() currentPage: number = 1
  @Input() itemsPerPage: number = 5
  @Input() totalItem: number = 0
  @Output() pageChange = new EventEmitter<number>()

  

}
