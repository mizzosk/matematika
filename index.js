
// Function to get the selected radio button value and perform actions
function getSelectedValueOdDo() {
    const radioOdDo = document.querySelector('input[name="group1"]:checked');
    const OdDo = radioOdDo.value; // Get the selected value
    localStorage.setItem('OdDo', OdDo); // Save to localStorage
  }
function getSelectedValueSign() {
    const radioSign = document.querySelector('input[name="group2"]:checked');
    const sign = radioSign.value; // Get the selected value
    localStorage.setItem('sign', sign); // Save to localStorage
  }

function getSelectedValueRepeat() {
    const radioRepeat = document.querySelector('input[name="group3"]:checked');
    const repeat = radioRepeat.value; // Get the selected value
    localStorage.setItem('repeat', repeat); // Save to localStorage
  }
  
  // Example usage
  document.getElementById('start-game').addEventListener('click', () => {
    getSelectedValueOdDo();
    getSelectedValueSign();
    getSelectedValueRepeat();
  });