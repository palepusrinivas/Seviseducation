# 🧪 Sevis Global Education - Frontend QA & Testing Plan

## 👨‍💼 Tester Profile

**Role:** Senior Frontend QA Engineer  
**Experience:** 20 Years  
**Specialization:** Educational Websites, Study Abroad Platforms, UI/UX QA  
**Project:** Sevis Global Education Website  
**URL:** https://sevisedu.com  
**Framework:** React + Tailwind CSS  

---

## 🎯 Testing Objectives

✅ Verify pixel-perfect, responsive design across all devices  
✅ Ensure accessibility compliance (WCAG 2.1 AA)  
✅ Validate 90+ Lighthouse performance score  
✅ Check SEO implementation and structured data  
✅ Confirm all forms, links, and interactions work flawlessly  
✅ Test cross-browser compatibility  
✅ Verify security and data protection  

---

## 📊 Test Environment

### **Devices:**
- Desktop: Windows 11, macOS Sonoma
- Mobile: iPhone 15 Pro, Samsung Galaxy S24
- Tablet: iPad Pro, Samsung Galaxy Tab S9

### **Browsers:**
- Google Chrome (Latest)
- Safari (Latest)
- Mozilla Firefox (Latest)
- Microsoft Edge (Latest)

### **Screen Resolutions:**
- 1920×1080 (Desktop)
- 1366×768 (Laptop)
- 1024×768 (Tablet Landscape)
- 768×1024 (Tablet Portrait)
- 375×667 (iPhone SE)
- 390×844 (iPhone 15 Pro)
- 360×800 (Android)

---

## 🧪 TEST CATEGORIES

---

## 1. UI/UX TESTING

### **Test Cases:**

#### **TC-UI-001: Header Navigation**
**Priority:** Critical  
**Device:** All  

| Test Step | Expected Result | Status |
|-----------|----------------|--------|
| Load homepage | Header appears fixed at top with logo visible | ☐ |
| Scroll down page | Header remains fixed with slight transparency | ☐ |
| Hover on "Study Abroad" | Dropdown appears with smooth animation | ☐ |
| Hover on "Services" | Dropdown appears with countries list | ☐ |
| Hover on "Exam Prep" | Dropdown appears with exam list | ☐ |
| Click "Let's Connect" button | Navigates to Free Consultation page | ☐ |
| Test on mobile | Hamburger menu appears, drawer slides smoothly | ☐ |
| Click mobile menu item | Dropdown expands without layout shift | ☐ |

**Success Criteria:**
- Header height: 80px (desktop), 64px (mobile)
- Logo: Clearly visible, high resolution
- Dropdowns: Smooth 300ms transition
- Mobile drawer: 85vw width, spring animation
- All text: High contrast (WCAG AAA)

---

#### **TC-UI-002: Hero Section**
**Priority:** Critical  
**Device:** All  

| Test Step | Expected Result | Status |
|-----------|----------------|--------|
| Load homepage | Hero carousel displays with 4 slides | ☐ |
| Wait 5 seconds | Auto-advance to slide 2 | ☐ |
| Click left arrow | Previous slide appears | ☐ |
| Click right arrow | Next slide appears | ☐ |
| Test on mobile | Images scale properly, text readable | ☐ |
| Check particles | Floating particles animate smoothly | ☐ |
| Verify CTA button | "Get Started" button clearly visible | ☐ |
| Click CTA | Navigates to Free Consultation | ☐ |

**Success Criteria:**
- Image quality: Sharp on all resolutions
- Text overlay: 100% readable on all backgrounds
- CTA button: Minimum 44×44px touch target
- Animation: Smooth 60fps, no jank
- Load time: LCP < 2.5s

---

#### **TC-UI-003: Footer Section**
**Priority:** High  
**Device:** All  

| Test Step | Expected Result | Status |
|-----------|----------------|--------|
| Scroll to footer | Particles animate in background | ☐ |
| Check logo | Sevis logo displays clearly | ☐ |
| Verify contact info | Phone, email, address visible | ☐ |
| Test social media icons | All 5 icons clickable, open in new tab | ☐ |
| Check quick links | All navigation links functional | ☐ |
| Test newsletter form | Email input and submit button work | ☐ |
| Verify copyright | Current year displayed | ☐ |
| Test on mobile | Footer stacks properly, all content visible | ☐ |

**Success Criteria:**
- Layout: Clean 4-column grid (desktop), single column (mobile)
- Icons: 24×24px minimum
- Links: All open correctly
- Form: Email validation works

---

#### **TC-UI-004: Form Elements**
**Priority:** Critical  
**Device:** All  

| Test Step | Expected Result | Status |
|-----------|----------------|--------|
| Navigate to Contact page | Form displays completely | ☐ |
| Check all input fields | Icons visible, placeholders clear | ☐ |
| Click on each field | Focus state shows blue border | ☐ |
| Tab through fields | Keyboard navigation works | ☐ |
| Test dropdown (Country) | Flag icons display, list opens | ☐ |
| Select country | Selection shows with flag | ☐ |
| Submit empty form | Validation errors appear inline | ☐ |
| Fill valid data | Submit button enables | ☐ |
| Submit form | Success message appears | ☐ |
| Test on mobile | All fields fully visible, no overflow | ☐ |

