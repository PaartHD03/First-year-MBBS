
// ==========================================
// SUHANI'S LITTLE STUDY WORLD ❤️
// Created with love by Paarth
// ==========================================


// ==========================================
// 1. PASSWORD PROTECTION
// ==========================================

const PASSWORD = "SuPa";

const passwordScreen = document.getElementById("passwordScreen");
const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("passwordInput");
const passwordError = document.getElementById("passwordError");
const website = document.getElementById("website");


function openWebsite() {
  passwordScreen.style.display = "none";
  website.hidden = false;
}


if (sessionStorage.getItem("suhaniAccess") === "true") {
  openWebsite();
}


passwordForm.addEventListener("submit", function(event) {

  event.preventDefault();

  if (passwordInput.value === PASSWORD) {

    sessionStorage.setItem("suhaniAccess", "true");

    passwordError.textContent = "";

    openWebsite();

  } else {

    passwordError.textContent =
      "Oops! That's not the secret password. Try again, Puchu! 💗";

    passwordInput.value = "";
    passwordInput.focus();

  }

});


// ==========================================
// 2. COMPLETE FIRST MBBS SYLLABUS
// ==========================================

const subjects = [

  // ========================================
  // ANATOMY
  // ========================================

  {
    name: "Anatomy",
    icon: "🦴",
    description: "Let's understand the beautiful structure of the human body.",
    resources: [
      ["TeachMeAnatomy", "https://teachmeanatomy.info/"],
      ["Kenhub", "https://www.kenhub.com/en/library/anatomy"],
      ["Histology Leeds", "https://www.histology.leeds.ac.uk/"],
      ["UNSW Embryology", "https://embryology.med.unsw.edu.au/embryology/index.php/Main_Page"]
    ],

    units: [

      ["General anatomy & locomotor system", [

        "Anatomical position, planes, terms and movements",
        "Cells, tissues, epithelium and connective tissue",
        "Cartilage, bone, ossification and joints",
        "Upper limb: pectoral region, axilla, arm, forearm and hand",
        "Brachial plexus, upper-limb vessels and applied anatomy",
        "Lower limb: gluteal region, thigh, leg and foot",
        "Lumbosacral plexus, lower-limb vessels and applied anatomy",
        "Osteology: identify and describe major bones"

      ]],

      ["Thorax", [

        "Thoracic wall, intercostal spaces and diaphragm",
        "Pleura and lungs; bronchopulmonary segments",
        "Mediastinum and pericardium",
        "Heart: chambers, valves, coronary circulation and conducting system",
        "Great vessels, thoracic duct and autonomic nerves"

      ]],

      ["Abdomen & pelvis", [

        "Anterior abdominal wall, inguinal canal and hernias",
        "Peritoneum and abdominal viscera",
        "Stomach, intestines, liver, gallbladder, pancreas and spleen",
        "Kidneys, ureters, posterior abdominal wall and vessels",
        "Pelvic walls, pelvic organs, perineum and pelvic floor"

      ]],

      ["Head, neck & neuroanatomy", [

        "Scalp, face, parotid region and triangles of neck",
        "Pharynx, larynx, thyroid, oral and nasal cavities",
        "Orbit, eyeball, ear and cranial nerves",
        "Meninges, ventricles and cerebrospinal fluid",
        "Cerebrum, brainstem, cerebellum and spinal cord",
        "Ascending/descending tracts and blood supply of brain"

      ]],

      ["Histology, embryology & genetics", [

        "Microscope basics and identification of tissues",
        "Histology of major organs and systems",
        "Gametogenesis, fertilisation, implantation and placenta",
        "Early embryonic development and folding",
        "Development of organ systems and congenital anomalies",
        "Chromosomes, inheritance, karyotyping and basic genetics"

      ]]

    ]
  },


  // ========================================
  // PHYSIOLOGY
  // ========================================

  {
    name: "Physiology",
    icon: "❤️",
    description: "Let's discover how our body works every single day.",
    resources: [
      ["OpenStax A&P", "https://openstax.org/subjects/anatomy-and-physiology"],
      ["Ninja Nerd", "https://www.ninjanerd.org/"],
      ["Khan Academy", "https://www.khanacademy.org/science/biology"]
    ],

    units: [

      ["General, cell & nerve-muscle physiology", [

        "Homeostasis, feedback and body-fluid compartments",
        "Cell membrane transport and resting membrane potential",
        "Action potential, synapses and neurotransmitters",
        "Skeletal, smooth and cardiac muscle physiology",
        "Neuromuscular junction, reflexes and sensory receptors"

      ]],

      ["Blood & immunity", [

        "Composition and functions of blood; plasma proteins",
        "Haemoglobin, RBC formation and anaemia",
        "WBCs, immunity and inflammation basics",
        "Platelets, haemostasis and coagulation",
        "ABO/Rh blood groups and transfusion basics"

      ]],

      ["Cardiovascular system", [

        "Cardiac muscle and properties of myocardium",
        "Cardiac cycle, heart sounds and pressure changes",
        "ECG basics and cardiac output",
        "Blood pressure, pulse and regulation of circulation",
        "Microcirculation, regional circulation, shock and exercise"

      ]],

      ["Respiratory system", [

        "Mechanics of breathing and lung volumes/capacities",
        "Gas exchange and transport of oxygen/carbon dioxide",
        "Regulation of respiration and respiratory centres",
        "Hypoxia, cyanosis and pulmonary function tests"

      ]],

      ["Gastrointestinal & renal physiology", [

        "GI motility, secretions and digestion",
        "Absorption; functions of liver and pancreas",
        "Renal blood flow and glomerular filtration",
        "Tubular transport, urine concentration and micturition",
        "Body fluids, electrolytes, buffers and acid-base balance"

      ]],

      ["Endocrine, reproductive & special senses", [

        "Pituitary, thyroid, adrenal and pancreatic hormones",
        "Calcium regulation and endocrine feedback",
        "Male and female reproductive physiology",
        "Menstrual cycle, pregnancy and lactation",
        "Vision, hearing, taste, smell and vestibular function",
        "Temperature regulation, exercise and environmental physiology"

      ]]

    ]
  },


  // ========================================
  // BIOCHEMISTRY
  // ========================================

  {
    name: "Biochemistry",
    icon: "🧬",
    description: "Let's understand the chemistry that keeps us alive.",
    resources: [
      ["NCBI Bookshelf", "https://www.ncbi.nlm.nih.gov/books/"],
      ["Ninja Nerd", "https://www.ninjanerd.org/"],
      ["LibreTexts Biochemistry", "https://bio.libretexts.org/Bookshelves/Biochemistry"]
    ],

    units: [

      ["Cell biology, biomolecules & enzymes", [

        "Cell organelles, membranes and cellular organisation",
        "Carbohydrates: structure, properties and functions",
        "Amino acids and proteins: structure and functions",
        "Lipids and lipoproteins: structure and functions",
        "Nucleotides and nucleic acids",
        "Enzyme classification, kinetics, inhibition and regulation",
        "Vitamins, minerals and coenzymes"

      ]],

      ["Nutrition, digestion & metabolism", [

        "Balanced diet, energy needs and nutritional assessment",
        "Digestion and absorption of carbohydrates, proteins and fats",
        "Glycolysis, gluconeogenesis and glycogen metabolism",
        "Citric acid cycle, ETC and oxidative phosphorylation",
        "Fatty-acid oxidation and lipid synthesis",
        "Cholesterol, lipoproteins and ketone bodies",
        "Amino-acid metabolism and urea cycle"

      ]],

      ["Molecular biology & clinical biochemistry", [

        "DNA replication, transcription and translation",
        "Gene regulation, mutations and inherited disorders",
        "Hormones and biochemical regulation",
        "Liver and kidney function tests",
        "Blood glucose, diabetes tests and lipid profile",
        "Clinical enzymes and cardiac/pancreatic markers",
        "Water, electrolytes, buffers and acid-base disorders"

      ]]

    ]
  }

];


