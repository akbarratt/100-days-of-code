// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello World');

//   // e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  // console.log('clicked');

  let val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coords relative to window
  val = e.clientY;
  val = e.clientX;

  // Coords relative to element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
};
