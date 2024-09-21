const openPopup = () => {
    document.getElementById('popupModal').classList.remove('hidden');
}

const closePopup = () => {
    document.getElementById('popupModal').classList.add('hidden');
}

const openPopupTag = () => {
    document.getElementById('popupModalTags').classList.remove('hidden')
}

const closePopupTag = () => {
    document.getElementById('popupModalTags').classList.add('hidden');
}

const openPopupTagSetting = () => {
    document.getElementById('popupModalTagSetting').classList.remove('hidden')
}

const closePopupTagSetting = () => {
    document.getElementById('popupModalTagSetting').classList.add('hidden');
}

const openPopupInvite = () => {
    document.getElementById('popupModalInvite').classList.remove('hidden')
}

const closePopupInvite = () => {
    document.getElementById('popupModalInvite').classList.add('hidden');
}

const openMonthly = () => {
  document.getElementById('annual').classList.add('hidden');
  document.getElementById('monthly').classList.remove('hidden');
  document.getElementById('annualButton').classList.remove('active-payment');
  document.getElementById('annualButton').classList.add('payment');
  document.getElementById('monthlyButton').classList.add('active-payment');
  document.getElementById('monthlyButton').classList.remove('payment');
}

const openAnnual = () => {
  document.getElementById('annual').classList.remove('hidden');
  document.getElementById('monthly').classList.add('hidden');
  document.getElementById('annualButton').classList.add('active-payment');
  document.getElementById('annualButton').classList.remove('payment');
  document.getElementById('monthlyButton').classList.remove('active-payment');
  document.getElementById('monthlyButton').classList.add('payment');
}

const toggleSwitch = document.getElementById("toggleSwitch");
    const slider = document.getElementById("slider");
    const toggleCircle = document.getElementById("toggleCircle");
    const toggleBg = document.querySelector(".toggle-bg");

    // Function to toggle the switch state
    toggleSwitch.addEventListener("click", () => {
      slider.checked = !slider.checked; // Toggle the checkbox state

      if (slider.checked) {
        toggleBg.classList.add("enabled");
        toggleCircle.style.transform = "translateX(100%)"; // Move the circle to the right
      } else {
        toggleBg.classList.remove("enabled");
        toggleCircle.style.transform = "translateX(0)"; // Move the circle to the left
      }
    });


    const toggleSwitchE = document.getElementById("toggleSwitchE");
    const sliderE = document.getElementById("sliderE");
    const toggleCircleE = document.getElementById("toggleCircleE");
    const toggleBgE = document.querySelector(".toggle-bgE");

    // Function to toggle the switch state
    toggleSwitchE.addEventListener("click", () => {
      sliderE.checked = !sliderE.checked; // Toggle the checkbox state

      if (sliderE.checked) {
        toggleBgE.classList.add("enabled");
        toggleCircleE.style.transform = "translateX(100%)"; // Move the circle to the right
      } else {
        toggleBgE.classList.remove("enabled");
        toggleCircleE.style.transform = "translateX(0)"; // Move the circle to the left
      }
    });

    const toggleSwitchF = document.getElementById("toggleSwitchF");
    const sliderF = document.getElementById("sliderF");
    const toggleCircleF = document.getElementById("toggleCircleF");
    const toggleBgF = document.querySelector(".toggle-bgF");

    // Function to toggle the switch state
    toggleSwitchF.addEventListener("click", () => {
      sliderF.checked = !sliderF.checked; // Toggle the checkbox state

      if (sliderF.checked) {
        toggleBgF.classList.add("enabled");
        toggleCircleF.style.transform = "translateX(100%)"; // Move the circle to the right
      } else {
        toggleBgF.classList.remove("enabled");
        toggleCircleF.style.transform = "translateX(0)"; // Move the circle to the left
      }
    });

    const toggleSwitchA = document.getElementById("toggleSwitchA");
    const sliderA = document.getElementById("sliderA");
    const toggleCircleA = document.getElementById("toggleCircleA");
    const toggleBgA = document.querySelector(".toggle-bgA");

    // Function to toggle the switch state

    toggleSwitchA.addEventListener("click", () => {
        sliderA.checked = !sliderA.checked; // Toggle the checkbox state
  
        if (sliderA.checked) {
          toggleBgA.classList.add("enabled");
          toggleCircleA.style.transform = "translateX(100%)"; // Move the circle to the right
        } else {
          toggleBgA.classList.remove("enabled");
          toggleCircleA.style.transform = "translateX(0)"; // Move the circle to the left
        }
      });

     // Dropdown Toggle Functionality
     const dropdownBtn = document.getElementById('dropdownBtn');
     const dropdownMenu = document.getElementById('dropdownMenu');

     dropdownBtn.addEventListener('click', function() {
         // Toggle the dropdown menu visibility
         dropdownMenu.classList.toggle('hidden');
     });

     // Close dropdown when clicking outside
     window.addEventListener('click', function(e) {
         if (!dropdownBtn.contains(e.target)) {
             dropdownMenu.classList.add('hidden');
         }
     });