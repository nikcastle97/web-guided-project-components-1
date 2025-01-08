// TASK 0- Motivate demoing a small makeImage component
//  that takes an { imgURL } and returns an img element.
//  Then loop over these URLs making images as you go:
const imageData = [
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_978.jpg' },
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_3398.jpg' },
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_2947.jpg' },
]

function makeImg(imgURL) {
  const img = document.createElement(`img`)
  img.src = imgURL.imageURL
  return img
}
imageData.forEach(image => {
  const imgElement = makeImg(image)
  // console.log(imgElement)
  // document.body.prepend(imgElement)
})


// TASK 1- Import the data we need to "hydrate" our component.
//  On the one hand, the default export from data/panelData.js
//  On the other hand, the default export from data/constants.js
//  Destructure `open` and `close` from the constants
import panelData from './data/panelData'
import linkData from './data/linkData'
import constants from './data/constants'

const { open, close } = constants;


// TASK 2- Verify our imports using log statements
// console.log(`Panel Data: => ${panelData}`) // log the panelData
// console.log(`Link Data: => ${linkData}`) // log the linkData
// console.log(`Open Constants: => ${open}`) // log the open arrow
// console.log(`Close Constants: => ${close}`) // log the close arrow


// TASK 3- Comment out the div.panel from index.html and grab its parent element.
//  We will generate the panel with code, and we'll need the parent
//  so we can append the code-generated panel to the DOM.
const accordion = document.querySelector(`.accordion`);


// TASK 4- Create a function 'makePanel' that creates a panel exactly as you see it in the HTML.
function makePanel({ title, content }) {


  // TASK 5- Instantiate all the elements needed for a panel
  const panel = document.createElement(`div`);
  const panelBar = document.createElement(`div`);
  const panelContent = document.createElement(`div`);
  const panelTitle = document.createElement(`h3`);
  const panelButtons = document.createElement(`div`);
  const openButton = document.createElement(`button`);
  const closeButton = document.createElement(`button`);


  // TASK 6- Setup the structure of our elements
  /*
    <div>                   // panel
      <div>                 // panelBar
        <h3></h3>           // panelTitle
        <div>               // panelButtons
          <button></button> // openButton
          <button></button> // closeButton
        </div>
      </div>
      <div></div>           // panelContent
    </div>
  */

  panelButtons.appendChild(openButton);
  panelButtons.appendChild(closeButton);
  panelBar.appendChild(panelTitle);
  panelBar.appendChild(panelButtons);
  panel.appendChild(panelBar);
  panel.appendChild(panelContent);
  accordion.appendChild(panel);
  console.log(panel)


  // TASK 7- Add proper class names to our elements (See index.html for reference)
  // paying attention to the elements that need to start out hidden
  panel.classList.add(`panel`);
  panelBar.classList.add(`panel-bar`);
  panelButtons.classList.add(`panel-buttons`);
  panelContent.classList.add(`panel-content`)
  openButton.classList.add(`panel-btn-open`);
  closeButton.classList.add(`panel-btn-close`, `hide-btn`);


  // TASK 8- Set text content using arguments as raw material
  //  and also using the open and close arrows imported at the top of the file
  panelTitle.textContent = title;
  panelContent.textContent = content;
  openButton.textContent = open;
  closeButton.textContent = close;


  // TASK 9- When the 'open' or 'close' buttons are clicked, the content is toggled on/off:
  //  - the open button needs to go away (the 'hide-btn' class name controls this)
  //  - the close button needs to show (the 'hide-btn' class name controls this)
  //  - the contents need to show (the 'toggle-on' class name controls this)
  panelButtons.addEventListener(`click`, () => {
  openButton.classList.toggle(`hide-btn`);
  closeButton.classList.toggle(`hide-btn`);
  panelContent.classList.toggle(`toggle-on`);
  })

  // don't forget to return the panel!
  return panel
}

const panelElements = panelData.map(panel => {
  return makePanel(panel)
});

panelElements.forEach(element => {
  accordion.appendChild(element)
});

// const testPanel = makePanel({ title: 'Test', content: 'Test content'})
// accordion.appendChild(testPanel)


// TASK 10- Loop through the panelData we imported from the data folder
//  creating panels for each content and title and append them to the DOM.
//  We can do this with a single forEach, or with a map and a forEach.


// [STRETCH] Comment out the links inside the nav and
// write a linkMaker that takes { href, className, text }
// and returns an anchor tag with the right href, class and textContent.
// Loop over the 'linkData' in the data folder, generate anchor tags
// and append them to the nav.

function linkMaker({ href, className, text }) {
  const link = document.createElement(`a`);
  link.href = href;
  link.className = className;
  link.textContent = text;
  return link;
}

const linkAnch = document.querySelector(`.main-nav`);

linkData.forEach(link => {
  const linkElement = linkMaker(link);
  linkAnch.appendChild(linkElement)
})