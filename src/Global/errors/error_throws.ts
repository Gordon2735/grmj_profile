'use strict';

export const wrongTypeError: TypeError = TypeError(
  'Wrong type found, expected character'
);

export class ValidationError extends Error {
  constructor(message: string | undefined) {
    super(message);

    this.name = 'ValidationError';
  }
}

try {
  // validateForm(); // code that throws a ValidationError
} catch (error) {
  if (error instanceof ValidationError)
    throw new ValidationError(`Sorry, the form is invalid:  ${error.message}`);
}

// function validateForm(form: HTMLFormElement): void {
// 	form.nodeType === 1;
// }
