function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');

    // Swap icon
    if (sidebar.classList.contains('active')) {
      toggleButton.textContent = '✕';
    } else {
      toggleButton.textContent = '☰';
    }
  }
  }