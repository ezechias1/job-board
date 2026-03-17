/* ==============================
   HireWave — Job Board App
   ============================== */

// ---------- MOCK DATA ----------
const jobs = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    company: "Takealot",
    location: "Cape Town",
    salary: [75, 95],
    type: "Full-time",
    level: "Senior",
    posted: "2026-03-15",
    description: "Join South Africa's largest e-commerce platform to build the next generation of our customer-facing web experience. You'll work on our React-based storefront, optimise performance, and mentor junior developers.",
    requirements: [
      "5+ years of frontend development experience",
      "Expert-level JavaScript/TypeScript and React",
      "Experience with performance optimisation and Core Web Vitals",
      "Familiarity with micro-frontend architectures",
      "Strong understanding of accessible, responsive design"
    ],
    perks: ["Medical aid", "Annual bonus", "Remote Fridays", "Learning budget"],
    email: "careers@takealot.com"
  },
  {
    id: 2,
    title: "Backend Engineer (Java/Kotlin)",
    company: "Discovery",
    location: "Johannesburg",
    salary: [70, 90],
    type: "Hybrid",
    level: "Mid",
    posted: "2026-03-14",
    description: "Discovery is looking for a Backend Engineer to help scale our Vitality platform. You'll design and build microservices handling millions of daily health and fitness events from wearable devices across Africa.",
    requirements: [
      "3-5 years with Java or Kotlin",
      "Experience with Spring Boot and microservices",
      "Familiarity with event-driven architecture (Kafka)",
      "Understanding of CI/CD pipelines",
      "SQL and NoSQL database experience"
    ],
    perks: ["Vitality membership", "Hybrid working", "Share options", "Gym access"],
    email: "tech-hiring@discovery.co.za"
  },
  {
    id: 3,
    title: "DevOps / Platform Engineer",
    company: "Naspers",
    location: "Cape Town",
    salary: [85, 110],
    type: "Full-time",
    level: "Senior",
    posted: "2026-03-13",
    description: "As a Platform Engineer at Naspers, you'll build and maintain the infrastructure that powers products used by billions globally. Work with Kubernetes, Terraform, and multi-cloud environments at unprecedented scale.",
    requirements: [
      "5+ years in DevOps or platform engineering",
      "Deep experience with Kubernetes and Docker",
      "Terraform/Pulumi for infrastructure as code",
      "AWS and/or GCP certifications preferred",
      "Strong scripting skills (Python, Bash)"
    ],
    perks: ["International travel", "Equity", "Flexible hours", "Home office stipend"],
    email: "talent@naspers.com"
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "FNB",
    location: "Johannesburg",
    salary: [65, 85],
    type: "Hybrid",
    level: "Mid",
    posted: "2026-03-12",
    description: "FNB's Advanced Analytics team needs a Data Scientist to develop machine learning models for credit scoring, fraud detection, and personalised banking experiences for over 8 million customers.",
    requirements: [
      "MSc in Statistics, Mathematics, or Computer Science",
      "3+ years in a data science role",
      "Proficiency in Python and SQL",
      "Experience with ML frameworks (scikit-learn, XGBoost, TensorFlow)",
      "Knowledge of banking regulations is a plus"
    ],
    perks: ["Performance bonus", "Flexi-time", "Study leave", "Staff banking rates"],
    email: "data-careers@fnb.co.za"
  },
  {
    id: 5,
    title: "Mobile Developer (Flutter)",
    company: "Vodacom",
    location: "Johannesburg",
    salary: [60, 80],
    type: "Full-time",
    level: "Mid",
    posted: "2026-03-11",
    description: "Build the future of mobile connectivity. Vodacom is seeking a Flutter developer to work on our My Vodacom super app, serving 40+ million subscribers across multiple African markets.",
    requirements: [
      "3+ years of mobile development experience",
      "Strong Flutter/Dart skills with published apps",
      "Experience with RESTful APIs and GraphQL",
      "Understanding of mobile CI/CD (Fastlane, Codemagic)",
      "Prior experience with fintech features a bonus"
    ],
    perks: ["Device allowance", "Free data plan", "Annual conference", "Wellness days"],
    email: "techcareers@vodacom.co.za"
  },
  {
    id: 6,
    title: "Cloud Solutions Architect",
    company: "Standard Bank",
    location: "Johannesburg",
    salary: [95, 120],
    type: "Hybrid",
    level: "Lead",
    posted: "2026-03-10",
    description: "Lead cloud transformation at Africa's largest bank. Design enterprise-grade solutions on Azure and AWS, set architectural standards, and guide teams through migration of critical banking systems.",
    requirements: [
      "8+ years in software architecture",
      "AWS and/or Azure Solutions Architect certification",
      "Experience in financial services",
      "Strong stakeholder management skills",
      "Security-first design mindset"
    ],
    perks: ["Company car allowance", "Bonus structure", "Executive development", "Private healthcare"],
    email: "architecture@standardbank.co.za"
  },
  {
    id: 7,
    title: "Junior Full-Stack Developer",
    company: "OfferZen",
    location: "Cape Town",
    salary: [30, 45],
    type: "Full-time",
    level: "Junior",
    posted: "2026-03-16",
    description: "Kickstart your tech career at OfferZen, the platform built for developers by developers. Work across our Ruby on Rails backend and React frontend while learning from some of SA's top engineers.",
    requirements: [
      "0-2 years professional experience",
      "Computer Science degree or bootcamp graduate",
      "Familiarity with Ruby, JavaScript, or Python",
      "Eagerness to learn and grow",
      "Portfolio or GitHub profile"
    ],
    perks: ["Mentorship programme", "Learning days", "Snacks & coffee", "Remote flexibility"],
    email: "careers@offerzen.com"
  },
  {
    id: 8,
    title: "Cybersecurity Analyst",
    company: "MTN",
    location: "Johannesburg",
    salary: [70, 90],
    type: "Full-time",
    level: "Mid",
    posted: "2026-03-09",
    description: "Protect Africa's largest telco. MTN's Security Operations Centre needs an analyst to monitor threats, respond to incidents, and harden defences across infrastructure serving 280+ million subscribers.",
    requirements: [
      "3+ years in cybersecurity or SOC environment",
      "CISSP, CEH, or equivalent certification",
      "Experience with SIEM tools (Splunk, QRadar)",
      "Knowledge of network protocols and firewall management",
      "Incident response experience"
    ],
    perks: ["Certification sponsorship", "On-call allowance", "Medical aid", "Annual bonus"],
    email: "infosec-careers@mtn.com"
  },
  {
    id: 9,
    title: "UX/UI Designer",
    company: "Superbalist",
    location: "Cape Town",
    salary: [50, 70],
    type: "Remote",
    level: "Mid",
    posted: "2026-03-14",
    description: "Shape the shopping experience for millions. Design intuitive interfaces for Superbalist's web and mobile platforms, run user research, and work closely with engineers to ship pixel-perfect features.",
    requirements: [
      "3+ years of product design experience",
      "Expert in Figma and prototyping tools",
      "Strong portfolio demonstrating e-commerce or app design",
      "Data-informed design approach",
      "Understanding of design systems"
    ],
    perks: ["Remote-first", "Staff discount", "Design conference budget", "Wellness stipend"],
    email: "design@superbalist.com"
  },
  {
    id: 10,
    title: "Machine Learning Engineer",
    company: "Naspers",
    location: "Stellenbosch",
    salary: [90, 115],
    type: "Hybrid",
    level: "Senior",
    posted: "2026-03-08",
    description: "Work on recommendation systems and NLP models that power global consumer internet products. Deploy models at scale using MLOps best practices across Naspers' portfolio of companies.",
    requirements: [
      "MSc/PhD in Computer Science or related field",
      "5+ years building production ML systems",
      "Deep experience with PyTorch or TensorFlow",
      "Familiarity with MLflow, Kubeflow, or similar",
      "Strong software engineering fundamentals"
    ],
    perks: ["Research time", "GPU cluster access", "International collaboration", "Equity"],
    email: "ml-team@naspers.com"
  },
  {
    id: 11,
    title: "Site Reliability Engineer",
    company: "Takealot",
    location: "Cape Town",
    salary: [80, 100],
    type: "Full-time",
    level: "Senior",
    posted: "2026-03-07",
    description: "Keep South Africa's busiest e-commerce site running smoothly during Blue Dot Sales and every day in between. Improve reliability, automate toil, and build observability into everything.",
    requirements: [
      "4+ years in SRE or infrastructure roles",
      "Strong Linux systems administration",
      "Experience with Prometheus, Grafana, ELK stack",
      "Programming ability in Go or Python",
      "On-call experience and incident management"
    ],
    perks: ["On-call compensation", "Latest tech stack", "Team retreats", "Flexible working"],
    email: "sre@takealot.com"
  },
  {
    id: 12,
    title: "Product Manager — Digital Banking",
    company: "TymeBank",
    location: "Johannesburg",
    salary: [75, 95],
    type: "Hybrid",
    level: "Senior",
    posted: "2026-03-06",
    description: "Drive product strategy for TymeBank's savings and transactional products. Use data to prioritise the roadmap, work with engineering squads, and help bring affordable banking to millions of South Africans.",
    requirements: [
      "5+ years in product management",
      "Experience with digital/financial products",
      "Strong analytical and SQL skills",
      "Excellent communication and stakeholder skills",
      "Lean/agile methodology experience"
    ],
    perks: ["Startup culture", "Equity options", "Flexible hours", "Impact-driven work"],
    email: "product@tymebank.co.za"
  },
  {
    id: 13,
    title: "iOS Developer (Swift)",
    company: "Discovery",
    location: "Johannesburg",
    salary: [65, 85],
    type: "Full-time",
    level: "Mid",
    posted: "2026-03-05",
    description: "Build the Discovery app ecosystem used daily by millions. Work with SwiftUI, Combine, and Core Data to deliver smooth, performant health and insurance experiences on Apple devices.",
    requirements: [
      "3+ years native iOS development",
      "Strong Swift and SwiftUI skills",
      "Published App Store apps",
      "Experience with Core Data and networking",
      "Unit and UI testing experience"
    ],
    perks: ["Latest Apple hardware", "Vitality perks", "Agile teams", "Annual bonus"],
    email: "ios-team@discovery.co.za"
  },
  {
    id: 14,
    title: "QA Automation Engineer",
    company: "Entelect",
    location: "Pretoria",
    salary: [50, 70],
    type: "Remote",
    level: "Mid",
    posted: "2026-03-04",
    description: "Entelect builds software for major corporates. We need a QA Automation Engineer to design test frameworks, write robust automated test suites, and champion quality across client projects.",
    requirements: [
      "3+ years in test automation",
      "Experience with Selenium, Playwright, or Cypress",
      "Knowledge of API testing (Postman, REST Assured)",
      "CI/CD pipeline integration",
      "ISTQB certification is a plus"
    ],
    perks: ["Client variety", "Tech community events", "Training budget", "Work from anywhere"],
    email: "join@entelect.co.za"
  },
  {
    id: 15,
    title: "Technical Lead (Python/Django)",
    company: "Yoco",
    location: "Cape Town",
    salary: [85, 105],
    type: "Hybrid",
    level: "Lead",
    posted: "2026-03-03",
    description: "Lead a squad of backend engineers building the payment infrastructure that powers 200,000+ small businesses across South Africa. Own technical decisions and drive engineering excellence.",
    requirements: [
      "7+ years in backend development",
      "Deep Python/Django expertise",
      "Experience leading engineering teams",
      "Knowledge of payment systems and PCI-DSS",
      "System design and architecture skills"
    ],
    perks: ["Equity", "Yoco card reader", "Team offsites", "Parental leave"],
    email: "engineering@yoco.com"
  },
  {
    id: 16,
    title: "Graduate Software Engineer",
    company: "Amazon (Cape Town)",
    location: "Cape Town",
    salary: [40, 55],
    type: "Full-time",
    level: "Junior",
    posted: "2026-03-17",
    description: "Launch your career at one of the world's top tech companies. Amazon's Cape Town office works on AWS core services. As a graduate, you'll join a team building infrastructure used by millions worldwide.",
    requirements: [
      "BSc/BEng in Computer Science or similar",
      "Strong fundamentals in data structures and algorithms",
      "Proficiency in at least one language (Java, Python, C++)",
      "Problem-solving mindset",
      "Graduating in 2026"
    ],
    perks: ["Relocation package", "Stock units", "Day-one benefits", "Mentorship"],
    email: "university-recruiting@amazon.com"
  },
  {
    id: 17,
    title: "Blockchain Developer",
    company: "Luno",
    location: "Cape Town",
    salary: [80, 105],
    type: "Remote",
    level: "Senior",
    posted: "2026-03-02",
    description: "Build decentralised finance infrastructure at Africa's leading crypto exchange. Work on smart contracts, custodial systems, and cross-chain integrations serving millions of users.",
    requirements: [
      "4+ years in software development",
      "Experience with Solidity, Rust, or Go",
      "Understanding of blockchain consensus mechanisms",
      "Security-first development practices",
      "DeFi protocol knowledge is a bonus"
    ],
    perks: ["Crypto allowance", "Remote-first", "Annual retreat", "Learning budget"],
    email: "engineering@luno.com"
  }
];

