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
    "founder4_name": "Othman Al Sasa",
    "founder4_role": "Marketing Director",
    "founder4_desc": "Othman spearheads our marketing strategies, driving brand growth and ensuring our digital products reach the right audience with maximum impact.",
    "founder4_phone": "+963 933 506 070",
    "founder4_email": "othman@threedigitsoftware.com"
  }
};

const ar = {
  "AboutPage": {
    "founder4_name": "عثمان الساسة",
    "founder4_role": "مدير التسويق",
    "founder4_desc": "يقود عثمان استراتيجياتنا التسويقية، ويدفع نمو علامتنا التجارية ويضمن وصول منتجاتنا الرقمية إلى الجمهور المناسب بأقصى تأثير.",
    "founder4_phone": "+963 933 506 070",
    "founder4_email": "othman@threedigitsoftware.com"
  }
};

updateJson('messages/en.json', en);
updateJson('messages/ar.json', ar);
console.log('Translations updated 10.');
