1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:
 getElementById: we use this to find single element object which have unique id in the document
 getElementByClassName: we use this to find elements that have same class. It returns HTMLCollection which is an array like object but not a array. 
 querySelector: we use this to find the fast element that matches with the class. it return a single element.
 querySelectorAll: we use this to find NodeList of all elements matches with the CSS class/selector. it always returns nodeList.

2. How do you create and insert a new element into the DOM?
Ans: step 1: Create an element.
     step 2: Add attributes to the element
     step 3: Append the element to the parent node. 

3. What is Event Bubbling and how does it work?
Ans: Event bubbling is a DOM event propagation mechanism where an event starts from    targeted element and  traverses up  to the parent element until it reaches the document.
4. What is Event Delegation in JavaScript? Why is it useful?
Ans: This is a technique of java script. In which we don't add event listener to the children we add event listener to the parent node.By this way we can find from which child element triggered the event.
this is useful for many reasons some of them are: It reduces code complexity, we dont need to add event listener to every child elements, decreases th size of the code, consumes less memory. 
5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: 
preventDefault(): we use this to prevent default action of an event of browser. It does not effects bubble propagation. ex: form submit button. if we use this default events of a form will not work. we can also use this to stop default action of link tag.

stopPropagation(): we use this to stope the propagation of eventBubble.it does not effects the default action of an event of a browser. It handles event until it reaches the target element.

