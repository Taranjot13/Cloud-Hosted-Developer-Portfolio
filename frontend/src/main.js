// Hero avatar modal logic
window.addEventListener('DOMContentLoaded', () => {
  const avatar = document.getElementById('heroAvatar');
  const modal = document.getElementById('avatarModal');
  const closeBtn = document.querySelector('.avatar-modal-close');
  if (avatar && modal && closeBtn) {
    avatar.addEventListener('click', () => {
      modal.style.display = 'flex';
    });
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });
  }
});
// Skill topic modal logic
const skillTopicData = {
  cloud: {
    name: 'Cloud & DevOps',
    skills: 'AWS (EC2, S3, IAM, CLI), Docker, Linux, Bash',
    projects: [
      { name: 'Cloud-Based Web Hosting (AWS)', url: 'https://github.com/Taranjot13/smart-task-scheduler' },
      { name: 'Cloud-Hosted Developer Portfolio', url: 'https://github.com/Taranjot13/Cloud-Hosted-Developer-Portfolio' }
    ]
  },
  backend: {
    name: 'Backend',
    skills: 'Node.js, Express, Flask, REST APIs',
    projects: [
      { name: 'Expense Tracker API', url: 'https://github.com/Taranjot13/expense-tracker-api' },
      { name: 'Cloud-Based Web Hosting (AWS)', url: 'https://github.com/Taranjot13/smart-task-scheduler' },
      { name: 'Cloud-Hosted Developer Portfolio', url: 'https://github.com/Taranjot13/Cloud-Hosted-Developer-Portfolio' }
    ]
  },
  frontend: {
    name: 'Frontend',
    skills: 'HTML, CSS, JavaScript',
    projects: [
      { name: 'CafeConnect', url: 'https://github.com/Taranjot13/CafeConnect' },
      { name: 'Cloud-Hosted Developer Portfolio', url: 'https://github.com/Taranjot13/Cloud-Hosted-Developer-Portfolio' }
    ]
  },
  databases: {
    name: 'Databases',
    skills: 'MongoDB, MySQL',
    projects: [
      { name: 'Expense Tracker API', url: 'https://github.com/Taranjot13/expense-tracker-api' }
    ]
  },
  tools: {
    name: 'Tools & Scripting',
    skills: 'Python (basics), Java, Git, GitHub',
    projects: [
      { name: 'Linux User Manager', url: 'https://github.com/Taranjot13/linux-user-manager' },
      { name: 'Cloud-Hosted Developer Portfolio', url: 'https://github.com/Taranjot13/Cloud-Hosted-Developer-Portfolio' }
    ]
  }
};

window.addEventListener('DOMContentLoaded', () => {
  // Make skill tiles clickable
  document.querySelectorAll('.skill-tile').forEach(tile => {
    tile.addEventListener('click', function() {
      const topic = this.getAttribute('data-topic');
      const modal = document.getElementById('skillModal');
      const modalTopic = document.getElementById('modalTopic');
      const modalSkills = document.getElementById('modalSkills');
      const modalProjects = document.getElementById('modalProjects');
      if (skillTopicData[topic]) {
        modalTopic.textContent = skillTopicData[topic].name;
        modalSkills.innerHTML = `<strong>Skills:</strong> ${skillTopicData[topic].skills}`;
        modalProjects.innerHTML = '<strong>Projects:</strong> ' + skillTopicData[topic].projects.map(p => `<a href="${p.url}" target="_blank">${p.name}</a>`).join(', ');
        modal.style.display = 'flex';
      }
    });
  });
  const closeBtn = document.querySelector('.skill-modal-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      document.getElementById('skillModal').style.display = 'none';
    });
  }
  // Close modal on outside click
  document.getElementById('skillModal').addEventListener('click', function(e) {
    if (e.target === this) this.style.display = 'none';
  });
});
// Animate skills list items with staggered fade-in
window.addEventListener('DOMContentLoaded', () => {
  const skills = document.querySelectorAll('.skills-list.anim-skills li');
  skills.forEach((li, idx) => {
    li.style.animationDelay = (0.2 + idx * 0.18) + 's';
  });
});
// main.js - Add interactivity if needed
// Loader fade out
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.style.opacity = '0';
    setTimeout(() => { if (loader) loader.style.display = 'none'; }, 600);
  }, 1200);
});

// Back to top button
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Contact Me button smooth scroll
const contactMeBtn = document.getElementById('contactMeBtn');
if (contactMeBtn) {
  contactMeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const contact = document.getElementById('contact');
    if (contact) contact.scrollIntoView({ behavior: 'smooth' });
  });
}
// Animated particles background using tsparticles
window.addEventListener('DOMContentLoaded', () => {
  if (window.tsParticles) {
    tsParticles.load('tsparticles', {
      fpsLimit: 60,
      background: { color: 'transparent' },
      particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: ['#ffe082', '#1a73e8', '#b3e5fc'] },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: { enable: true, minimumValue: 1 } },
        move: { enable: true, speed: 1.2, direction: 'none', outModes: 'out' },
        links: { enable: true, color: '#ffe082', distance: 120, opacity: 0.2, width: 1 }
      },
      detectRetina: true
    });
  }
});

// Typewriter effect for hero tagline (if not pure CSS)
window.addEventListener('DOMContentLoaded', () => {
  const tw = document.querySelector('.typewriter');
  if (tw) {
    const text = tw.textContent;
    tw.textContent = '';
    let i = 0;
    function type() {
      if (i < text.length) {
        tw.textContent += text.charAt(i);
        i++;
        setTimeout(type, 60);
      }
    }
    type();
  }
});
// Contact form alert
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message! (Form handling to be implemented)');
  this.reset();
});

// Fade-in animation for sections on scroll
function revealOnScroll() {
  const fadeEls = document.querySelectorAll('.fade-in, section');
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
