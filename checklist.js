const checklistKey = "readyMyanmarChecklistV2";

const defaultTasks = [
    ["water", "Prepare drinking water for your household", "Water and food"],
    ["food", "Prepare non-perishable food and a manual can opener", "Water and food"],
    ["food-needs", "Include food for specific dietary needs", "Water and food"],
    ["first-aid", "Check your first-aid kit", "Health and hygiene"],
    ["medicine", "Plan access to prescribed medicines and essential equipment", "Health and hygiene"],
    ["hygiene", "Gather soap and personal hygiene supplies", "Health and hygiene"],
    ["torch", "Check a torch and spare batteries", "Communication"],
    ["radio", "Identify a reliable way to receive official updates", "Communication"],
    ["phone", "Prepare a phone charger or power bank", "Communication"],
    ["contacts", "Write down important household contacts", "Communication"],
    ["meeting", "Agree on a household meeting place", "Household planning"],
    ["routes", "Learn local evacuation routes", "Household planning"],
    ["support", "Plan support for children, older adults and disabled people", "Household planning"],
    ["documents", "Protect copies of important documents", "Household planning"],
    ["pets", "Include pets in your household plan", "Household planning"]
];

function createDefaultTasks() {
    const tasks = [];

    for (let i = 0; i < defaultTasks.length; i++) {
        tasks.push({
            id: defaultTasks[i][0],
            text: defaultTasks[i][1],
            category: defaultTasks[i][2],
            completed: false,
            custom: false
        });
    }

    return tasks;
}

let checklistTasks = createDefaultTasks();

const checklistItems = document.getElementById("checklistItems");
const categoryFilter = document.getElementById("categoryFilter");
const statusFilter = document.getElementById("statusFilter");
const saveStatus = document.getElementById("saveStatus");
const customItemText = document.getElementById("customItemText");
const customItemCategory = document.getElementById("customItemCategory");

function loadChecklist() {
    try {
        const saved = JSON.parse(localStorage.getItem(checklistKey));

        if (!saved || !Array.isArray(saved.tasks)) {
            return;
        }

        for (let i = 0; i < checklistTasks.length; i++) {
            const savedTask = saved.tasks.find(function (task) {
                return task && task.id === checklistTasks[i].id;
            });

            if (savedTask) {
                checklistTasks[i].completed = savedTask.completed === true;
            }
        }

        const categories = [
            "Water and food",
            "Health and hygiene",
            "Communication",
            "Household planning"
        ];

        for (let i = 0; i < saved.tasks.length; i++) {
            const task = saved.tasks[i];

            if (
                task &&
                task.custom === true &&
                typeof task.id === "string" &&
                typeof task.text === "string" &&
                task.text.trim().length > 0 &&
                categories.includes(task.category) &&
                !checklistTasks.some(function (item) {
                    return item.id === task.id;
                })
            ) {
                checklistTasks.push({
                    id: task.id,
                    text: task.text.slice(0, 120),
                    category: task.category,
                    completed: task.completed === true,
                    custom: true
                });
            }
        }
    } catch (error) {
        saveStatus.textContent =
            "Saved progress could not be loaded. You can still use the checklist.";
    }
}

function saveChecklist() {
    try {
        localStorage.setItem(checklistKey, JSON.stringify({
            tasks: checklistTasks
        }));

        saveStatus.textContent =
            "Saved in this browser. Clearing browser data removes your progress.";
    } catch (error) {
        saveStatus.textContent =
            "This browser could not save your changes. Keep this page open or print your checklist.";
    }
}

function updateProgress() {
    let completedCount = 0;

    for (let i = 0; i < checklistTasks.length; i++) {
        if (checklistTasks[i].completed) {
            completedCount = completedCount + 1;
        }
    }

    const percentage = Math.round(completedCount / checklistTasks.length * 100);

    document.getElementById("progressText").textContent =
        completedCount + " of " + checklistTasks.length + " items completed";

    document.getElementById("progressBar").style.width = percentage + "%";
    document.getElementById("checkProgress").setAttribute("aria-valuenow", percentage);
}

function applyFilters() {
    const rows = document.querySelectorAll(".check-row");
    let visibleCount = 0;

    for (let i = 0; i < rows.length; i++) {
        const task = checklistTasks[i];

        const categoryMatches =
            categoryFilter.value === "all" ||
            task.category === categoryFilter.value;

        const statusMatches =
            statusFilter.value === "all" ||
            (statusFilter.value === "completed" && task.completed) ||
            (statusFilter.value === "remaining" && !task.completed);

        rows[i].hidden = !(categoryMatches && statusMatches);

        if (!rows[i].hidden) {
            visibleCount = visibleCount + 1;
        }
    }

    document.getElementById("emptyChecklist").hidden = visibleCount !== 0;
}

