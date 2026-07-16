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
    "founder3_name": "Hasan Fattouh",
    "founder3_role": "Business Development Representative (Dubai)",
    "founder3_desc": "Hasan drives our business development initiatives in Dubai, building strong client relationships and expanding our footprint in the Middle East market.",
    "founder3_phone": "+971 50 776 2943",
    "founder3_email": "hassan@threedigitsoftware.com"
  }
};

const ar = {
  "AboutPage": {
    "founder3_name": "حسن فتوح",
    "founder3_role": "ممثل تطوير الأعمال (دبي)",
    "founder3_desc": "يقود حسن مبادرات تطوير الأعمال في دبي، ويبني علاقات قوية مع العملاء ويوسع وجودنا في سوق الشرق الأوسط.",
    "founder3_phone": "+971 50 776 2943",
    "founder3_email": "hassan@threedigitsoftware.com"
  }
};

updateJson('messages/en.json', en);
updateJson('messages/ar.json', ar);
console.log('Translations updated 9.');
