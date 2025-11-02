# 🚀 Quick Deploy to Firebase - 5 Minutes!

## ⚡ Fast Track Deployment

### **Step 1: Login to Firebase** (30 seconds)
```bash
firebase logout
firebase login
```
✅ Browser will open → Allow permissions

---

### **Step 2: Initialize** (30 seconds)
```bash
firebase init hosting
```

**Select:**
- ✅ Use existing project (or create new)
- ✅ Public directory: `build`
- ✅ Single-page app: `Yes`
- ✅ Overwrite index.html: `No`

---

### **Step 3: Build** (1-2 minutes)
```bash
npm run build
```
✅ Wait for "Build complete!"

---

### **Step 4: Deploy** (1-2 minutes)
```bash
firebase deploy
```
✅ Done! Your site is live!

---

## 🎯 Your Live URLs

After deployment, you'll get:

```
✔ Deploy complete!

Hosting URL: https://sevis-global-education.web.app
```

---

## 🔧 If Login Fails

```bash
# Windows PowerShell - Run as Administrator
firebase logout
firebase login --interactive

# Or try:
firebase login --no-localhost
```

Then visit the URL shown and paste the code.

---

## ✨ That's It!

Your optimized Sevis Global Education website is now:
- ✅ Live on Firebase
- ✅ Global CDN (fast worldwide)
- ✅ Free SSL (HTTPS)
- ✅ 90+ Performance Score
- ✅ Mobile optimized

**Test your live site:**
```bash
firebase open hosting:site
```

---

## 🔄 Update Your Site Later

```bash
# Make changes to your code
# ...

# Build and deploy
npm run build
firebase deploy

# Updates in 30 seconds!
```

---

**Need detailed help?** See `FIREBASE_DEPLOYMENT_GUIDE.md`

**Your website is production-ready!** 🎉

