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
  "SelectedWork": {
    "title": "Selected Work",
    "subtitle": "We build reliable digital products for businesses across Europe, the Middle East, and global markets.",
    "view_all": "View All Projects",
    "view_case_study": "View Case Study"
  },
  "Technologies": {
    "title": "Built Using Modern Technologies",
    "frontend": "Frontend",
    "backend": "Backend",
    "mobile": "Mobile",
    "infrastructure": "Infrastructure",
    "ai": "AI"
  },
  "Industries": {
    "title": "Industries We Empower",
    "subtitle": "We engineer specialized digital solutions tailored to the unique regulatory, scaling, and operational challenges of complex industries."
  },
  "FinalCTA": {
    "title_line1": "Let's Build Your Next ",
    "title_line2": "Success Story.",
    "desc": "Whether you need a website, mobile app, AI solution, complete digital marketing strategy or business platform, our team is ready to help transform your ideas into measurable business growth.",
    "start_project": "Start Your Project",
    "discovery_call": "Book a Free Discovery Call",
    "whatsapp": "WhatsApp"
  }
};

const ar = {
  "SelectedWork": {
    "title": "أعمال مختارة",
    "subtitle": "نبني منتجات رقمية موثوقة للشركات في جميع أنحاء أوروبا، والشرق الأوسط، والأسواق العالمية.",
    "view_all": "عرض جميع المشاريع",
    "view_case_study": "عرض دراسة الحالة"
  },
  "Technologies": {
    "title": "مبنية باستخدام تقنيات حديثة",
    "frontend": "الواجهة الأمامية",
    "backend": "الواجهة الخلفية",
    "mobile": "الهواتف المحمولة",
    "infrastructure": "البنية التحتية",
    "ai": "الذكاء الاصطناعي"
  },
  "Industries": {
    "title": "قطاعات ندعمها",
    "subtitle": "نهندس حلولًا رقمية متخصصة مصممة خصيصًا للتحديات التنظيمية والتشغيلية الفريدة للصناعات المعقدة."
  },
  "FinalCTA": {
    "title_line1": "لنبني قصة نجاحك ",
    "title_line2": "القادمة.",
    "desc": "سواء كنت بحاجة إلى موقع ويب، أو تطبيق جوال، أو حل ذكاء اصطناعي، أو استراتيجية تسويق رقمي كاملة أو منصة أعمال، فريقنا مستعد للمساعدة في تحويل أفكارك إلى نمو تجاري ملموس.",
    "start_project": "ابدأ مشروعك",
    "discovery_call": "احجز مكالمة استكشافية مجانية",
    "whatsapp": "واتساب"
  }
};

updateJson('messages/en.json', en);
updateJson('messages/ar.json', ar);
console.log('Translations updated 4.');