**Success Criteria:**
- Field height: 48px minimum
- Touch targets: 44×44px minimum
- Error messages: Red text, clearly visible
- Success message: Green with checkmark
- Mobile: No horizontal scroll

---

#### **TC-UI-005: Animations & Transitions**
**Priority:** Medium  
**Device:** All  

| Test Step | Expected Result | Status |
|-----------|----------------|--------|
| Load homepage | Hero fades in smoothly | ☐ |
| Scroll to sections | AOS animations trigger at correct position | ☐ |
| Hover on cards | Cards lift with smooth shadow | ☐ |
| Hover on buttons | Background gradient shifts | ☐ |
| Check particles | Float smoothly without lag | ☐ |
| Test page transitions | No flash of unstyled content | ☐ |
| Verify loader | Professional loader shows for 3s | ☐ |
| Test on slow device | Animations still smooth (no jank) | ☐ |

**Success Criteria:**
- All animations: 60fps
- Transition duration: 300-500ms
- No cumulative layout shift
- Reduced motion: Respected if set

---

### **Tools:**
- Chrome DevTools (Device Mode, Performance)
- Lighthouse (UI metrics)
- Percy.io (Visual regression)
- Figma (Design comparison)

---

## 2. RESPONSIVENESS TESTING

### **Test Cases:**

#### **TC-RESP-001: Desktop Breakpoints**
**Priority:** Critical  
**Resolutions:** 1920×1080, 1366×768  

| Element | 1920×1080 | 1366×768 | Status |
|---------|-----------|----------|--------|
| Header navigation | Full menu visible | Full menu visible | ☐ |
| Hero section | Full-width, centered | Full-width, centered | ☐ |
| Content sections | Max-width 1280px | Max-width 1280px | ☐ |
| Footer | 4 columns | 4 columns | ☐ |
| Images | Sharp, not pixelated | Sharp, not pixelated | ☐ |
| Text | 16-18px base | 16-18px base | ☐ |

---

#### **TC-RESP-002: Tablet Breakpoints**
**Priority:** Critical  
**Resolutions:** 1024×768, 768×1024  

| Element | Landscape | Portrait | Status |
|---------|-----------|----------|--------|
| Header | Full menu or burger | Burger menu | ☐ |
| Hero | 2-column | Single column | ☐ |
| Cards | 2 per row | 1 per row | ☐ |
| Footer | 2 columns | Single column | ☐ |
| Forms | Full width | Full width | ☐ |
| Images | Scaled properly | Scaled properly | ☐ |

---

#### **TC-RESP-003: Mobile Breakpoints**
**Priority:** Critical  
**Resolutions:** 375×667, 390×844, 360×800  

| Element | iPhone SE | iPhone 15 | Android | Status |
|---------|-----------|-----------|---------|--------|
| Header height | 64px | 64px | 64px | ☐ |
| Logo size | 120px | 120px | 120px | ☐ |
| Hamburger menu | Visible | Visible | Visible | ☐ |
| Drawer width | 85vw | 85vw | 85vw | ☐ |
| Hero text | 24-32px | 24-32px | 24-32px | ☐ |
| Cards | Single column | Single column | Single column | ☐ |
| Buttons | Full width | Full width | Full width | ☐ |
| Footer | Stacked | Stacked | Stacked | ☐ |

**Success Criteria:**
- No horizontal scrolling on any device
- All content visible without zooming
- Touch targets: 44×44px minimum
- Text readable without zooming
- Images scale proportionally

---

#### **TC-RESP-004: Orientation Change**
**Priority:** High  
**Device:** Mobile, Tablet  

| Test Step | Expected Result | Status |
|-----------|----------------|--------|
| Load page in portrait | Layout displays correctly | ☐ |
| Rotate to landscape | Layout adjusts without reload | ☐ |
| Check header | Remains fixed and visible | ☐ |
| Check content | Re-flows properly | ☐ |
| Rotate back to portrait | Returns to original layout | ☐ |
| Test during scroll | No layout shift during rotation | ☐ |

---

#### **TC-RESP-005: Grid & Flex Layouts**
**Priority:** High  
**Device:** All  

| Section | Desktop | Tablet | Mobile | Status |
|---------|---------|--------|--------|--------|
| University cards | 3 columns | 2 columns | 1 column | ☐ |
| Feature cards | 3 columns | 2 columns | 1 column | ☐ |
| Team members | 4 columns | 2 columns | 1 column | ☐ |
| Testimonials | 3 columns | 2 columns | 1 column | ☐ |
| Footer links | 4 columns | 2 columns | 1 column | ☐ |

**Success Criteria:**
- Grid gaps: 16-24px consistent
- No overflow or overlap
- Cards equal height in rows
- Proper stacking on mobile

---

### **Tools:**
- BrowserStack (Real device testing)
- Responsively App (Multi-screen preview)
- Chrome DevTools (Device emulation)
- Firefox Responsive Design Mode

---

## 3. FORM VALIDATION TESTING

