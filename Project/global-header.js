// Create and insert the header HTML into the DOM
(function() {
    // Define the header HTML template
    let headerHtml = `
<div id="global-header">
  <header>
  <nav>
    <div class="logo">
      <img src="Images/nintendo-logo.png" alt="Nintendo Logo"/>
    </div>
    <div class="menu-button-container">
      <div class="menu-button">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
  <div class="menu-container">
    <ul class="menu">
      <li><a href="index.html">Home</a></li>
      <li><a href="product-page.html">Product</a></li>
      <li><a href="about-company.html">Who We Are</a></li>
      <li><a href="contact-page.html">Contact Us</a></li>
    </ul>
  </div>
</header>
</div>

`;
    // Insert the header HTML at the beginning of the document body
    document.body.insertAdjacentHTML('afterbegin', headerHtml);

    // Add a click event listener to the menu button to toggle the menu-container active class
    document.querySelector('.menu-button').addEventListener('click', function() {
        document.querySelector('.menu-container').classList.toggle('active');
    });
})();

// Create and insert the footer HTML into the DOM
(function() {

    // Define the footer HTML template
    let footerHtml = `
    <div id="global-footer">
      <footer>
        <div class="footer-content">
          <p>&copy; 1986 Nintendo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  `;

    // Insert the footer HTML at the end of the document body
    document.body.insertAdjacentHTML('beforeend', footerHtml);
})();

