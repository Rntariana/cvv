// ===================
// Preview Different Templates
// ===================
function previewTemplate(name) {
  const cvPreview = document.getElementById("cv-preview");
  cvPreview.innerHTML = generateTemplateHTML(name);
}

let userCVData = {
  name: "John Doe",
  email: "john@example.com",
  phone: "+27 555 123 4567",
  profile: "Motivated professional with 5+ years experience in software engineering, specializing in full-stack development and cloud technologies.",
  experience: [
    { role: "Software Engineer", company: "TechCorp", years: "2020–Present" },
    { role: "Junior Developer", company: "CodeBase", years: "2018–2020" }
  ],
  education: [
    { degree: "BSc Computer Science", school: "University of Cape Town", years: "2014–2017" }
  ]
};

// Update generateTemplateHTML to use userCVData instead of sampleData
function generateTemplateHTML(template) {
  const data = userCVData;

  switch (template) {
    case "Classic CV":
      return `
        <div class="cv classic">
          <h1>${data.name}</h1>
          <p>${data.email} | ${data.phone}</p>
          <h2>Profile</h2><p>${data.profile}</p>
          <h2>Experience</h2>
          <ul>${data.experience.map(e => `<li>${e.role} – ${e.company} (${e.years})</li>`).join("")}</ul>
          <h2>Education</h2>
          <ul>${data.education.map(ed => `<li>${ed.degree}, ${ed.school} (${ed.years})</li>`).join("")}</ul>
        </div>
      `;

    case "Modern Blue":
      return `
        <div class="cv modern-blue">
          <header>
            <h1>${data.name}</h1>
            <p>${data.email} | ${data.phone}</p>
          </header>
          <section><h3>Profile</h3><p>${data.profile}</p></section>
          <section><h3>Experience</h3>${data.experience.map(e => `<p><b>${e.role}</b> – ${e.company} (${e.years})</p>`).join("")}</section>
          <section><h3>Education</h3>${data.education.map(ed => `<p>${ed.degree}, ${ed.school} (${ed.years})</p>`).join("")}</section>
        </div>
      `;

    case "Auckland":
      return `
        <div class="cv auckland">
          <aside>
            <h2>${data.name}</h2>
            <p>${data.email}</p>
            <p>${data.phone}</p>
          </aside>
          <main>
            <h3>Profile</h3><p>${data.profile}</p>
            <h3>Experience</h3>${data.experience.map(e => `<p><b>${e.role}</b> – ${e.company} <small>${e.years}</small></p>`).join("")}
            <h3>Education</h3>${data.education.map(ed => `<p>${ed.degree}, ${ed.school} (${ed.years})</p>`).join("")}
          </main>
        </div>
      `;

    case "Harvard":
      return `
        <div class="cv harvard">
          <header>
            <h1>${data.name}</h1>
            <p>${data.email} | ${data.phone}</p>
          </header>
          <div class="content">
            <h2>Profile</h2><p>${data.profile}</p>
            <h2>Experience</h2><ul>${data.experience.map(e => `<li><b>${e.role}</b> – ${e.company} (${e.years})</li>`).join("")}</ul>
            <h2>Education</h2><ul>${data.education.map(ed => `<li>${ed.degree}, ${ed.school} (${ed.years})</li>`).join("")}</ul>
          </div>
        </div>
      `;

    case "Minimalist":
      return `
        <div class="cv minimalist">
          <h1>${data.name}</h1>
          <p><i>${data.email} | ${data.phone}</i></p>
          <hr>
          <p>${data.profile}</p>
          <h3>Experience</h3><ul>${data.experience.map(e => `<li>${e.role} – ${e.company} (${e.years})</li>`).join("")}</ul>
          <h3>Education</h3><ul>${data.education.map(ed => `<li>${ed.degree}, ${ed.school} (${ed.years})</li>`).join("")}</ul>
        </div>
      `;

    case "Princeton":
      return `
        <div class="cv princeton">
          <h1>${data.name}</h1>
          <p>${data.phone} | ${data.email}</p>
          <h2>Summary</h2><p>${data.profile}</p>
          <h2>Experience</h2>${data.experience.map(e => `<p><b>${e.role}</b>, ${e.company} — ${e.years}</p>`).join("")}
          <h2>Education</h2>${data.education.map(ed => `<p>${ed.degree}, ${ed.school} — ${ed.years}</p>`).join("")}
        </div>
      `;

    case "Cambridge":
      return `
        <div class="cv cambridge">
          <header><h1>${data.name}</h1></header>
          <p>${data.email} | ${data.phone}</p>
          <section><h2>Profile</h2><p>${data.profile}</p></section>
          <section><h2>Experience</h2><ul>${data.experience.map(e => `<li>${e.role} at ${e.company} (${e.years})</li>`).join("")}</ul></section>
          <section><h2>Education</h2><ul>${data.education.map(ed => `<li>${ed.degree}, ${ed.school} (${ed.years})</li>`).join("")}</ul></section>
        </div>
      `;

    case "Oxford":
      return `
        <div class="cv oxford">
          <h1>${data.name}</h1>
          <p><b>Email:</b> ${data.email} | <b>Phone:</b> ${data.phone}</p>
          <div><h2>Profile</h2><p>${data.profile}</p></div>
          <div><h2>Experience</h2>${data.experience.map(e => `<p><b>${e.role}</b> — ${e.company} (${e.years})</p>`).join("")}</div>
          <div><h2>Education</h2>${data.education.map(ed => `<p>${ed.degree}, ${ed.school} (${ed.years})</p>`).join("")}</div>
        </div>
      `;

    case "Creative":
      return `
        <div class="cv creative">
          <h1>${data.name}</h1>
          <p>${data.email} | ${data.phone}</p>
          <h2>🌟 Profile</h2><p>${data.profile}</p>
          <h2>💼 Experience</h2>${data.experience.map(e => `<p>✨ ${e.role} – ${e.company} (${e.years})</p>`).join("")}
          <h2>🎓 Education</h2>${data.education.map(ed => `<p>📘 ${ed.degree}, ${ed.school} (${ed.years})</p>`).join("")}
        </div>
      `;

    case "Professional":
      return `
        <div class="cv professional">
          <header>
            <h1>${data.name}</h1>
            <p>${data.phone} | ${data.email}</p>
          </header>
          <h2>Profile</h2><p>${data.profile}</p>
          <h2>Experience</h2>${data.experience.map(e => `<p><b>${e.role}</b>, ${e.company} (${e.years})</p>`).join("")}
          <h2>Education</h2>${data.education.map(ed => `<p>${ed.degree}, ${ed.school}, ${ed.years}</p>`).join("")}
        </div>
      `;

    case "Elegant":
      return `
        <div class="cv elegant">
          <h1>${data.name}</h1>
          <p><i>${data.email} | ${data.phone}</i></p>
          <hr>
          <h2>Profile</h2><p>${data.profile}</p>
          <h2>Experience</h2>${data.experience.map(e => `<p>${e.role} – ${e.company}, ${e.years}</p>`).join("")}
          <h2>Education</h2>${data.education.map(ed => `<p>${ed.degree}, ${ed.school}, ${ed.years}</p>`).join("")}
        </div>
      `;

    case "ATS-Friendly":
      return `
        <div class="cv ats">
          <h1>${data.name}</h1>
          <p>${data.email} | ${data.phone}</p>
          <h2>Summary</h2><p>${data.profile}</p>
          <h2>Work Experience</h2><ul>${data.experience.map(e => `<li>${e.role} - ${e.company} (${e.years})</li>`).join("")}</ul>
          <h2>Education</h2><ul>${data.education.map(ed => `<li>${ed.degree}, ${ed.school}, ${ed.years}</li>`).join("")}</ul>
        </div>
      `;

    case "Creative Modern":
      return `
        <div class="cv creative-modern">
          <h1>${data.name}</h1>
          <p>${data.email} | ${data.phone}</p>
          <h3>Profile</h3><p>${data.profile}</p>
          <h3>Experience</h3>${data.experience.map(e => `<p>👉 ${e.role} – ${e.company} (${e.years})</p>`).join("")}
          <h3>Education</h3>${data.education.map(ed => `<p>📖 ${ed.degree}, ${ed.school} (${ed.years})</p>`).join("")}
        </div>
      `;

    case "Simple":
      return `
        <div class="cv simple">
          <h1>${data.name}</h1>
          <p>${data.email} | ${data.phone}</p>
          <p>${data.profile}</p>
          <h3>Experience</h3><ul>${data.experience.map(e => `<li>${e.role} – ${e.company} (${e.years})</li>`).join("")}</ul>
          <h3>Education</h3><ul>${data.education.map(ed => `<li>${ed.degree}, ${ed.school} (${ed.years})</li>`).join("")}</ul>
        </div>
      `;

    default:
      return `<div class="cv"><h3>${template}</h3><p>Preview coming soon.</p></div>`;
  }
}
// ===================
// Download CV as PDF
// ===================
document.getElementById("download-pdf").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF("p", "pt", "a4");

  // Get CV HTML content
  const cvElement = document.getElementById("cv-preview");

  // Convert HTML -> Canvas -> PDF
  doc.html(cvElement, {
    callback: function (pdf) {
      pdf.save("My_CV.pdf"); // Downloads as "My_CV.pdf"
    },
    margin: [20, 20, 20, 20],
    x: 20,
    y: 20,
    width: 550, // fit to A4
    windowWidth: 800
  });
});

