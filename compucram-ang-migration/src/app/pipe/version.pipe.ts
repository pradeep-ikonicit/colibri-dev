import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'version'
})
export class VersionPipe implements PipeTransform {
  VERSION='1.6.13'
  transform(value: unknown, ...args: unknown[]): unknown {
    return String(value).replace(/\%VERSION\%/mg, this.VERSION);
  }

}
