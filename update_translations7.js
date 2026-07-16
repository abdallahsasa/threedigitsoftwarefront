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
  "AboutPage": {
    "title": "About Three Digit Software",
    "description": "Three Digit Software is a software development and digital growth company that helps businesses design, build, launch, and scale reliable digital products. We work across websites, mobile applications, business platforms, e-commerce systems, AI automation, and digital growth.",
    "leadership": "Our Leadership",
    "founder_name": "Abdullah Alsasa",
    "founder_role": "Founder & CEO",
    "founder_desc": "With extensive experience in building scalable software systems and leading digital transformation initiatives, Abdullah founded Three Digit Software to bridge the gap between business strategy and technical execution.",
    "phone": "+90 544 106 0703"
  }
};

const ar = {
  "AboutPage": {
    "title": "عن ثري ديجيت للبرمجيات",
    "description": "ثري ديجيت للبرمجيات هي شركة تطوير برمجيات ونمو رقمي تساعد الشركات في تصميم وبناء وإطلاق وتوسيع منتجات رقمية موثوقة. نعمل في مجالات المواقع الإلكترونية، تطبيقات الجوال، منصات الأعمال، أنظمة التجارة الإلكترونية، أتمتة الذكاء الاصطناعي، والنمو الرقمي.",
    "leadership": "قيادتنا",
    "founder_name": "عبد الله الساسة",
    "founder_role": "المؤسس والمدير التنفيذي",
    "founder_desc": "بخيرة واسعة في بناء أنظمة البرمجيات القابلة للتطوير وقيادة مبادرات التحول الرقمي، أسس عبد الله ثري ديجيت للبرمجيات لسد الفجوة بين استراتيجية الأعمال والتنفيذ التقني.",
    "phone": "+90 544 106 0703"
  }
};

updateJson('messages/en.json', en);
updateJson('messages/ar.json', ar);
console.log('Translations updated 7.');