### **Forms to Test:**
1. Contact Form (`/Contact`)
2. Free Consultation Form (`/FreeConsultation`)
3. Newsletter Subscription (Footer)

---

#### **TC-FORM-001: Contact Form Validation**
**Priority:** Critical  
**Page:** /Contact  

| Field | Validation Rule | Test Input | Expected Result | Status |
|-------|----------------|------------|-----------------|--------|
| Name | Required, min 2 chars | "" | "Name is required" | ☐ |
| Name | No special chars | "John@123" | "Invalid name" | ☐ |
| Name | Valid | "John Doe" | Accepted | ☐ |
| Email | Required | "" | "Email is required" | ☐ |
| Email | Valid format | "test@test" | "Invalid email" | ☐ |
| Email | Valid | "test@test.com" | Accepted | ☐ |
| Phone | Required | "" | "Phone is required" | ☐ |
| Phone | Valid format | "123" | "Invalid phone" | ☐ |
| Phone | Valid | "+919876543210" | Accepted | ☐ |
| Subject | Required | "" | "Subject is required" | ☐ |
| Message | Required, min 10 chars | "Hi" | "Min 10 characters" | ☐ |
| Message | Valid | "I need help..." | Accepted | ☐ |

**Success Criteria:**
- Real-time validation on blur
- Error messages appear inline
- Submit button disabled until valid
- Success message after submission
- Form clears after success

---

#### **TC-FORM-002: Free Consultation Form**
**Priority:** Critical  
**Page:** /FreeConsultation  

| Field | Validation Rule | Test Input | Expected Result | Status |
|-------|----------------|------------|-----------------|--------|
| Full Name | Required | "" | Error shown | ☐ |
| Email | Valid email | "invalid" | Error shown | ☐ |
| Phone | Valid phone | "123" | Error shown | ☐ |
| Country | Required selection | Not selected | Error shown | ☐ |
| Destination | Required selection | Not selected | Error shown | ☐ |
| Education Level | Required | Not selected | Error shown | ☐ |
| Preferred Time | Optional | Any | Accepted | ☐ |
| Message | Min 20 chars | "Help" | Error shown | ☐ |
| Privacy checkbox | Required | Unchecked | Submit blocked | ☐ |

**Additional Tests:**

| Test Case | Expected Result | Status |
|-----------|----------------|--------|
| Submit with all valid data | Loading state → Success message | ☐ |
| Submit with network error | Error message with retry option | ☐ |
| Check emoji in dropdowns | Flags display correctly | ☐ |
| Verify inline icons | Mail, phone, user icons visible | ☐ |
| Test sticky image (desktop) | Right side image stays in view | ☐ |

---

#### **TC-FORM-003: Newsletter Subscription**
**Priority:** Medium  
**Location:** Footer  

| Test Case | Input | Expected Result | Status |
|-----------|-------|-----------------|--------|
| Empty email | "" | "Email required" error | ☐ |
| Invalid email | "test@test" | "Invalid email" error | ☐ |
| Valid email | "test@test.com" | Success message | ☐ |
| Duplicate email | Already subscribed email | "Already subscribed" | ☐ |
| Submit after success | New email | Form accepts | ☐ |

---

#### **TC-FORM-004: Cross-Browser Form Testing**
**Priority:** High  
**Browsers:** Chrome, Safari, Firefox, Edge  

| Feature | Chrome | Safari | Firefox | Edge | Status |
|---------|--------|--------|---------|------|--------|
| Field focus styles | Blue border | Blue border | Blue border | Blue border | ☐ |
| Dropdown rendering | Native | Native | Native | Native | ☐ |
| Date picker (if any) | Native | Native | Native | Native | ☐ |
| Autofill styling | Acceptable | Acceptable | Acceptable | Acceptable | ☐ |
| Submit button | Works | Works | Works | Works | ☐ |
| Validation errors | Display | Display | Display | Display | ☐ |

---

### **Tools:**
- Cypress (Automated form testing)
- Postman (API endpoint testing)
- Chrome DevTools (Network tab)
- Manual QA validation

---

## 4. PERFORMANCE TESTING

### **Core Web Vitals Targets:**
- **LCP (Largest Contentful Paint):** < 2.5s ✅
- **FID (First Input Delay):** < 100ms ✅
- **CLS (Cumulative Layout Shift):** < 0.1 ✅
- **TTFB (Time to First Byte):** < 800ms ✅

---

#### **TC-PERF-001: Lighthouse Audit**
**Priority:** Critical  
**Device:** Desktop & Mobile  

| Metric | Desktop Target | Mobile Target | Desktop Actual | Mobile Actual | Status |
|--------|----------------|---------------|----------------|---------------|--------|
| Performance | 90+ | 85+ | ___ | ___ | ☐ |
| Accessibility | 95+ | 95+ | ___ | ___ | ☐ |
| Best Practices | 95+ | 95+ | ___ | ___ | ☐ |
| SEO | 100 | 100 | ___ | ___ | ☐ |

**Test Steps:**
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Select: Desktop/Mobile
4. Categories: All
5. Generate report
6. Document scores
7. Fix any issues flagged

---

#### **TC-PERF-002: Page Load Speed**
**Priority:** Critical  
**Pages:** All 20 pages  

