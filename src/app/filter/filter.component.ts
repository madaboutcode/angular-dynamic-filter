import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { Property } from '../schema';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() schema: Property[];
  form: FormGroup;
  stringOperators = {
    'contains': s => `/${s}/`,
    'startswith': s => `/^${s}/`,
    'endswith': s => `/${s}$/`
  };
  stringOpNames;
  query;

  constructor() {
    this.stringOpNames = Object.keys(this.stringOperators);
  }

  ngOnInit() {
    const formFields = this.generateSearchFields();
    this.form = new FormGroup(formFields);
  }

  generateSearchFields() {
    const formFields = {};
    this.schema.forEach(field => {
      if (this.isRangeField(field)) {
        formFields[`${field.name}__$gte`] = new FormControl('');
        formFields[`${field.name}__$lte`] = new FormControl('');
      }
      if (this.isString(field)) {
        formFields[field.name] = new FormControl('');
        formFields[`${field.name}__strop`] = new FormControl(this.stringOpNames[0]);
      }
    });
    return formFields;
  }

  isRangeField(field: Property) {
    return [ 'number', 'date' ].indexOf(field.type) > -1;
  }

  isString(field: Property) {
    return field.type === 'string';
  }

  onSubmit(form) {
    this.query = this.buildQuery(form);
  }

  buildQuery(form) {
    const query = {};
    Object.keys(form).forEach(key => {
      const [ prop, op ] = key.split('__');
      if (!op) { return; }

      let operator = null, value = null;

      if (op === 'strop') {
        operator = '$regex';
        if (form[prop]) {
          value = this.stringOperators[form[key]](form[prop]);
        }
      } else {
        operator = op;
        value = form[key];
      }
      if ( value ) {
        query[prop] = Object.assign({[operator]: value}, query[prop]);
      }
    });
    return query;
  }
}