// ===================
// Template Gallery Logic
// ===================
const templates = [
  "Classic CV",
  "Modern Blue",
  "Auckland",
  "Harvard",
  "Minimalist",
  "Princeton",
  "Cambridge",
  "Oxford",
  "Creative",
  "Professional",
  "Elegant",
  "ATS-Friendly",
  "Creative Modern",
  "Simple"
];

function renderTemplateGallery() {
  const templateList = document.getElementById("template-list");
  templateList.innerHTML = "";
  templates.forEach(name => {
    const btn = document.createElement("button");
    btn.textContent = name;
    btn.className = "template-btn";
    btn.onclick = () => previewTemplate(name);
    templateList.appendChild(btn);
  });
}

// Render gallery on page load
window.addEventListener("DOMContentLoaded", () => {
  renderTemplateGallery();
  // Optionally preview the first template by default
  previewTemplate(templates[0]);
});

// ===================
// Auth Modal Logic
// ===================
function openAuthModal(type) {
  document.getElementById("auth-modal").style.display = "block";
  document.getElementById("auth-title").textContent = type;
  document.getElementById("auth-form").setAttribute("data-type", type.toLowerCase());
  document.getElementById("auth-body").innerHTML = type === "Register"
    ? `<label>Name: <input type="text" required></label><br>
       <label>Email: <input type="email" required></label><br>
       <label>Password: <input type="password" required></label>`
    : `<label>Email: <input type="email" required></label><br>
       <label>Password: <input type="password" required></label>`;
}

