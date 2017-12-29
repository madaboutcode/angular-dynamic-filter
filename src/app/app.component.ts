import { Component } from '@angular/core';
import { EXAMPLE_SCHEMA, Property } from './schema';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Filter Component Demo';
  schema = EXAMPLE_SCHEMA;
}
