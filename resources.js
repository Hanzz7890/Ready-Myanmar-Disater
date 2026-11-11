
const resourceInformation = [
    {
        title: "The Science of Earthquakes",
        provider: "U.S. Geological Survey",
        description: "Understand faults, seismic waves and the processes that cause earthquakes.",
        category: "science",
        icon: "bi-activity",
        type: "Webpage",
        url: "https://www.usgs.gov/programs/earthquake-hazards/science-earthquakes"
    },
    {
        title: "What Is a Landslide?",
        provider: "U.S. Geological Survey",
        description: "Explore landslide causes, ground movement and conditions that can increase slope instability.",
        category: "science",
        icon: "bi-triangle",
        type: "Webpage",
        url: "https://www.usgs.gov/faqs/what-a-landslide-and-what-causes-one"
    },
    {
        title: "Sinkholes",
        provider: "U.S. Geological Survey",
        description: "Learn how underground processes can create sinkholes and other ground depressions.",
        category: "science",
        icon: "bi-layers",
        type: "Webpage",
        url: "https://www.usgs.gov/water-science-school/science/sinkholes"
    },
    {
        title: "Safety During an Earthquake",
        provider: "CDC",
        description: "Official guidance explaining how to protect yourself during earthquake shaking.",
        category: "safety",
        icon: "bi-shield-check",
        type: "Webpage",
        url: "https://www.cdc.gov/earthquakes/safety/stay-safe-during-an-earthquake.html"
    },
    {
        title: "Preparing for Floods",
        provider: "CDC",
        description: "Household planning, emergency supplies and important flood safety information.",
        category: "safety",
        icon: "bi-cloud-rain-heavy",
        type: "Webpage",
        url: "https://www.cdc.gov/floods/safety/index.html"
    },
    {
        title: "During a Tsunami",
        provider: "NOAA National Weather Service",
        description: "Guidance about natural tsunami warning signs, evacuation and safe behaviour.",
        category: "safety",
        icon: "bi-water",
        type: "Webpage",
        url: "https://www.weather.gov/safety/tsunami-during"
    },
    {
        title: "Landslide Preparedness",
        provider: "New Zealand Civil Defence",
        description: "Learn about recognising landslide hazards, responding and recovering safely.",
        category: "safety",
        icon: "bi-triangle",
        type: "Webpage",
        url: "https://getready.govt.nz/emergency/landslides"
    },
    {
        title: "Myanmar Maps and Regional Information",
        provider: "Myanmar Information Management Unit",
        description: "Explore maps, township information and geographic data relevant to Myanmar.",
        category: "maps",
        icon: "bi-map",
        type: "Website",
        url: "https://themimu.info/"
    },
    {
        title: "Myanmar GIS Resources",
        provider: "Myanmar Information Management Unit",
        description: "Access information about geographic datasets, mapping and regional analysis.",
        category: "maps",
        icon: "bi-globe-asia-australia",
        type: "Website",
        url: "https://themimu.info/gis-resources"
    },
    {
        title: "Emergency Supply Checklist",
        provider: "Ready.gov",
        description: "A printable checklist of supplies and essentials for emergency preparation.",
        category: "planning",
        icon: "bi-file-earmark-pdf",
        type: "PDF",
        url: "https://www.ready.gov/sites/default/files/2022-04/ready_checklist.pdf"
    },
    {
        title: "Cyclone Nargis: Ten Years Later",
        provider: "United Nations in Myanmar",
        description: "A United Nations statement about Cyclone Nargis, its effects on Myanmar and the communities affected in May 2008.",
        category: "reports",
        icon: "bi-journal-text",
        type: "Historical report",
        url: "https://myanmar.un.org/en/21807-statement-united-nations-resident-and-humanitarian-coordinator-myanmar-knut-ostby-ten-years"
    },
    {
        title: "Myanmar Flood Situation Report: September 2024",
        provider: "UN Office for the Coordination of Humanitarian Affairs",
        description: "Published 27 September 2024. Documents the extent of major flooding, affected populations, damaged infrastructure and humanitarian needs.",
        category: "reports",
        icon: "bi-file-earmark-bar-graph",
        type: "Situation report",
        url: "https://myanmar.un.org/en/279958-myanmar-flood-situation-report-3-27-september-2024"
    },
    {
        title: "Myanmar Earthquake: Humanitarian Snapshot",
        provider: "UN Office for the Coordination of Humanitarian Affairs",
        description: "Published 7 April 2025. Summarises the March 2025 earthquake, exposed populations, damaged services and urgent humanitarian needs.",
        category: "reports",
        icon: "bi-graph-up-arrow",
        type: "Humanitarian report",
        url: "https://myanmar.un.org/en/292288-ocha-myanmar-earthquake-humanitarian-snapshot"
    },
    {
        title: "2025 Mandalay Earthquake: Scientific Data",
        provider: "U.S. Geological Survey",
        description: "Scientific information and earthquake analysis for the powerful earthquake that struck central Myanmar on 28 March 2025.",
        category: "reports",
        icon: "bi-activity",
        type: "Earthquake data",
        url: "https://earthquake.usgs.gov/earthquakes/eventpage/us7000pn9s/finite-fault"
    }
];
const resourceSearch = document.getElementById("resourceSearch");
const resourceCategory = document.getElementById("resourceCategory");
const resourceList = document.getElementById("resourceList");
const resourceCount = document.getElementById("resourceCount");
const resourceEmpty = document.getElementById("resourceEmpty");
const resetResources = document.getElementById("resetResources");

