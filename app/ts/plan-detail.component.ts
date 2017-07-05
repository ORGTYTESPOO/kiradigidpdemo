/**
 * Modified from Hero example
 * https://angular.io/tutorial/toh-pt3
 * NOT TESTED
 */
import { Component, Input } from 'angular2/core';

import { Plan } from './plan';

@Component({
  selector: 'plan-detail',
  templateUrl: 'app/ts/plan-detail.component.html',
  inputs: ['suunnitelmat']
})

export class PlanDetailComponent {
  @Input() plan: Plan;
}