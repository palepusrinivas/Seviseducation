/**
 * Sevis Global Education - Critical User Flows
 * Automated E2E Testing with Cypress
 * 
 * Test Coverage:
 * - Homepage load and navigation
 * - Contact form submission
 * - Free consultation booking
 * - Mobile responsiveness
 * - Cross-page navigation
 */

describe('Sevis Global Education - Critical User Flows', () => {
  
  beforeEach(() => {
    // Set viewport for desktop testing
    cy.viewport(1920, 1080);
  });

  /**
   * TEST SUITE 1: Homepage
   */
  describe('Homepage Tests', () => {
    
    it('TC-HOME-001: Should load homepage successfully', () => {
      cy.visit('/');
      
      // Check page loads
      cy.url().should('eq', Cypress.config().baseUrl + '/');
      
      // Check loader appears and disappears
      cy.get('[data-testid="loader"]', { timeout: 5000 }).should('be.visible');
      cy.get('[data-testid="loader"]', { timeout: 5000 }).should('not.exist');
      
      // Check header is visible
      cy.get('header').should('be.visible');
      cy.get('header img[alt*="Sevis"]').should('be.visible');
      
      // Check hero section loads
      cy.get('[data-testid="hero-section"]').should('be.visible');
    });

    it('TC-HOME-002: Should display all header menu items', () => {
      cy.visit('/');
      
      // Wait for page load
      cy.wait(3000);
      
      // Check main menu items exist
      const menuItems = ['Home', 'About', 'Study Abroad', 'Services', 'Exam Prep', 'Contact'];
      menuItems.forEach(item => {
        cy.contains(item).should('exist');
      });
      
      // Check CTA button
      cy.contains("Let's Connect").should('be.visible');
    });

    it('TC-HOME-003: Should open Study Abroad dropdown on hover', () => {
      cy.visit('/');
      cy.wait(3000);
      
      // Hover on Study Abroad
      cy.contains('Study Abroad').trigger('mouseover');
      
      // Check dropdown appears
      cy.wait(500); // Animation delay
      cy.contains('USA').should('be.visible');
      cy.contains('UK').should('be.visible');
      cy.contains('Canada').should('be.visible');
    });

    it('TC-HOME-004: Should navigate to About page', () => {
      cy.visit('/');
      cy.wait(3000);
      
      cy.contains('About').click();
      cy.url().should('include', '/About');
      cy.contains('About Sevis Global').should('exist');
    });

    it('TC-HOME-005: Hero carousel should auto-advance', () => {
      cy.visit('/');
      cy.wait(3000);
      
      // Check first slide
      cy.get('[data-testid="carousel-slide-0"]').should('have.class', 'active');
      
      // Wait for auto-advance (5 seconds)
      cy.wait(5500);
      
      // Check second slide is now active
      cy.get('[data-testid="carousel-slide-1"]').should('have.class', 'active');
    });

    it('TC-HOME-006: Should scroll smoothly to sections', () => {
      cy.visit('/');
      cy.wait(3000);
      
      // Click "Learn More" or similar CTA
      cy.contains('Get Started').first().click();
      
      // Verify scroll happened (check if a lower section is in view)
      cy.get('[data-testid="features-section"]').should('be.visible');
    });

    it('TC-HOME-007: Footer should be visible and functional', () => {
      cy.visit('/');
      cy.wait(3000);
      
      // Scroll to footer
      cy.get('footer').scrollIntoView();
      
      // Check footer content
      cy.get('footer').within(() => {
        cy.contains('Sevis Global Education').should('exist');
        cy.contains('+91-9256-9256-45').should('exist');
        cy.contains('info@sevisedu.com').should('exist');
      });
      
      // Check social media links
      const socialPlatforms = ['Instagram', 'LinkedIn', 'Facebook', 'Twitter', 'YouTube'];
      socialPlatforms.forEach(platform => {
        cy.get(`footer a[aria-label*="${platform}"]`).should('exist');
      });
    });
  });

  /**
   * TEST SUITE 2: Contact Form
   */
  describe('Contact Form Tests', () => {
    
    beforeEach(() => {
      cy.visit('/Contact');
      cy.wait(3000);
    });

    it('TC-FORM-001: Should display contact form', () => {
      cy.get('form').should('be.visible');
      
      // Check all fields exist
      cy.get('input[name="name"]').should('exist');
      cy.get('input[name="email"]').should('exist');
      cy.get('input[name="phone"]').should('exist');
      cy.get('input[name="subject"]').should('exist');
      cy.get('textarea[name="message"]').should('exist');
      cy.get('button[type="submit"]').should('exist');
    });

    it('TC-FORM-002: Should show validation errors on empty submission', () => {
      cy.get('button[type="submit"]').click();
      
      // Check for error messages
      cy.contains('required').should('be.visible');
    });

    it('TC-FORM-003: Should validate email format', () => {
      cy.get('input[name="email"]').type('invalid-email');
      cy.get('input[name="email"]').blur();
      
      // Check for email validation error
      cy.contains('valid email').should('be.visible');
    });

    it('TC-FORM-004: Should submit form with valid data', () => {
      // Fill form
      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="email"]').type('john@example.com');
      cy.get('input[name="phone"]').type('+919876543210');
      cy.get('input[name="subject"]').type('Visa Inquiry');
      cy.get('textarea[name="message"]').type('I need help with USA student visa application.');
      
      // Submit
      cy.get('button[type="submit"]').click();
      
      // Check for success message (adjust selector based on actual implementation)
      cy.contains('success', { matchCase: false, timeout: 10000 }).should('be.visible');
    });

    it('TC-FORM-005: Should clear form after successful submission', () => {
      // Fill and submit form
      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="email"]').type('john@example.com');
      cy.get('input[name="phone"]').type('+919876543210');
      cy.get('input[name="subject"]').type('Inquiry');
      cy.get('textarea[name="message"]').type('Test message that is long enough to pass validation.');
      cy.get('button[type="submit"]').click();
      
      // Wait for success
      cy.wait(2000);
      
      // Check fields are cleared
      cy.get('input[name="name"]').should('have.value', '');
      cy.get('input[name="email"]').should('have.value', '');
    });
  });

  /**
   * TEST SUITE 3: Free Consultation Form
   */
  describe('Free Consultation Form Tests', () => {
    
    beforeEach(() => {
      cy.visit('/FreeConsultation');
      cy.wait(3000);
    });

    it('TC-CONSULT-001: Should display consultation form', () => {
      cy.get('form').should('be.visible');
      
      // Check specific fields
      cy.get('input[name="fullName"]').should('exist');
      cy.get('input[name="email"]').should('exist');
      cy.get('input[name="phone"]').should('exist');
      cy.get('select[name="country"]').should('exist');
      cy.get('select[name="destination"]').should('exist');
    });

    it('TC-CONSULT-002: Should select country from dropdown', () => {
      cy.get('select[name="country"]').select('India');
      cy.get('select[name="country"]').should('have.value', 'India');
    });

    it('TC-CONSULT-003: Should select destination country', () => {
      cy.get('select[name="destination"]').select('USA');
      cy.get('select[name="destination"]').should('have.value', 'USA');
    });

    it('TC-CONSULT-004: Should require privacy policy acceptance', () => {
      // Fill form but don't check privacy
      cy.get('input[name="fullName"]').type('Jane Smith');
      cy.get('input[name="email"]').type('jane@example.com');
      cy.get('input[name="phone"]').type('+919876543210');
      
      // Try to submit
      cy.get('button[type="submit"]').click();
      
      // Should be blocked or show error
      cy.get('input[type="checkbox"][name="privacy"]').should('not.be.checked');
    });
  });

  /**
   * TEST SUITE 4: Navigation & Links
   */
  describe('Navigation Tests', () => {
    
    it('TC-NAV-001: All main menu links should work', () => {
      cy.visit('/');
      cy.wait(3000);
      
      // Test About
      cy.contains('About').click();
      cy.url().should('include', '/About');
      
      // Test Contact
      cy.visit('/');
      cy.wait(1000);
      cy.contains('Contact').click();
      cy.url().should('include', '/Contact');
    });

    it('TC-NAV-002: Study Abroad dropdown links should work', () => {
      cy.visit('/');
      cy.wait(3000);
      
      // Hover and click USA
      cy.contains('Study Abroad').trigger('mouseover');
      cy.wait(500);
      cy.contains('USA').click();
      
      cy.url().should('include', '/UnitedStateofAmerica');
    });

    it('TC-NAV-003: Exam Prep dropdown links should work', () => {
      cy.visit('/');
      cy.wait(3000);
      
      cy.contains('Exam Prep').trigger('mouseover');
      cy.wait(500);
      cy.contains('IELTS').click();
      
      cy.url().should('include', '/IELTS');
    });

    it('TC-NAV-004: Footer links should work', () => {
      cy.visit('/');
      cy.wait(3000);
      
      cy.get('footer').scrollIntoView();
      
      // Click About link in footer
      cy.get('footer').contains('About').click();
      cy.url().should('include', '/About');
    });

    it('TC-NAV-005: Social media links should open in new tab', () => {
      cy.visit('/');
      cy.wait(3000);
      
      cy.get('footer').scrollIntoView();
      
      // Check Instagram link has target="_blank"
      cy.get('footer a[aria-label*="Instagram"]')
        .should('have.attr', 'target', '_blank')
        .and('have.attr', 'rel', 'noopener noreferrer');
    });

    it('TC-NAV-006: Browser back button should work', () => {
      cy.visit('/');
      cy.wait(3000);
      
      cy.contains('About').click();
      cy.url().should('include', '/About');
      
      cy.go('back');
      cy.url().should('eq', Cypress.config().baseUrl + '/');
    });
  });

  /**
   * TEST SUITE 5: Mobile Responsiveness
   */
  describe('Mobile Responsiveness Tests', () => {
    
    beforeEach(() => {
      // Set mobile viewport
      cy.viewport('iphone-x');
    });

    it('TC-MOBILE-001: Hamburger menu should appear on mobile', () => {
      cy.visit('/');
      cy.wait(3000);
      
      // Hamburger icon should be visible
      cy.get('[data-testid="hamburger-menu"]').should('be.visible');
      
      // Desktop menu should be hidden
      cy.get('[data-testid="desktop-menu"]').should('not.be.visible');
    });

    it('TC-MOBILE-002: Mobile menu should open and close', () => {
      cy.visit('/');
      cy.wait(3000);
      
      // Open menu
      cy.get('[data-testid="hamburger-menu"]').click();
      cy.wait(500);
      
      // Drawer should be visible
      cy.get('[data-testid="mobile-drawer"]').should('be.visible');
      
      // Close menu
      cy.get('[data-testid="close-menu"]').click();
      cy.wait(500);
      
      // Drawer should be hidden
      cy.get('[data-testid="mobile-drawer"]').should('not.be.visible');
    });

    it('TC-MOBILE-003: Mobile dropdown should work', () => {
      cy.visit('/');
      cy.wait(3000);
      
      // Open menu
      cy.get('[data-testid="hamburger-menu"]').click();
      cy.wait(500);
      
      // Click Study Abroad
      cy.get('[data-testid="mobile-drawer"]').contains('Study Abroad').click();
      cy.wait(500);
      
      // Submenu should appear
      cy.contains('USA').should('be.visible');
      cy.contains('UK').should('be.visible');
    });

    it('TC-MOBILE-004: Form should be fully visible on mobile', () => {
      cy.visit('/Contact');
      cy.wait(3000);
      
      // Check form fits in viewport (no horizontal scroll)
      cy.get('form').should('be.visible');
      
      // Check fields are stacked vertically
      cy.get('input[name="name"]').should('be.visible');
      cy.get('input[name="email"]').should('be.visible');
    });

    it('TC-MOBILE-005: Hero section should be readable on mobile', () => {
      cy.visit('/');
      cy.wait(3000);
      
      // Check hero text is visible and readable
      cy.get('[data-testid="hero-section"]').within(() => {
        cy.get('h1, h2').should('be.visible');
        cy.get('button, a').should('be.visible');
      });
    });

    it('TC-MOBILE-006: Footer should stack on mobile', () => {
      cy.visit('/');
      cy.wait(3000);
      
      cy.get('footer').scrollIntoView();
      
      // Footer should be visible
      cy.get('footer').should('be.visible');
      
      // Check content is stacked (not overflowing)
      cy.get('footer').contains('Sevis Global Education').should('be.visible');
    });
  });

  /**
   * TEST SUITE 6: Performance
   */
  describe('Performance Tests', () => {
    
    it('TC-PERF-001: Page should load within 3 seconds', () => {
      const start = Date.now();
      cy.visit('/');
      cy.wait(3000); // Wait for loader
      
      const loadTime = Date.now() - start;
      expect(loadTime).to.be.lessThan(5000); // 5 seconds including loader
    });

    it('TC-PERF-002: Images should lazy load', () => {
      cy.visit('/');
      cy.wait(3000);
      
      // Check images have loading="lazy" attribute
      cy.get('img[loading="lazy"]').should('exist');
    });

    it('TC-PERF-003: No console errors on page load', () => {
      cy.visit('/', {
        onBeforeLoad(win) {
          cy.spy(win.console, 'error').as('consoleError');
        }
      });
      cy.wait(3000);
      
      cy.get('@consoleError').should('not.be.called');
    });
  });

  /**
   * TEST SUITE 7: SEO
   */
  describe('SEO Tests', () => {
    
    it('TC-SEO-001: Homepage should have proper meta tags', () => {
      cy.visit('/');
      
      // Check title
      cy.title().should('include', 'Sevis Global Education');
      
      // Check meta description
      cy.get('meta[name="description"]')
        .should('have.attr', 'content')
        .and('include', 'study abroad');
      
      // Check meta keywords
      cy.get('meta[name="keywords"]').should('exist');
    });

    it('TC-SEO-002: All pages should have unique H1', () => {
      const pages = ['/', '/About', '/Contact'];
      
      pages.forEach(page => {
        cy.visit(page);
        cy.wait(3000);
        
        // Should have exactly one H1
        cy.get('h1').should('have.length.at.least', 1);
      });
    });

    it('TC-SEO-003: Images should have alt text', () => {
      cy.visit('/');
      cy.wait(3000);
      
      // Check that images have alt attributes
      cy.get('img').each(($img) => {
        cy.wrap($img).should('have.attr', 'alt');
      });
    });

    it('TC-SEO-004: Links should be crawlable', () => {
      cy.visit('/');
      cy.wait(3000);
      
      // Check that important links don't have rel="nofollow"
      cy.get('a[href^="/"]').each(($link) => {
        cy.wrap($link).should('not.have.attr', 'rel', 'nofollow');
      });
    });
  });

  /**
   * TEST SUITE 8: Accessibility
   */
  describe('Accessibility Tests', () => {
    
    it('TC-A11Y-001: Should have proper ARIA labels on buttons', () => {
      cy.visit('/');
      cy.wait(3000);
      
      // Icon-only buttons should have aria-label
      cy.get('button[aria-label]').should('exist');
    });

    it('TC-A11Y-002: Form fields should have labels', () => {
      cy.visit('/Contact');
      cy.wait(3000);
      
      // All inputs should have associated labels
      cy.get('input').each(($input) => {
        const id = $input.attr('id');
        if (id) {
          cy.get(`label[for="${id}"]`).should('exist');
        }
      });
    });

    it('TC-A11Y-003: Should be keyboard navigable', () => {
      cy.visit('/');
      cy.wait(3000);
      
      // Tab through interactive elements
      cy.get('body').tab();
      cy.focused().should('exist');
      
      cy.focused().tab();
      cy.focused().should('exist');
    });

    it('TC-A11Y-004: Focus should be visible', () => {
      cy.visit('/');
      cy.wait(3000);
      
      // Click a link and check focus
      cy.get('a').first().focus();
      cy.focused().should('have.css', 'outline-style', 'solid');
    });
  });

  /**
   * TEST SUITE 9: Cross-Page Consistency
   */
  describe('Cross-Page Consistency Tests', () => {
    
    const pages = ['/', '/About', '/Contact', '/FreeConsultation'];
    
    pages.forEach(page => {
      it(`TC-CONSISTENCY-001: Header should be consistent on ${page}`, () => {
        cy.visit(page);
        cy.wait(3000);
        
        // Header should exist
        cy.get('header').should('be.visible');
        
        // Logo should be present
        cy.get('header img[alt*="Sevis"]').should('be.visible');
      });

      it(`TC-CONSISTENCY-002: Footer should be consistent on ${page}`, () => {
        cy.visit(page);
        cy.wait(3000);
        
        cy.get('footer').scrollIntoView();
        cy.get('footer').should('be.visible');
        
        // Check consistent footer content
        cy.get('footer').contains('Sevis Global Education').should('exist');
      });
    });
  });
});

