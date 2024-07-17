import { Pipe, PipeTransform } from '@angular/core';
import { AllUsers } from './all-users';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {

  transform(users: AllUsers[], option: string): AllUsers[] {
    if (option == 'Name') {
      return users.sort((a,b)=> a.name.localeCompare(b.name));
    } else if (option == 'Username') {
      return users.sort((a,b)=> a.username.localeCompare(b.username));
    } else if (option == 'Email') {
      return users.sort((a,b)=> a.email.localeCompare(b.email));
    } else {
      return users;
    }
  }

}
