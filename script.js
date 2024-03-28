// Function to open a tab
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
  
    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Deactivate all tab links
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the selected tab content
    document.getElementById(tabName).style.display = "block";
  
    // Activate the clicked tab link
    evt.currentTarget.style.Color = "#252460";
  }
  
  // Set the default tab to be displayed
  document.getElementById("tab1").style.display = "block";
  document.getElementsByClassName("tablinks")[0].style.backgroundColor = "#AA4848";
  

//Responsive nav bar
document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('menu');
  const closeButton = document.getElementById('close');
  const frame2 = document.querySelector('.frame-2');

  menuButton.addEventListener('click', function () {
      frame2.classList.add('active');
      frame2.classList.add('mobile-view'); // Add this line
  });

  closeButton.addEventListener('click', function () {
      frame2.classList.remove('active');
      frame2.classList.remove('mobile-view'); // Add this line
  });
});