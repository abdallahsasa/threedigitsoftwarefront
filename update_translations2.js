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
  "Hero": {
    "title_line1": "Complete Digital Solutions for ",
    "title_line2": "Growing Businesses.",
    "description": "From websites and mobile applications to AI automation, branding, SEO, paid advertising and digital strategy, we help businesses build a stronger digital presence and achieve measurable growth.",
    "start_project": "Start Your Project",
    "explore_work": "Explore Our Work"
  },
  "ClientLogos": {
    "trusted_by": "Trusted by Innovative Companies"
  },
  "TrustIndicators": {
    "completed_products": "Completed Digital Products",
    "years_building": "Years Building Software",
    "industries_served": "Industries Served",
    "clients_across": "Clients Across Multiple Markets",
    "international": "International"
  },
  "AllInOnePartner": {
    "title_line1": "Everything Your Business Needs.",
    "title_line2": "One Trusted Partner.",
    "cap_website": "Website Development",
    "cap_mobile": "Mobile Apps",
    "cap_ai": "AI Solutions",
    "cap_seo": "SEO",
    "cap_marketing": "Digital Marketing",
    "cap_paid": "Paid Advertising",
    "cap_branding": "Branding",
    "cap_platforms": "Business Platforms",
    "cap_automation": "Automation",
    "cap_photo": "Photography & Video",
    "cap_consulting": "Business Consulting"
  }
};

const ar = {
  "Hero": {
    "title_line1": "حلول رقمية متكاملة ",
    "title_line2": "للشركات النامية.",
    "description": "من المواقع الإلكترونية وتطبيقات الهاتف إلى الذكاء الاصطناعي، والعلامات التجارية، وتحسين محركات البحث، والإعلانات المدفوعة، نساعد الشركات على بناء حضور رقمي قوي وتحقيق نمو ملموس.",
    "start_project": "ابدأ مشروعك",
    "explore_work": "تصفح أعمالنا"
  },
  "ClientLogos": {
    "trusted_by": "موثوقون من قبل شركات مبتكرة"
  },
  "TrustIndicators": {
    "completed_products": "منتجات رقمية منجزة",
    "years_building": "سنوات في بناء البرمجيات",
    "industries_served": "قطاعات نخدمها",
    "clients_across": "عملاء عبر أسواق متعددة",
    "international": "دولي"
  },
  "AllInOnePartner": {
    "title_line1": "كل ما يحتاجه عملك.",
    "title_line2": "شريك واحد موثوق.",
    "cap_website": "تطوير المواقع",
    "cap_mobile": "تطبيقات الموبايل",
    "cap_ai": "حلول الذكاء الاصطناعي",
    "cap_seo": "تحسين محركات البحث",
    "cap_marketing": "التسويق الرقمي",
    "cap_paid": "الإعلانات المدفوعة",
    "cap_branding": "العلامات التجارية",
    "cap_platforms": "منصات الأعمال",
    "cap_automation": "الأتمتة",
    "cap_photo": "التصوير والفيديو",
    "cap_consulting": "استشارات الأعمال"
  }
};

updateJson('messages/en.json', en);
updateJson('messages/ar.json', ar);
console.log('Translations updated 2.');
