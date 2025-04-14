const resumeBtn = document.getElementById("resumeBtn");
const portfolioBtn = document.getElementById("portfolioBtn");
const resumeForm = document.getElementById("resumeForm");
const portfolioForm = document.getElementById("portfolioForm");

resumeBtn.addEventListener("click", () => {
  resumeForm.classList.remove("hidden");
  portfolioForm.classList.add("hidden");
});

portfolioBtn.addEventListener("click", () => {
  portfolioForm.classList.remove("hidden");
  resumeForm.classList.add("hidden");
});

// Optional: handle form submit
resumeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Resume submitted!");
  resumeForm.reset();
});

portfolioForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Portfolio submitted!");
  portfolioForm.reset();
});

document.addEventListener('DOMContentLoaded', () => {
    // Toggle FAQ answers
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      const toggle = question.querySelector('.toggle');
      question.addEventListener('click', () => {
        const isOpen = answer.style.display === 'block';
        answer.style.display = isOpen ? 'none' : 'block';
        toggle.textContent = isOpen ? '+' : '−';
      });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const faqItems = document.querySelectorAll('.faq-item');
      
        faqItems.forEach(item => {
          const question = item.querySelector('.faq-question');
          const icon = question.querySelector('.accordion-icon');
          question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            // Close all items
            faqItems.forEach(i => {
              i.classList.remove('active');
              i.querySelector('.accordion-icon').textContent = 'I';
              i.querySelector('.faq-answer').style.display = 'none';
            });
            // If this item wasn't already active, open it
            if (!isActive) {
              item.classList.add('active');
              icon.textContent = 'I';
              item.querySelector('.faq-answer').style.display = 'block';
            }
          });
        });
      });
      
    // Search functionality
    const faqSearch = document.getElementById('faqSearch');
    faqSearch.addEventListener('input', () => {
      const query = faqSearch.value.toLowerCase();
      faqItems.forEach(item => {
        const question = item.querySelector('.faq-question h3').textContent.toLowerCase();
        const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
        if (question.includes(query) || answer.includes(query)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  
  // Show/hide login and signup forms
document.getElementById("showLogin").addEventListener("click", () => {
  toggleForm("loginForm");
});

document.getElementById("showSignup").addEventListener("click", () => {
  toggleForm("signupForm");
});

document.getElementById("resumeBtn").addEventListener("click", () => {
  toggleForm("resumeForm");
});

document.getElementById("portfolioBtn").addEventListener("click", () => {
  toggleForm("portfolioForm");
});

function toggleForm(formId) {
  const forms = ["loginForm", "signupForm", "resumeForm", "portfolioForm"];
  forms.forEach((id) => {
    document.getElementById(id).classList.add("hidden");
  });
  document.getElementById(formId).classList.remove("hidden");
}
