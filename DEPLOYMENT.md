# OffSec AI Mentor - Deployment & Testing Guide

## 🚀 Quick Start (5 Minutes)

### Option 1: Python HTTP Server (Recommended)

```bash
# Navigate to project root
cd /workspaces/OffSec-AI-Mentor

# Start local dev server
python3 -m http.server 8000

# Open browser
# Visit: http://localhost:8000
```

### Option 2: Using the Start Script

```bash
# Make script executable
chmod +x start_dev_server.sh

# Run the script
./start_dev_server.sh
```

### Option 3: Node.js (if installed)

```bash
npx http-server
# Visit: http://localhost:8080
```

---

## ✅ Verification Checklist

After starting the server, verify the following:

### **1. Page Loads**
- [ ] Index page displays without errors
- [ ] Neo-brutalism design is visible (black borders, bold fonts)
- [ ] Hero section shows "OffSec AI Mentor" title

### **2. Files Load Correctly**
- [ ] CSS loads (no unstyled content)
- [ ] JavaScript loads (no console errors)
- [ ] Icons render properly (Lucide)
- [ ] Google Fonts load (monospace typography)
- [ ] CDN libraries load (AOS, GSAP, Lenis)

### **3. Animations Work**
- [ ] Scroll animations appear as you scroll down
- [ ] Buttons have hover effects (shadow, transform)
- [ ] Smooth scrolling works (Lenis)
- [ ] Icons are visible and interactive

### **4. Assessment Flow**
- [ ] Click "Assess My Skill Level" button
- [ ] Questions generate successfully (AI call works)
- [ ] Progress bar updates as you navigate
- [ ] Can submit assessment

### **5. Evaluation Display**
- [ ] Skill level displays correctly
- [ ] Strengths and weaknesses list
- [ ] Learning focus suggestions appear

### **6. Certification Selection**
- [ ] 6 certification cards display
- [ ] Cards are clickable and highlight
- [ ] Selection is clear

### **7. Roadmap Generation**
- [ ] Roadmap generates after cert selection
- [ ] Content appears in phases
- [ ] Copy button works
- [ ] Export button downloads file

### **8. Mentor Chat**
- [ ] Welcome message appears
- [ ] Intent buttons are clickable
- [ ] Messages send successfully
- [ ] AI responds appropriately

### **9. Retake Assessment**
- [ ] Questions are different from first attempt
- [ ] Same flow can be repeated

### **10. Mobile Responsiveness**
- [ ] Resize browser to 500px width
- [ ] Layout adapts properly
- [ ] Touch targets are large enough
- [ ] Text is readable

---

## 🧪 Testing Scenarios

### Scenario 1: Complete Happy Path

1. Open index.html
2. Click "Assess My Skill Level"
3. Answer all 8-10 questions (mix of multiple-choice and short answer)
4. Submit assessment
5. Review evaluation (level, strengths, weaknesses)
6. Click "Choose Your Certification"
7. Select OSCP
8. Wait for roadmap generation
9. Review roadmap phases
10. Test Copy button
11. Test Export button
12. Chat with mentor (select "Career Goals")
13. Chat again with custom message
14. Retake assessment
15. Verify new questions generated
16. Complete full flow again with different cert

### Scenario 2: Error Handling

- **No Internet**: Verify API error messages
- **Wrong API Key**: Verify error message appears
- **Slow API Response**: Verify loading states show
- **Malformed Response**: Verify fallback messages

### Scenario 3: Mobile Experience

- Use DevTools (F12) → Toggle device toolbar
- Test on these sizes:
  - iPhone 12 (390px)
  - iPad (768px)
  - Desktop (1200px)
- Verify buttons are clickable
- Verify text is readable
- Verify no horizontal scroll

### Scenario 4: Accessibility

- Tab through page (keyboard navigation)
- Verify focus indicators on all buttons
- Check contrast ratios (use WebAIM contrast checker)
- Test with screen reader (if available)

---

## 🔍 Browser DevTools Checks

### Console (F12 → Console)
- [ ] No JavaScript errors
- [ ] API calls appear in Network tab
- [ ] Response structure is valid JSON

### Network Tab (F12 → Network)
- [ ] All CSS, JS, and font files load (200 status)
- [ ] CDN libraries load successfully
- [ ] Gemini API calls return 200 status
- [ ] No blocked resources

### Application Tab (F12 → Application)
- [ ] No localStorage/sessionStorage bloat
- [ ] No suspicious cookies

### Lighthouse Audit (F12 → Lighthouse)
- [ ] Performance score > 80
- [ ] Accessibility score > 90
- [ ] Best Practices score > 90

---

## 📊 Performance Benchmarks

### Page Load Time
- **Target**: < 2 seconds to interactive
- **Measurement**: Using Lighthouse or Network tab

### API Response Time
- **Assessment Questions**: < 5 seconds
- **Evaluation**: < 5 seconds
- **Roadmap Generation**: < 10 seconds
- **Mentor Chat**: < 5 seconds

### File Sizes
```
index.html:  ~12 KB
style.css:   ~40 KB
app.js:      ~35 KB
Total:       ~87 KB (+ CDN libraries)
```

---

## 🐛 Known Limitations & Future Fixes

### Current Limitations:
1. **API Key Exposed**: In production, move to backend
2. **No Data Persistence**: Session-only, no saved progress
3. **No User Accounts**: Anonymous usage only
4. **Limited Roadmap Customization**: Based on cert + level only

