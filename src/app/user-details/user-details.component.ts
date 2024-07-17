import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { SkeletonModule } from 'primeng/skeleton';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [SkeletonModule,NgIf],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit {

  userId!: any;
  user!: User;
  isLoading: boolean = true;

  constructor(private _UsersService: UsersService, private _ActivatedRoute:ActivatedRoute) { }
  

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params) => {
      this.userId = params.get('id');
    });

    this._UsersService.getUserDetails(this.userId).subscribe({
      next: (result) => {
        console.log(result);
        this.user = result;
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
      }
    });

  }
}