// ==========================================
// 3. SAVE AND LOAD STUDY PROGRESS
// ==========================================

const STORAGE_KEY = "studybloom-first-mbbs-progress-v1";

let completed = {};

try {

  completed = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

} catch (error) {

  completed = {};

}


// ==========================================
// 4. GET ALL TOPICS
// ==========================================

function getTopicId(subjectIndex, unitIndex, topicIndex) {

  return `${subjectIndex}-${unitIndex}-${topicIndex}`;

}


function getAllTopics() {

  const topics = [];

  subjects.forEach((subject, subjectIndex) => {

    subject.units.forEach((unit, unitIndex) => {

      unit[1].forEach((topic, topicIndex) => {

        topics.push({

          id: getTopicId(subjectIndex, unitIndex, topicIndex),

          subject: subject.name,

          title: topic

        });

      });

    });

  });

  return topics;

}


const allTopics = getAllTopics();


// ==========================================
// 5. UPDATE OVERALL PROGRESS
// ==========================================

function updateStats() {

  const done = allTopics.filter(topic =>
    completed[topic.id]
  ).length;

  const total = allTopics.length;

  const percentage = total
    ? Math.round((done / total) * 100)
    : 0;


  document.getElementById("doneCount").textContent = done;

  document.getElementById("totalCount").textContent = total;

  document.getElementById("percent").textContent = percentage + "%";


  document.getElementById("overallProgress").style.width =
    percentage + "%";


  const message = document.getElementById("progressMessage");

  if (percentage === 100) {

    message.textContent =
      "YOU DID IT, FUTURE DOCTOR! I'M SO PROUD OF YOU! ❤️";

  } else if (percentage >= 75) {

    message.textContent =
      "Look how far you've come! Keep going, Suhani! 🌸";

  } else if (percentage >= 50) {

    message.textContent =
      "You're halfway there. I believe in you! 💗";

  } else if (percentage >= 25) {

    message.textContent =
      "Amazing progress, Puchu. One step at a time!";

  } else if (done > 0) {

    message.textContent =
      "Your journey has started. Keep going! ❤️";

  } else {

    message.textContent =
      "Your journey starts with one little step. ❤️";

  }

}


