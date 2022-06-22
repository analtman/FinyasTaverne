/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

//Karte JS

var i, x, tabContent, tabLinks, tabDrawerHeading, tabLinksActive, tabDrawerHeadingActive;

tabLinks = document.getElementsByClassName("tab_links");
tabDrawerHeading = document.getElementsByClassName("tab_drawer_heading");
tabContent = document.getElementsByClassName("tab_content");

function eventOpenTab(classTab) {
  console.log(classTab)

  for (i = 0; i < classTab.length; i++) {
    classTab[i].addEventListener("click", function (event) {
      tabLinksActive = document.querySelectorAll('.tab_links.active');
      tabDrawerHeadingActive = document.querySelectorAll('.tab_drawer_heading.active');
      tabContentActive = document.querySelectorAll('.tab_content.active');
      console.log(event.target.dataset.tab)

      // Get all elements with class="tabcontent" and hide them
      for (x = 0; i < tabContent.length; x++) {
        tabContent[i].style.display = "none";
      }

      // Delete all previously active tab for web and mobile
      for (let i = 0; i < tabLinksActive.length; i++) {
        tabLinksActive[i].classList.remove('active');
        tabDrawerHeadingActive[i].classList.remove('active');
        tabContentActive[i].classList.remove('active');
      }


      var tabContentCurrent = document.querySelector(
        `#${event.target.dataset.tab}`);
      event.currentTarget.className += " active";
      if (classTab == tabLinks) {
        var tabDrawerHeadingCurrent = document.querySelector(
          `h3[data-tab="${event.target.dataset.tab}"]`);
        tabDrawerHeadingCurrent.className += " active";
      } else {
        var tabLinksCurrent = document.querySelector(
          `li.tab_links[data-tab="${event.target.dataset.tab}"]`);
        tabLinksCurrent.className += " active";
      }
      tabContentCurrent.className += " active";
    })
  };
}
eventOpenTab(tabLinks);
eventOpenTab(tabDrawerHeading);

window.addEventListener('load', () => {
  let portfolioContainer = select('.portfolio-container');
  if (portfolioContainer) {
    let portfolioIsotope = new Isotope(portfolioContainer, {
      itemSelector: '.portfolio-item'
    });

    let portfolioFilters = select('#portfolio-flters li', true);

    on('click', '#portfolio-flters li', function(e) {
      e.preventDefault();
      portfolioFilters.forEach(function(el) {
        el.classList.remove('filter-active');
      });
      this.classList.add('filter-active');

      portfolioIsotope.arrange({
        filter: this.getAttribute('data-filter')
      });

    }, true);
  }

});

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });

      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
  //Map//
  var map = L.map('map').setView([51.505, -0.09], 13);
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Data © <a href="http://osm.org/copyright">OpenStreetMap</a>',
    maxZoom: 18
}).addTo(map);