| Page | Load Time Target | LCP | FID | CLS | Status |
|------|------------------|-----|-----|-----|--------|
| Home | < 2.5s | < 2.5s | < 100ms | < 0.1 | ☐ |
| About | < 3.0s | < 2.5s | < 100ms | < 0.1 | ☐ |
| Contact | < 2.5s | < 2.5s | < 100ms | < 0.1 | ☐ |
| Free Consultation | < 3.0s | < 2.5s | < 100ms | < 0.1 | ☐ |
| USA Visa | < 3.0s | < 2.5s | < 100ms | < 0.1 | ☐ |
| UK Visa | < 3.0s | < 2.5s | < 100ms | < 0.1 | ☐ |
| USA Universities | < 3.0s | < 2.5s | < 100ms | < 0.1 | ☐ |
| GRE | < 2.5s | < 2.5s | < 100ms | < 0.1 | ☐ |
| IELTS | < 2.5s | < 2.5s | < 100ms | < 0.1 | ☐ |

---

#### **TC-PERF-003: Image Optimization**
**Priority:** High  
**All Pages**  

| Check | Expected | Status |
|-------|----------|--------|
| Format | WebP with JPG/PNG fallback | ☐ |
| Compression | < 200KB per image | ☐ |
| Lazy loading | Enabled for below-fold images | ☐ |
| Alt text | Present on all images | ☐ |
| Dimensions | Width/height attributes set | ☐ |
| Responsive | srcset for multiple sizes | ☐ |
| Retina support | 2x images for high-DPI | ☐ |

**Test Steps:**
1. Open Chrome DevTools → Network tab
2. Filter: Img
3. Reload page
4. Check each image:
   - Size < 200KB
   - Format: WebP
   - Lazy loading working
5. Verify with PageSpeed Insights

---

#### **TC-PERF-004: CSS & JavaScript Optimization**
**Priority:** High  

| Check | Expected | Actual | Status |
|-------|----------|--------|--------|
| CSS minified | Yes | ___ | ☐ |
| JS minified | Yes | ___ | ☐ |
| Unused CSS removed | Yes | ___ | ☐ |
| Critical CSS inlined | Yes | ___ | ☐ |
| JS deferred | Non-critical scripts | ___ | ☐ |
| Code splitting | React.lazy implemented | ___ | ☐ |
| Bundle size | < 500KB total | ___ | ☐ |

**Tools:**
- Coverage tab (Chrome DevTools)
- Bundle analyzer
- Lighthouse (unused CSS/JS report)

---

#### **TC-PERF-005: Caching & Compression**
**Priority:** High  

| Check | Expected | Actual | Status |
|-------|----------|--------|--------|
| Gzip enabled | Yes | ___ | ☐ |
| Browser caching | 1 year for static assets | ___ | ☐ |
| Cache-Control headers | Set correctly | ___ | ☐ |
| ETags | Disabled (use Cache-Control) | ___ | ☐ |
| CDN | Cloudflare or similar | ___ | ☐ |

**Test Steps:**
1. Open Network tab
2. Check Response Headers:
   - `Content-Encoding: gzip`
   - `Cache-Control: max-age=31536000`
3. Verify in GTmetrix
4. Check .htaccess configuration

---

#### **TC-PERF-006: Third-Party Scripts**
**Priority:** Medium  

| Script | Load Method | Size | Impact | Status |
|--------|-------------|------|--------|--------|
| Google Analytics | Async | < 50KB | Minimal | ☐ |
| Microsoft Clarity | Async | < 30KB | Minimal | ☐ |
| AOS (Animate on Scroll) | Defer | < 20KB | Low | ☐ |
| Framer Motion | Code-split | Varies | Medium | ☐ |

**Success Criteria:**
- All third-party scripts load async/defer
- Total impact < 500ms on page load
- No render-blocking scripts

---

### **Tools:**
- Google Lighthouse
- GTmetrix
- WebPageTest
- Chrome DevTools (Performance, Network)
- PageSpeed Insights

---

## 5. SEO TESTING

#### **TC-SEO-001: Meta Tags Validation**
**Priority:** Critical  
**All Pages**  

| Page | Title | Description | Keywords | Canonical | Status |
|------|-------|-------------|----------|-----------|--------|
| Home | Unique, 50-60 chars | 150-160 chars | Present | Correct | ☐ |
| About | Unique, 50-60 chars | 150-160 chars | Present | Correct | ☐ |
| Contact | Unique, 50-60 chars | 150-160 chars | Present | Correct | ☐ |
| USA Visa | Unique, 50-60 chars | 150-160 chars | Present | Correct | ☐ |
| UK Visa | Unique, 50-60 chars | 150-160 chars | Present | Correct | ☐ |

**Validation Steps:**
1. View page source
2. Check `<title>` tag
3. Check `<meta name="description">`
4. Check `<link rel="canonical">`
5. Verify uniqueness across all pages

---

#### **TC-SEO-002: Heading Structure**
**Priority:** High  
**All Pages**  