function renderChecklist() {
    checklistItems.replaceChildren();

    for (let i = 0; i < checklistTasks.length; i++) {
        const task = checklistTasks[i];

        const row = document.createElement("div");
        const checkbox = document.createElement("input");
        const label = document.createElement("label");
        const title = document.createElement("span");
        const category = document.createElement("small");

        row.className = "check-row";
        row.classList.toggle("completed", task.completed);

        checkbox.className = "form-check-input";
        checkbox.type = "checkbox";
        checkbox.id = "task-" + i;
        checkbox.checked = task.completed;

        label.htmlFor = checkbox.id;
        title.textContent = task.text;
        category.textContent = task.category;

        label.appendChild(title);
        label.appendChild(category);

        checkbox.addEventListener("change", function () {
            task.completed = checkbox.checked;
            row.classList.toggle("completed", task.completed);

            saveChecklist();
            updateProgress();
            applyFilters();
        });

        row.appendChild(checkbox);
        row.appendChild(label);

        if (task.custom) {
            const removeButton = document.createElement("button");
            removeButton.type = "button";
            removeButton.className = "remove-item no-print";
            removeButton.textContent = "Remove";
            removeButton.setAttribute("aria-label", "Remove " + task.text);

            removeButton.addEventListener("click", function () {
                checklistTasks = checklistTasks.filter(function (item) {
                    return item.id !== task.id;
                });

                saveChecklist();
                renderChecklist();
            });

            row.appendChild(removeButton);
        }

        checklistItems.appendChild(row);
    }

    updateProgress();
    applyFilters();
}

document.getElementById("customItemForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const text = customItemText.value.trim();

    if (text.length < 2) {
        customItemText.setCustomValidity("Please enter at least two characters.");
        customItemText.reportValidity();
        return;
    }

    checklistTasks.push({
        id: "custom-" + Date.now() + "-" + Math.random().toString(36).slice(2, 8),
        text: text,
        category: customItemCategory.value,
        completed: false,
        custom: true
    });

    customItemText.value = "";
    categoryFilter.value = "all";
    statusFilter.value = "all";

    saveChecklist();
    renderChecklist();
    customItemText.focus();
});

customItemText.addEventListener("input", function () {
    customItemText.setCustomValidity("");
});

categoryFilter.addEventListener("change", applyFilters);
statusFilter.addEventListener("change", applyFilters);

document.getElementById("resetProgress").addEventListener("click", function () {
    if (!window.confirm("Uncheck every item? Your custom items will stay.")) {
        return;
    }

    for (let i = 0; i < checklistTasks.length; i++) {
        checklistTasks[i].completed = false;
    }

    saveChecklist();
    renderChecklist();
});

document.getElementById("clearChecklist").addEventListener("click", function () {
    if (!window.confirm("Clear all progress and remove your custom items?")) {
        return;
    }

    checklistTasks = createDefaultTasks();
    categoryFilter.value = "all";
    statusFilter.value = "all";

    saveChecklist();
    renderChecklist();
});

document.getElementById("printChecklist").addEventListener("click", function () {
    window.print();
});

loadChecklist();
renderChecklist();

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const loginPassword = document.getElementById("loginPassword");
const signupPassword = document.getElementById("signupPassword");
const confirmPassword = document.getElementById("confirmPassword");
const signupName = document.getElementById("signupName");
const loginMessage = document.getElementById("loginMessage");
const signupMessage = document.getElementById("signupMessage");
const showLoginPassword = document.getElementById("showLoginPassword");
const showSignupPassword = document.getElementById("showSignupPassword");

function checkSignup() {
    signupName.setCustomValidity(
        signupName.value.trim().length < 2 ?
        "Please enter at least two characters for your name." : ""
    );

    signupPassword.setCustomValidity(
        signupPassword.value.length < 8 ?
        "Please use at least 8 characters." : ""
    );

    confirmPassword.setCustomValidity(
        signupPassword.value !== confirmPassword.value ?
        "Your passwords do not match." : ""
    );
}

function resetLogin() {
    loginForm.reset();
    loginPassword.type = "password";
    loginPassword.setCustomValidity("");
}

function resetSignup() {
    signupForm.reset();
    signupPassword.type = "password";
    confirmPassword.type = "password";
    signupName.setCustomValidity("");
    signupPassword.setCustomValidity("");
    confirmPassword.setCustomValidity("");
}

loginForm.addEventListener("input", function () {
    loginPassword.setCustomValidity("");
    loginMessage.textContent = "";
});

signupForm.addEventListener("input", function () {
    checkSignup();
    signupMessage.textContent = "";
});

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    loginPassword.setCustomValidity(
        loginPassword.value.length < 8 ?
        "Please use at least 8 characters." : ""
    );

    if (loginForm.reportValidity()) {
        resetLogin();
        loginMessage.textContent =
            "Your entries passed the checks. This demo has not logged you in.";
    }
});

signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    checkSignup();

    if (signupForm.reportValidity()) {
        resetSignup();
        signupMessage.textContent =
            "Your entries passed the checks. No account was created or saved.";
    }
});

showLoginPassword.addEventListener("change", function () {
    loginPassword.type = showLoginPassword.checked ? "text" : "password";
});

showSignupPassword.addEventListener("change", function () {
    const type = showSignupPassword.checked ? "text" : "password";
    signupPassword.type = type;
    confirmPassword.type = type;
});

document.getElementById("loginModal").addEventListener("hidden.bs.modal", function () {
    resetLogin();
    loginMessage.textContent = "";
});

document.getElementById("signupModal").addEventListener("hidden.bs.modal", function () {
    resetSignup();
    signupMessage.textContent = "";
});