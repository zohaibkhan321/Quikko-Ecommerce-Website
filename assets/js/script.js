'use strict';

// Helper function to add or remove classes
const toggleClass = (element, className) => element.classList.toggle(className);

// Modal functionality
const modal = document.querySelector('[data-modal]');
const modalCloseElements = [document.querySelector('[data-modal-close]'), document.querySelector('[data-modal-overlay]')];

// Close modal on button or overlay click
modalCloseElements.forEach(el => el.addEventListener('click', () => modal.classList.add('closed')));

// Notification toast functionality
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// Close toast on button click
toastCloseBtn.addEventListener('click', () => notificationToast.classList.add('closed'));

// Mobile menu functionality
const mobileMenus = document.querySelectorAll('[data-mobile-menu]');
const overlay = document.querySelector('[data-overlay]');

document.querySelectorAll('[data-mobile-menu-open-btn]').forEach((btn, index) => {
  const menu = mobileMenus[index];
  const closeBtn = document.querySelectorAll('[data-mobile-menu-close-btn]')[index];

  const toggleMenu = () => {
    toggleClass(menu, 'active');
    toggleClass(overlay, 'active');
  };

  btn.addEventListener('click', toggleMenu);
  closeBtn.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);
});

// Accordion functionality
document.querySelectorAll('[data-accordion-btn]').forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const isActive = btn.nextElementSibling.classList.contains('active');

    document.querySelectorAll('[data-accordion]').forEach((accordion, i) => {
      accordion.classList.remove('active');
      document.querySelectorAll('[data-accordion-btn]')[i].classList.remove('active');
    });

    if (!isActive) {
      toggleClass(btn.nextElementSibling, 'active');
      toggleClass(btn, 'active');
    }
  });
});