function closeAuthModal() {
  document.getElementById("auth-modal").style.display = "none";
}

// Show modal on button click
document.getElementById("login-btn").onclick = () => openAuthModal("Login");
document.getElementById("register-btn").onclick = () => openAuthModal("Register");
document.getElementById("logout-btn").onclick = () => {
  // Simulate logout
  alert("Logged out!");
  document.getElementById("logout-btn").style.display = "none";
  document.getElementById("login-btn").style.display = "inline-block";
  document.getElementById("register-btn").style.display = "inline-block";
};

// Replace the onsubmit handler for auth-form:
document.getElementById("auth-form").onsubmit = async function(e) {
  e.preventDefault();
  const type = this.getAttribute("data-type");
  const inputs = this.querySelectorAll("input");
  let body = {};
  inputs.forEach(input => body[input.type === "text" ? "name" : input.type] = input.value);

  let url = type === "register" ? "http://localhost:3001/api/register" : "http://localhost:3001/api/login";
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);

    closeAuthModal();
    document.getElementById("login-btn").style.display = "none";
    document.getElementById("register-btn").style.display = "none";
    document.getElementById("logout-btn").style.display = "inline-block";
    document.getElementById("user-info").textContent = `Welcome, ${data.name}!`;
    alert(data.message);
  } catch (err) {
    alert(err.message);
  }
};

// Example: Hide login/register and show logout after login/register
document.getElementById("auth-form").onsubmit = function(e) {
  e.preventDefault();
  closeAuthModal();
  document.getElementById("login-btn").style.display = "none";
  document.getElementById("register-btn").style.display = "none";
  document.getElementById("logout-btn").style.display = "inline-block";

  // After successful login/register
  document.getElementById("user-info").textContent = "Welcome, John Doe!";
};

window.onclick = function(event) {
  if (event.target == document.getElementById("auth-modal")) {
    closeAuthModal();
  }
};

// Handle CV form submission
document.getElementById("cv-form").onsubmit = function(e) {
  e.preventDefault();
  userCVData.name = document.getElementById("cv-name").value;
  userCVData.email = document.getElementById("cv-email").value;
  userCVData.phone = document.getElementById("cv-phone").value;
  userCVData.profile = document.getElementById("cv-profile").value;

  // Parse experience
  const expRaw = document.getElementById("cv-experience").value.split(",");
  userCVData.experience = expRaw.map(str => {
    const [role, company, years] = str.split("@");
    return { role: role?.trim(), company: company?.trim(), years: years?.trim() };
  });

  // Parse education
  const eduRaw = document.getElementById("cv-education").value.split(",");
  userCVData.education = eduRaw.map(str => {
    const [degree, school, years] = str.split("@");
    return { degree: degree?.trim(), school: school?.trim(), years: years?.trim() };
  });

  // Update preview
  previewTemplate(document.querySelector(".template-btn.selected")?.textContent || templates[0]);
};

// Optionally, pre-fill the form with default data on page load
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("cv-name").value = userCVData.name;
  document.getElementById("cv-email").value = userCVData.email;
  document.getElementById("cv-phone").value = userCVData.phone;
  document.getElementById("cv-profile").value = userCVData.profile;
  document.getElementById("cv-experience").value = userCVData.experience.map(e => `${e.role}@${e.company}@${e.years}`).join(", ");
  document.getElementById("cv-education").value = userCVData.education.map(ed => `${ed.degree}@${ed.school}@${ed.years}`).join(", ");
});

// ===================
// User CV Data
// ===================
