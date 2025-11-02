/**
 * Custom Cypress Commands for Sevis Global Education Testing
 */

// ***********************************************
// Custom Commands
// ***********************************************

/**
 * Fill Contact Form
 */
Cypress.Commands.add('fillContactForm', (data = {}) => {
  const defaultData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '+919876543210',
    subject: 'Test Inquiry',
    message: 'This is a test message for validation purposes.'
  };

  const formData = { ...defaultData, ...data };

  cy.get('input[name="name"]').clear().type(formData.name);
  cy.get('input[name="email"]').clear().type(formData.email);
  cy.get('input[name="phone"]').clear().type(formData.phone);
  cy.get('input[name="subject"]').clear().type(formData.subject);
  cy.get('textarea[name="message"]').clear().type(formData.message);
});

/**
 * Fill Free Consultation Form
 */
Cypress.Commands.add('fillConsultationForm', (data = {}) => {
  const defaultData = {
    fullName: 'Test Student',
    email: 'student@example.com',
    phone: '+919876543210',
    country: 'India',
    destination: 'USA',
    educationLevel: 'Bachelors',
    message: 'I am interested in studying abroad and would like expert guidance.'
  };

  const formData = { ...defaultData, ...data };

  cy.get('input[name="fullName"]').clear().type(formData.fullName);
  cy.get('input[name="email"]').clear().type(formData.email);
  cy.get('input[name="phone"]').clear().type(formData.phone);
  cy.get('select[name="country"]').select(formData.country);
  cy.get('select[name="destination"]').select(formData.destination);
  cy.get('select[name="educationLevel"]').select(formData.educationLevel);
  cy.get('textarea[name="message"]').clear().type(formData.message);
  cy.get('input[type="checkbox"][name="privacy"]').check();
});

/**
 * Check Lighthouse Scores
 */
Cypress.Commands.add('checkLighthouseScores', (thresholds = {}) => {
  const defaultThresholds = {
    performance: 85,
    accessibility: 95,
    'best-practices': 95,
    seo: 100
  };

  const finalThresholds = { ...defaultThresholds, ...thresholds };

  cy.lighthouse(finalThresholds);
});

/**
 * Check for Console Errors
 */
Cypress.Commands.add('checkConsoleErrors', () => {
  cy.window().then((win) => {
    const errors = [];
    cy.stub(win.console, 'error', (msg) => {
      errors.push(msg);
    });

    cy.wrap(errors).should('have.length', 0);
  });
});

/**
 * Open Mobile Menu
 */
Cypress.Commands.add('openMobileMenu', () => {
  cy.get('[data-testid="hamburger-menu"]').click();
  cy.wait(500); // Wait for animation
  cy.get('[data-testid="mobile-drawer"]').should('be.visible');
});

/**
 * Close Mobile Menu
 */
Cypress.Commands.add('closeMobileMenu', () => {
  cy.get('[data-testid="close-menu"]').click();
  cy.wait(500); // Wait for animation
  cy.get('[data-testid="mobile-drawer"]').should('not.be.visible');
});

/**
 * Check Page Performance
 */
Cypress.Commands.add('checkPagePerformance', (maxLoadTime = 3000) => {
  const start = performance.now();
  
  cy.window().then(() => {
    const loadTime = performance.now() - start;
    expect(loadTime).to.be.lessThan(maxLoadTime);
  });
});

/**
 * Verify SEO Meta Tags
 */
Cypress.Commands.add('verifySEOMeta', (expectedData = {}) => {
  if (expectedData.title) {
    cy.title().should('include', expectedData.title);
  }

  if (expectedData.description) {
    cy.get('meta[name="description"]')
      .should('have.attr', 'content')
      .and('include', expectedData.description);
  }

  if (expectedData.keywords) {
    cy.get('meta[name="keywords"]')
      .should('have.attr', 'content')
      .and('include', expectedData.keywords);
  }

  // Check canonical
  cy.get('link[rel="canonical"]').should('exist');
});

/**
 * Check Accessibility
 */
Cypress.Commands.add('checkA11y', () => {
  cy.injectAxe();
  cy.checkA11y(null, {
    rules: {
      'color-contrast': { enabled: true }
    }
  });
});

