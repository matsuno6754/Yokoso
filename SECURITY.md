# 🔐 Security & Privacy Guide

## API Key Model

### ✅ Current Implementation: User-Owned Keys

Each user provides their own OpenAI API key. This means:

**Benefits:**
- ✅ **No shared costs** - You don't pay for other users
- ✅ **No abuse risk** - Others can't rack up charges on your account
- ✅ **Privacy** - Each user's data goes through their own API key
- ✅ **Accountability** - Users manage their own OpenAI accounts
- ✅ **Scalable** - Can support unlimited users without cost concerns

**How It Works:**
1. User enters their API key in the sidebar
2. Key is verified with a test call
3. Stored only in browser session (temporary)
4. All API calls use their key
5. Key is deleted when they close the browser

### Security Features Implemented

#### 1. Rate Limiting
```
- Maximum: 30 API calls per session
- Throttling: 3 seconds between requests
- Prevents: Accidental cost overruns and API abuse
```

#### 2. Session-Only Storage
```
- Keys stored in st.session_state (memory only)
- Never written to disk
- Never logged
- Automatically cleared when session ends
```

#### 3. Cost Controls
```
- Max tokens per response: 1500
- Model selection: Users choose GPT-3.5 vs GPT-4
- Real-time usage counter displayed
```

#### 4. Key Verification
```
- Validates key format (must start with 'sk-')
- Tests key with minimal API call before accepting
- Provides clear error messages
```

## Privacy Considerations

### What's Stored?

**In Session (Temporary):**
- User's API key (encrypted in browser memory)
- Current learning mode
- Assessment answers (until session ends)
- API call count

**Never Stored:**
- API keys to disk
- Personal information
- Conversation history (beyond session)
- Payment information

### What's Sent to OpenAI?

When a user makes an API call:
- System prompt (defines AI behavior)
- User's input/questions
- Conversation context

**Not sent:**
- API key (used for authentication only)
- Personal information
- Other users' data

## Deployment Scenarios

### Scenario 1: Personal Use (Current Default)
```
✅ You use your own API key
✅ Full control over costs
✅ No security concerns
✅ Perfect for learning/testing
```

### Scenario 2: Public Deployment (Recommended Setup)
```
✅ Users bring their own API keys (current implementation)
✅ Add authentication (optional)
✅ Monitor for abuse patterns
✅ Display clear usage instructions
```

### Scenario 3: Shared Key (NOT RECOMMENDED)
```
❌ Everyone uses one API key
❌ You pay for all usage
❌ Risk of abuse
❌ Cost can spiral out of control
❌ Not implemented in this app
```

## Cost Estimation

### Per User (with their own key):

**GPT-3.5-turbo:**
- Skill Assessment: ~$0.01-0.03
- Learning Roadmap: ~$0.01-0.02
- Enumeration Coach: ~$0.005-0.015 per scan
- Report Helper: ~$0.005-0.015 per finding

**GPT-4:**
- 10x more expensive
- Higher quality responses
- Better for complex analysis

### Example Session:
```
Complete skill assessment: $0.03
Generate roadmap: $0.02
Analyze 3 scans: $0.03
Write 2 reports: $0.02
---
Total: ~$0.10 per session
```

## Protection Against Abuse

### Built-In Safeguards:

1. **Session Limits**: 30 calls max per session
2. **Rate Throttling**: 3-second delays between calls
3. **Token Caps**: Max 1500 tokens per response
4. **Key Validation**: Verifies keys before use
5. **Error Handling**: Graceful failures, no data leaks

### Monitoring (If Deploying Publicly):

Consider adding:
- Usage analytics (anonymized)
- Suspicious pattern detection
- IP-based rate limiting
- Optional user authentication
- Cost alerts for your own testing key

## For Developers

### Testing Locally

You CAN use a `.env` file for development:
```env
OPENAI_API_KEY=sk-your-dev-key
OPENAI_MODEL=gpt-3.5-turbo
```

But remember:
- ⚠️ Never commit `.env` to git (.gitignore protects you)
- ⚠️ Never deploy with a shared key
- ⚠️ Keep testing costs reasonable

### Deploying to Production

**Checklist:**
- [ ] Remove any `.env` file before deploying
- [ ] Test the "Bring Your Own Key" flow
- [ ] Add clear instructions for users
- [ ] Consider adding analytics (privacy-respecting)
- [ ] Monitor for unusual patterns
- [ ] Have a contact method for abuse reports

### Environment Variables (Optional)

For development only:
```bash
OPENAI_API_KEY=sk-your-key-here  # Your testing key
OPENAI_MODEL=gpt-3.5-turbo       # Default model
```

For production: **Don't set these** - let users provide their own keys.

## Recommended OpenAI Account Setup

### For Users:

1. **Create free account** at platform.openai.com
2. **Add payment method** (required for API access)
3. **Set spending limits**:
   - Monthly limit: $10-20 (plenty for learning)
   - Email alerts at $5, $10, $15
4. **Generate API key** and use in the app
5. **Monitor usage** in OpenAI dashboard

### Safety Tips:

- ✅ Set low spending limits
- ✅ Monitor usage regularly
- ✅ Regenerate keys if suspicious activity
- ✅ Never share your API key
- ✅ Delete keys you're not using

## Compliance & Legal

### Data Processing:

- User data processed by OpenAI (see their privacy policy)
- No data stored by this application beyond session
- Users responsible for their own API terms compliance
- Educational use case aligns with OpenAI TOS

### Liability:

- Users responsible for their API usage and costs
- App provides rate limiting and warnings
- Users should review OpenAI's terms of service
- Educational tool disclaimer in effect

## Incident Response

### If API Key Compromised:

1. **User side:**
   - Regenerate key at platform.openai.com
   - Check for unauthorized usage
   - Update spending limits

2. **App side:**
   - Key is session-only (automatically expired)
   - No persistent storage to clean up
   - User simply uses new key in next session

### If Abuse Detected:

1. Session automatically limited to 30 calls
2. 3-second throttling prevents rapid abuse
3. No persistent access - user must refresh
4. OpenAI has their own rate limits as backup

## Questions?

### "Why not just provide one API key for everyone?"
- **Cost**: You'd pay for unlimited users
- **Abuse**: Anyone could max out your bill
- **Scale**: Doesn't work for public deployment
- **Privacy**: Better for each user to control their data

### "Is my API key safe?"
- Stored only in browser memory
- Never written to disk or logs
- Cleared when you close the app
- Only used to call OpenAI API

### "What if I hit the rate limit?"
- Just refresh the page
- Gets 30 new API calls
- Prevents accidental overuse
- You can adjust limits in code if needed

### "Can I use this without an API key?"
- No - it's required for AI functionality
- But keys are free to create
- New users get free credits from OpenAI
- Very affordable after that (~$0.10 per session)

---

**Bottom Line:** This app is designed to be secure, cost-effective, and privacy-respecting by having each user bring their own API key. This is the standard approach for educational AI tools.