function showResources() {
    const searchText = resourceSearch.value.trim().toLowerCase();
    let visibleCount = 0;
    resourceList.replaceChildren();
    for (let i = 0; i < resourceInformation.length; i++) {
        const resource = resourceInformation[i];
        const searchableText = (
            resource.title + " " +
            resource.provider + " " +
            resource.description + " " +
            resource.category + " " +
            resource.type
        ).toLowerCase();
        const matchesSearch = searchableText.includes(searchText);
        const matchesCategory =
            resourceCategory.value === "all" ||
            resourceCategory.value === resource.category;
        if (!matchesSearch || !matchesCategory) {
            continue;
        }
        visibleCount++;
        const article = document.createElement("article");
        const iconBox = document.createElement("div");
        const icon = document.createElement("i");
        const content = document.createElement("div");
        const provider = document.createElement("span");
        const heading = document.createElement("h3");
        const description = document.createElement("p");
        const link = document.createElement("a");
        const arrow = document.createElement("i");
        const type = document.createElement("span");
        article.className = "resource-row";
        iconBox.className = "icon-box";
        content.className = "resource-content";
        icon.className = "bi " + resource.icon;
        icon.setAttribute("aria-hidden", "true");
        provider.className = "resource-provider";
        provider.textContent = resource.provider;
        heading.textContent = resource.title;
        description.textContent = resource.description;
        link.className = "text-link";
        link.href = resource.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "Open resource";
        link.setAttribute("aria-label", "Open " + resource.title);
        arrow.className = "bi bi-arrow-up-right";
        arrow.setAttribute("aria-hidden", "true");
        type.className = "resource-type";
        type.textContent = resource.type;
        link.appendChild(arrow);
        iconBox.appendChild(icon);
        content.appendChild(provider);
        content.appendChild(heading);
        content.appendChild(description);
        content.appendChild(link);
        content.appendChild(type);
        article.appendChild(iconBox);
        article.appendChild(content);
        resourceList.appendChild(article);
    }
    resourceCount.textContent = visibleCount === 1
        ? "1 resource found"
        : visibleCount + " resources found";
    resourceEmpty.hidden = visibleCount !== 0;
    resourceList.hidden = visibleCount === 0;
}
resourceSearch.addEventListener("input", showResources);
resourceCategory.addEventListener("change", showResources);
resetResources.addEventListener("click", function () {
    resourceSearch.value = "";
    resourceCategory.value = "all";
    showResources();
    resourceSearch.focus();
});
showResources();

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 650,
        easing: "ease-out-cubic",
        offset: 60,
        once: true,
        disable: function () {
            return reducedMotion.matches;
        }
    });
}
const authModal = document.getElementById("authModal");
const authTitle = document.getElementById("authTitle");
const authPanel = document.getElementById("authPanel");
const loginPanel = document.getElementById("loginPanel");
const signupPanel = document.getElementById("signupPanel");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const signupName = document.getElementById("signupName");
const signupEmail = document.getElementById("signupEmail");
const signupPassword = document.getElementById("signupPassword");
const confirmPassword = document.getElementById("confirmPassword");
const showLoginPassword = document.getElementById("showLoginPassword");
const showSignupPassword = document.getElementById("showSignupPassword");
const switchToSignup = document.getElementById("switchToSignup");
const switchToLogin = document.getElementById("switchToLogin");
const loginSubmit = document.getElementById("loginSubmit");
const signupSubmit = document.getElementById("signupSubmit");
const guestActions = document.getElementById("guestActions");
const memberActions = document.getElementById("memberActions");
const accountName = document.getElementById("accountName");
const logoutButton = document.getElementById("logoutButton");
const accountStorageKey = "readyMyanmarDemoAccountsV1";
const sessionStorageKey = "readyMyanmarDemoSessionV1";
let currentAuthView = "login";
let flipTimer = null;
let flipFocusTimer = null;
let flipping = false;
let authBusy = false;

