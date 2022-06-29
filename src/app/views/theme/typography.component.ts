import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

class Person {
  id: number;
  firstName: string;
  lastName: string;
}

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
@Component({
  selector: 'typography',
  templateUrl: 'typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent {}