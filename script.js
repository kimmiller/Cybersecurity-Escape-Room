
const rooms = [
  {
    title: "Room 1: Password Security",
    question: "Which of the following is the strongest password?",
    options: [
      "123456",
      "Password1",
      "Th!5Is$Str0ng"
    ],
    correct: 2,
    feedback: [
      "❌ '123456' is too common and easily guessed.",
      "❌ 'Password1' is predictable and weak.",
      "✅ 'Th!5Is$Str0ng' uses complexity and symbols for strength."
    ],
    tip: "Use a mix of letters, numbers, and symbols for strong passwords."
  },
  {
    title: "Room 2: Phishing Awareness",
    question: "What is a sign of a phishing email?",
    options: [
      "Unexpected attachments",
      "Professional language",
      "Known sender"
    ],
    correct: 0,
    feedback: [
      "✅ Unexpected attachments can be malicious.",
      "❌ Professional language doesn't guarantee legitimacy.",
      "❌ Known senders can be spoofed."
    ],
    tip: "Always verify unexpected emails, even from known contacts."
  },
  {
    title: "Room 3: Device Security",
    question: "What should you do before connecting to public Wi-Fi?",
    options: [
      "Disable firewall",
      "Use a VPN",
      "Turn off antivirus"
    ],
    correct: 1,
    feedback: [
      "❌ Disabling firewall exposes your device.",
      "✅ VPN encrypts your connection for safety.",
      "❌ Antivirus should remain active."
    ],
    tip: "VPNs protect your data on unsecured networks."
  },
  {
    title: "Room 4: Software Updates",
    question: "Why are software updates important?",
    options: [
      "They slow down your device",
      "They fix security vulnerabilities",
      "They change the interface"
    ],
    correct: 1,
    feedback: [
      "❌ Updates may improve performance.",
      "✅ Updates patch security holes.",
      "❌ Interface changes are secondary."
    ],
    tip: "Keep software updated to stay protected from threats."
  },
  {
    title: "Room 5: Social Engineering",
    question: "Which is an example of social engineering?",
    options: [
      "Firewall breach",
      "Phishing call",
      "Malware infection"
    ],
    correct: 1,
    feedback: [
      "❌ Firewall breach is technical.",
      "✅ Phishing calls manipulate people.",
      "❌ Malware is software-based."
    ],
    tip: "Social engineering tricks people into giving up information."
  },
  {
    title: "Room 6: AI Security",
    question: "What is a risk of using AI in cybersecurity?",
    options: [
      "Bias in decision-making",
      "Faster threat detection",
      "Improved user experience"
    ],
    correct: 0,
    feedback: [
      "✅ Bias can lead to unfair or inaccurate outcomes.",
      "❌ Faster detection is a benefit, not a risk.",
      "❌ Improved UX is positive, not risky."
    ],
    tip: "AI systems must be monitored for fairness and accuracy."
  }
];

let currentRoom = 0;

function renderRoom() {
  const room = rooms[currentRoom];
  const container = document.getElementById("room-container");
  container.innerHTML = `
    <h2>${room.title}</h2>
    <p>${room.question}</p>
    ${room.options.map((opt, i) => `<button onclick="checkAnswer(${i})">${opt}</button>`).join("")}
    <details><summary>Show Tip</summary><p>${room.tip}</p></details>
    <div id="feedback"></div>
  `;
}

function checkAnswer(index) {
  const room = rooms[currentRoom];
  const feedbackDiv = document.getElementById("feedback");
  feedbackDiv.innerHTML = `<p>${room.feedback[index]}</p>`;
  if (index === room.correct) {
    setTimeout(() => {
      currentRoom++;
      if (currentRoom < rooms.length) {
        renderRoom();
      } else {
        showCongratulations();
      }
    }, 1500);
  }
}

function showCongratulations() {
  const container = document.getElementById("room-container");
  container.innerHTML = `<div id="congrats">🎉 Congratulations! You've completed the escape room! 🎉</div>`;
}

document.addEventListener("DOMContentLoaded", renderRoom);
