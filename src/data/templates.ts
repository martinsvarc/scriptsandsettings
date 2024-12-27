import { Category } from '@/types';

// Definice typů pro strukturu skriptů
interface Script {
  type: Category;
  name: string;
  duration: string;
  sections: ScriptSection[];
}

interface ScriptSection {
  title: string;
  timing: string;
  content?: string;
  conditions?: ScriptCondition[];
  bullets?: string[];
  numbered?: string[];
  subsections?: ScriptSubsection[];
}

interface ScriptCondition {
  condition: string;
  response: string;
}

interface ScriptSubsection {
  title: string;
  bullets: string[];
}

const scripts = {
  wholesaling: {
    type: "wholesaling",
    name: "High-Converting Wholesaling Property Acquisition Script",
    duration: "8-12 minutes",
    sections: [
      {
        title: "Opening",
        timing: "0-60 seconds", 
        content: "Hi, this is [YOUR_NAME] with [COMPANY_NAME]. I'm a local real estate investor actively looking to buy properties in [AREA/NEIGHBORHOOD]. I noticed your property at [ADDRESS] and wanted to reach out directly to see if you might consider selling for the right offer?",
        conditions: [
          {
            condition: "If they seem hesitant",
            response: "I understand this call is unexpected. We're local investors who buy properties as-is for cash, and I'd love to learn more about your property if you have just a few minutes."
          }
        ]
      },
      {
        title: "Initial Qualification",
        timing: "1-2 minutes",
        content: "Would you have about 5-7 minutes to answer a few questions about the property? This will help me understand if it might be a good fit for our investment portfolio.",
        conditions: [
          {
            condition: "If YES",
            response: "Excellent! Let me get some basic information first."
          },
          {
            condition: "If NO", 
            response: "I completely understand. When would be a better time to have this conversation?"
          }
        ]
      },
      {
        title: "Contact Information",
        timing: "2-3 minutes",
        content: "Before we discuss the property, let me verify a few details:",
        bullets: [
          "Could you confirm your full name?",
          "And I have your property address as [ADDRESS] - is that correct?",
          "What's the best phone number to reach you?",
          "Where would you like me to send additional information by email?"
        ]
      }
      // Pokračování kódu...
    ]
  },
  creativeFinance: {
    type: "creative-finance",
    name: "Creative Financing Property Acquisition Script",
    duration: "8-12 minutes",
    sections: [
      {
        title: "Opening",
        timing: "0-60 seconds",
        content: "Hi, this is [YOUR_NAME] with [COMPANY_NAME]. I'm a local real estate investor specializing in flexible property purchases in [AREA/NEIGHBORHOOD]. I'm reaching out about your property at [ADDRESS] because we offer unique selling options that many traditional buyers don't.",
        conditions: [
          {
            condition: "If they seem hesitant",
            response: "I understand this call is unexpected. What makes us different is that we can offer multiple ways to structure a sale that might be more beneficial for your situation, including options that could provide you with monthly income."
          }
        ]
      }
    ]
  }
};

export default scripts;
import { Category } from '@/types';

interface Script {
  type: Category;
  name: string;
  duration: string;
  sections: ScriptSection[];
}

interface ScriptSection {
  title: string;
  timing: string;
  content?: string;
  conditions?: ScriptCondition[];
  bullets?: string[];
  numbered?: string[];
  subsections?: ScriptSubsection[];
}

interface ScriptCondition {
  condition: string;
  response: string;
}

interface ScriptSubsection {
  title: string;
  bullets: string[];
}

