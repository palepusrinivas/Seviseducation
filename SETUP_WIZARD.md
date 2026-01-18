# 🧙 EmailJS Setup Wizard - Interactive Guide

## 🎯 Let's Set This Up Together!

I'll guide you through each step. Just follow along and check off each item as you complete it.

---

## 📍 Step 1: Create Account (5 minutes)

### Action Items:
1. [ ] Go to https://www.emailjs.com/
2. [ ] Click "Sign Up" (top right)
3. [ ] Sign up with Google (easiest) or email
4. [ ] Verify your email address
5. [ ] ✅ You're logged into EmailJS dashboard!

**Status:** ⏳ Waiting for you to complete...

---

## 📍 Step 2: Connect Email Service (3 minutes)

### Action Items:
1. [ ] In dashboard, click **"Email Services"** (left sidebar)
2. [ ] Click **"+ Add New Service"** (green button)
3. [ ] Select **"Gmail"**
4. [ ] Enter:
   - Email: `aparna@sevisedu.com`
   - Password: `Appureddy@2000`
5. [ ] Click **"Create Service"**
6. [ ] **COPY the Service ID** (looks like `service_xxxxx`)
7. [ ] ✅ Service connected!

**Service ID:** `________service_wxdp07a___________________` (write it here)

**Status:** ⏳ Waiting for you to complete...

---

## 📍 Step 3: Create Contact Template (5 minutes)

### Action Items:
1. [ ] Click **"Email Templates"** (left sidebar)
2. [ ] Click **"+ Create New Template"**
3. [ ] Set Template Name: `Contact Form`
4. [ ] Select your service (the one you just created)
5. [ ] **COPY the Template ID** (auto-generated)
6. [ ] Set Subject: `New Contact Form Submission from {{from_name}}`
7. [ ] Paste this content:

```
Hello,

You have received a new contact form submission from the Sevis Global Education website.

Contact Details:
-------------------------
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Country: {{country}}

Message:
-------------------------
{{message}}

-------------------------
Reply to this email to contact: {{reply_to}}
```

8. [ ] Click **"Save"**
9. [ ] ✅ First template created!

**Contact Template ID:** `___________________________` (write it here)

**Status:** ⏳ Waiting for you to complete...

---

## 📍 Step 4: Create Consultation Template (5 minutes)

### Action Items:
1. [ ] Click **"+ Create New Template"** again
2. [ ] Set Template Name: `Free Consultation Request`
3. [ ] Select your service (same one)
4. [ ] **COPY the Template ID** (auto-generated)
5. [ ] Set Subject: `New Free Consultation Request from {{from_name}}`
6. [ ] Paste this content:

```
Hello,

You have received a new free consultation request from the Sevis Global Education website.

Student Information:
-------------------------
Name: {{from_name}}
Email: {{from_email}}
Contact Number: {{contact_number}}

Study Preferences:
-------------------------
Interested Country: {{interested_country}}
Interest of Study: {{interest_of_study}}
College of Graduation: {{college_of_graduation}}
Graduation Date: {{graduation_date}}
Preferred Consultation Time: {{preferred_time}}

Additional Information:
-------------------------
{{message}}

-------------------------
Reply to this email to contact: {{reply_to}}
```

7. [ ] Click **"Save"**
8. [ ] ✅ Second template created!

**Consultation Template ID:** `___________________________` (write it here)

**Status:** ⏳ Waiting for you to complete...

---

## 📍 Step 5: Get Public Key (2 minutes)

### Action Items:
1. [ ] Click your **profile icon** (top right)
2. [ ] Click **"Account"** or **"General"**
3. [ ] Scroll to **"API Keys"** section
4. [ ] **COPY the Public Key** (long string)
5. [ ] ✅ Public Key copied!

**Public Key:** `___________________________` (write it here)

**Status:** ⏳ Waiting for you to complete...

---

## 📍 Step 6: Create .env File (3 minutes)

### Action Items:
1. [ ] Open File Explorer
2. [ ] Go to: `C:\Users\palep\Desktop\Sevis\sevis`
3. [ ] Right-click → New → Text Document
4. [ ] Rename to: `.env` (with the dot!)
5. [ ] Open `.env` in Notepad
6. [ ] Paste this (replace with YOUR values):

```env
REACT_APP_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID_HERE
REACT_APP_EMAILJS_TEMPLATE_ID_CONTACT=YOUR_CONTACT_TEMPLATE_ID_HERE
REACT_APP_EMAILJS_TEMPLATE_ID_CONSULTATION=YOUR_CONSULTATION_TEMPLATE_ID_HERE
REACT_APP_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY_HERE
```

7. [ ] Replace all 4 placeholders with your actual values
8. [ ] Save (Ctrl+S)
9. [ ] ✅ .env file created!

**Status:** ⏳ Waiting for you to complete...

---

## 📍 Step 7: Restart Server (1 minute)

### Action Items:
1. [ ] Go to terminal/command prompt
2. [ ] Stop server (Ctrl+C if running)
3. [ ] Run: `npm start`
4. [ ] ✅ Server restarted with new config!

**Status:** ⏳ Waiting for you to complete...

---

## 📍 Step 8: Test It! (2 minutes)

### Action Items:
1. [ ] Open browser: http://localhost:3000/Contact
2. [ ] Fill out contact form
3. [ ] Submit form
4. [ ] Check `aparna@sevisedu.com` inbox
5. [ ] ✅ Email received? Great!
6. [ ] Go to: http://localhost:3000/FreeConsultation
7. [ ] Fill out consultation form
8. [ ] Submit form
9. [ ] Check `aparna@sevisedu.com` inbox again
10. [ ] ✅ Second email received? Perfect!

**Status:** ⏳ Waiting for you to complete...

---

## 🎉 All Done!

If you received both emails, **congratulations!** Your EmailJS setup is complete! 🎊

---

## 🆘 Stuck on a Step?

1. Check `EMAILJS_DASHBOARD_SETUP.md` for detailed instructions
2. Check browser console (F12) for error messages
3. Verify all IDs in `.env` are correct (no typos, no extra spaces)
4. Make sure server was restarted after creating `.env`

---

## 📞 Need Help Right Now?

Tell me which step you're on and what problem you're facing, and I'll help you through it!

