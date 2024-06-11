import { Pipe, PipeTransform } from '@angular/core';
import { SubmissionState } from './appeal.state';

@Pipe({
  name: 'stateDecr'
})
export class StateDecrPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log('calling pipe');
    const indexOfS = Object.keys(SubmissionState).indexOf(value);
    const key = Object.values(SubmissionState)[indexOfS];
  
    return key;
  }

}