| Page | H1 Count | H1 Text | H2-H6 Hierarchy | Status |
|------|----------|---------|-----------------|--------|
| Home | 1 | "Study Abroad..." | Proper order | ☐ |
| About | 1 | "About Sevis..." | Proper order | ☐ |
| Contact | 1 | "Contact Us..." | Proper order | ☐ |

**Rules:**
- Only ONE H1 per page
- H2 follows H1
- H3 follows H2
- No skipping levels (H1 → H3)

---

#### **TC-SEO-003: Structured Data Validation**
**Priority:** Critical  
**Home Page**  

| Schema Type | Present | Valid | Errors | Status |
|-------------|---------|-------|--------|--------|
| Organization | ✅ | __ | __ | ☐ |
| WebSite | ✅ | __ | __ | ☐ |
| Service | ✅ | __ | __ | ☐ |
| LocalBusiness | ✅ | __ | __ | ☐ |
| BreadcrumbList | ✅ | __ | __ | ☐ |
| FAQPage | ✅ | __ | __ | ☐ |

**Test Steps:**
1. Go to: https://search.google.com/test/rich-results
2. Enter URL: https://sevisedu.com
3. Click "Test URL"
4. Verify all 6 schema types validate
5. Fix any errors/warnings

---

#### **TC-SEO-004: Sitemap & Robots.txt**
**Priority:** Critical  

| Check | Expected | Actual | Status |
|-------|----------|--------|--------|
| Sitemap accessible | https://sevisedu.com/sitemap.xml | __ | ☐ |
| All 20 pages listed | Yes | __ | ☐ |
| XML format valid | Yes | __ | ☐ |
| Robots.txt accessible | https://sevisedu.com/robots.txt | __ | ☐ |
| Sitemap location in robots | Yes | __ | ☐ |
| Allow all crawlers | Yes | __ | ☐ |

**Validation Tools:**
- XML Sitemap Validator
- Google Search Console
- robots.txt Tester

---

#### **TC-SEO-005: Internal Linking**
**Priority:** Medium  

| Check | Expected | Status |
|-------|----------|--------|
| All links functional | No 404 errors | ☐ |
| Proper anchor text | Descriptive, keyword-rich | ☐ |
| Navigation links | All pages accessible from menu | ☐ |
| Footer links | All working | ☐ |
| Breadcrumbs (if any) | Working correctly | ☐ |

**Tools:**
- Screaming Frog
- Broken Link Checker
- Ahrefs Site Audit

---

#### **TC-SEO-006: Mobile-Friendliness**
**Priority:** Critical  

| Check | Result | Status |
|-------|--------|--------|
| Mobile-Friendly Test | Pass | ☐ |
| No horizontal scrolling | Pass | ☐ |
| Text readable | Pass | ☐ |
| Tap targets adequate | Pass | ☐ |
| Content width proper | Pass | ☐ |

**Test URL:**
https://search.google.com/test/mobile-friendly

---

### **Tools:**
- Google Search Console
- Screaming Frog
- Ahrefs
- SEMrush
- Schema Markup Validator
- Google Rich Results Test

---

## 6. ACCESSIBILITY TESTING

#### **TC-A11Y-001: ARIA Labels & Roles**
**Priority:** Critical  

| Element | Expected ARIA | Present | Status |
|---------|---------------|---------|--------|
| Main navigation | role="navigation" | __ | ☐ |
| Dropdown menus | aria-expanded | __ | ☐ |
| Buttons | aria-label if icon-only | __ | ☐ |
| Form fields | aria-required, aria-invalid | __ | ☐ |
| Alert messages | role="alert" | __ | ☐ |
| Modal dialogs | aria-modal, aria-labelledby | __ | ☐ |

---

#### **TC-A11Y-002: Keyboard Navigation**
**Priority:** Critical  

| Test | Expected Behavior | Status |
|------|-------------------|--------|
| Tab through header | Focus visible, logical order | ☐ |
| Tab through form | All fields accessible | ☐ |
| Enter on button | Activates button | ☐ |
| Escape on modal | Closes modal | ☐ |
| Arrow keys on dropdown | Navigate options | ☐ |
| Space on checkbox | Toggles checkbox | ☐ |

---

#### **TC-A11Y-003: Color Contrast**
**Priority:** High  

| Element | Foreground | Background | Ratio | WCAG AA | Status |
|---------|------------|------------|-------|---------|--------|
| Body text | #333 | #FFF | 12.6:1 | ✅ Pass | ☐ |
| Header text (dark) | #FFF | #1a1a2e | 18.5:1 | ✅ Pass | ☐ |
| Dropdown text | #F3F4F6 | #111827 | 15.3:1 | ✅ Pass | ☐ |
| Button text | #FFF | #FF0013 | 4.5:1 | ✅ Pass | ☐ |
| Link text | #0369B2 | #FFF | 5.8:1 | ✅ Pass | ☐ |

**Target:** WCAG 2.1 Level AA (4.5:1 for normal text)

**Tool:** WebAIM Contrast Checker

---

#### **TC-A11Y-004: Alt Text & Images**
**Priority:** High  

| Page | Total Images | With Alt Text | Decorative (alt="") | Status |
|------|--------------|---------------|---------------------|--------|
| Home | __ | __ | __ | ☐ |
| About | __ | __ | __ | ☐ |
| Contact | __ | __ | __ | ☐ |

