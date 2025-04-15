import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user';

@Pipe({
  name: 'searching',
})
export class SearchingPipe implements PipeTransform {
  transform(users: User[], term: string): any {
    const lowerTerm = term.toLowerCase();
    if (!term) {
      return users;
    } else {
      return users.filter(
        (user) =>
          (user.name && user.name.toLowerCase().includes(lowerTerm)) ||
        (user.email && user.email.toLowerCase().includes(lowerTerm))
      );
    }
  }
}
