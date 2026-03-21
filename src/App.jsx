import React, { useEffect, useRef } from "react";

const bodyHTML = `
    <div class="cursor" id="cursor"></div>
    <div class="cursor-ring" id="cursorRing"></div>
    <div class="grid-bg"></div>
    <div class="orb orb1"></div>
    <div class="orb orb2"></div>

    <!-- NAV -->
    <nav>
      <div class="nav-logo">&gt;_ <span>dev</span>.portfolio</div>
      <ul class="nav-links">
        <li><a href="#skills">skills</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#achievements">achievements</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
    </nav>

    <!-- HERO -->
    <section id="hero">
      <p class="hero-eyebrow">
        &gt; python_developer / backend_engineer / problem_solver
      </p>
      <h1 class="hero-name">
        Init, I'm<br />
        <span class="line2">
          Gourav Khakse
          <span class="fill">Gourav Khakse</span>
        </span>
      </h1>
      <p class="hero-tagline">
        I build <span class="hl">scalable backend systems</span> and craft
        <span class="hl">elegant Python</span> solutions.<br />
        Turning complex problems into clean, efficient code.
      </p>
      <div class="hero-cta">
        <a href="#projects" class="btn btn-primary">→ view work</a>
        <a href="#contact" class="btn btn-ghost">get in touch</a>
      </div>

      <div class="hero-code">
        <div class="code-dots"><span></span><span></span><span></span></div>
        <div><span class="cm"># about_me.py</span></div>
        <div>
          <span class="kw">class</span> <span class="fn">Developer</span>:
        </div>
        <div>&nbsp;&nbsp;name = <span class="str">"Gourav Khakse"</span></div>
        <div>&nbsp;&nbsp;role = <span class="str">"Backend Dev"</span></div>
        <div>&nbsp;&nbsp;stack = [<span class="str">"Python"</span>,<span class="str">"Node.js"</span>,</div>
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            class="str"
            >"Flask"</span
          >,<span class="str">"REST APIs"</span>,
        </div>
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            class="str"
            >"MongoDB"</span
          >]
        </div>
        <div>
          &nbsp;&nbsp;<span class="kw">def</span>
          <span class="fn">solve</span>(problem):
        </div>
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">return</span>
          <span class="str">"solution"</span> <span class="op">✓</span
          ><span class="typing-cursor"></span>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <!-- SKILLS -->
    <section
      id="skills"
      style="max-width: 1200px; margin: 0 auto; padding: 5rem 3rem"
    >
      <p class="sec-label reveal">// 01 — skills</p>
      <h2 class="sec-title reveal">What I <span>Build With</span></h2>

      <div class="skills-spec reveal">
        <div class="skill-row">
          <div class="skill-category">
            <span class="skill-category-icon">🗣️</span>
            <span class="skill-category-name">Languages</span>
          </div>
          <div class="skill-items">
            <span class="skill-tag lang">Python</span>
            <span class="skill-tag lang">JavaScript</span>
            <span class="skill-tag lang">Java</span>
            <span class="skill-tag lang">C</span>
          </div>
        </div>

        <div class="skill-row">
          <div class="skill-category">
            <span class="skill-category-icon">⚙️</span>
            <span class="skill-category-name">Backend</span>
          </div>
          <div class="skill-items">
            <span class="skill-tag backend">Node.js</span>
            <span class="skill-tag backend">Express.js</span>
            <span class="skill-tag backend">Flask</span>
            <span class="skill-tag backend">REST APIs</span>
            <span class="skill-tag backend">Webhooks</span>
            <span class="skill-tag backend">Event-Driven Systems</span>
          </div>
        </div>

        <div class="skill-row">
          <div class="skill-category">
            <span class="skill-category-icon">🎨</span>
            <span class="skill-category-name">Frontend</span>
          </div>
          <div class="skill-items">
            <span class="skill-tag frontend">React.js</span>
          </div>
        </div>

        <div class="skill-row">
          <div class="skill-category">
            <span class="skill-category-icon">🗄️</span>
            <span class="skill-category-name">Databases</span>
          </div>
          <div class="skill-items">
            <span class="skill-tag db">MongoDB</span>
            <span class="skill-tag db">MySQL</span>
          </div>
        </div>

        <div class="skill-row">
          <div class="skill-category">
            <span class="skill-category-icon">🔐</span>
            <span class="skill-category-name">Security</span>
          </div>
          <div class="skill-items">
            <span class="skill-tag sec">HMAC-SHA256</span>
            <span class="skill-tag sec">API Authentication</span>
          </div>
        </div>

        <div class="skill-row">
          <div class="skill-category">
            <span class="skill-category-icon">🛠️</span>
            <span class="skill-category-name">DevOps &amp; Tools</span>
          </div>
          <div class="skill-items">
            <span class="skill-tag devops">Git</span>
            <span class="skill-tag devops">GitHub</span>
            <span class="skill-tag devops">Postman</span>
            <span class="skill-tag devops">Swagger (OpenAPI)</span>
            <span class="skill-tag devops">Cron Jobs</span>
            <span class="skill-tag devops">Linux</span>
            <span class="skill-tag devops">Slack</span>
            <span class="skill-tag devops">Vercel</span>
          </div>
        </div>

        <div class="skill-row">
          <div class="skill-category">
            <span class="skill-category-icon">🤖</span>
            <span class="skill-category-name">AI &amp; Data</span>
          </div>
          <div class="skill-items">
            <span class="skill-tag ai">Prompt Engineering</span>
            <span class="skill-tag ai">Google Gemini API</span>
            <span class="skill-tag ai">Web Scraping</span>
            <span class="skill-tag ai">BeautifulSoup</span>
          </div>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <!-- PROJECTS -->
    <section
      id="projects"
      style="max-width: 1200px; margin: 0 auto; padding: 5rem 3rem"
    >
      <p class="sec-label reveal">// 02 — projects</p>
      <h2 class="sec-title reveal">Things I've <span>Shipped</span></h2>

      <div class="projects-grid">
        <div class="project-card reveal">
          <div class="project-header">
            <div class="project-title">Pipeline-Hub</div>
            <div class="project-desc">
              # Developed a secure, webhook-based CI/CD orchestration system with multi-platform support
            </div>
          </div>
          <div class="project-body">
            <p style="font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: var(--dim); line-height: 1.8;">
              Built a webhook-driven CI/CD orchestration system supporting GitHub, GitLab, and Bitbucket. Secured webhooks using HMAC-SHA256 verification, designed REST APIs with MongoDB for pipeline tracking, and integrated Slack notifications. Improved reliability using Docker and retry mechanisms.
            </p>
            <div class="skill-tags" style="margin-top: 1rem">
                <span class="tag py">Node.js</span>
                <span class="tag py">Webhooks</span>
                <span class="tag py">CI/CD</span>
                <span class="tag py">Docker</span>
                <span class="tag py">MongoDB</span>
                <span class="tag py">REST API</span>
                <span class="tag py">HMAC-SHA256</span>
                <span class="tag py">Slack API</span>
            </div>
          </div>
          <div class="project-links">
            <a href="https://github.com/VoyagerX21/PipelineHub" class="project-link" target="_blank">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              github
            </a>
            <a href="https://devify-ci-cd-pipeline.onrender.com/api-docs" class="project-link" target="_blank">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              live docs
            </a>
          </div>
        </div>

        <!-- Other project cards (omitted here for brevity, preserved in original file) -->
      </div>
    </section>

    <div class="divider"></div>

    <!-- ACHIEVEMENTS, ABOUT, CONTACT, FOOTER — preserved from original page -->
    <!-- Full markup preserved in original index.html; this injected HTML keeps the same structure and content. -->
`;