// ---------- DOM REFS ----------
const searchInput = document.getElementById('searchInput');
const jobGrid = document.getElementById('jobGrid');
const noResults = document.getElementById('noResults');
const resultsCount = document.getElementById('resultsCount');
const filterToggle = document.getElementById('filterToggle');
const sidebar = document.getElementById('sidebar');
const filterCount = document.getElementById('filterCount');
const clearFilters = document.getElementById('clearFilters');
const filterLocation = document.getElementById('filterLocation');
const filterSalary = document.getElementById('filterSalary');
const filterExperience = document.getElementById('filterExperience');
const salaryValue = document.getElementById('salaryValue');
const sortSelect = document.getElementById('sortSelect');
const modalOverlay = document.getElementById('modalOverlay');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

// ---------- HELPERS ----------
function daysAgo(dateStr) {
  const diff = Math.floor((new Date() - new Date(dateStr)) / 86400000);
  if (diff === 0) return 'Today';
  if (diff === 1) return 'Yesterday';
  return `${diff} days ago`;
}

function formatSalary(range) {
  return `R${range[0]}k - R${range[1]}k`;
}

function getTypeClass(type) {
  if (type === 'Remote') return 'tag-remote';
  return 'tag-type';
}

// ---------- STATS ----------
function updateStats(filtered) {
  const companies = new Set(filtered.map(j => j.company));
  const remoteCount = filtered.filter(j => j.type === 'Remote').length;
  const avgSalary = filtered.length
    ? Math.round(filtered.reduce((s, j) => s + (j.salary[0] + j.salary[1]) / 2, 0) / filtered.length)
    : 0;

  animateNumber('statJobs', filtered.length);
  animateNumber('statCompanies', companies.size);
  animateNumber('statRemote', remoteCount);
  document.getElementById('statAvgSalary').textContent = `R${avgSalary}k`;
}

