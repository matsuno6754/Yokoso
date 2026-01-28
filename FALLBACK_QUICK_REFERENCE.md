# Quick Reference: Fallback Responses & Error Handling

## 🎯 At a Glance

The application now gracefully handles API failures with intelligent fallback responses.

## 📋 Endpoints with Fallbacks

### 1. Generate Questions
**Endpoint**: `POST /api/generate-questions`
- **Fallback Trigger**: Groq API failure
- **Fallback Content**: 5 quality questions on networking, security, Linux, web security
- **User Experience**: Questions appear immediately (no waiting for API)

### 2. Evaluate Assessment
**Endpoint**: `POST /api/evaluate-assessment`
- **Fallback Trigger**: Groq API failure
- **Fallback Logic**: 
  - Counts correct answers
  - Calculates score: `(correct / total) * 100`
  - Assigns level based on score
  - Generates personalized feedback
- **User Experience**: Instant evaluation with insightful feedback

### 3. Generate Roadmap
**Endpoint**: `POST /api/generate-roadmap`
- **Fallback Trigger**: Groq API failure
- **Fallback Content**: 
  - 3-phase 16-week learning plan
  - Phase 1: Foundation (Weeks 1-4)
  - Phase 2: Skills (Weeks 5-10)  
  - Phase 3: Readiness (Weeks 11-16)
- **User Experience**: Complete roadmap with structure and guidance

### 4. Mentor Chat
**Endpoint**: `POST /api/mentor-chat`
- **Fallback Trigger**: Groq API failure
- **Fallback Logic**: 
  - Analyzes message for keywords
  - Returns topic-specific advice
  - Topics: Linux, Networking, Web Security, Exploitation, Learning, Certs, Tools
  - Falls back to supportive general response
- **User Experience**: Immediate mentoring response

## 🔄 Request/Response Flow

```
User Request
    ↓
Try Groq API
    ├── ✅ Success → API Response → Return
    └── ❌ Failure
         ├── Generate Fallback → Return
         └── Try Database Save
              ├── ✅ Success → Log completion
              └── ❌ Failure → Log warning (continue)
```

## 🛠️ How to Test Fallbacks

### Simulate API Failure (Manual)
1. Comment out Groq API key in `.env`
2. Make a request to any endpoint
3. Fallback response should be returned
4. Check server logs for "Using fallback..." message

### Monitor Fallback Usage
```bash
# Watch for fallback activation in logs
tail -f /tmp/app.log | grep -i "fallback\|using fallback"
```

### Check Error Logging
```bash
# View all errors with context
tail -f /tmp/app.log | grep "❌"
```

## 📊 Fallback Response Examples

### Questions Fallback
```json
{
  "questions": [
    {
      "type": "multiple-choice",
      "question": "What does TCP stand for?",
      "options": ["Transmission Control Protocol", "..."],
      "correctAnswer": "Transmission Control Protocol",
      "explanation": "...",
      "hint": "...",
      "topic": "networking"
    }
    // 4 more questions
  ]
}
```

### Assessment Fallback
```json
{
  "score": 75,
  "level": "Intermediate",
  "correctAnswers": 3,
  "totalQuestions": 4,
  "percentage": 75,
  "topicScores": [
    {"topic": "networking", "score": 80, "correct": 2, "total": 2},
    {"topic": "security", "score": 50, "correct": 1, "total": 2}
  ],
  "strengths": ["Networking basics"],
  "weaknesses": ["Advanced security concepts"],
  "recommendations": ["Practice more..."],
  "feedback": "You answered 3 out of 4 questions correctly. Great effort!"
}
```

### Roadmap Fallback
```json
{
  "roadmap": "# OSCP Learning Roadmap\n\n## 📚 Overview\n..."
}
```

### Chat Fallback
```json
{
  "reply": "That's a great question!... [contextualized response based on keywords detected]"
}
```

## 🔐 Error Codes

| Code | Meaning | Scenario |
|------|---------|----------|
| 200 | OK | API or fallback success |
| 400 | Bad Request | Missing/invalid parameters |
| 401 | Unauthorized | Not logged in (optional endpoints) |
| 500 | Server Error | Unexpected error + details included |

## 📝 Log Messages

### Success Indicators
```
✅ Using Groq API (LLaMA 3.3 70B)
✅ Database initialized successfully
✅ Generated X questions
✅ Assessment evaluated
✅ Roadmap generated
✅ Mentor response sent
```

### Fallback Activation
```
⚠️  Groq API error: [error message]
Using fallback evaluation...
Using fallback questions...
Using fallback mentor response...
```

### Database Warnings (Non-fatal)
```
⚠️  Could not save assessment to database: [error]
⚠️  Could not save questions to database: [error]
⚠️  Could not save chat to database: [error]
```

## 🎓 Fallback Content Quality

| Endpoint | Quality | Coverage |
|----------|---------|----------|
| Questions | ⭐⭐⭐⭐ | Beginner-level, 5 diverse topics |
| Assessment | ⭐⭐⭐⭐ | Intelligent scoring, personalized feedback |
| Roadmap | ⭐⭐⭐⭐⭐ | Comprehensive 16-week plan with structure |
| Chat | ⭐⭐⭐⭐ | Smart keyword matching, 8 topics covered |

## 🚀 Performance Impact

- **API Available**: 1-3 second response (Groq latency)
- **API Down**: <100ms response (instant fallback)
- **Database Error**: No impact (continues normally)

## 💾 Data Handling

- **API Responses**: Attempted save to database
- **Fallback Responses**: Also saved to database
- **Database Failure**: Response still sent to user (DB optional)
- **Result**: User never sees an error, always gets valid response

## 🔧 Configuration

### To Change Fallback Content
Edit `server-v2.js`:
1. **Questions**: Lines ~820-845
2. **Assessment**: Lines ~950-980
3. **Roadmap**: Lines ~1020-1080
4. **Chat**: Lines ~1170-1220

### To Change API Provider
Edit `server-v2.js`:
1. Find `callAI()` function
2. Update provider logic
3. Fallbacks remain the same

### To Disable Fallbacks (Not Recommended)
Remove the `catch` block, but then API failures will cause errors.

## 📞 Support & Debugging

### Issue: Getting fallback when API is available
- Check Groq API key in `.env`
- Verify API call in logs (should see "Calling Groq API")
- Check network connectivity
- Verify API is not rate-limited

### Issue: Fallback response seems incomplete
- Check endpoint implementation in `server-v2.js`
- Verify fallback response format matches API response
- Check that JSON is valid

### Issue: Database errors
- Check database file exists: `app.db`
- Verify write permissions in directory
- Check for disk space
- Note: Errors are non-fatal, app continues

## 📚 Related Documentation

- See `RECENT_IMPROVEMENTS.md` for detailed improvements
- See `SESSION_IMPROVEMENTS.md` for session summary
- See `VERIFICATION_REPORT.md` for test results

---

**Last Updated**: January 28, 2025  
**Status**: Production Ready  
**All Endpoints**: Fallback Enabled ✅
