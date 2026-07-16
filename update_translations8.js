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
    "founder2_name": "Amer Badraldeen",
    "founder2_role": "Founder",
    "founder2_desc": "With a strong background in strategic partnerships and operational management, Amer brings a wealth of experience to ensure successful project delivery and business growth.",
    "founder2_phone": "+963 991 829 993",
    "founder2_email": "amer@threedigitsoftware.com"
  }
};

const ar = {
  "AboutPage": {
    "founder2_name": "عامر بدر الدين",
    "founder2_role": "المؤسس",
    "founder2_desc": "بخلفية قوية في الشراكات الاستراتيجية وإدارة العمليات، يجلب عامر خبرة واسعة لضمان التسليم الناجح للمشاريع ونمو الأعمال.",
    "founder2_phone": "+963 991 829 993",
    "founder2_email": "amer@threedigitsoftware.com"
  }
};

updateJson('messages/en.json', en);
updateJson('messages/ar.json', ar);
console.log('Translations updated 8.');
