// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['I once had 7 wisdom teeth!','I have not ate a physical banana. Ever.',
      'I lived on Capitol Hill in DC for a semester in high school! #SEGL',
      'I am an Outside Hitter in volleyball.',
      '"Nothing softens the wounds of your ancestors like the sweetness of your existence."'
      ,'I did a summer homestay in Peru in high school!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}


/**
 * Fetches a random quote from the server and adds it to the DOM.
 */
function getData() {
  console.log('Fetching data from server.');

  // The fetch() function returns a Promise because the request is asynchronous.
  const responsePromise = fetch('/data');

  // When the request is complete, pass the response into handleResponse().
  responsePromise.then(handleResponse);
}

/**
 * Handles response by converting it to text and passing the result to
 * addQuoteToDom().
 */
function handleResponse(response) {
  console.log('Handling the response.');

  // response.text() returns a Promise, because the response is a stream of
  // content and not a simple variable.
  const textPromise = response.text();

  // When the response is converted to text, pass the result into the
  // addQuoteToDom() function.
  textPromise.then(addDataToDom);
}

/** Adds a random quote to the DOM. */
function addDataToDom(data) {
  console.log('Adding data to dom: ' + data);

  const dataContainer = document.getElementById('data-container');
  dataContainer.innerText = data;
}

async function getDataUsingAsyncAwait() {
  const response = await fetch('/data');
  console.log('Fetching data from server.');
  const data = await response.text();
  document.getElementById('data-container').innerHTML = data;
  
}
