// FIRST MBBS SYLLABUS
const subjects = [
  {
    name: "Anatomy",
    icon: "🦴",
    description: "Structure, development and relationships of the human body.",
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

  {
    name: "Physiology",
    icon: "❤️",
    description: "How the human body works and maintains homeostasis.",
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

  {
    name: "Biochemistry",
    icon: "🧬",
    description: "Molecules, pathways and chemical processes behind health and disease.",
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


// SAVE PROGRESS IN THE BROWSER
const STORAGE_KEY = "studybloom-first-mbbs-progress-v1";

let completed = {};

try {
  completed = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
} catch (error) {
  completed = {};
}


// CREATE A UNIQUE ID FOR EVERY TOPIC
function getTopicId(subjectIndex, unitIndex, topicIndex) {
  return `${subjectIndex}-${unitIndex}-${topicIndex}`;
}


// COUNT ALL TOPICS
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


// UPDATE OVERALL PROGRESS
function updateStats() {
  const done = allTopics.filter(topic => completed[topic.id]).length;
  const total = allTopics.length;
  const percentage = total
    ? Math.round((done / total) * 100)
    : 0;

  document.getElementById("doneCount").textContent = done;
  document.getElementById("totalCount").textContent = total;
  document.getElementById("percent").textContent = percentage + "%";
}


// SAVE PROGRESS
function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
  } catch (error) {
    console.warn("Progress could not be saved.");
  }

  updateStats();
  renderSubjects();
}


// DISPLAY SUBJECT CARDS
function renderSubjects() {
  const container = document.getElementById("subjectCards");

  container.innerHTML = subjects.map((subject, subjectIndex) => {
    const topics = allTopics.filter(
      topic => topic.subject === subject.name
    );

    const done = topics.filter(topic => completed[topic.id]).length;
    const percentage = Math.round((done / topics.length) * 100);

    return `
      <article class="subject-card"
        onclick="selectSubject('${subject.name}')">

        <div>${subject.icon}</div>
        <h3>${subject.name}</h3>
        <p>${subject.description}</p>

        <div class="progress-track">
          <div class="progress-fill" style="width:${percentage}%"></div>
        </div>

        <div class="progress-label">
          <span>${done} / ${topics.length} topics</span>
          <span>${percentage}%</span>
        </div>

        <p><b>Tap to study →</b></p>
      </article>
    `;
  }).join("");
}


// CLICKING A SUBJECT CARD FILTERS THE TOPICS
function selectSubject(subjectName) {
  document.getElementById("subjectFilter").value = subjectName;
  renderTopics();

  document.getElementById("topicList").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}


// DISPLAY TOPICS
function renderTopics() {
  const search = document.getElementById("search")
    .value.toLowerCase().trim();

  const subjectFilter = document.getElementById("subjectFilter").value;
  const statusFilter = document.getElementById("statusFilter").value;

  const container = document.getElementById("topicList");
  let html = "";

  subjects.forEach((subject, subjectIndex) => {

    if (
      subjectFilter !== "all" &&
      subjectFilter !== subject.name
    ) {
      return;
    }

    subject.units.forEach((unit, unitIndex) => {

      const visibleTopics = unit[1].map((topic, topicIndex) => {
        return {
          title: topic,
          id: getTopicId(subjectIndex, unitIndex, topicIndex)
        };
      }).filter(topic => {

        const matchesSearch =
          !search ||
          `${subject.name} ${unit[0]} ${topic.title}`
            .toLowerCase()
            .includes(search);

        const isDone = Boolean(completed[topic.id]);

        const matchesStatus =
          statusFilter === "all" ||
          (statusFilter === "done" && isDone) ||
          (statusFilter === "pending" && !isDone);

        return matchesSearch && matchesStatus;
      });

      if (visibleTopics.length === 0) return;

      const topicHTML = visibleTopics.map(topic => `
        <label class="topic-item ${completed[topic.id] ? "completed" : ""}">
          <input
            type="checkbox"
            ${completed[topic.id] ? "checked" : ""}
            onchange="toggleTopic('${topic.id}', this.checked)"
          >
          <span>${topic.title}</span>
        </label>
      `).join("");

      const resourceHTML = subject.resources.map(resource => `
        <a href="${resource[1]}" target="_blank" rel="noopener">
          ${resource[0]} ↗
        </a>
      `).join("");

      html += `
        <article class="topic-card">

          <button class="topic-heading" onclick="toggleUnit(this)">
            <span>
              ${subject.icon} ${unit[0]}
              <small style="display:block;color:#788294;font-weight:normal">
                ${subject.name} · ${visibleTopics.length} topics
              </small>
            </span>
            <span>＋</span>
          </button>

          <div class="topic-body">
            ${topicHTML}

            <div class="unit-links">
              ${resourceHTML}
            </div>
          </div>

        </article>
      `;
    });
  });

  container.innerHTML = html ||
    `<div class="resource-card">
      No topics found. Try another search or filter.
    </div>`;

  // Automatically open matching topics when searching
  if (search) {
    document.querySelectorAll(".topic-card").forEach(card => {
      card.classList.add("open");
    });
  }
}


// OPEN OR CLOSE A UNIT
function toggleUnit(button) {
  const card = button.closest(".topic-card");
  card.classList.toggle("open");

  const symbol = button.querySelector("span:last-child");
  symbol.textContent = card.classList.contains("open") ? "−" : "＋";
}


// MARK A TOPIC AS COMPLETED
function toggleTopic(id, isChecked) {
  completed[id] = isChecked;

  if (!isChecked) {
    delete completed[id];
  }

  saveProgress();
  renderTopics();
}


// SEARCH AND FILTER EVENTS
document.getElementById("search").addEventListener("input", renderTopics);

document.getElementById("subjectFilter")
  .addEventListener("change", renderTopics);

document.getElementById("statusFilter")
  .addEventListener("change", renderTopics);


// START THE WEBSITE
updateStats();
renderSubjects();
renderTopics();
