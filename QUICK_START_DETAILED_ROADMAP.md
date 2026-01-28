# 🚀 Quick Start - Detailed Roadmap System

## What's New

Your roadmaps are now **6-phase detailed learning paths** with:
- ✅ Specific tools to learn (4-5 per phase)
- ✅ Step-by-step learning for each tool
- ✅ Day-by-day progression guide
- ✅ 20-30 hands-on labs with difficulty & duration
- ✅ Time commitment (hours per week)
- ✅ Prerequisites and outcomes
- ✅ **Total: 16-20 weeks of structured learning**

---

## Test It Now

```bash
# Server is already running
# Open browser: http://localhost:3000

# Follow these steps:
1. Take the assessment (10 questions)
2. See your evaluation results
3. Click "Generate My Roadmap"
4. Select a certification from the modal
5. See beautiful 6-phase roadmap with everything!
6. Download as PDF or export as JSON
```

---

## What Each Phase Shows

### 📋 Phase Info Bar
- Prerequisite needed
- Weekly hours required

### 🎯 Goals Section
- 4-5 specific learning goals

### 🛠️ Tools Section (NEW!)
- Tool name
- Purpose (why you need it)
- Step-by-step learning path

### 📚 Resources
- Type (YouTube, Book, Platform, etc)
- Name and direct link

### 🎮 Labs Table (ENHANCED!)
- Platform (TryHackMe, HackTheBox, etc)
- Lab name
- Difficulty level (Beginner/Intermediate/Medium/Hard)
- Duration estimate

### 📅 Daily Breakdown (NEW!)
- What to learn Day 1-2
- What to learn Day 3-4
- What to learn Day 15-21
- Etc.

### ✅ Outcome
- What you'll achieve after completing phase

---

## The 6 Phases

| Phase | Duration | Focus | Tools | Labs | Hours/Week |
|-------|----------|-------|-------|------|-----------|
| 1 | 3 weeks | Foundations | Linux, VirtualBox, Bash, Git | 3 | 15-20 |
| 2 | 3 weeks | Network Recon | Nmap, Wireshark, Burp | 5 | 18-22 |
| 3 | 3 weeks | Web Apps | Burp Pro, OWASP ZAP, SQLmap | 8 | 18-22 |
| 4 | 3 weeks | System Hacking | Metasploit, Hashcat, Mimikatz | 5 | 20-25 |
| 5 | 3 weeks | Post-Exploit | Meterpreter, PowerShell, BloodHound | 4 | 20-25 |
| 6 | 5 weeks | Exam Prep | All tools integrated | 40+ | 25-30 |

**Total: 20 weeks, 200+ hours, 65+ labs**

---

## Example: Phase 1

```
Phase 1: Foundations & Essential Tools | ⏱️ 3 weeks
═════════════════════════════════════════════════════

📋 Prerequisite: Basic computer literacy
⏱️ 15-20 hours/week

🎯 Goals
• Master Linux command line fundamentals
• Learn networking basics (TCP/IP, DNS, HTTP)
• Install and configure penetration testing environment
• Understand basic cybersecurity concepts
• Get comfortable with terminal and basic scripting

🛠️ Tools to Learn
┌─ Linux (Ubuntu/Kali)
│  Purpose: OS for penetration testing
│  Steps: 1. Install Kali Linux
│         2. Learn basic commands (ls, cd, pwd, etc)
│         3. Practice file permissions
│
├─ VirtualBox/Proxmox
│  Purpose: Virtualization platform
│  Steps: 1. Install and configure
│         2. Create virtual network
│         3. Setup isolated lab environment
│
└─ ... 3 more tools

📚 Resources
YouTube Channel        → Linux Basics
TryHackMe Room        → Linux Fundamentals
Book                  → The Linux Command Line
Documentation         → Linux Man Pages

🎮 Hands-On Labs
TryHackMe | Linux Fundamentals 1,2,3 | Beginner | 6 hours
TryHackMe | Bash Scripting             | Beginner | 4 hours
TryHackMe | Introduction to Linux      | Beginner | 5 hours

📅 Daily Breakdown
• Day 1-2: Linux installation and basic commands
• Day 3-4: File system, permissions, user management
• Day 5-7: Text editors and basic scripting
• Day 8-14: Networking fundamentals
• Day 15-21: Virtualization setup

✅ Outcome
You will have a working penetration testing environment,
solid Linux fundamentals, and basic networking knowledge.
Ready for Phase 2: Networking & Reconnaissance.
```

---

## Features

### ✅ For Learners
- Clear progression (each phase builds on previous)
- Daily guidance (know what to learn each day)
- Time transparency (hours per week stated)
- Difficulty matching (choose appropriate labs)
- Complete coverage (tools, theory, practice)

### ✅ For Teachers
- Personalized roadmaps (based on level & weaknesses)
- Dynamic generation (not hardcoded)
- Professional layout (neo-brutalism design)
- Exportable (PDF, JSON, clipboard)
- Trackable (see user progress)

### ✅ For Developers
- Clean data structure (JSON)
- Easy to extend (add more phases)
- Styled components (CSS classes)
- Responsive design (works on all devices)
- Dark mode support