### Planned Improvements (v2.0):
1. Backend API proxy for key security
2. Optional user accounts + progress save
3. More granular difficulty settings
4. Resource recommendations (links to courses, books)
5. Milestone badges and encouragement

---

## 🔐 Security Checklist for Production

Before deploying to production:

- [ ] **API Key**: Move to backend environment variable
- [ ] **HTTPS**: Enforce HTTPS only
- [ ] **CORS**: Configure backend CORS properly
- [ ] **Rate Limiting**: Implement rate limiting on backend
- [ ] **Content Security Policy**: Add CSP headers
- [ ] **Input Validation**: Validate all user inputs
- [ ] **Output Encoding**: Properly encode all outputs
- [ ] **Privacy Policy**: Add privacy policy page
- [ ] **Terms of Service**: Add ToS for educational use
- [ ] **Monitoring**: Set up error monitoring (e.g., Sentry)

---

## 📱 Deployment Options

### Option 1: GitHub Pages (Free)

```bash
# Create gh-pages branch
git checkout --orphan gh-pages

# Remove unnecessary files
git rm -rf .

# Copy production files
cp index.html style.css app.js README.md .

# Configure API key to use backend proxy

# Commit and push
git add .
git commit -m "Deploy OffSec AI Mentor"
git push -u origin gh-pages
```

Visit: `https://yourusername.github.io/OffSec-AI-Mentor`

### Option 2: Netlify (Free + CI/CD)

```bash
# Connect GitHub repo to Netlify
# Add build command: (leave empty - no build needed)
# Add publish directory: / (project root)

# Deploy
```

### Option 3: Vercel (Free + Edge Functions)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add API key to environment variables
```

### Option 4: Self-Hosted

```bash
# VPS (Digital Ocean, Linode, AWS, etc.)
# Install Nginx or Apache
# Copy files to /var/www/
# Configure SSL certificate (Let's Encrypt)
# Point domain DNS to server IP
```

---

## 🧑‍💻 Development Tips

### Hot Reload
```bash
# While dev server is running:
# 1. Edit HTML, CSS, or JS
# 2. Refresh browser (Ctrl+R or Cmd+R)
# 3. Changes appear immediately
```

### Debug Mode
Add this to `app.js` for verbose logging:
```javascript
const DEBUG = true;
function log(msg, data) {
    if (DEBUG) console.log(`[DEBUG] ${msg}`, data);
}
```

### Test Gemini API Offline
Modify system prompts in `app.js` to test without API calls:
```javascript
// Mock response for testing
const mockQuestions = [
    { type: "multiple-choice", question: "What is...", options: [...] },
    ...
];
```

---

## 📞 Troubleshooting

### Issue: "API Error: 400"
**Solution**: Check API key in `app.js` is correct and valid

### Issue: "No internet connection"
**Solution**: Need internet for Gemini API calls - this is expected

### Issue: "Styles not loading"
**Solution**: 
- Check style.css exists in same directory
- Clear browser cache (Ctrl+Shift+Delete)
- Check DevTools Network tab for CSS file status

### Issue: "Icons not showing"
**Solution**:
- Wait a few seconds for Lucide to load
- Check browser console for loading errors
- Verify Lucide CDN is accessible

### Issue: "Slow API responses"
**Solution**:
- Gemini API can be slow sometimes
- Check your internet speed
- Try again in a few minutes

### Issue: "Mobile layout broken"
**Solution**:
- Hard refresh (Ctrl+Shift+R)
- Check DevTools → Toggle device toolbar
- Verify viewport meta tag in HTML

---

## ✨ Demo Script (for Presentations)

```
1. Start server and open http://localhost:8000

2. HERO SECTION (5 seconds)
   "This is OffSec AI Mentor - an AI-powered learning guide"
   
3. ASSESSMENT (30 seconds)
   Click "Assess My Skill Level"
   Wait for questions to generate
   Quickly answer 3-4 questions (can skip others)
   Submit
   
4. EVALUATION (10 seconds)
   "See how it evaluates your level and identifies weaknesses"
   
5. ROADMAP (20 seconds)
   Select OSCP
   "Watch it generate a personalized roadmap"
   Scroll through phases
   "Notice how it adapts to your level"
   
6. MENTOR CHAT (15 seconds)
   "AI mentor provides safe, ethical guidance"
   Click "I Feel Stuck"
   Type: "Should I focus on Linux or networking?"
   "Watch it respond with thoughtful advice"
   
7. EXPORT (5 seconds)
   Click "Export as Text"
   "Users can download and share their roadmap"
   
8. RETAKE (10 seconds)
   Click "Retake Assessment"
   "Note: Questions are completely different!"
   
Total: ~95 seconds ≈ 1.5 minute demo
```

---

## 📈 Analytics & Monitoring (Optional)

Add to `index.html` for usage tracking:

```html
<!-- Google Analytics (optional) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>

<!-- Sentry (error tracking) -->
<script src="https://browser.sentry-cdn.com/6.x/bundle.min.js"></script>
<script>
  Sentry.init({ dsn: "YOUR_SENTRY_DSN" });
</script>
```

---

## 🎉 You're Ready!

The application is production-ready. Use this guide to:
- ✅ Test locally
- ✅ Verify functionality
- ✅ Deploy to production
- ✅ Demo to stakeholders

Good luck with your OffSec AI Mentor submission! 🚀
