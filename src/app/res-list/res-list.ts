import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, Pipe, PipeTransform } from '@angular/core';
import { RouterLink, RouteParams } from '@angular/router-deprecated';
import { FirebaseListObservable } from 'angularfire2';

import { Reservation2, IReservation2} from '../core/reservation2/reservation2';
import { ResItem } from '../res-item/res-item';

// @Pipe({ name: 'sortByStart' })
// export class SortByStartPipe implements PipeTransform {
//   transform(evs: any[]) {
//     return evs.sort(function compare(a, b) {
//       if (parseInt(a.start) < parseInt(b.start)) {
//         return -1;
//       }
//       if (parseInt(a.start) > parseInt(b.start)) {
//         return 1;
//       }
//       // a must be equal to b
//       return 0;
//     })}
// }

@Component({
  selector: 'res-list',
  templateUrl: 'app/res-list/res-list.html',
  styleUrls: ['app/res-list/res-list.css'],
  providers: [],
  directives: [ResItem],
  pipes: []
})
export class ResList {
  @Input() resItems$: FirebaseListObservable<IReservation2[]>;
  @Output() toDisplay : EventEmitter<IReservation2> = new EventEmitter(false);
  @Output() remove: EventEmitter<IReservation2> = new EventEmitter(false);

  constructor() {}

emitUpdate(res){
  this.toDisplay.emit(res)
}
}