function setAuthView(view) {
    currentAuthView = view;
    loginPanel.hidden = view !== "login";
    signupPanel.hidden = view !== "signup";
    authTitle.textContent = view === "login" ? "Welcome back." : "Create your account.";
}
function focusAuthField() {
    if (currentAuthView === "login") {
        loginEmail.focus();
    } else {
        signupName.focus();
    }
}
function flipAuthView(view) {
    if (flipping || authBusy || currentAuthView === view) {
        return;
    }
    if (reducedMotion.matches) {
        setAuthView(view);
        focusAuthField();
        return;
    }
    flipping = true;
    authPanel.inert = true;
    authPanel.classList.add("is-flipping");
    flipTimer = setTimeout(function () {
        setAuthView(view);
        authPanel.classList.remove("is-flipping");
        flipFocusTimer = setTimeout(function () {
            flipping = false;
            authPanel.inert = false;
            if (authModal.classList.contains("show")) {
                focusAuthField();
            }
        }, 230);
    }, 230);
}
switchToSignup.addEventListener("click", function () {
    flipAuthView("signup");
});
switchToLogin.addEventListener("click", function () {
    flipAuthView("login");
});
authModal.addEventListener("show.bs.modal", function (event) {
    const button = event.relatedTarget;
    const view = button ? button.getAttribute("data-auth-view") : "login";
    setAuthView(view === "signup" ? "signup" : "login");
});
authModal.addEventListener("shown.bs.modal", focusAuthField);
authModal.addEventListener("hide.bs.modal", function (event) {
    if (authBusy) {
        event.preventDefault();
    }
});
authModal.addEventListener("hidden.bs.modal", function () {
    clearTimeout(flipTimer);
    clearTimeout(flipFocusTimer);
    flipping = false;
    authPanel.inert = false;
    authPanel.classList.remove("is-flipping");
    loginForm.reset();
    signupForm.reset();
    loginPassword.type = "password";
    signupPassword.type = "password";
    confirmPassword.type = "password";
    setAuthView("login");
});
showLoginPassword.addEventListener("change", function () {
    loginPassword.type = showLoginPassword.checked ? "text" : "password";
});
showSignupPassword.addEventListener("change", function () {
    const type = showSignupPassword.checked ? "text" : "password";
    signupPassword.type = type;
    confirmPassword.type = type;
});
function showError(message, field) {
    alert(message);
    if (field) {
        field.focus();
    }
}
function normaliseEmail(value) {
    return value.trim().toLowerCase();
}
function emailIsValid(field) {
    field.value = field.value.trim();
    return field.value !== "" && field.value.length <= 254 && field.validity.valid;
}
function setAuthBusy(busy) {
    authBusy = busy;
    loginSubmit.disabled = busy;
    signupSubmit.disabled = busy;
    switchToSignup.disabled = busy;
    switchToLogin.disabled = busy;
    loginSubmit.textContent = busy ? "Please wait..." : "Log in";
    signupSubmit.textContent = busy ? "Please wait..." : "Create account";
    loginForm.setAttribute("aria-busy", String(busy));
    signupForm.setAttribute("aria-busy", String(busy));
}
function readAccounts() {
    const saved = localStorage.getItem(accountStorageKey);
    if (!saved) {
        return [];
    }
    const accounts = JSON.parse(saved);
    if (!Array.isArray(accounts)) {
        throw new Error("The saved account data cannot be read.");
    }
    const valid = accounts.every(function (account) {
        return (
            account &&
            typeof account.id === "string" &&
            typeof account.name === "string" &&
            typeof account.email === "string" &&
            typeof account.salt === "string" &&
            /^[0-9a-f]{32}$/i.test(account.salt) &&
            typeof account.passwordHash === "string" &&
            /^[0-9a-f]{64}$/i.test(account.passwordHash) &&
            account.iterations === 600000
        );
    });
    if (!valid) {
        throw new Error("The saved account data cannot be read.");
    }
    return accounts;
}
function saveAccounts(accounts) {
    localStorage.setItem(accountStorageKey, JSON.stringify(accounts));
}
function bytesToHex(bytes) {
    return Array.from(bytes, function (byte) {
        return byte.toString(16).padStart(2, "0");
    }).join("");
}
function hexToBytes(hex) {
    if (!/^[0-9a-f]{32}$/i.test(hex)) {
        throw new Error("The saved account data cannot be read.");
    }
    const bytes = new Uint8Array(hex.length / 2);
    for (let i = 0; i < bytes.length; i++) {
        bytes[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
    }
    return bytes;
}
function randomHex() {
    const bytes = new Uint8Array(16);
    window.crypto.getRandomValues(bytes);
    return bytesToHex(bytes);
}
async function hashPassword(password, salt, iterations) {
    const encoder = new TextEncoder();
    const key = await window.crypto.subtle.importKey(
        "raw",
        encoder.encode(password),
        "PBKDF2",
        false,
        ["deriveBits"]
    );
    const result = await window.crypto.subtle.deriveBits({
        name: "PBKDF2",
        salt: hexToBytes(salt),
        iterations: iterations,
        hash: "SHA-256"
    }, key, 256);
    return bytesToHex(new Uint8Array(result));
}
function browserSupportsAccounts() {
    if (!window.crypto || !window.crypto.subtle) {
        alert("Please open this website using Live Server or HTTPS so the browser account feature can work.");
        return false;
    }
    try {
        localStorage.setItem("readyMyanmarStorageCheck", "test");
        localStorage.removeItem("readyMyanmarStorageCheck");
        return true;
    } catch (error) {
        alert("Your browser is blocking storage. Allow site storage to use the demonstration account feature.");
        return false;
    }
}
function displayAccount(account) {
    guestActions.hidden = Boolean(account);
    memberActions.hidden = !account;
    accountName.textContent = account ? account.name : "";
    if (account) {
        accountName.title = account.name;
    } else {
        accountName.removeAttribute("title");
    }
}
function startSession(account) {
    localStorage.setItem(sessionStorageKey, JSON.stringify({
        accountId: account.id
    }));
    displayAccount(account);
}
function restoreSession() {
    try {
        const saved = localStorage.getItem(sessionStorageKey);
        if (!saved) {
            displayAccount(null);
            return;
        }
        const session = JSON.parse(saved);
        const accounts = readAccounts();
        const account = accounts.find(function (item) {
            return item.id === session.accountId;
        });
        displayAccount(account || null);
    } catch (error) {
        displayAccount(null);
    }
}
function closeAuthModal() {
    if (typeof bootstrap !== "undefined") {
        const modal = bootstrap.Modal.getInstance(authModal);
        if (modal) {
            modal.hide();
        }
    }
}
signupForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    if (authBusy) {
        return;
    }
    const name = signupName.value.trim();
    const email = normaliseEmail(signupEmail.value);
    const password = signupPassword.value;
    if (name.length < 2 || name.length > 80) {
        showError("Please enter a name between 2 and 80 characters.", signupName);
        return;
    }
    if (!emailIsValid(signupEmail)) {
        showError("Please enter a valid email address.", signupEmail);
        return;
    }
    if (password.length < 8 || password.length > 128) {
        showError("Your password must contain between 8 and 128 characters.", signupPassword);
        return;
    }
    if (!/[^A-Za-z0-9\s]/.test(password)) {
        showError("Your password must include at least one special character, such as ! @ # $ %.", signupPassword);
        return;
    }
    if (password !== confirmPassword.value) {
        showError("Your passwords do not match.", confirmPassword);
        return;
    }
    if (!browserSupportsAccounts()) {
        return;
    }
    let accountCreated = false;
    setAuthBusy(true);
    try {
        let accounts = readAccounts();
        const alreadyExists = accounts.some(function (account) {
            return account.email === email;
        });
        if (alreadyExists) {
            showError("An account with this email already exists in this browser. Please log in instead.", signupEmail);
            return;
        }
        const salt = randomHex();
        const iterations = 600000;
        const passwordHash = await hashPassword(password, salt, iterations);
        accounts = readAccounts();
        const duplicate = accounts.some(function (account) {
            return account.email === email;
        });
        if (duplicate) {
            showError("An account with this email already exists in this browser.", signupEmail);
            return;
        }
        const newAccount = {
            id: randomHex(),
            name: name,
            email: email,
            salt: salt,
            passwordHash: passwordHash,
            iterations: iterations
        };
        accounts.push(newAccount);
        saveAccounts(accounts);
        accountCreated = true;
        startSession(newAccount);
        setAuthBusy(false);
        closeAuthModal();
        alert("Account created successfully! You are now logged in as " + name + ".");
    } catch (error) {
        if (accountCreated) {
            alert("Your account was created, but the browser could not save your login session. Please try logging in.");
        } else {
            alert("Your account could not be saved. Check that browser storage is available and try again.");
        }
    } finally {
        setAuthBusy(false);
    }
});
loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    if (authBusy) {
        return;
    }
    const email = normaliseEmail(loginEmail.value);
    const password = loginPassword.value;
    if (!emailIsValid(loginEmail)) {
        showError("Please enter a valid email address.", loginEmail);
        return;
    }
    if (password === "") {
        showError("Please enter your password.", loginPassword);
        return;
    }
    if (!browserSupportsAccounts()) {
        return;
    }
    setAuthBusy(true);
    try {
        const accounts = readAccounts();
        const account = accounts.find(function (item) {
            return item.email === email;
        });
        if (!account) {
            showError("The email or password is incorrect. If you are new, create an account in this browser first.", loginEmail);
            return;
        }
        const enteredHash = await hashPassword(password, account.salt, account.iterations);
        if (enteredHash !== account.passwordHash) {
            showError("The email or password is incorrect.", loginPassword);
            return;
        }
        startSession(account);
        setAuthBusy(false);
        closeAuthModal();
        alert("Welcome back, " + account.name + "!");
    } catch (error) {
        alert("The browser could not complete the login. Check that site storage is available and try again.");
    } finally {
        setAuthBusy(false);
    }
});
logoutButton.addEventListener("click", function () {
    try {
        localStorage.removeItem(sessionStorageKey);
        displayAccount(null);
        alert("You have logged out successfully.");
    } catch (error) {
        alert("The browser could not clear your saved session. Please check your browser's storage settings.");
    }
});
window.addEventListener("storage", function (event) {
    if (event.key === accountStorageKey || event.key === sessionStorageKey || event.key === null) {
        restoreSession();
    }
});
window.addEventListener("pageshow", restoreSession);
restoreSession();
