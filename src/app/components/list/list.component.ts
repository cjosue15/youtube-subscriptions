import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable, interval, Subscription, fromEvent, Subject } from 'rxjs';
import { first, take, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  characters$: Observable<any[]> = new Observable();
  subscription: Subscription = new Subscription();
  mustCanceled$: Subject<boolean> = new Subject();

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.characters$ = this.api.getCharacters();
  }

  cancel() {
    this.mustCanceled$.next(true);
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