function animateNumber(id, target) {
  const el = document.getElementById(id);
  const current = parseInt(el.textContent) || 0;
  if (current === target) return;
  const step = target > current ? 1 : -1;
  const duration = 400;
  const steps = Math.abs(target - current);
  const interval = Math.max(duration / steps, 16);
  let val = current;
  const timer = setInterval(() => {
    val += step;
    el.textContent = val;
    if (val === target) clearInterval(timer);
  }, interval);
}

// ---------- FILTERS ----------
function getActiveFilters() {
  const types = [...document.querySelectorAll('.filter-type:checked')].map(c => c.value);
  const location = filterLocation.value;
  const minSalary = parseInt(filterSalary.value);
  const experience = filterExperience.value;
  const search = searchInput.value.trim().toLowerCase();
  return { types, location, minSalary, experience, search };
}

function countActiveFilters() {
  const f = getActiveFilters();
  let count = 0;
  if (f.types.length) count += f.types.length;
  if (f.location) count++;
  if (f.minSalary > 0) count++;
  if (f.experience) count++;
  return count;
}

function applyFilters() {
  const f = getActiveFilters();
  let filtered = [...jobs];

  // Search
  if (f.search) {
    filtered = filtered.filter(j => {
      const haystack = `${j.title} ${j.company} ${j.description} ${j.location} ${j.type}`.toLowerCase();
      return f.search.split(/\s+/).every(word => haystack.includes(word));
    });
  }

  // Type
  if (f.types.length) {
    filtered = filtered.filter(j => f.types.includes(j.type));
  }

  // Location
  if (f.location) {
    if (f.location === 'Remote') {
      filtered = filtered.filter(j => j.type === 'Remote');
    } else {
      filtered = filtered.filter(j => j.location === f.location);
    }
  }

  // Salary
  if (f.minSalary > 0) {
    filtered = filtered.filter(j => j.salary[0] >= f.minSalary);
  }

  // Experience
  if (f.experience) {
    filtered = filtered.filter(j => j.level === f.experience);
  }

  // Sort
  const sort = sortSelect.value;
  switch (sort) {
    case 'newest':
      filtered.sort((a, b) => new Date(b.posted) - new Date(a.posted));
      break;
    case 'salary-high':
      filtered.sort((a, b) => b.salary[1] - a.salary[1]);
      break;
    case 'salary-low':
      filtered.sort((a, b) => a.salary[0] - b.salary[0]);
      break;
    case 'company':
      filtered.sort((a, b) => a.company.localeCompare(b.company));
      break;
  }

  renderJobs(filtered);
  updateStats(filtered);

  // Update filter count badge
  const active = countActiveFilters();
  if (active > 0) {
    filterCount.textContent = active;
    filterCount.style.display = 'inline';
  } else {
    filterCount.style.display = 'none';
  }
}

