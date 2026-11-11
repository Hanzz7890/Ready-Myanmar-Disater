const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const hazardTabs = document.querySelectorAll("#hazardTabs [data-bs-toggle='tab']");
const pageTitle = document.getElementById("pageTitle");
const pageCategory = document.getElementById("pageCategory");
const pageDescription = document.getElementById("pageDescription");
const breadcrumbText = document.getElementById("breadcrumbText");
let openingFromUrl = false;
function refreshAnimations() {
    if (typeof AOS !== "undefined") {
        AOS.refresh();
    }
}
function updateHeading(button) {
    const panel = document.querySelector(button.dataset.bsTarget);
    const title = panel.querySelector(".hazard-title").textContent;
    pageTitle.textContent = title;
    breadcrumbText.textContent = title;
    pageCategory.textContent = panel.querySelector(".hazard-category").textContent;
    pageDescription.textContent = panel.querySelector(".hazard-introduction").textContent;
    document.title = title + " | Ready Myanmar";
    refreshAnimations();
}
function openHazardFromUrl() {
    const hash = window.location.hash.toLowerCase();
    let selectedButton = hazardTabs[0];
    hazardTabs.forEach(function (button) {
        if (button.dataset.bsTarget === hash) {
            selectedButton = button;
        }
    });
    openingFromUrl = true;
    bootstrap.Tab.getOrCreateInstance(selectedButton).show();
    updateHeading(selectedButton);
    openingFromUrl = false;
}
if (typeof bootstrap !== "undefined") {
    hazardTabs.forEach(function (button) {
        button.addEventListener("shown.bs.tab", function () {
            updateHeading(button);
            if (!openingFromUrl) {
                const hash = button.dataset.bsTarget;
                if (window.location.hash !== hash) {
                    history.pushState(null, "", hash);
                }
            }
        });
    });
    window.addEventListener("hashchange", openHazardFromUrl);
    window.addEventListener("popstate", openHazardFromUrl);
    document.querySelectorAll(".footer-links a[href^='#']").forEach(function (link) {
        link.addEventListener("click", function (event) {
            const hash = link.getAttribute("href");
            const button = Array.from(hazardTabs).find(function (item) {
                return item.dataset.bsTarget === hash;
            });
            if (button) {
                event.preventDefault();
                bootstrap.Tab.getOrCreateInstance(button).show();
                if (window.location.hash !== hash) {
                    history.pushState(null, "", hash);
                }
                updateHeading(button);
                window.scrollTo({
                    top: 0,
                    behavior: reducedMotion.matches ? "instant" : "smooth"
                });
            }
        });
    });
    openHazardFromUrl();
}
document.querySelectorAll(".cause-item").forEach(function (item) {
    item.addEventListener("toggle", refreshAnimations);
});
if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 650,
        easing: "ease-out-cubic",
        offset: 40,
        once: true,
        disable: function () {
            return reducedMotion.matches;
        }
    });
}
window.addEventListener("load", refreshAnimations);
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
        return account &&
            typeof account.id === "string" &&
            typeof account.name === "string" &&
            typeof account.email === "string" &&
            typeof account.salt === "string" &&
            /^[0-9a-f]{32}$/i.test(account.salt) &&
            typeof account.passwordHash === "string" &&
            /^[0-9a-f]{64}$/i.test(account.passwordHash) &&
            account.iterations === 600000;
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
        "raw", encoder.encode(password), "PBKDF2", false, ["deriveBits"]
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
        alert("Please open the website using Live Server or HTTPS to use browser accounts.");
        return false;
    }
    try {
        localStorage.setItem("readyMyanmarStorageCheck", "test");
        localStorage.removeItem("readyMyanmarStorageCheck");
        return true;
    } catch (error) {
        alert("Your browser is blocking storage. Allow site storage to use demonstration accounts.");
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
        const account = readAccounts().find(function (item) {
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
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/.test(password)) {
        showError("Include at least one special character, such as ! @ # $ %.", signupPassword);
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
        if (accounts.some(function (account) {
            return account.email === email;
        })) {
            showError("This email already has an account in this browser. Please log in.", signupEmail);
            return;
        }
        const salt = randomHex();
        const iterations = 600000;
        const passwordHash = await hashPassword(password, salt, iterations);
        accounts = readAccounts();
        if (accounts.some(function (account) {
            return account.email === email;
        })) {
            showError("An account with this email already exists in this browser.", signupEmail);
            return;
        }
        const account = {
            id: randomHex(),
            name: name,
            email: email,
            salt: salt,
            passwordHash: passwordHash,
            iterations: iterations
        };
        accounts.push(account);
        saveAccounts(accounts);
        accountCreated = true;
        startSession(account);
        setAuthBusy(false);
        closeAuthModal();
        alert("Account created successfully! You are now logged in as " + name + ".");
    } catch (error) {
        if (accountCreated) {
            alert("Your account was created, but your session could not be saved. Please try logging in.");
        } else {
            alert("Your account could not be saved. Check browser storage and try again.");
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
    if (!emailIsValid(loginEmail)) {
        showError("Please enter a valid email address.", loginEmail);
        return;
    }
    if (loginPassword.value === "") {
        showError("Please enter your password.", loginPassword);
        return;
    }
    if (!browserSupportsAccounts()) {
        return;
    }
    const email = normaliseEmail(loginEmail.value);
    const password = loginPassword.value;
    setAuthBusy(true);
    try {
        const account = readAccounts().find(function (item) {
            return item.email === email;
        });
        if (!account) {
            showError("The email or password is incorrect. New users must create an account in this browser first.", loginEmail);
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
        alert("Login could not be completed. Check browser storage and try again.");
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
        alert("Your session could not be cleared. Please check browser storage settings.");
    }
});
window.addEventListener("storage", function (event) {
    if (event.key === accountStorageKey || event.key === sessionStorageKey || event.key === null) {
        restoreSession();
    }
});
window.addEventListener("pageshow", restoreSession);
restoreSession();