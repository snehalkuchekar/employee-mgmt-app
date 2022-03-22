import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderPipe'
})
export class GenderPipePipe implements PipeTransform {

  transform(gender: string): string {
    if (gender)
      return 'Male';
    else
      return 'Female';
  }

}