// ---------- RENDER ----------
function renderJobs(list) {
  if (list.length === 0) {
    jobGrid.innerHTML = '';
    noResults.style.display = 'block';
    resultsCount.textContent = 'No jobs found';
    return;
  }

  noResults.style.display = 'none';
  resultsCount.textContent = `Showing ${list.length} job${list.length !== 1 ? 's' : ''}`;

  jobGrid.innerHTML = list.map(job => `
    <article class="job-card" data-id="${job.id}">
      <div class="card-header">
        <div class="card-title-area">
          <h2 class="card-title">${job.title}</h2>
          <span class="card-company">${job.company}</span>
        </div>
        <span class="card-salary">${formatSalary(job.salary)}</span>
      </div>
      <div class="card-meta">
        <span class="tag ${getTypeClass(job.type)}">${job.type}</span>
        <span class="tag tag-location">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          ${job.location}
        </span>
        <span class="tag">${job.level}</span>
      </div>
      <p class="card-desc">${job.description}</p>
      <div class="card-footer">
        <span class="card-posted">${daysAgo(job.posted)}</span>
        <span class="card-apply">View details
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </span>
      </div>
    </article>
  `).join('');

  // Attach click handlers
  document.querySelectorAll('.job-card').forEach(card => {
    card.addEventListener('click', () => {
      const job = jobs.find(j => j.id === parseInt(card.dataset.id));
      if (job) openModal(job);
    });
  });
}

