const progressBar = document.getElementById("progress-bar");
const percentage = document.getElementById("percentage");
const scanStatus = document.getElementById("scan-status");
const terminal = document.getElementById("terminal-output");
const timer = document.getElementById("timer");

let progress = 0;
let seconds = 59;

const messages = [
    "Initializing visual security simulation...",
    "Connecting to simulated network...",
    "Analyzing fictional device profile...",
    "Scanning simulated system directories...",
    "Checking simulated security protocols...",
    "Running visual threat analysis...",
    "WARNING: SIMULATED THREAT DETECTED",
    "Analyzing fictional network traffic...",
    "Running secondary diagnostic...",
    "SYSTEM ALERT: SIMULATION ACTIVE"
];

function addLog(message, type = "") {
    const line = document.createElement("div");
    line.className = type;
    line.textContent = "> " + message;

    terminal.appendChild(line);

    if (terminal.children.length > 10 {
        terminal.removeChild(terminal.firstChild);
    }
}

function updateScan() {
    progress += Math.floor(Math.random() * 8 + 2;

    if (progress >= 100) {
        progress = 0;
        addLog("Restarting visual scan...", "system");
    }

    progressBar.style.width = progress + "%";
    percentage.textContent = progress + "%";

    if (progress < 30) {
        scanStatus.textContent = "INITIALIZING SCAN...";
    } else if (progress < 60) {
        scanStatus.textContent = "ANALYZING SYSTEM...";
    } else if (progress < 90) {
        scanStatus.textContent = "CHECKING SECURITY...";
    } else {
        scanStatus.textContent = "FINALIZING SCAN...";
    }

    const message = messages[
        Math.floor(Math.random() * messages.length)
    ];

    addLog(
        message,
        message.includes("WARNING") || message.includes("ALERT")
            ? "alert"
            : "system"
    );
}

function updateTimer() {
    seconds--;

    if (seconds < 0) {
        seconds = 59;
    }

    timer.textContent = "00:" + String(seconds).padStart(2, "0");
}

setInterval(updateScan, 1200);
setInterval(updateTimer, 1000);

addLog("NEXCORE VISUAL SYSTEM ONLINE");
addLog("SIMULATION MODE ENABLED", "system");
addLog("Waiting for scan sequence...");
function freezeScreen() {
    document.getElementById("fake-lock").style.display = "flex";
}

function exitLock() {
    document.getElementById("fake-lock").style.display = "none";
}


 const audio = document.getElementById("glitch-audio");

audio.volume = 0.25;

document.addEventListener("pointerdown", async function startAudio() {
    try {
        await audio.play();
        console.log("NEXCORE AUDIO ONLINE");
    } catch (error) {
        console.error("AUDIO ERROR:", error);
    }
}, { once: true });   