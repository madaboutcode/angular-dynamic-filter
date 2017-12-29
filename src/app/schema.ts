export class Property {
    name: string;
    type: string;
}

export const EXAMPLE_SCHEMA: Property[] = [
    { name: 'firstName', type: 'string' },
    { name: 'lastName', type: 'string' },
    { name: 'joiningDate', type: 'date' },
    { name: 'salary', type: 'number' }
];
