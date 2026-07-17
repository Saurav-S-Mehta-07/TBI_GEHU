// Knowledge base for the TBI GEHU FAQ chatbot.
// Rule-based keyword scoring — no API key required.
// Add more entries here anytime; each gets matched against user input.

export const faqData = [
  {
    id: 'what-is-tbi',
    keywords: ['what is tbi', 'about tbi', 'what is gehu tbi', 'technology business incubator', 'who are you', 'what do you do', 'about'],
    question: 'What is TBI GEHU?',
    answer:
      'TBI GEHU (Technology Business Incubator) is a DPIIT-recognized incubator at Graphic Era Hill University that supports students and early-stage founders in building startups — through mentorship, funding support, workspace, and industry connections.',
  },
  {
    id: 'dpiit',
    keywords: ['dpiit', 'recognized', 'recognition', 'government recognised', 'certified'],
    question: 'Is TBI GEHU government recognized?',
    answer:
      'Yes, TBI GEHU is a DPIIT-recognized incubator (Department for Promotion of Industry and Internal Trade, Govt. of India), which makes incubated startups eligible for various government startup benefits and schemes.',
  },
  {
    id: 'apply-incubation',
    keywords: ['apply', 'how to apply', 'application process', 'join tbi', 'get incubated', 'apply now', 'submit idea', 'register startup'],
    question: 'How do I apply for incubation?',
    answer:
      'Click "Apply Now" on the top navigation, fill in your startup/idea details, founder info, and problem statement. Our team reviews applications on a rolling basis and shortlisted teams are invited for a pitch/interview round.',
  },
  {
    id: 'eligibility',
    keywords: ['eligible', 'eligibility', 'who can apply', 'criteria', 'requirements', 'can outsiders apply', 'non gehu student'],
    question: 'Who is eligible to apply?',
    answer:
      'GEHU students, alumni, and faculty with a startup idea or early-stage venture are eligible. External founders/students from other institutes can also apply — final selection depends on idea viability and team strength, decided by the review panel.',
  },
  {
    id: 'programs',
    keywords: ['programs', 'programmes', 'what programs', 'offerings', 'tracks', 'bootcamp', 'accelerator'],
    question: 'What programs does TBI GEHU offer?',
    answer:
      'We run pre-incubation (idea validation), incubation (product-market fit + mentorship), and acceleration programs (scaling + investor readiness). Check the "Programs" tab in the navbar for current cohort details and timelines.',
  },
  {
    id: 'duration',
    keywords: ['duration', 'how long', 'time period', 'months', 'tenure', 'program length'],
    question: 'How long is the incubation program?',
    answer:
      'Incubation typically runs 6–12 months depending on the track and startup stage, with flexibility for extensions based on progress and milestones achieved.',
  },
  {
    id: 'funding',
    keywords: ['funding', 'investment', 'money', 'grant', 'seed fund', 'financial support', 'crores', 'fund raised'],
    question: 'Does TBI GEHU provide funding?',
    answer:
      'TBI GEHU has helped startups raise ₹2Cr+ in funding through investor connects, government grant schemes (like Startup India Seed Fund), and pitch events. We facilitate access to funding rather than being a direct investor in every case.',
  },
  {
    id: 'equity',
    keywords: ['equity', 'stake', 'ownership', 'shares', 'do you take equity'],
    question: 'Does TBI GEHU take equity in my startup?',
    answer:
      'Equity terms (if any) vary by program track and are clearly discussed and agreed upon before onboarding — nothing is taken without a transparent agreement. Ask our team directly during the application review for specifics.',
  },
  {
    id: 'mentors',
    keywords: ['mentors', 'mentorship', 'mentor', 'guidance', 'advisors', 'experts'],
    question: 'Who are the mentors?',
    answer:
      'Our mentor network includes industry experts, entrepreneurs, and academic advisors across tech, business, finance, and legal domains. Over 200+ students have been mentored so far. See the "Mentors" tab for current profiles.',
  },
  {
    id: 'startups',
    keywords: ['startups', 'portfolio', 'incubated companies', 'success stories', 'alumni startups'],
    question: 'What startups has TBI GEHU incubated?',
    answer:
      'TBI GEHU has incubated 50+ startups across sectors like tech, agri, health, and e-commerce. Visit the "Startups" tab to explore our current and alumni startup portfolio.',
  },
  {
    id: 'events',
    keywords: ['events', 'workshops', 'webinar', 'pitch day', 'bootcamp dates', 'upcoming events'],
    question: 'Are there any upcoming events?',
    answer:
      'We regularly host workshops, pitch days, and networking events. Check the "Events" tab in the navbar for the latest schedule and registration links.',
  },
  {
    id: 'resources',
    keywords: ['resources', 'templates', 'toolkit', 'downloads', 'guides', 'materials'],
    question: 'What resources are available for founders?',
    answer:
      'The "Resources" section offers startup toolkits, pitch deck templates, legal/compliance guides, and curated learning material to help founders at every stage.',
  },
  {
    id: 'facilities',
    keywords: ['facilities', 'office space', 'coworking', 'infrastructure', 'workspace', 'lab'],
    question: 'What facilities do incubated startups get?',
    answer:
      'Incubated startups get access to co-working space, meeting rooms, high-speed internet, and select lab/prototyping infrastructure on the GEHU campus, along with admin and legal support.',
  },
  {
    id: 'contact',
    keywords: ['contact', 'email', 'phone', 'reach', 'get in touch', 'address', 'location'],
    question: 'How do I contact TBI GEHU?',
    answer:
      'Head to the "Contact" tab in the navbar for our email, phone number, and campus address, or use the contact form there to send us a direct message.',
  },
  {
    id: 'industry-partners',
    keywords: ['industry partners', 'partners', 'collaborations', 'corporate tie ups'],
    question: 'Does TBI GEHU have industry partners?',
    answer:
      'Yes, we collaborate with 30+ industry partners who support startups through mentorship, resources, pilot opportunities, and potential funding connects.',
  },
  {
    id: 'cost',
    keywords: ['fee', 'cost', 'charges', 'is it free', 'payment', 'price'],
    question: 'Is joining TBI GEHU free?',
    answer:
      'There is no application fee to apply. Specific program costs (if any, such as optional paid workshops) are communicated transparently before you commit to anything.',
  },
  {
    id: 'timeline-selection',
    keywords: ['selection', 'shortlist', 'when will i hear back', 'response time', 'result'],
    question: 'How long until I hear back after applying?',
    answer:
      'Applications are typically reviewed within 1–2 weeks, followed by a pitch/interview round for shortlisted applicants. You will be notified via email at every stage.',
  },
  {
    id: 'team-size',
    keywords: ['solo founder', 'team size', 'can i apply alone', 'individual', 'co founder required'],
    question: 'Can I apply as a solo founder?',
    answer:
      'Yes, solo founders can apply. A co-founding team is not mandatory, though having complementary skill sets on your team is generally viewed favorably during review.',
  },
  {
    id: 'idea-stage',
    keywords: ['just an idea', 'no product', 'early stage', 'prototype needed', 'mvp required'],
    question: 'Do I need a working product to apply?',
    answer:
      'No, you can apply even at the idea stage. We support founders from ideation through MVP to scale — our pre-incubation track is specifically designed for early, unvalidated ideas.',
  },
  {
    id: 'greeting',
    keywords: ['hi', 'hello', 'hey', 'namaste', 'hlo'],
    question: 'Hello!',
    answer:
      "Hi! 👋 I'm the TBI GEHU assistant. Ask me anything about incubation, applying, funding, mentors, events, or programs.",
  },
  {
    id: 'thanks',
    keywords: ['thanks', 'thank you', 'thankyou', 'ty', 'great'],
    question: 'Thanks!',
    answer: "You're welcome! Let me know if there's anything else you'd like to know about TBI GEHU.",
  },
];

// Quick-reply chips shown when the chat opens
export const quickReplies = [
  'What is TBI GEHU?',
  'How do I apply?',
  'Does TBI GEHU provide funding?',
  'Who are the mentors?',
];

export const fallbackAnswer =
  "I don't have an exact answer for that yet. Try asking about applying, programs, funding, mentors, events, or facilities — or reach out via the Contact tab and our team will help directly.";