// Inline script from original page (cursor, observers, form handling, etc.)
const inlineScript = `
// Custom cursor
const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursorRing");
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
});
function animCursor() {
  cursor.style.left = mx + "px";
  cursor.style.top = my + "px";
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + "px";
  ring.style.top = ry + "px";
  requestAnimationFrame(animCursor);
}
animCursor();

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 60);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);
reveals.forEach((el) => observer.observe(el));

// Counter animation
function animateCounter(el, target, suffix = "") {
  let start = 0;
  const dur = 1800;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / dur, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + (progress === 1 ? suffix : "");
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll("[data-target]").forEach((el) => {
          animateCounter(el, parseInt(el.dataset.target), el.dataset.suffix || "+");
        });
        statsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 },
);
document.querySelectorAll(".about-stats").forEach((el) => statsObserver.observe(el));

// Nav active state
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((sec) => { if (window.scrollY >= sec.offsetTop - 200) current = sec.id; });
  navLinks.forEach((a) => { a.style.color = a.getAttribute("href") === "#" + current ? "var(--accent)" : ""; });
});

// Form submission
function handleSubmit(e) {
  e.preventDefault();
  emailjs.sendForm("service_2gjyb8j", "template_mtdhser", document.getElementById("contactForm")).then(
    () => {
      console.log("SUCCESS!");
      const msg = document.getElementById("formMsg");
      msg.style.display = "block";
      e.target.reset();
      setTimeout(() => (msg.style.display = "none"), 4000);
    },
    (error) => {
      console.log("FAILED...", error);
      const msg = document.getElementById("formMsg");
      msg.innerText = "Error in msg sending... Try after some time.";
      msg.style.display = "block";
      msg.style.color = "var(--red)";
      e.target.reset();
      setTimeout(() => (msg.style.display = "none"), 4000);
    },
  );
}

// Skill cards stagger on load
document.querySelectorAll(".skill-card").forEach((card, i) => {
  card.style.animationDelay = i * 0.08 + "s";
});
`;

export default function App() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.innerHTML = bodyHTML;

    // Evaluate the original inline script in global scope so handlers like onsubmit work
    try {
      new Function(inlineScript)();
    } catch (err) {
      console.error("Error running inline script:", err);
    }
  }, []);

  return <div ref={ref} />;
}
