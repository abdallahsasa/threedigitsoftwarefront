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
  "WorkDetails": {
    "case_study": "Case Study",
    "client": "Client:",
    "industry": "Industry:",
    "year": "Year:",
    "project_overview": "Project Overview",
    "the_challenge": "The Challenge",
    "the_solution": "The Solution",
    "the_results": "The Results",
    "visit_live_website": "Visit Live Website"
  },
  "ServiceDetails": {
    "subtitle": "Expert solutions and implementation tailored to your business.",
    "overview": "Overview",
    "problems_we_solve": "Problems We Solve",
    "our_capabilities": "Our Capabilities",
    "our_process": "Our Process"
  }
};

const ar = {
  "WorkDetails": {
    "case_study": "دراسة حالة",
    "client": "العميل:",
    "industry": "القطاع:",
    "year": "السنة:",
    "project_overview": "نظرة عامة على المشروع",
    "the_challenge": "التحدي",
    "the_solution": "الحل",
    "the_results": "النتائج",
    "visit_live_website": "زيارة الموقع المباشر"
  },
  "ServiceDetails": {
    "subtitle": "حلول خبيرة وتنفيذ مخصص لعملك.",
    "overview": "نظرة عامة",
    "problems_we_solve": "مشاكل نحلها",
    "our_capabilities": "قدراتنا",
    "our_process": "عمليتنا"
  }
};

updateJson('messages/en.json', en);
updateJson('messages/ar.json', ar);
console.log('Translations updated 6.');
