# 📘 OffSec AI Mentor - Usage Guide

## Quick Start

### Option 1: Automated Setup (Recommended for Linux/Mac)
```bash
./start.sh
```

### Option 2: Manual Setup
```bash
# Create virtual environment
python3 -m venv venv

# Activate virtual environment
source venv/bin/activate  # Linux/Mac
# OR
venv\Scripts\activate     # Windows

# Install dependencies
pip install -r requirements.txt

# Create .env file
cp .env.example .env
# Edit .env and add your OpenAI API key

# Run the application
streamlit run app.py
```

## Getting Your OpenAI API Key

1. Go to https://platform.openai.com/api-keys
2. Sign in or create an account
3. Click "Create new secret key"
4. Copy the key (starts with `sk-`)
5. Paste it in your `.env` file

## Understanding the Features

### 1️⃣ Skill Assessment
**Purpose**: Evaluate your current knowledge level

**How to use:**
1. Click the "Skill Assessment" tab
2. Click "Start Skill Assessment"
3. Answer questions honestly (no judgment!)
4. Review your results: skill level, strengths, and weaknesses

**Tips:**
- Be honest - this helps create a better learning plan
- If you don't know something, say so
- The AI will ask ~10 questions across different topics

### 2️⃣ Learning Roadmap
**Purpose**: Get a personalized learning plan

**How to use:**
1. Complete the Skill Assessment first
2. Go to "Learning Roadmap" tab
3. Click "Generate My Learning Roadmap"
4. Review your customized plan

**What you'll get:**
- Prioritized topics to study
- Recommended tools and platforms
- Timeline and milestones
- OSCP-aligned skills path

### 3️⃣ Enumeration Coach
**Purpose**: Understand scan results and what to enumerate next

**How to use:**
1. Run a scan on your practice box (e.g., Nmap)
2. Copy the output
3. Go to "Enumeration Coach" tab
4. Paste the scan results
5. Add any additional context (optional)
6. Click "Analyze Scan Results"

**Example scan output:**
```
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 8.2p1
80/tcp open  http    Apache httpd 2.4.41
```

**What the AI explains:**
- What each service means
- What these findings tell you about the system
- What to enumerate next (and WHY)
- Methodology behind the decisions

**Important:** The AI will NOT tell you specific exploits or commands - it teaches methodology!

### 4️⃣ Pentest Report Helper
**Purpose**: Write professional penetration test reports

**How to use:**
1. Identify a finding from your practice
2. Fill in:
   - Finding title (e.g., "Weak SSH Credentials")
   - Technical details (what you found)
   - Severity (Critical, High, Medium, Low)
   - Finding type (optional)
3. Click "Generate Report Section"

**What you'll get:**
- Executive summary (for business stakeholders)
- Technical description
- Risk assessment
- Evidence guidance
- Remediation recommendations

**Use case:** Practice documenting TryHackMe or HackTheBox findings professionally

## Learning Modes

### Beginner Mode (Default)
- **Best for:** Complete beginners, first time learning pentesting
- **Style:** Detailed explanations, defines terms, provides examples
- **When to use:** You're new to security or specific topics

### OSCP Mode
- **Best for:** OSCP exam preparation
- **Style:** Hints instead of answers, "Try Harder" approach
- **When to use:** Preparing for OSCP, want to develop problem-solving skills

### Red Team Mode
- **Best for:** Advanced learners
- **Style:** Focuses on methodology, OPSEC, and detection
- **When to use:** Learning professional red team operations

**Change mode:** Use the dropdown in the sidebar

## Example Workflows

### Workflow 1: Complete Beginner
```
1. Complete Skill Assessment
   → Discover you're at "Beginner" level
   
2. Generate Learning Roadmap
   → Get 12-week plan starting with Linux basics
   
3. Follow roadmap recommendations
   → Complete "Linux Fundamentals" on TryHackMe
   
4. Practice enumeration
   → Try first CTF challenge
   → Use Enumeration Coach to understand Nmap results
   
5. Document findings
   → Use Report Helper to practice documentation
```