const scripts = {
  wholesaling: {
    type: "wholesaling",
    name: "High-Converting Wholesaling Property Acquisition Script",
    duration: "8-12 minutes",
    sections: [
      {
        title: "Opening",
        timing: "0-60 seconds", 
        content: "Hi, this is [YOUR_NAME] with [COMPANY_NAME]. I'm a local real estate investor actively looking to buy properties in [AREA/NEIGHBORHOOD]. I noticed your property at [ADDRESS] and wanted to reach out directly to see if you might consider selling for the right offer?",
        conditions: [
          {
            condition: "If they seem hesitant",
            response: "I understand this call is unexpected. We're local investors who buy properties as-is for cash, and I'd love to learn more about your property if you have just a few minutes."
          }
        ]
      },
      {
        title: "Initial Qualification",
        timing: "1-2 minutes",
        content: "Would you have about 5-7 minutes to answer a few questions about the property? This will help me understand if it might be a good fit for our investment portfolio.",
        conditions: [
          {
            condition: "If YES",
            response: "Excellent! Let me get some basic information first."
          },
          {
            condition: "If NO", 
            response: "I completely understand. When would be a better time to have this conversation?"
          }
        ]
      },
      {
        title: "Contact Information",
        timing: "2-3 minutes",
        content: "Before we discuss the property, let me verify a few details:",
        bullets: [
          "Could you confirm your full name?",
          "And I have your property address as [ADDRESS] - is that correct?",
          "What's the best phone number to reach you?",
          "Where would you like me to send additional information by email?"
        ]
      },
      {
        title: "Property Condition",
        timing: "3-5 minutes",
        content: "Now, I'd like to learn more about your property:",
        bullets: [
          "How long have you owned the house?",
          "Is anyone currently living in the property?",
          "What's the general condition of the house?",
          "Are there any repairs or updates needed?",
          "How many bedrooms and bathrooms does it have?",
          "What's the approximate square footage?",
          "Have you done any major renovations recently?",
          "How would you describe the condition of the roof and foundation?",
          "Are there any special features I should know about?"
        ]
      },
      {
        title: "Motivation Discovery",
        timing: "5-7 minutes",
        content: "Thank you for sharing those details. May I ask what's making you consider selling at this time?",
        conditions: [
          {
            condition: "Listen carefully and show empathy",
            response: "How long have you been thinking about selling?"
          },
          {
            condition: "If they mention any challenges or problems",
            response: "That sounds challenging. How has that been affecting you?"
          }
        ]
      },
      {
        title: "Timeline and Financial Position",
        timing: "7-8 minutes",
        content: "If you decided to move forward with selling:",
        bullets: [
          "What kind of timeline are you looking at - 30 days, 90 days, or longer?",
          "Are there any mortgages or liens on the property?",
          "Do you have a rough idea of the payoff amount?"
        ]
      },
      {
        title: "Price Discussion",
        timing: "8-9 minutes",
        content: "Regarding property value:",
        bullets: [
          "Have you had any other offers on the property?",
          "Do you have a specific price in mind?",
          "Would you be flexible on price for a quick, as-is cash sale with no realtor fees?"
        ]
      },
      {
        title: "Closing & Next Steps",
        timing: "9-10 minutes",
        conditions: [
          {
            condition: "If Showing Strong Interest",
            response: "This sounds like it could be a great fit for our buying criteria. Here's what happens next:"
          }
        ],
        numbered: [
          "I'd like to schedule a quick 15-minute walkthrough of the property",
          "My team will analyze the information and prepare a cash offer",
          "We can present you with a no-obligation offer within 24 hours after viewing",
          "If you accept, we can close in as little as 7-14 days"
        ]
      }
    ]
  },
  creativeFinance: {
    type: "creative-finance",
    name: "Creative Financing Property Acquisition Script",
    duration: "8-12 minutes",
    sections: [
      {
        title: "Opening",
        timing: "0-60 seconds",
        content: "Hi, this is [YOUR_NAME] with [COMPANY_NAME]. I'm a local real estate investor specializing in flexible property purchases in [AREA/NEIGHBORHOOD]. I'm reaching out about your property at [ADDRESS] because we offer unique selling options that many traditional buyers don't.",
        conditions: [
          {
            condition: "If they seem hesitant",
            response: "I understand this call is unexpected. What makes us different is that we can offer multiple ways to structure a sale that might be more beneficial for your situation, including options that could provide you with monthly income."
          }
        ]
      },
      {
        title: "Initial Qualification",
        timing: "1-2 minutes",
        content: "Would you have about 5-7 minutes to discuss some creative ways we could potentially purchase your property? These options often provide better tax benefits and higher overall returns than traditional sales.",
        conditions: [
          {
            condition: "If YES",
            response: "Excellent! Let me get some basic information first."
          },
          {
            condition: "If NO",
            response: "I understand. When would be a better time to explore these options?"
          }
        ]
      },
      {
        title: "Property & Financial Situation",
        timing: "3-5 minutes",
        content: "To understand which options might work best for you:",
        bullets: [
          "How long have you owned the property?",
          "Is there currently a mortgage on the property?",
          "What's the approximate remaining balance?",
          "Are you currently living in the property or is it rented?",
          "If rented, what's the current monthly rent?",
          "Have you had any previous experience with owner financing or lease options?"
        ]
      },
      {
        title: "Exploring Motivations",
        timing: "5-7 minutes",
        content: "What's your main goal with the property right now?",
        bullets: [
          "Are you looking for immediate cash?",
          "Would you be interested in receiving monthly payments over time?",
          "How important are tax benefits to your situation?",
          "Have you considered the advantages of spreading out your capital gains?"
        ]
      },
      {
        title: "Presenting Options",
        timing: "7-8 minutes",
        content: "Based on what you've shared, let me outline a few options we could explore:",
        subsections: [
          {
            title: "1. Owner Financing",
            bullets: [
              "You become the bank and receive monthly payments",
              "Potential tax advantages through installment sale",
              "Higher overall return than traditional sale"
            ]
          },
          {
            title: "2. Lease Option",
            bullets: [
              "Immediate cash flow while maintaining ownership",
              "Potential higher sale price",
              "Maintenance handled by tenant-buyer"
            ]
          },
          {
            title: "3. Subject-To",
            bullets: [
              "We take over your existing mortgage payments",
              "You're relieved of payment obligations",
              "Quick closing possible"
            ]
          }
        ]
      },
      {
        title: "Closing & Next Steps",
        timing: "9-10 minutes",
        conditions: [
          {
            condition: "If Showing Interest",
            response: "This sounds promising. Here's what I suggest as next steps:"
          }
        ],
        numbered: [
          "I'll prepare a detailed proposal with multiple options",
          "We can meet in person to review the numbers",
          "You can choose the structure that works best for you",
          "We can close as soon as the paperwork is ready"
        ]
      }
    ]
  },
  agentOutreach: {
    type: "agent-outreach",
    name: "Real Estate Agent Partnership Development Script",
    duration: "8-12 minutes",
    sections: [
      {
        title: "Opening",
        timing: "0-60 seconds",
        content: "Hi, this is [YOUR_NAME] with [COMPANY_NAME]. I'm an active investor in [AREA/NEIGHBORHOOD], and I noticed your strong presence in the market. I wanted to discuss how we might be able to work together to help more of your clients.",
        conditions: [
          {
            condition: "If they seem busy",
            response: "I know you're busy, but I work with several agents who send us deals that aren't a good fit for the MLS, and we close quickly with cash. Would you be open to learning more?"
          }
        ]
      },
      {
        title: "Value Proposition",
        timing: "5-7 minutes",
        content: "Let me share how we can be a valuable resource for you:",
        subsections: [
          {
            title: "We can help with",
            bullets: [
              "Properties needing major repairs",
              "Sellers needing quick closings",
              "Expired listings",
              "Inherited properties",
              "Pre-foreclosures",
              "Difficult-to-finance properties"
            ]
          },
          {
            title: "Our commitment to agents",
            bullets: [
              "Full commission payment",
              "7-14 day closings",
              "As-is purchases",
              "No repair requests",
              "Cash offers",
              "No financing contingencies"
            ]
          }
        ]
      },
      {
        title: "Process Explanation",
        timing: "8-9 minutes",
        content: "Here's how we typically work with agents:",
        numbered: [
          "You send us property details and photos",
          "We provide a cash offer within 24 hours",
          "We can close in as little as 7 days",
          "You receive full commission at closing",
          "We handle all repairs and updates"
        ]
      }
    ]
  },
  foreclosure: {
    type: "foreclosure",
    name: "Pre-Foreclosure Homeowner Assistance Script",
    duration: "8-12 minutes",
    sections: [
      {
        title: "Opening",
        timing: "0-60 seconds",
        content: "Hi, this is [YOUR_NAME] with [COMPANY_NAME]. I'm reaching out because I understand you might be dealing with a challenging situation with your property at [ADDRESS].",
        conditions: [
          {
            condition: "If they seem defensive",
            response: "I know this call is unexpected, but we specialize in helping homeowners who are facing foreclosure. We may have some options that could help you avoid foreclosure and protect your credit."
          }
        ]
      },
      {
        title: "Initial Rapport",
        timing: "1-2 minutes",
        content: "Would you be open to having a confidential conversation about some options that might help your situation? I work with many homeowners in similar circumstances, and there are often more options available than people realize.",
        conditions: [
          {
            condition: "If YES",
            response: "Thank you for being open to talking. Let me learn more about your situation."
          },
          {
            condition: "If NO",
            response: "I understand your hesitation. Would it be better to talk another time?"
          }
        ]
      },
      {
        title: "Situation Assessment",
        timing: "3-5 minutes",
        content: "To understand how best to help, could you tell me:",
        bullets: [
          "Where are you in the foreclosure process?",
          "Have you received any notices from the bank?",
          "How many payments are currently behind?",
          "Have you been able to communicate with your lender?",
          "What attempts have you made to resolve the situation?",
          "Are you currently living in the property?"
        ]
      },
      {
        title: "Presenting Solutions",
        timing: "7-8 minutes",
        content: "Based on what you've shared, let me outline some possible options:",
        subsections: [
          {
            title: "1. Quick Sale Solution",
            bullets: [
              "We can close quickly before foreclosure",
              "You walk away with dignity and possibly cash",
              "Foreclosure process stops immediately"
            ]
          },
          {
            title: "2. Short Sale Assistance",
            bullets: [
              "We can negotiate with your lender",
              "Potentially eliminate remaining debt",
              "Minimize credit impact"
            ]
          },
          {
            title: "3. Lease-Back Program",
            bullets: [
              "Sell to us but continue living there",
              "Rent payments often lower than mortgage",
              "Time to rebuild your financial situation"
            ]
          }
        ]
      },
      {
        title: "Emergency Response",
        timing: "If Needed",
        conditions: [
          {
            condition: "If they indicate immediate urgency",
            response: "Given your timeline, we should meet today if possible. I can be there at [suggest time] to review your documentation and discuss immediate solutions. Would that work for you?"
          }
        ]
      }
    ]
  }
};

export default scripts;