/**
 * Wait for Page Load
 */
Cypress.Commands.add('waitForPageLoad', (timeout = 5000) => {
  // Wait for loader to appear and disappear
  cy.get('[data-testid="loader"]', { timeout: timeout }).should('not.exist');
  
  // Additional wait for hydration
  cy.wait(1000);
});

/**
 * Scroll to Section
 */
Cypress.Commands.add('scrollToSection', (sectionTestId) => {
  cy.get(`[data-testid="${sectionTestId}"]`).scrollIntoView({
    duration: 1000,
    easing: 'swing'
  });
});

/**
 * Hover on Element
 */
Cypress.Commands.add('hoverOn', (selector) => {
  cy.get(selector).trigger('mouseover');
  cy.wait(300); // Wait for hover effects
});

/**
 * Check Image Quality
 */
Cypress.Commands.add('checkImageQuality', () => {
  cy.get('img').each(($img) => {
    // Check alt text exists
    cy.wrap($img).should('have.attr', 'alt');
    
    // Check image loaded successfully
    cy.wrap($img).should('be.visible');
    cy.wrap($img)
      .should(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });
});

/**
 * Test Form Validation
 */
Cypress.Commands.add('testFormValidation', (formSelector) => {
  // Try to submit empty form
  cy.get(formSelector).within(() => {
    cy.get('button[type="submit"]').click();
  });

  // Check for validation errors
  cy.contains(/required|invalid/i).should('be.visible');
});

/**
 * Check Responsive Layout
 */
Cypress.Commands.add('checkResponsiveLayout', (breakpoint) => {
  const breakpoints = {
    mobile: [375, 667],
    tablet: [768, 1024],
    desktop: [1920, 1080]
  };

  if (breakpoints[breakpoint]) {
    cy.viewport(breakpoints[breakpoint][0], breakpoints[breakpoint][1]);
    
    // Check no horizontal overflow
    cy.get('body').should('have.css', 'overflow-x', 'hidden');
  }
});

/**
 * Check Link Health
 */
Cypress.Commands.add('checkLinkHealth', () => {
  cy.get('a[href]').each(($link) => {
    const href = $link.attr('href');
    
    // Check internal links
    if (href.startsWith('/')) {
      cy.request(href).its('status').should('eq', 200);
    }
    
    // Check external links have proper attributes
    if (href.startsWith('http')) {
      cy.wrap($link)
        .should('have.attr', 'target', '_blank')
        .and('have.attr', 'rel', 'noopener noreferrer');
    }
  });
});

/**
 * Simulate Slow Network
 */
Cypress.Commands.add('simulateSlowNetwork', () => {
  cy.intercept('**/*', (req) => {
    req.on('response', (res) => {
      res.setDelay(1000); // 1 second delay
    });
  });
});

/**
 * Check Core Web Vitals
 */
Cypress.Commands.add('checkCoreWebVitals', () => {
  cy.window().then((win) => {
    return new Promise((resolve) => {
      if ('PerformanceObserver' in win) {
        const vitals = {};
        
        const observer = new win.PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            vitals[entry.name] = entry.value;
          }
        });
        
        observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });
        
        setTimeout(() => {
          resolve(vitals);
        }, 5000);
      } else {
        resolve({});
      }
    }).then((vitals) => {
      // LCP should be < 2.5s (2500ms)
      if (vitals['largest-contentful-paint']) {
        expect(vitals['largest-contentful-paint']).to.be.lessThan(2500);
      }
    });
  });
});

// ***********************************************
// Custom Assertions
// ***********************************************

/**
 * Assert No Layout Shift
 */
Cypress.Commands.add('assertNoLayoutShift', () => {
  cy.window().then((win) => {
    let cls = 0;
    
    if ('PerformanceObserver' in win) {
      const observer = new win.PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            cls += entry.value;
          }
        }
      });
      
      observer.observe({ entryTypes: ['layout-shift'] });
      
      cy.wait(3000).then(() => {
        // CLS should be < 0.1
        expect(cls).to.be.lessThan(0.1);
      });
    }
  });
});

