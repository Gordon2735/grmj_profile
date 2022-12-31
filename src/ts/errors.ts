/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';
Document;

async function init(): Promise<any> {
  const body: any =
    (document.querySelector('body') as any) !== null
      ? (document.querySelector('body') as any)
      : (document.createElement('body') as any,
        console.log(
          '%cAn Error has Occurred!',
          'color: red; font-size: 2rem; font-weight: bold;'
        ));

  const errorDiv: HTMLElement = document.createElement('div');
  errorDiv.classList.add('error-div');

  const errorText: HTMLElement = document.createElement('p');
  errorText.classList.add('error-text');
  errorText.textContent =
    'SORRY:  Error Occurred! || Please try again later. || Contact Gordon at webelistics@gmail.com';

  if (body === document.body) {
    errorDiv.appendChild(errorText);
    body.insertAdjacentHTML('afterbegin', errorDiv);
  }
  // errorDiv.appendChild(errorText);
  // body.appendChild(errorDiv);

  console.log(
    '%cAn Error has Occurred!',
    'color: red; font-size: 2rem; font-weight: bold;'
  );
}

export default init;
