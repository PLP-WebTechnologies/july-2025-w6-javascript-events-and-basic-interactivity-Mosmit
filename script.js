// ====================
// Part 1: Event Handling
// ====================

// Cell hover effect
const cellImage = document.getElementById("cellImage");
const cellStatus = document.getElementById("cellStatus");

cellImage.addEventListener("mouseover", () => {
  cellStatus.textContent = "🧬 Cancerous Cell Detected!";
  cellStatus.style.color = "red";
});
cellImage.addEventListener("mouseout", () => {
  cellStatus.textContent = "Healthy Cell";
  cellStatus.style.color = "green";
});

// Mode toggle (Healthy <-> Tumor mode)
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("tumor-mode");
  modeToggle.textContent = 
    document.body.classList.contains("tumor-mode") 
    ? "Switch to Healthy Mode" 
    : "Switch to Tumor Mode";
});

// ====================
// Part 2: Interactive Features
// ====================

// Cell division simulation
let divisionCount = 0;
const divideBtn = document.getElementById("divideBtn");
const divisionDisplay = document.getElementById("divisionCount");

divideBtn.addEventListener("click", () => {
  divisionCount++;
  divisionDisplay.textContent = divisionCount;
  if (divisionCount > 10) {
    divisionDisplay.textContent += " (Uncontrolled Growth 🚨)";
  }
});

// Therapy response dropdown
const therapySelect = document.getElementById("therapySelect");
const therapyInfo = document.getElementById("therapyInfo");

therapySelect.addEventListener("change", () => {
  switch (therapySelect.value) {
    case "chemo":
      therapyInfo.textContent = "💊 Chemotherapy: Targets fast-dividing cells.";
      break;
    case "immuno":
      therapyInfo.textContent = "🛡️ Immunotherapy: Boosts immune system to fight cancer.";
      break;
    case "targeted":
      therapyInfo.textContent = "🎯 Targeted Therapy: Blocks specific molecules in cancer cells.";
      break;
    default:
      therapyInfo.textContent = "";
  }
});

// ====================
// Part 3: Form Validation
// ====================

const form = document.getElementById("researchForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Phone validation
  const phone = document.getElementById("phone").value.trim();
  const phonePattern = /^[0-9]{10,15}$/;
  if (!phone.match(phonePattern)) {
    document.getElementById("phoneError").textContent = "Enter a valid phone (10-15 digits).";
    valid = false;
  } else {
    document.getElementById("phoneError").textContent = "";
  }

  // Biomarker validation
  const biomarker = document.getElementById("biomarker").value.trim();
  const biomarkerPattern = /^[A-Z0-9]+$/;
  if (!biomarker.match(biomarkerPattern)) {
    document.getElementById("biomarkerError").textContent = "Use uppercase letters/numbers only.";
    valid = false;
  } else {
    document.getElementById("biomarkerError").textContent = "";
  }

  // Success message
  if (valid) {
    document.getElementById("formSuccess").textContent = "✅ Data submitted successfully!";
    form.reset();
  } else {
    document.getElementById("formSuccess").textContent = "";
  }
});

// ====================
// Bonus Feature: Cancer Facts Generator
// ====================

const facts = [
  "Cancer is caused by uncontrolled cell growth.",
  "About 5–10% of cancers are linked to inherited genetic mutations.",
  "Immunotherapy works by helping the immune system recognize cancer cells.",
  "Lifestyle factors like smoking and diet can influence cancer risk.",
  "Metastasis is the spread of cancer to other parts of the body.",
  "Breast cancer is the most common cancer worldwide.",
  "Tumor suppressor genes act as the brakes of cell growth."
];

const factBtn = document.getElementById("factBtn");
const factDisplay = document.getElementById("factDisplay");

factBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factDisplay.textContent = "💡 " + facts[randomIndex];
});
