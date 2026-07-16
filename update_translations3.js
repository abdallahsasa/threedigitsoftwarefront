const fs = require('fs');

function updateJson(file, data) {
  let content = {};
  if (fs.existsSync(file)) {
    content = JSON.parse(fs.readFileSync(file, 'utf8'));
  }
  for (const [key, value] of Object.entries(data)) {
    if (!content[key]) content[key] = {};
    Object.assign(content[key], value);
  }
  fs.writeFileSync(file, JSON.stringify(content, null, 2));
}

const en = {
  "ServicesOverview": {
    "title": "We Build, Launch, Market, and Grow Digital Businesses",
    "subtitle": "Stop managing multiple agencies. We deliver the complete spectrum of digital solutions required to launch your ideas and scale your revenue under one roof.",
    "explore_all": "Explore All Solutions",
    "explore_service": "Explore Service"
  },
  "WhyUs": {
    "title": "Why Industry Leaders Partner With Us",
    "subtitle": "We partner with ambitious companies to build mission-critical digital products and execute marketing strategies that require serious execution and deliver real business impact.",
    "p1_title": "One Partner For Everything",
    "p1_desc": "Stop juggling multiple agencies. We handle your branding, software, and marketing seamlessly.",
    "p2_title": "Business-Focused Strategy",
    "p2_desc": "We don't just write code; we execute strategies designed to increase your revenue and market share.",
    "p3_title": "Scalable Systems",
    "p3_desc": "Infrastructure and platforms built to handle growth without needing constant rewrites.",
    "p4_title": "Measurable Results",
    "p4_desc": "Data-driven marketing and performance tracking so you always know your exact ROI."
  },
  "Process": {
    "title": "From Idea to Business Growth",
    "subtitle": "We don't just launch your platform and leave. We guide you through the entire digital lifecycle to ensure sustained revenue growth.",
    "s1_title": "Business Strategy",
    "s1_desc": "Defining your goals, target audience, and digital roadmap.",
    "s2_title": "Brand Identity",
    "s2_desc": "Crafting a premium visual narrative that builds trust.",
    "s3_title": "Website or Platform",
    "s3_desc": "Engineering scalable, high-performance digital products.",
    "s4_title": "SEO",
    "s4_desc": "Optimizing architecture for search engine dominance.",
    "s5_title": "Social Media",
    "s5_desc": "Engaging your audience with compelling creative content.",
    "s6_title": "Advertising",
    "s6_desc": "Driving measurable ROI through targeted paid campaigns.",
    "s7_title": "AI Automation",
    "s7_desc": "Streamlining operations to reduce costs and increase scale.",
    "s8_title": "Business Growth",
    "s8_desc": "Analyzing data to continuously optimize and expand your market.",
    "step": "Step"
  }
};

const ar = {
  "ServicesOverview": {
    "title": "نبني، نطلق، نسوق، وننمي الأعمال الرقمية",
    "subtitle": "توقف عن إدارة وكالات متعددة. نحن نقدم الطيف الكامل من الحلول الرقمية اللازمة لإطلاق أفكارك وتوسيع إيراداتك تحت سقف واحد.",
    "explore_all": "اكتشف جميع الحلول",
    "explore_service": "اكتشف الخدمة"
  },
  "WhyUs": {
    "title": "لماذا يعتمد علينا قادة الصناعة",
    "subtitle": "نحن نتشارك مع الشركات الطموحة لبناء منتجات رقمية حاسمة وتنفيذ استراتيجيات تسويق تتطلب تنفيذاً دقيقاً وتحقق أثراً تجارياً حقيقياً.",
    "p1_title": "شريك واحد لكل شيء",
    "p1_desc": "توقف عن التوفيق بين وكالات متعددة. نحن نتولى علامتك التجارية، والبرمجيات، والتسويق بسلاسة تامة.",
    "p2_title": "استراتيجية تركز على الأعمال",
    "p2_desc": "نحن لا نكتب الكود فقط؛ بل ننفذ استراتيجيات مصممة لزيادة إيراداتك وحصتك في السوق.",
    "p3_title": "أنظمة قابلة للتوسع",
    "p3_desc": "بنية تحتية ومنصات مبنية للتعامل مع النمو دون الحاجة إلى إعادة برمجة مستمرة.",
    "p4_title": "نتائج قابلة للقياس",
    "p4_desc": "تسويق مبني على البيانات وتتبع للأداء حتى تعرف دائمًا عائد الاستثمار الدقيق."
  },
  "Process": {
    "title": "من الفكرة إلى نمو الأعمال",
    "subtitle": "نحن لا نطلق منصتك ونغادر فحسب. بل نرشدك خلال دورة الحياة الرقمية بأكملها لضمان نمو مستدام في الإيرادات.",
    "s1_title": "استراتيجية الأعمال",
    "s1_desc": "تحديد أهدافك، وجمهورك المستهدف، وخارطة الطريق الرقمية.",
    "s2_title": "الهوية التجارية",
    "s2_desc": "صياغة سرد بصري متميز يبني الثقة.",
    "s3_title": "موقع ويب أو منصة",
    "s3_desc": "هندسة منتجات رقمية عالية الأداء وقابلة للتطوير.",
    "s4_title": "تحسين محركات البحث (SEO)",
    "s4_desc": "تحسين الهيكلية للسيطرة على نتائج محركات البحث.",
    "s5_title": "وسائل التواصل الاجتماعي",
    "s5_desc": "جذب جمهورك من خلال محتوى إبداعي مقنع.",
    "s6_title": "الإعلانات",
    "s6_desc": "تحقيق عائد استثمار ملموس من خلال حملات مدفوعة موجهة.",
    "s7_title": "الأتمتة بالذكاء الاصطناعي",
    "s7_desc": "تبسيط العمليات لتقليل التكاليف وزيادة الإنتاجية.",
    "s8_title": "نمو الأعمال",
    "s8_desc": "تحليل البيانات لتحسين وتوسيع سوقك باستمرار.",
    "step": "الخطوة"
  }
};

updateJson('messages/en.json', en);
updateJson('messages/ar.json', ar);
console.log('Translations updated 3.');
