import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { NgFor, NgIf } from '@angular/common';
import { AllUsers } from '../all-users';
import { Router, RouterLink } from '@angular/router';
import { SkeletonModule } from 'primeng/skeleton';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../search.pipe';
import { PaginatorModule } from 'primeng/paginator';
import { BehaviorSubject } from 'rxjs';
import { DropdownModule } from 'primeng/dropdown';
import { SortPipe } from '../sort.pipe';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgFor,RouterLink, SkeletonModule, NgIf,FormsModule,SearchPipe,PaginatorModule,DropdownModule,SortPipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

  allUsers: AllUsers[] = [];
  isLoading: boolean = true;
  searchTerm: string = '';

  first: number = 0;
  rows: number = 3;
  totalRecord = new BehaviorSubject(0);
  totalRecords!: number;

  options: any[] | undefined;
  selectedOption: any | undefined;
  constructor(private _UsersService: UsersService, private _Router:Router) { }
  

  ngOnInit(): void {
    this.totalRecord.subscribe((res)=> this.totalRecords = res)
    this.onPageChange();

    this.options = [
        { name: 'Name' },
        { name: 'Username' },
        { name: 'Email' }
    ];
  }

  onPageChange(event?: any) {
    if (event) {
      this.first = event.first;
      this.rows = event.rows;
    }
    this.isLoading = true;
    this._UsersService.getAllUsers().subscribe({
      next: (result) => {
        this.totalRecord.next(result.length) ;
        this.allUsers = [];
        for (let i = this.first; i < this.first + this.rows && i<this.totalRecords ; i++){
          this.allUsers.push(result[i]);
        }       
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  handleLogout() {
    localStorage.setItem('userLogin', 'false');
    this._Router.navigate(['/login']);
  }


}