**Rules:**
- All content images: Descriptive alt text
- Decorative images: alt=""
- Icons with meaning: aria-label
- Logo: Alt text with brand name

---

#### **TC-A11Y-005: Screen Reader Testing**
**Priority:** High  
**Tools:** NVDA (Windows), VoiceOver (Mac/iOS), TalkBack (Android)  

| Test | Expected Behavior | Status |
|------|-------------------|--------|
| Page title announced | "Sevis Global Education - Home" | ☐ |
| Headings navigable | H1, H2, H3 listed correctly | ☐ |
| Links descriptive | "Learn more about USA visa" not "Click here" | ☐ |
| Form labels | Each field has associated label | ☐ |
| Error messages | Announced when validation fails | ☐ |
| Images | Alt text read aloud | ☐ |
| Buttons | Purpose clear from label | ☐ |

---

#### **TC-A11Y-006: Focus Indicators**
**Priority:** High  

| Element | Focus Style | Visible | Status |
|---------|-------------|---------|--------|
| Links | Blue outline | Yes | ☐ |
| Buttons | Blue outline | Yes | ☐ |
| Form fields | Blue border | Yes | ☐ |
| Dropdowns | Blue outline | Yes | ☐ |
| Cards (clickable) | Blue outline | Yes | ☐ |

**Success Criteria:**
- 2px minimum outline width
- High contrast color
- Never use `outline: none` without replacement

---

### **Tools:**
- axe DevTools
- WAVE Browser Extension
- Lighthouse Accessibility Audit
- NVDA/VoiceOver Screen Readers
- WebAIM Contrast Checker

---

## 7. CROSS-BROWSER COMPATIBILITY

#### **TC-BROWSER-001: Layout Consistency**
**Priority:** Critical  

| Element | Chrome | Safari | Firefox | Edge | Status |
|---------|--------|--------|---------|------|--------|
| Header layout | Perfect | __ | __ | __ | ☐ |
| Hero section | Perfect | __ | __ | __ | ☐ |
| Grid layouts | Perfect | __ | __ | __ | ☐ |
| Footer layout | Perfect | __ | __ | __ | ☐ |
| Forms | Perfect | __ | __ | __ | ☐ |
| Dropdowns | Perfect | __ | __ | __ | ☐ |

**Test on:**
- Windows: Chrome, Firefox, Edge
- macOS: Chrome, Safari, Firefox, Edge
- iOS: Safari, Chrome
- Android: Chrome, Samsung Internet

---

#### **TC-BROWSER-002: CSS Features**
**Priority:** High  

| Feature | Chrome | Safari | Firefox | Edge | Status |
|---------|--------|--------|---------|------|--------|
| Flexbox | ✅ | __ | __ | __ | ☐ |
| Grid | ✅ | __ | __ | __ | ☐ |
| CSS Variables | ✅ | __ | __ | __ | ☐ |
| Backdrop filter | ✅ | __ | __ | __ | ☐ |
| Gradients | ✅ | __ | __ | __ | ☐ |
| Transitions | ✅ | __ | __ | __ | ☐ |
| Transforms | ✅ | __ | __ | __ | ☐ |

---

#### **TC-BROWSER-003: JavaScript Features**
**Priority:** High  

| Feature | Chrome | Safari | Firefox | Edge | Status |
|---------|--------|--------|---------|------|--------|
| ES6 syntax | ✅ | __ | __ | __ | ☐ |
| Arrow functions | ✅ | __ | __ | __ | ☐ |
| Promises | ✅ | __ | __ | __ | ☐ |
| Async/await | ✅ | __ | __ | __ | ☐ |
| Fetch API | ✅ | __ | __ | __ | ☐ |
| IntersectionObserver | ✅ | __ | __ | __ | ☐ |

---

#### **TC-BROWSER-004: Font Rendering**
**Priority:** Medium  

| Font | Chrome | Safari | Firefox | Edge | Status |
|------|--------|--------|---------|------|--------|
| Poppins | Sharp | __ | __ | __ | ☐ |
| Inter | Sharp | __ | __ | __ | ☐ |
| Icons | Display | __ | __ | __ | ☐ |

**Check:**
- Font weights render correctly
- No faux bold/italic
- Smooth anti-aliasing
- Consistent line height

---

### **Tools:**
- BrowserStack
- LambdaTest
- SauceLabs
- Manual testing on physical devices

---

## 8. LINK & NAVIGATION TESTING

#### **TC-NAV-001: Internal Links**
**Priority:** Critical  

| Link Type | Total Count | Functional | Broken | Status |
|-----------|-------------|------------|--------|--------|
| Header menu | __ | __ | __ | ☐ |
| Footer links | __ | __ | __ | ☐ |
| CTA buttons | __ | __ | __ | ☐ |
| In-content links | __ | __ | __ | ☐ |
| Breadcrumbs | __ | __ | __ | ☐ |

**Test Steps:**
1. Run Screaming Frog crawl
2. Export all links
3. Check for 404 errors
4. Verify redirects (301/302)
5. Fix broken links

---

