import { Pipe, PipeTransform } from '@angular/core';
import { AllUsers } from './all-users';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(users:AllUsers[], term:string): AllUsers[] {
    return users.filter((user)=> user.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()) || user.username.toLocaleLowerCase().includes(term.toLocaleLowerCase()) );
  }

}
