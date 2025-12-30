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

  document.addEventListener('DOMContentLoaded', function() {
    var grid = document.querySelector('.image-grid');
    
    var msnry = new Masonry(grid, {
      itemSelector: '.image-grid img',
      columnWidth: 300,
      gutter: 15,
      fitWidth: false,
      horizontalOrder: true
    });
    
    // Re-layout after images load
    imagesLoaded(grid, function() {
      msnry.layout();
    });
  });