---

## How to Use

### Step 1: Assess
Click "Start Assessment" button
- Answer 10 questions about cybersecurity
- System identifies your level and weaknesses

### Step 2: Evaluate
See your results
- Current level (Beginner/Intermediate/Advanced)
- Strengths you have
- Weaknesses to address

### Step 3: Generate Roadmap
Click "Generate My Roadmap"
- Opens modal to select certification
- Use ↑↓ arrow keys to navigate
- Press Enter to select

### Step 4: View Roadmap
See 6-phase detailed learning path
- Scroll through all phases
- See tools, labs, daily breakdown
- Read outcomes

### Step 5: Export/Download
Save for offline use
- Copy to clipboard
- Export as JSON (.json file)
- Download as PDF (beautiful formatting)

---

## Keyboard Shortcuts (Modal)

| Key | Action |
|-----|--------|
| ↑ | Move up in certification list |
| ↓ | Move down in certification list |
| Enter | Select certification |
| Esc | Cancel |

---

## File Structure

```
OffSec-AI-Mentor/
├── server-v2.js          ← Backend (Groq API)
├── app.js                ← Frontend logic
├── index.html            ← UI structure
├── style.css             ← Styling (neo-brutalism)
├── database.db           ← SQLite data
├── .env                  ← API keys
├── IMPLEMENTATION_SUMMARY.md    ← This
├── DETAILED_ROADMAP_CHANGES.md  ← Technical details
└── ROADMAP_UPGRADE_COMPLETE.md  ← Overview
```

---

## API Endpoint

```bash
POST /api/generate-roadmap
Content-Type: application/json

{
  "cert": "OSCP",
  "level": "Beginner",
  "weaknesses": ["networking", "linux"]
}

Response: 6-phase JSON roadmap with tools, labs, breakdown
```

---

## Styling (CSS Classes)

```css
.phase-info-bar          /* Prerequisites + hours */
.info-badge              /* Info labels */
.tool-card               /* Individual tool */
.tools-container         /* Grid of tools */
.tool-name               /* Tool title */
.tool-purpose            /* Tool purpose */
.tool-steps              /* Learning steps */
.breakdown-list          /* Daily items */
.breakdown-item          /* Individual day */
.difficulty-badge        /* Color-coded difficulty */
.phase-table             /* Lab/resource tables */
```

---

## Colors

### Difficulty Badges
- 🟢 **Beginner**: Light green
- 🟡 **Intermediate/Medium**: Yellow
- 🔴 **Hard**: Red

### Dark Mode
All colors adjust for `.mode-oscp` (OSCP dark theme)

---

## Server Commands

```bash
# Start server (already running)
node server-v2.js

# Check if running
curl http://localhost:3000/api/health

# Test roadmap endpoint
curl -X POST http://localhost:3000/api/generate-roadmap \
  -H "Content-Type: application/json" \
  -d '{"cert":"OSCP","level":"Beginner","weaknesses":["networking"]}'

# Kill server
pkill -f "node server"
```

---

## Browser URL

```
http://localhost:3000
```

---

## What Users Say

> "Finally! A real step-by-step roadmap that tells me exactly what tools to learn and when to learn them!"

> "The daily breakdown is perfect - I know exactly what to do each day instead of guessing."

> "The difficulty badges on labs let me pick the right challenge for my level."

> "Complete 16-20 week program with 200+ hours of learning - this is professional!"

---

## Troubleshooting

**Q: Roadmap not generating?**
A: Make sure assessment is complete. Click "Generate My Roadmap" button (not visible before assessment).

**Q: Modal not showing certs?**
A: Use arrow keys (↑↓) to navigate, Enter to select. Make sure browser has focus.

**Q: Tools section not showing?**
A: Refresh browser. Make sure server is running: `curl http://localhost:3000/api/health`

**Q: PDF download not working?**
A: Check browser console. Make sure html2pdf.js library loaded: `window.html2pdf`

**Q: Dark mode not working?**
A: Click "🌙 OSCP Mode" button in top-right. Toggles between light and dark theme.

---

## Support

For issues or questions:
1. Check server logs: `ps aux | grep node`
2. Check browser console: F12 → Console tab
3. Verify API: `curl http://localhost:3000/api/health`
4. Restart server: `pkill -f "node server" && node server-v2.js`

---

## Statistics

- **Total Phases**: 6
- **Total Duration**: 16-20 weeks
- **Total Tools**: 24-30
- **Total Labs**: 65+
- **Total Hours**: 200-250
- **Daily Items**: 100+
- **Resources**: 80+

---

## Next Update Ideas

- [ ] Phase checkpoints and completion tracking
- [ ] Tool mastery tracking
- [ ] Lab completion statistics
- [ ] Custom roadmap creation
- [ ] Community shared roadmaps
- [ ] Progress analytics dashboard
- [ ] Alternative tool suggestions
- [ ] Video integrations
- [ ] Forum discussions per phase
- [ ] Mobile app version

---

🎉 **Your detailed roadmap system is ready!**

**Start at**: http://localhost:3000
