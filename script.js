function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.getElementById('menuToggle');
    
    sidebar.classList.toggle('active');

    // Swap icon
    if (sidebar.classList.contains('active')) {
      toggleButton.textContent = '✕';
    } else {
      toggleButton.textContent = '☰';
    }
  }