// ---------- MODAL ----------
function openModal(job) {
  modalBody.innerHTML = `
    <div class="modal-badge-row">
      <span class="tag ${getTypeClass(job.type)}">${job.type}</span>
      <span class="tag tag-location">${job.location}</span>
      <span class="tag">${job.level}</span>
    </div>
    <h2 class="modal-title">${job.title}</h2>
    <p class="modal-company">${job.company}</p>

    <div class="modal-details">
      <div class="modal-detail-item">
        <label>Salary Range</label>
        <span style="color: var(--secondary)">${formatSalary(job.salary)} / year</span>
      </div>
      <div class="modal-detail-item">
        <label>Location</label>
        <span>${job.location}, South Africa</span>
      </div>
      <div class="modal-detail-item">
        <label>Job Type</label>
        <span>${job.type}</span>
      </div>
      <div class="modal-detail-item">
        <label>Posted</label>
        <span>${daysAgo(job.posted)}</span>
      </div>
    </div>

    <div class="modal-section">
      <h3>About the Role</h3>
      <p>${job.description}</p>
    </div>

    <div class="modal-section">
      <h3>Requirements</h3>
      <ul>
        ${job.requirements.map(r => `<li>${r}</li>`).join('')}
      </ul>
    </div>

    <div class="modal-section">
      <h3>Perks &amp; Benefits</h3>
      <div style="display:flex;flex-wrap:wrap;gap:8px;">
        ${job.perks.map(p => `<span class="tag">${p}</span>`).join('')}
      </div>
    </div>

    <div class="modal-actions">
      <a href="mailto:${job.email}?subject=Application: ${encodeURIComponent(job.title)}&body=${encodeURIComponent(`Hi ${job.company} team,\n\nI'd like to apply for the ${job.title} position listed on HireWave.\n\nPlease find my CV attached.\n\nKind regards`)}" class="btn btn-secondary">Apply Now</a>
      <button class="btn btn-outline" onclick="closeModal()">Save for Later</button>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ---------- EVENTS ----------
// Search — real-time with debounce
let searchTimer;
searchInput.addEventListener('input', () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(applyFilters, 200);
});

document.getElementById('searchBtn').addEventListener('click', applyFilters);

// Filter changes
document.querySelectorAll('.filter-type').forEach(cb => {
  cb.addEventListener('change', applyFilters);
});
filterLocation.addEventListener('change', applyFilters);
filterExperience.addEventListener('change', applyFilters);
sortSelect.addEventListener('change', applyFilters);

// Salary slider
filterSalary.addEventListener('input', () => {
  const val = parseInt(filterSalary.value);
  salaryValue.textContent = val === 0 ? 'Any' : `R${val}k+`;
  applyFilters();
});

// Clear filters
clearFilters.addEventListener('click', () => {
  searchInput.value = '';
  document.querySelectorAll('.filter-type').forEach(cb => cb.checked = false);
  filterLocation.value = '';
  filterSalary.value = 0;
  salaryValue.textContent = 'Any';
  filterExperience.value = '';
  sortSelect.value = 'newest';
  applyFilters();
  // Close mobile sidebar
  sidebar.classList.remove('open');
});

// Mobile filter toggle
filterToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

// Close sidebar on outside click (mobile)
document.addEventListener('click', (e) => {
  if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && e.target !== filterToggle && !filterToggle.contains(e.target)) {
    sidebar.classList.remove('open');
  }
});

// Modal close
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ---------- INIT ----------
applyFilters();