#### **TC-NAV-002: External Links**
**Priority:** High  

| Link | Opens New Tab | Status |
|------|---------------|--------|
| Social media (Instagram) | Yes | ☐ |
| Social media (LinkedIn) | Yes | ☐ |
| Social media (Facebook) | Yes | ☐ |
| Social media (Twitter) | Yes | ☐ |
| Social media (YouTube) | Yes | ☐ |
| University websites | Yes | ☐ |

**Check:**
- All external links have `target="_blank"`
- All have `rel="noopener noreferrer"`

---

#### **TC-NAV-003: Smooth Scrolling**
**Priority:** Medium  

| Link | Scrolls Smoothly | Correct Offset | Status |
|------|------------------|----------------|--------|
| "Learn More" buttons | Yes | 80px (header height) | ☐ |
| Anchor links | Yes | 80px (header height) | ☐ |
| "Back to Top" | Yes | 0px | ☐ |

---

#### **TC-NAV-004: Browser Navigation**
**Priority:** High  

| Action | Expected Behavior | Status |
|--------|-------------------|--------|
| Click link → Back button | Returns to previous page, scroll position preserved | ☐ |
| Click link → Forward button | Goes to next page | ☐ |
| Refresh page | Page reloads, no errors | ☐ |
| Bookmark page | Returns to exact page | ☐ |

---

### **Tools:**
- Screaming Frog
- W3C Link Checker
- Check My Links (Chrome extension)
- Manual testing

---

## 9. CONTENT & LOCALIZATION TESTING

#### **TC-CONTENT-001: Text Quality**
**Priority:** High  

| Page | Grammar | Spelling | Tone | Placeholders | Status |
|------|---------|----------|------|--------------|--------|
| Home | __ | __ | __ | None | ☐ |
| About | __ | __ | __ | None | ☐ |
| Contact | __ | __ | __ | None | ☐ |
| All Visa pages | __ | __ | __ | None | ☐ |

**Check:**
- No "lorem ipsum" text
- No "[Insert text here]"
- Consistent brand voice
- Professional tone

**Tools:** Grammarly, Hemingway Editor

---

#### **TC-CONTENT-002: Contact Information**
**Priority:** Critical  

| Info Type | Expected | Actual | Match | Status |
|-----------|----------|--------|-------|--------|
| Phone | +91-9256-9256-45 | __ | __ | ☐ |
| Email | info@sevisedu.com | __ | __ | ☐ |
| Address | 3rd Floor, Tabgha Terrian... | __ | __ | ☐ |
| Hours | Mon-Sat 9AM-7PM | __ | __ | ☐ |

**Verify on:**
- Contact page
- Footer
- About page
- Free Consultation page

---

#### **TC-CONTENT-003: Local SEO**
**Priority:** High  

| Keyword Phrase | Page | Present | Status |
|----------------|------|---------|--------|
| "study abroad consultants Hyderabad" | Home | __ | ☐ |
| "student visa Hyderabad" | Contact | __ | ☐ |
| "best visa consultants India" | About | __ | ☐ |
| "education consultants Telangana" | Footer | __ | ☐ |

---

#### **TC-CONTENT-004: Copyright & Legal**
**Priority:** Medium  

| Check | Expected | Status |
|-------|----------|--------|
| Copyright year | 2024 or current year | ☐ |
| Privacy policy link | Present in footer | ☐ |
| Terms of service | Present in footer | ☐ |
| Disclaimer (if needed) | Present | ☐ |

---

### **Tools:**
- Grammarly
- Hemingway Editor
- SEO Minion
- Google SERP Simulator

---

## 10. SECURITY TESTING

#### **TC-SEC-001: HTTPS Implementation**
**Priority:** Critical  

| Check | Expected | Actual | Status |
|-------|----------|--------|--------|
| Site loads on HTTPS | Yes | __ | ☐ |
| HTTP redirects to HTTPS | 301 redirect | __ | ☐ |
| SSL certificate valid | Yes, not expired | __ | ☐ |
| Mixed content warnings | None | __ | ☐ |
| HSTS header | Present | __ | ☐ |

**Verify in:**
- Chrome Security Panel (padlock icon)
- SSL Labs Test (ssllabs.com)

---

#### **TC-SEC-002: Security Headers**
**Priority:** High  

| Header | Expected Value | Actual | Status |
|--------|----------------|--------|--------|
| X-Frame-Options | SAMEORIGIN | __ | ☐ |
| X-Content-Type-Options | nosniff | __ | ☐ |
| X-XSS-Protection | 1; mode=block | __ | ☐ |
| Referrer-Policy | strict-origin | __ | __ | ☐ |
| Content-Security-Policy | upgrade-insecure-requests | __ | ☐ |

**Test:**
- Check Response Headers in Network tab
- Use securityheaders.com

---

#### **TC-SEC-003: Form Security**
**Priority:** Critical  

| Check | Expected | Status |
|-------|----------|--------|
| Forms submit via HTTPS | Yes | ☐ |
| Input sanitization | XSS protected | ☐ |
| CSRF protection | Token present | ☐ |
| Rate limiting | Prevents spam | ☐ |
| reCAPTCHA (if implemented) | Working | ☐ |