// ==========================================
// 6. SAVE PROGRESS
// ==========================================

function saveProgress() {

  try {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(completed)
    );

  } catch (error) {

    console.warn("Progress could not be saved.");

  }

  updateStats();

  renderSubjects();

}


// ==========================================
// 7. DISPLAY SUBJECT CARDS
// ==========================================

function renderSubjects() {

  const container = document.getElementById("subjectCards");

  container.innerHTML = "";


  subjects.forEach((subject, subjectIndex) => {

    const topics = allTopics.filter(topic =>
      topic.subject === subject.name
    );

    const done = topics.filter(topic =>
      completed[topic.id]
    ).length;

    const percentage = Math.round(
      (done / topics.length) * 100
    );


    const card = document.createElement("button");

    card.className = "subject-card";

    card.type = "button";

    card.innerHTML = `

      <div class="subject-icon">${subject.icon}</div>

      <h3>${subject.name}</h3>

      <p>${subject.description}</p>

      <div class="subject-progress">

        <div class="progress-track">

          <div
            class="progress-fill"
            style="width:${percentage}%"
          ></div>

        </div>

        <div class="progress-label">

          <span>${done} / ${topics.length} completed</span>

          <span>${percentage}%</span>

        </div>

      </div>

      <div class="study-button-text">
        ${done === topics.length ? "Revise again ↗" : "Let's study →"}
      </div>

    `;


    card.addEventListener("click", function() {

      selectSubject(subjectIndex);

    });


    container.appendChild(card);

  });

}


// ==========================================
// 8. SELECT A SUBJECT
// ==========================================

let selectedSubject = null;


function selectSubject(subjectIndex) {

  selectedSubject = subjectIndex;

  renderSubjects();

  renderTopics();

  document.getElementById("studyArea").scrollIntoView({

    behavior: "smooth",

    block: "start"

  });

}


// ==========================================
// 9. DISPLAY CHAPTERS AND TOPICS
// ==========================================

function renderTopics() {

  const container = document.getElementById("studyArea");

  if (selectedSubject === null) return;


  const subject = subjects[selectedSubject];

  let html = `

    <div class="selected-subject">

      <div class="selected-subject-top">

        <div class="selected-subject-icon">
          ${subject.icon}
        </div>

        <div>

          <p class="small-heading">LET'S LEARN SOMETHING NEW</p>

          <h2>${subject.name}</h2>

          <p>${subject.description}</p>

        </div>

      </div>

      <div class="chapter-intro">
        Select a chapter and tick the topics as you finish them. 💗
      </div>

  `;


  subject.units.forEach((unit, unitIndex) => {

    const topics = unit[1];

    const done = topics.filter((topic, topicIndex) => {

      const id = getTopicId(
        selectedSubject,
        unitIndex,
        topicIndex
      );

      return Boolean(completed[id]);

    }).length;


    html += `

      <div class="chapter-card">

        <div class="chapter-heading">

          <div>

            <span class="chapter-number">
              CHAPTER ${unitIndex + 1}
            </span>

            <h3>${unit[0]}</h3>

            <p>${done} of ${topics.length} topics completed</p>

          </div>

          <span class="chapter-count">
            ${done}/${topics.length}
          </span>

        </div>

        <div class="chapter-topics">

    `;


    topics.forEach((topic, topicIndex) => {

      const id = getTopicId(
        selectedSubject,
        unitIndex,
        topicIndex
      );

      const isDone = Boolean(completed[id]);


      html += `

        <label class="topic-item ${isDone ? "completed" : ""}">

          <input
            type="checkbox"
            data-topic-id="${id}"
            ${isDone ? "checked" : ""}
          >

          <span>${topic}</span>

          <span class="check-icon">
            ${isDone ? "✓" : ""}
          </span>

        </label>

      `;

    });


    html += `

        </div>

      </div>

    `;

  });


  // SUBJECT RESOURCES

  html += `

    <div class="subject-resources">

      <h3>Need a little extra help? 💗</h3>

      <p>Here are some useful websites for ${subject.name}.</p>

      <div class="unit-links">

  `;


  subject.resources.forEach(resource => {

    html += `

      <a
        href="${resource[1]}"
        target="_blank"
        rel="noopener"
      >
        ${resource[0]} ↗
      </a>

    `;

  });


  html += `

      </div>

    </div>

  `;


  html += `</div>`;


  container.innerHTML = html;


  // ADD CHECKBOX EVENTS

  container.querySelectorAll("[data-topic-id]").forEach(input => {

    input.addEventListener("change", function() {

      toggleTopic(
        this.dataset.topicId,
        this.checked
      );

    });

  });

}


// ==========================================
// 10. MARK TOPICS COMPLETED
// ==========================================

function toggleTopic(id, isChecked) {

  if (isChecked) {

    completed[id] = true;

  } else {

    delete completed[id];

  }


  saveProgress();

  renderTopics();

}


// ==========================================
// 11. START WEBSITE
// ==========================================

updateStats();

renderSubjects();
