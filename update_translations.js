const fs = require('fs');

function updateJson(file, data) {
  let content = {};
  if (fs.existsSync(file)) {
    try {
      content = JSON.parse(fs.readFileSync(file, 'utf8'));
    } catch (e) {}
  }
  
  for (const [key, value] of Object.entries(data)) {
    if (!content[key]) content[key] = {};
    Object.assign(content[key], value);
  }
  
  fs.writeFileSync(file, JSON.stringify(content, null, 2));
}

const en = {
  "Header": {
    "nav_services": "Services",
    "nav_work": "Work",
    "nav_about": "About",
    "nav_process": "Process",
    "nav_insights": "Insights",
    "start_project": "Start a Project"
  },
  "Footer": {
    "description": "Three Digit Software is a premium software engineering firm building scalable websites, enterprise platforms, mobile applications, and AI solutions for industry leaders globally.",
    "company": "Company",
    "about_us": "About Us",
    "our_process": "Our Process",
    "contact": "Contact",
    "services": "Services",
    "web_development": "Web Development",
    "mobile_apps": "Mobile Apps",
    "business_platforms": "Business Platforms",
    "ai_automation": "AI & Automation",
    "explore": "Explore",
    "portfolio": "Portfolio",
    "industries": "Industries",
    "technologies": "Technologies",
    "insights": "Insights",
    "legal": "Legal",
    "privacy_policy": "Privacy Policy",
    "terms_of_service": "Terms of Service",
    "cookie_policy": "Cookie Policy",
    "all_rights_reserved": "Three Digit Software. All rights reserved.",
    "syria": "Syria",
    "dubai": "Dubai",
    "turkey": "Turkey"
  }
};

const ar = {
  "Header": {
    "nav_services": "الخدمات",
    "nav_work": "أعمالنا",
    "nav_about": "من نحن",
    "nav_process": "آلية العمل",
    "nav_insights": "المقالات",
    "start_project": "ابدأ مشروعك"
  },
  "Footer": {
    "description": "ثري ديجيت سوفتوير هي شركة هندسة برمجيات متميزة تبني مواقع إلكترونية قابلة للتطوير، ومنصات للمؤسسات، وتطبيقات هواتف محمولة، وحلول ذكاء اصطناعي لرواد الصناعة عالمياً.",
    "company": "الشركة",
    "about_us": "من نحن",
    "our_process": "آلية العمل",
    "contact": "تواصل معنا",
    "services": "الخدمات",
    "web_development": "تطوير الويب",
    "mobile_apps": "تطبيقات الموبايل",
    "business_platforms": "منصات الأعمال",
    "ai_automation": "الذكاء الاصطناعي والأتمتة",
    "explore": "استكشف",
    "portfolio": "أعمالنا",
    "industries": "الصناعات",
    "technologies": "التقنيات",
    "insights": "المقالات",
    "legal": "قانوني",
    "privacy_policy": "سياسة الخصوصية",
    "terms_of_service": "شروط الخدمة",
    "cookie_policy": "سياسة ملفات تعريف الارتباط",
    "all_rights_reserved": "ثري ديجيت سوفتوير. جميع الحقوق محفوظة.",
    "syria": "سوريا",
    "dubai": "دبي",
    "turkey": "تركيا"
  }
};

updateJson('messages/en.json', en);
updateJson('messages/ar.json', ar);
console.log('Translations updated.');
