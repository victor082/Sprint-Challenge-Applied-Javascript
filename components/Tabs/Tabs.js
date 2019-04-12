class TabLink { // Creates a TabLink class
  constructor(tabElement){ // Passes tabElement through the class
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;
    
    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = this.tabElement.dataset.tab; // .dataset translates the HTML data- to JS
    
    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    

    // Check to see if this.tabData is equal to 'all'
    if(this.tabData === 'all'){ // if this.tabData is equal to the string 'all'

      // If `all` is true, select all cards regardless of their data attribute values
      this.cards = document.querySelectorAll('.card'); // 'card' class will equal to the current this.cards
    } else {

      // else if `all` is false, only select the cards with matching this.tabData values
      this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`); // if false, then it will select to whatever this.tabData is
    }

     // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    this.cards = Array.from(this.cards).map(card => new TabCard(card)); // gives this.cards array functionality, map() method creates a new array of card that is then transformed into new TabCard

    // Add a click event that invokes this.selectTab
    this.tabElement.addEventListener('click', () => this.selectTab()); // makes the click event and whenever you click, it invokes the selectTab() method.
  }

  selectTab(){

    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll('.tab'); // selects every 'tab' class
    
    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach(tab => tab.classList.remove('active-tab')) // for each tab, list every class and removes the 'active-tab' class

    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll('.card'); // creates cards variable and assigns it to all the 'card' class

    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(card => card.style.display ='none') // each card displays none
    
    // Add a class of ".active-tab" to this.tabElement
    this.tabElement.classList.add('active-tab'); // adds back the 'active-tab' to whichever tab we click
  
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard { // creates a new class named 'TabCard'
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
  }
  selectCard(){ 
    // Update the style of this.cardElement to display = "flex"
    this.cardElement.style.display = 'flex'; // selectCard() method will change the cardElement style to display flex.
  }

}

/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/
let tabs = document.querySelectorAll('.tab').forEach(tab => new TabLink(tab)) // Takes each 'tab' class and turns it into something malleable for Javascript. 'Tab' class -> TabLink JS Class