import { Category } from '@/types'

export type Template = {
  id: string;
  name: string;
  content: string;
}

export type TemplatesObject = {
  [key in Category]: Template[];
}

const sharedStyles = `
  <style>
    .script-container {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
      color: #333;
    }
    
    h1 {
      font-size: 28px;
      border-bottom: 2px solid #e5e7eb;
      padding-bottom: 10px;
      margin-bottom: 20px;
      color: #1a202c;
    }
    
    h2 {
      font-size: 24px;
      color: #2d3748;
      margin-top: 30px;
      border-bottom: 1px solid #e5e7eb;
      padding-bottom: 8px;
    }
    
    h3 {
      font-size: 20px;
      color: #4a5568;
      margin-top: 20px;
      font-weight: 600;
    }
    
    .section {
      margin-bottom: 24px;
      padding: 0 16px;
    }
    
    .condition {
      font-style: italic;
      color: #4a5568;
      font-weight: 500;
      margin: 12px 0;
      padding: 8px 16px;
      background-color: #f7fafc;
      border-left: 4px solid #4a5568;
    }
    
    .script-text {
      margin: 12px 0;
      line-height: 1.6;
      padding: 0 16px;
    }
    
    .bullet-list {
      list-style-type: disc;
      margin: 12px 0 12px 40px;
    }
    
    .bullet-list li {
      margin-bottom: 8px;
      line-height: 1.5;
    }
    
    .numbered-list {
      list-style-type: decimal;
      margin: 12px 0 12px 40px;
    }
    
    .numbered-list li {
      margin-bottom: 8px;
      line-height: 1.5;
    }
  
    .note {
      border-left: 4px solid #718096;
      padding: 8px 16px;
      margin: 12px 0;
      font-style: italic;
      background-color: #f7fafc;
    }
    
    .script-preview {
      font-style: italic;
      color: #4a5568;
      margin-bottom: 24px;
      padding: 0 16px;
    }
    
    .variable {
      color: #2b6cb0;
      font-weight: 600;
    }
    
    .header-time {
      color: #718096;
      font-size: 0.9em;
      font-weight: normal;
    }
  
    .subsection {
      margin-left: 20px;
      margin-top: 16px;
    }
  </style>`;

