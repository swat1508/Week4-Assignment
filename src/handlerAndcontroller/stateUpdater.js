export const updateState = function (currentState, action) {
  var thisObj = {};
  thisObj.type = action.type;
  thisObj.data = action.payload;
  thisObj.command = document.getElementById('userTextBox').value;
  currentState = JSON.parse(window.localStorage.getItem('currentState')); //SS
  return [...currentState, thisObj];
};