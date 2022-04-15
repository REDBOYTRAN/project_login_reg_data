import { Component } from '@angular/core';
import { AccountService } from './shared/services';
import { User } from './shared/models';
import {ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataService} from './shared/services/data.service';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Issue} from './shared/models/issue';
import {DataSource} from '@angular/cdk/collections';
import {AddDialogComponent} from './features/dialogs/add/add.dialog.component';
import {EditDialogComponent} from './features/dialogs/edit/edit.dialog.component';
import {DeleteDialogComponent} from './features/dialogs/delete/delete.dialog.component';
import {BehaviorSubject, fromEvent, merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Component({ 
    selector: 'app', 
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    user: User;

    constructor(private accountService: AccountService,
                public httpClient: HttpClient,
                public dialog: MatDialog,
                public dataService: DataService) {
        this.accountService.user.subscribe(x => this.user = x);
    }

    logout() {
        this.accountService.logout();
    }

    ngOnInit(): void {
        
    }
  }