const templates: TemplatesObject = {
  'scripts': [
    {
      id: "wholesaling",
      name: "Wholesaling Property Acquisition",
      content: `<!DOCTYPE html>
<html>
<head>
${sharedStyles}
</head>
<body>
<div class="script-container">
    },
    {
      id: "creative-finance",
      name: "Creative Financing Property Acquisition",
      content: `...`
    },
    {
      id: "agent-partnership",
      name: "Real Estate Agent Partnership",
      content: `...`
    },
    {
      id: "pre-foreclosure",
      name: "Pre-Foreclosure Homeowner Assistance",
      content: `...`
    }
  ]
};
<h1>High-Converting Wholesaling Property Acquisition Script</h1>
<div class="script-preview">
  To identify motivated sellers and secure wholesale real estate deals through cold calling. Duration: 8-12 minutes
</div>

<h2>OPENING <span class="header-time">(0-60 seconds)</span></h2>
<div class="script-text">
  "Hi, this is <span class="variable">[YOUR_NAME]</span> with <span class="variable">[COMPANY_NAME]</span>. I'm a local real estate investor actively looking to buy properties in <span class="variable">[AREA/NEIGHBORHOOD]</span>. I noticed your property at <span class="variable">[ADDRESS]</span> and wanted to reach out directly to see if you might consider selling for the right offer?"
</div>

<div class="condition">[If they seem hesitant]</div>
<div class="script-text">
  "I understand this call is unexpected. We're local investors who buy properties as-is for cash, and I'd love to learn more about your property if you have just a few minutes."
</div>

<h2>INITIAL QUALIFICATION <span class="header-time">(1-2 minutes)</span></h2>
<div class="script-text">
  "Would you have about 5-7 minutes to answer a few questions about the property? This will help me understand if it might be a good fit for our investment portfolio."
</div>

<div class="condition">[If YES]</div>
<div class="script-text">
  "Excellent! Let me get some basic information first."
</div>

<div class="condition">[If NO]</div>
<div class="script-text">
  "I completely understand. When would be a better time to have this conversation?"
</div>

<h2>CONTACT INFORMATION <span class="header-time">(2-3 minutes)</span></h2>
<div class="script-text">
  "Before we discuss the property, let me verify a few details:"
</div>
<ul class="bullet-list">
  <li>Could you confirm your full name?</li>
  <li>And I have your property address as <span class="variable">[ADDRESS]</span> - is that correct?</li>
  <li>What's the best phone number to reach you?</li>
  <li>Where would you like me to send additional information by email?</li>
</ul>

<h2>PROPERTY CONDITION <span class="header-time">(3-5 minutes)</span></h2>
<div class="script-text">
  "Now, I'd like to learn more about your property:"
</div>
<ul class="bullet-list">
  <li>How long have you owned the house?</li>
  <li>Is anyone currently living in the property?</li>
  <li>What's the general condition of the house?</li>
  <li>Are there any repairs or updates needed?</li>
  <li>How many bedrooms and bathrooms does it have?</li>
  <li>What's the approximate square footage?</li>
  <li>Have you done any major renovations recently?</li>
  <li>How would you describe the condition of the roof and foundation?</li>
  <li>Are there any special features I should know about?</li>
</ul>

<h2>MOTIVATION DISCOVERY <span class="header-time">(5-7 minutes)</span></h2>
<div class="script-text">
  "Thank you for sharing those details. May I ask what's making you consider selling at this time?"
</div>

<div class="note">
  [Listen carefully and show empathy]
</div>

<div class="script-text">
  "How long have you been thinking about selling?"
</div>

<div class="condition">[If they mention any challenges or problems]</div>
<div class="script-text">
  "That sounds challenging. How has that been affecting you?"
</div>

<h2>TIMELINE AND FINANCIAL POSITION <span class="header-time">(7-8 minutes)</span></h2>
<div class="script-text">
  "If you decided to move forward with selling:"
</div>
<ul class="bullet-list">
  <li>What kind of timeline are you looking at - 30 days, 90 days, or longer?</li>
  <li>Are there any mortgages or liens on the property?</li>
  <li>Do you have a rough idea of the payoff amount?</li>
</ul>

<h2>PRICE DISCUSSION <span class="header-time">(8-9 minutes)</span></h2>
<div class="script-text">
  "Regarding property value:"
</div>
<ul class="bullet-list">
  <li>Have you had any other offers on the property?</li>
  <li>Do you have a specific price in mind?</li>
  <li>Would you be flexible on price for a quick, as-is cash sale with no realtor fees?</li>
</ul>

<h2>CLOSING & NEXT STEPS <span class="header-time">(9-10 minutes)</span></h2>

<div class="condition">[If Showing Strong Interest]</div>
<div class="script-text">
  "This sounds like it could be a great fit for our buying criteria. Here's what happens next:"
</div>
<ol class="numbered-list">
  <li>I'd like to schedule a quick 15-minute walkthrough of the property</li>
  <li>My team will analyze the information and prepare a cash offer</li>
  <li>We can present you with a no-obligation offer within 24 hours after viewing</li>
  <li>If you accept, we can close in as little as 7-14 days</li>
</ol>
<div class="script-text">
  "When would be the best time for me to come take a look at the property?"
</div>

<div class="condition">[If Needs Time]</div>
<div class="script-text">
  "I understand you need time to think about it. Would it be okay if I:"
</div>
<ol class="numbered-list">
  <li>Send you some information about our company by email?</li>
  <li>Follow up with you next week to answer any questions?</li>
  <li>Add you to our priority buyer list in case our offer increases?</li>
</ol>
</div>
</body>
</html>`
  },
  {
    id: "creative-finance",
    name: "Creative Financing Property Acquisition",
    content: `<!DOCTYPE html>
<html>
<head>
${sharedStyles}
</head>
<body>
<div class="script-container">
<h1>Creative Financing Property Acquisition Script</h1>
<div class="script-preview">
  To present creative financing solutions and identify sellers open to flexible purchase terms. Duration: 8-12 minutes
</div>

<h2>OPENING <span class="header-time">(0-60 seconds)</span></h2>
<div class="script-text">
  "Hi, this is <span class="variable">[YOUR_NAME]</span> with <span class="variable">[COMPANY_NAME]</span>. I'm a local real estate investor specializing in flexible property purchases in <span class="variable">[AREA/NEIGHBORHOOD]</span>. I'm reaching out about your property at <span class="variable">[ADDRESS]</span> because we offer unique selling options that many traditional buyers don't."
</div>

<div class="condition">[If they seem hesitant]</div>
<div class="script-text">
  "I understand this call is unexpected. What makes us different is that we can offer multiple ways to structure a sale that might be more beneficial for your situation, including options that could provide you with monthly income."
</div>

<h2>INITIAL QUALIFICATION <span class="header-time">(1-2 minutes)</span></h2>
<div class="script-text">
  "Would you have about 5-7 minutes to discuss some creative ways we could potentially purchase your property? These options often provide better tax benefits and higher overall returns than traditional sales."
</div>

<div class="condition">[If YES]</div>
<div class="script-text">
  "Excellent! Let me get some basic information first."
</div>

<div class="condition">[If NO]</div>
<div class="script-text">
  "I understand. When would be a better time to explore these options?"
</div>

<h2>PROPERTY & FINANCIAL SITUATION <span class="header-time">(3-5 minutes)</span></h2>
<div class="script-text">
  "To understand which options might work best for you:"
</div>
<ul class="bullet-list">
  <li>How long have you owned the property?</li>
  <li>Is there currently a mortgage on the property?</li>
  <li>What's the approximate remaining balance?</li>
  <li>Are you currently living in the property or is it rented?</li>
  <li>If rented, what's the current monthly rent?</li>
  <li>Have you had any previous experience with owner financing or lease options?</li>
</ul>

<h2>EXPLORING MOTIVATIONS <span class="header-time">(5-7 minutes)</span></h2>
<div class="script-text">
  "What's your main goal with the property right now?"
</div>
<ul class="bullet-list">
  <li>Are you looking for immediate cash?</li>
  <li>Would you be interested in receiving monthly payments over time?</li>
  <li>How important are tax benefits to your situation?</li>
  <li>Have you considered the advantages of spreading out your capital gains?</li>
</ul>

<h2>PRESENTING OPTIONS <span class="header-time">(7-8 minutes)</span></h2>
<div class="script-text">
  "Based on what you've shared, let me outline a few options we could explore:"
</div>

<h3>1. Owner Financing:</h3>
<ul class="bullet-list">
  <li>You become the bank and receive monthly payments</li>
  <li>Potential tax advantages through installment sale</li>
  <li>Higher overall return than traditional sale</li>
</ul>

<h3>2. Lease Option:</h3>
<ul class="bullet-list">
  <li>Immediate cash flow while maintaining ownership</li>
  <li>Potential higher sale price</li>
  <li>Maintenance handled by tenant-buyer</li>
</ul>

<h3>3. Subject-To:</h3>
<ul class="bullet-list">
  <li>We take over your existing mortgage payments</li>
  <li>You're relieved of payment obligations</li>
  <li>Quick closing possible</li>
</ul>
</div>
</body>
</html>`
  },
  {
    id: "agent-partnership",
    name: "Real Estate Agent Partnership",
    content: `<!DOCTYPE html>
<html>
<head>
${sharedStyles}
</head>
<body>
<div class="script-container">
<h1>Real Estate Agent Partnership Development Script</h1>
<div class="script-preview">
  To build strategic relationships with real estate agents and establish a consistent deal flow pipeline. Duration: 8-12 minutes
</div>

<h2>OPENING <span class="header-time">(0-60 seconds)</span></h2>
<div class="script-text">
  "Hi, this is <span class="variable">[YOUR_NAME]</span> with <span class="variable">[COMPANY_NAME]</span>. I'm an active investor in <span class="variable">[AREA/NEIGHBORHOOD]</span>, and I noticed your strong presence in the market. I wanted to discuss how we might be able to work together to help more of your clients."
</div>

<div class="condition">[If they seem busy]</div>
<div class="script-text">
  "I know you're busy, but I work with several agents who send us deals that aren't a good fit for the MLS, and we close quickly with cash. Would you be open to learning more?"
</div>

<h2>VALUE PROPOSITION <span class="header-time">(5-7 minutes)</span></h2>
<div class="script-text">
  "Let me share how we can be a valuable resource for you:"
</div>

<h3>We can help with:</h3>
<ul class="bullet-list">
  <li>Properties needing major repairs</li>
  <li>Sellers needing quick closings</li>
  <li>Expired listings</li>
  <li>Inherited properties</li>
  <li>Pre-foreclosures</li>
  <li>Difficult-to-finance properties</li>
</ul>

<h3>Our commitment to agents:</h3>
<ul class="bullet-list">
  <li>Full commission payment</li>
  <li>7-14 day closings</li>
  <li>As-is purchases</li>
  <li>No repair requests</li>
  <li>Cash offers</li>
  <li>No financing contingencies</li>
</ul>
</div>
</body>
</html>`
  },
  {
    id: "pre-foreclosure",
    name: "Pre-Foreclosure Homeowner Assistance",
    content: `<!DOCTYPE html>
<html>
<head>
${sharedStyles}
</head>
<body>
<div class="script-container">
<h1>Pre-Foreclosure Homeowner Assistance Script</h1>
<div class="script-preview">
  To help homeowners in foreclosure while creating win-win investment opportunities. Duration: 8-12 minutes
</div>

<h2>OPENING <span class="header-time">(0-60 seconds)</span></h2>
<div class="script-text">
  "Hi, this is <span class="variable">[YOUR_NAME]</span> with <span class="variable">[COMPANY_NAME]</span>. I'm reaching out because I understand you might be dealing with a challenging situation with your property at <span class="variable">[ADDRESS]</span>."
</div>

<div class="condition">[If they seem defensive]</div>
<div class="script-text">
  "I know this call is unexpected, but we specialize in helping homeowners who are facing foreclosure. We may have some options that could help you avoid foreclosure and protect your credit."
</div>

<h2>INITIAL RAPPORT <span class="header-time">(1-2 minutes)</span></h2>
<div class="script-text">
  "Would you be open to having a confidential conversation about some options that might help your situation? I work with many homeowners in similar circumstances, and there are often more options available than people realize."
</div>

<div class="condition">[If YES]</div>
<div class="script-text">
  "Thank you for being open to talking. Let me learn more about your situation."
</div>

<div class="condition">[If NO]</div>
<div class="script-text">
  "I understand your hesitation. Would it be better to talk another time?"
</div>

<h2>SITUATION ASSESSMENT <span class="header-time">(3-5 minutes)</span></h2>
<div class="script-text">
  "To understand how best to help, could you tell me:"
</div>
<ul class="bullet-list">
  <li>Where are you in the foreclosure process?</li>
  <li>Have you received any notices from the bank?</li>
  <li>How many payments are currently behind?</li>
  <li>Have you been able to communicate with your lender?</li>
  <li>What attempts have you made to resolve the situation?</li>
  <li>Are you currently living in the property?</li>
</ul>

<h2>PRESENTING SOLUTIONS <span class="header-time">(7-8 minutes)</span></h2>
<div class="script-text">
  "Based on what you've shared, let me outline some possible options:"
</div>

<h3>1. Quick Sale Solution:</h3>
<ul class="bullet-list">
  <li>We can close quickly before foreclosure</li>
  <li>You walk away with dignity and possibly cash</li>
  <li>Foreclosure process stops immediately</li>
</ul>

<h3>2. Short Sale Assistance:</h3>
<ul class="bullet-list">
  <li>We can negotiate with your lender</li>
  <li>Potentially eliminate remaining debt</li>
  <li>Minimize credit impact</li>
</ul>

<h3>3. Lease-Back Program:</h3>
<ul class="bullet-list">
  <li>Sell to us but continue living there</li>
  <li>Rent payments often lower than mortgage</li>
  <li>Time to rebuild your financial situation</li>
</ul>

<h2>EMERGENCY RESPONSE <span class="header-time">(If Needed)</span></h2>
<div class="condition">[If they indicate immediate urgency]</div>
<div class="script-text">
  "Given your timeline, we should meet today if possible. I can be there at <span class="variable">[suggest time]</span> to review your documentation and discuss immediate solutions. Would that work for you?"
</div>
</div>
</body>
</html>`
  }
  ],
  'performance-goals': [],
  'extended-status': []
};

export default templates;