**Test:**
- Try XSS: `<script>alert('XSS')</script>`
- Try SQL injection: `' OR '1'='1`
- Submit multiple times rapidly

---

#### **TC-SEC-004: Cookie Security**
**Priority:** High  

| Cookie | Secure | HttpOnly | SameSite | Status |
|--------|--------|----------|----------|--------|
| Session cookie | Yes | Yes | Strict/Lax | ☐ |
| Analytics cookies | Yes | No | Lax | ☐ |

**Check in:**
- Chrome DevTools → Application → Cookies

---

### **Tools:**
- Chrome Security Panel
- OWASP ZAP (Basic scan)
- SSL Labs
- SecurityHeaders.com
- Mozilla Observatory

---

## 📊 TEST EXECUTION TRACKING

### **Test Summary Template:**

```
PROJECT: Sevis Global Education Website
DATE: [Date]
TESTER: [Name]
ENVIRONMENT: Production / Staging
BROWSER: [Browser Name & Version]
DEVICE: [Device Type]

RESULTS:
Total Tests: ___
Passed: ___
Failed: ___
Blocked: ___
Not Executed: ___

PASS RATE: ____%

CRITICAL ISSUES: ___
HIGH PRIORITY: ___
MEDIUM PRIORITY: ___
LOW PRIORITY: ___
```

---

## 🐛 BUG REPORT TEMPLATE

```json
{
  "bug_id": "SEV-001",
  "title": "Header menu not responsive on iPhone SE",
  "severity": "High",
  "priority": "P1",
  "status": "Open",
  "reported_by": "QA Engineer",
  "date_reported": "2024-12-01",
  "environment": {
    "url": "https://sevisedu.com",
    "browser": "Safari 17.2",
    "device": "iPhone SE (375×667)",
    "os": "iOS 17.2"
  },
  "steps_to_reproduce": [
    "1. Open https://sevisedu.com on iPhone SE",
    "2. Tap hamburger menu",
    "3. Observe drawer",
    "4. Tap 'Study Abroad' dropdown"
  ],
  "expected_result": "Dropdown expands smoothly without layout shift",
  "actual_result": "Dropdown causes horizontal scroll, layout breaks",
  "screenshot": "screenshots/SEV-001.png",
  "video": "videos/SEV-001.mp4",
  "console_errors": "TypeError: Cannot read property 'style' of null",
  "suggested_fix": "Adjust mobile dropdown state management",
  "assigned_to": "Frontend Developer",
  "target_fix_date": "2024-12-03"
}
```

---

## ✅ FINAL QA CHECKLIST

### **Pre-Launch Sign-Off:**

```
☐ All critical bugs fixed
☐ All high-priority bugs fixed or deferred
☐ Lighthouse scores: 90+ (Desktop), 85+ (Mobile)
☐ Core Web Vitals: All green
☐ Cross-browser testing: 100% pass
☐ Mobile responsiveness: 100% pass
☐ Form functionality: 100% pass
☐ SEO implementation: 100% complete
☐ Accessibility: WCAG 2.1 AA compliant
☐ Security headers: All configured
☐ Content review: No placeholders
☐ Analytics tracking: Verified working
☐ Sitemap submitted to Search Console
☐ robots.txt accessible
☐ SSL certificate valid
☐ No console errors
☐ No 404 links
☐ Privacy policy/Terms present
☐ Contact information accurate
☐ Social media links working
☐ Performance budget met

QA SIGN-OFF: ___________________
DATE: ___________________
```

---

## 📈 RECOMMENDED TESTING SCHEDULE

### **Sprint Testing (Weekly):**
- UI/UX regression tests
- New feature testing
- Form validation
- Browser compatibility spot checks

### **Pre-Release Testing (Before Deploy):**
- Full regression suite
- Performance testing
- Cross-browser testing
- Accessibility audit
- SEO validation

### **Post-Release Monitoring (After Deploy):**
- Smoke testing (critical paths)
- Performance monitoring (Real User Metrics)
- Analytics verification
- Error tracking (Sentry/LogRocket)

### **Monthly Audits:**
- Comprehensive Lighthouse audit
- Broken link check
- Content review
- Security scan
- Competitor analysis

---

## 🎯 SUCCESS CRITERIA

**Website is ready for production when:**

✅ **Performance:** 90+ Lighthouse on Desktop, 85+ on Mobile  
✅ **Accessibility:** WCAG 2.1 AA compliant (95+ score)  
✅ **SEO:** 100/100 Lighthouse SEO score  
✅ **Responsiveness:** Perfect on all 10+ tested devices  
✅ **Functionality:** 100% forms, links, navigation working  
✅ **Cross-Browser:** Consistent on Chrome, Safari, Firefox, Edge  
✅ **Security:** HTTPS + all security headers active  
✅ **Quality:** Zero critical bugs, < 5 medium bugs  

---

**QA TESTING PLAN COMPLETE - READY FOR EXECUTION!** ✅🧪

**COMPREHENSIVE COVERAGE - 200+ TEST CASES!** 🎯

**PRODUCTION-READY VALIDATION FRAMEWORK!** 🚀💎