### Workflow 2: OSCP Preparation
```
1. Complete Skill Assessment (OSCP Mode)
   → Identify weak areas (e.g., Active Directory)
   
2. Generate Learning Roadmap
   → Get AD-focused study plan
   
3. Practice on HackTheBox
   → Run scans on AD machines
   → Use Enumeration Coach for methodology guidance
   
4. Write reports for every box
   → Build professional documentation skills
```

### Workflow 3: Understanding Scan Results
```
1. Run Nmap scan on practice target
   
2. Paste results in Enumeration Coach
   
3. AI explains:
   - What SSH version indicates
   - Why Apache version matters
   - What SMB shares suggest
   - Next enumeration steps
   
4. Apply learnings to next challenge
```

## Best Practices

### ✅ Do:
- Use on authorized targets only (TryHackMe, HackTheBox, your own VMs)
- Take notes while using the tool
- Apply what you learn in practice environments
- Ask follow-up questions for clarification
- Use different learning modes as you progress

### ❌ Don't:
- Use on unauthorized systems
- Expect the AI to give you exploit code (it won't)
- Skip the Skill Assessment (it helps personalize everything)
- Copy-paste AI responses without understanding them
- Use this as a replacement for actual practice

## Troubleshooting

### "API Authentication Error"
**Problem:** Invalid or missing API key
**Solution:** 
1. Check `.env` file exists
2. Verify API key is correct (starts with `sk-`)
3. Make sure there are no extra spaces

### "Slow Responses"
**Problem:** GPT-4 can be slow
**Solution:** 
1. Change `OPENAI_MODEL=gpt-3.5-turbo` in `.env`
2. Restart the application
3. GPT-3.5 is faster and cheaper

### "Module not found"
**Problem:** Dependencies not installed
**Solution:**
```bash
source venv/bin/activate
pip install -r requirements.txt
```

### Application won't start
**Problem:** Various issues
**Solution:**
1. Check Python version: `python3 --version` (need 3.8+)
2. Check if port 8501 is in use
3. Try: `python3 -m streamlit run app.py`

## Tips for Effective Learning

1. **Be Consistent**: Use the tool regularly while practicing
2. **Take Notes**: Document what you learn
3. **Practice**: Apply concepts on TryHackMe/HackTheBox
4. **Ask "Why"**: Always try to understand the reasoning
5. **Progress Gradually**: Follow your roadmap systematically
6. **Document Everything**: Practice report writing for every finding

## Recommended Practice Platforms

### Beginners
- **TryHackMe**: Guided learning paths
  - Start with "Complete Beginner" path
  - Free and paid tiers available

### Intermediate
- **HackTheBox**: Realistic vulnerable machines
  - Start with "Starting Point" machines
  - Great for OSCP prep

### Web Security
- **PortSwigger Academy**: Free web security training
  - Excellent for learning web vulnerabilities
  - Interactive labs

## Integration with Your Learning

### With TryHackMe
1. Start a room/challenge
2. Run enumeration scans
3. Use Enumeration Coach to understand results
4. Complete the challenge
5. Use Report Helper to document findings

### With HackTheBox
1. Choose a box
2. Perform initial scans
3. Use Enumeration Coach for guidance
4. Work through the methodology
5. Document with Report Helper

### With OSCP
1. Take Skill Assessment in OSCP Mode
2. Generate focused roadmap
3. Practice on PWK labs
4. Use for understanding methodology
5. Practice professional reporting

## Privacy & Data

- **Your data**: Conversations are stored in session memory only
- **API calls**: Sent to OpenAI (review their privacy policy)
- **Local storage**: No persistent storage of sensitive data
- **Logs**: Streamlit may keep basic usage logs

## Support

- **Documentation**: Check this file and README.md
- **Issues**: Open an issue on GitHub
- **Community**: Join relevant Discord/forums for pentesting

---

**Remember**: This tool teaches you to think like a pentester. The real learning happens when you practice on authorized targets and apply these methodologies yourself!

Happy learning! 🎓🔒
