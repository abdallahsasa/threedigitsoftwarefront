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
  "ContactForm": {
    "message_sent_success": "Message sent successfully!",
    "error_occurred": "An error occurred. Please try again.",
    "full_name": "Full Name",
    "email": "Email",
    "subject": "Subject",
    "message": "Message",
    "name_placeholder": "John Doe",
    "email_placeholder": "john@example.com",
    "subject_placeholder": "How can we help?",
    "message_placeholder": "Tell us about your requirements...",
    "sending": "Sending...",
    "send_message": "Send Message"
  },
  "ProjectInquiryForm": {
    "req_received": "Request Received!",
    "thanks_reach_out": "Thank you for reaching out. Our team will review your project details and get back to you shortly.",
    "error_occurred": "An error occurred. Please check the fields and try again.",
    "full_name": "Full Name *",
    "company_name": "Company Name",
    "email": "Email *",
    "phone": "Phone / WhatsApp",
    "project_type": "Project Type",
    "opt_corp_web": "Corporate website",
    "opt_ecom_web": "E-commerce website",
    "opt_custom_web": "Custom web platform",
    "opt_mobile_app": "Mobile application",
    "opt_ai_sol": "AI solution",
    "opt_bus_sys": "Business system",
    "project_desc": "Project Description",
    "budget_range": "Budget Range",
    "opt_b_1": "Under $1,000",
    "opt_b_2": "$1,000–$3,000",
    "opt_b_3": "$3,000–$7,500",
    "opt_b_4": "$7,500–$15,000",
    "opt_b_5": "$15,000+",
    "opt_b_not_sure": "Not sure yet",
    "agree_privacy": "I agree to the privacy policy and consent to having my data processed for this inquiry. *",
    "back": "Back",
    "continue_next_step": "Continue to Next Step",
    "submitting": "Submitting...",
    "submit_request": "Submit Request"
  }
};

const ar = {
  "ContactForm": {
    "message_sent_success": "تم إرسال الرسالة بنجاح!",
    "error_occurred": "حدث خطأ. يرجى المحاولة مرة أخرى.",
    "full_name": "الاسم الكامل",
    "email": "البريد الإلكتروني",
    "subject": "الموضوع",
    "message": "الرسالة",
    "name_placeholder": "جون دو",
    "email_placeholder": "john@example.com",
    "subject_placeholder": "كيف يمكننا المساعدة؟",
    "message_placeholder": "أخبرنا عن متطلباتك...",
    "sending": "جاري الإرسال...",
    "send_message": "إرسال الرسالة"
  },
  "ProjectInquiryForm": {
    "req_received": "تم استلام الطلب!",
    "thanks_reach_out": "شكراً لتواصلك معنا. سيقوم فريقنا بمراجعة تفاصيل مشروعك وسنرد عليك قريباً.",
    "error_occurred": "حدث خطأ. يرجى التحقق من الحقول والمحاولة مرة أخرى.",
    "full_name": "الاسم الكامل *",
    "company_name": "اسم الشركة",
    "email": "البريد الإلكتروني *",
    "phone": "رقم الهاتف / الواتساب",
    "project_type": "نوع المشروع",
    "opt_corp_web": "موقع للشركات",
    "opt_ecom_web": "موقع تجارة إلكترونية",
    "opt_custom_web": "منصة ويب مخصصة",
    "opt_mobile_app": "تطبيق جوال",
    "opt_ai_sol": "حلول الذكاء الاصطناعي",
    "opt_bus_sys": "نظام أعمال",
    "project_desc": "وصف المشروع",
    "budget_range": "نطاق الميزانية",
    "opt_b_1": "أقل من 1,000 دولار",
    "opt_b_2": "1,000 دولار – 3,000 دولار",
    "opt_b_3": "3,000 دولار – 7,500 دولار",
    "opt_b_4": "7,500 دولار – 15,000 دولار",
    "opt_b_5": "15,000+ دولار",
    "opt_b_not_sure": "لست متأكداً بعد",
    "agree_privacy": "أوافق على سياسة الخصوصية وأوافق على معالجة بياناتي لهذا الاستفسار. *",
    "back": "رجوع",
    "continue_next_step": "المتابعة للخطوة التالية",
    "submitting": "جاري الإرسال...",
    "submit_request": "إرسال الطلب"
  }
};

updateJson('messages/en.json', en);
updateJson('messages/ar.json', ar);
console.log('Translations updated 5.');
