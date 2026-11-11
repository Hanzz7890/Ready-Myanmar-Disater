const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const safetyGuides = {
    earthquakes: {
        name: "Earthquakes",
        before: [
            "Identify safer places in every room. Choose sturdy tables or desks that can protect your head and body from falling objects. Avoid places beside large windows, glass cabinets, hanging decorations and heavy furniture.",
            "Secure bookshelves, cupboards, televisions and other heavy furniture to the wall. Place heavy objects on lower shelves because unsecured items may fall or slide during strong shaking and cause serious injuries.",
            "Practise Drop, Cover and Hold On with everyone in your household. Drop to your hands and knees, cover your head and neck under sturdy furniture, and hold on until the shaking stops. Repeat the drill so everyone remembers the actions.",
            "Prepare an emergency bag containing drinking water, non-perishable food, a torch, a first-aid kit, necessary medicines, copies of important documents and a portable phone charger.",
            "Create a family communication plan. Choose an emergency meeting place, write down important telephone numbers and decide how family members will contact one another if mobile networks become unavailable.",
            "Identify safe exits and outdoor gathering places. Discuss how to assist children, older adults, people with disabilities and anyone who needs additional help after the shaking stops.",
            "Learn where electricity, gas and water shut-off controls are located. Ask a qualified person to explain how to use them safely if a damaged utility system creates a hazard."
        ],
        during: [
            "Immediately Drop, Cover and Hold On. Get down on your hands and knees, move under a sturdy table if one is close, protect your head and neck, and hold on until the shaking stops.",
            "If you are indoors, remain inside while the ground is shaking. Running towards doors or stairways increases the risk of being injured by broken glass, falling objects or collapsing building materials.",
            "If no sturdy table is available, get low near an interior wall away from windows and unstable furniture. Cover your head and neck with your arms and stay in position until the shaking ends.",
            "If you are in bed, stay there and protect your head with a pillow. Walking across a room during shaking can expose you to broken glass and falling objects.",
            "If you are outdoors, stay outside and move to an open area away from buildings, trees, electricity poles, walls and overhead wires. Once in a safer area, remain low until the shaking stops.",
            "If you are driving, stop in a safe location away from bridges, tunnels, electricity poles and buildings. Set the parking brake and remain inside the vehicle until the shaking stops.",
            "If you are in a high-rise building, stay away from windows and use Drop, Cover and Hold On. Do not use lifts because power failures or structural damage may make them unsafe.",
            "If you are near the coast, protect yourself during the earthquake first. Once the shaking stops, strong or prolonged shaking may indicate tsunami danger, so evacuate inland or to higher ground immediately."
        ],
        after: [
            "Check yourself and nearby people for injuries. Provide basic first aid if it is safe and you are able to do so. Seek emergency medical assistance for serious injuries.",
            "Expect aftershocks. These additional earthquakes may occur minutes, days or longer after the main event. If shaking begins again, immediately Drop, Cover and Hold On.",
            "Check your surroundings for damaged walls, broken glass, unstable ceilings, fallen electrical wires and possible gas leaks. Leave seriously damaged buildings carefully when it is safe to move.",
            "Do not enter buildings that appear structurally unsafe. Cracked walls, leaning columns and damaged stairways may indicate hazards that require professional inspection.",
            "If you smell gas or suspect a leak, leave the area and contact the responsible emergency or utility service. Do not use flames, electrical switches or equipment that could create a spark.",
            "Use text messages or other available communication methods to inform family members that you are safe. Keep emergency communication channels available for people who need urgent help.",
            "Listen to official announcements about shelters, damaged roads, emergency services and possible secondary hazards such as landslides, fires or tsunamis.",
            "Return to damaged buildings only when the responsible authorities or qualified professionals confirm that entry is safe."
        ],
        support: "People with limited mobility should identify suitable protection in advance. Wheelchair users should lock their wheels and protect their head and neck. People who cannot get onto the floor should remain seated and protect themselves from falling objects. Households should arrange assistance for children, older adults and anyone who needs additional support.",
        avoid: "Do not run outside during shaking, stand in doorways expecting protection, use lifts, stand near windows or approach damaged buildings. Never enter an unsafe structure to collect belongings.",
        sources: [
            ["CDC — Preparing for earthquakes", "https://www.cdc.gov/earthquakes/safety/index.html"],
            ["CDC — During an earthquake", "https://www.cdc.gov/earthquakes/safety/stay-safe-during-an-earthquake.html"],
            ["CDC — After an earthquake", "https://www.cdc.gov/earthquakes/safety/stay-safe-after-an-earthquake.html"]
        ]
    },
    landslides: {
        name: "Landslides",
        before: [
            "Find out whether your home, school or community is located near steep slopes, unstable hillsides, riverbanks or areas where landslides have happened previously. These locations may become dangerous during prolonged or intense rainfall.",
            "Watch for possible warning signs such as new cracks in the ground, leaning trees, tilting fences, damaged retaining walls, unusual water seepage or doors and windows that suddenly become difficult to close.",
            "Understand that landslides can occur without obvious warning. Heavy rain, earthquakes, slope erosion and human activities such as unsafe excavation can weaken the ground.",
            "Identify evacuation routes that move away from unstable slopes and potential debris-flow channels. Choose alternative routes in case roads become blocked by mud, rocks or fallen trees.",
            "Prepare an emergency bag containing essential medicines, drinking water, a torch, communication equipment, important documents and other household necessities.",
            "Pay attention to official rainfall warnings and local emergency announcements. During prolonged heavy rain, remain especially alert if your home is close to a steep hillside.",
            "Avoid removing vegetation, digging into slopes or changing drainage without professional advice. Such activities can affect slope stability.",
            "Discuss an evacuation plan with household members, including transport arrangements and assistance for anyone who cannot leave quickly."
        ],
        during: [
            "If you notice active slope movement, falling rocks, rapidly moving mud or other immediate signs of a landslide, move away from its path as quickly as you can without entering another dangerous area.",
            "If there is time to move safely, head towards stable ground away from the moving material and the channel it is following. Do not attempt to cross the moving landslide.",
            "Listen for unusual sounds such as cracking trees, knocking rocks, a deep rumbling noise or sudden ground vibrations. These may indicate that debris is moving nearby.",
            "Be alert near streams and drainage channels. A sudden change in water level, especially during heavy rain, may indicate that debris has blocked or redirected flowing water.",
            "If you are inside a building and a landslide threatens it, follow local emergency instructions and evacuate by a safe route if possible. Do not delay to collect belongings.",
            "If you are travelling, avoid roads beneath unstable cliffs, steep cut slopes or areas where mud and rocks are falling. Turn back rather than attempting to cross damaged roads.",
            "Warn nearby people when you can do so safely. Contact emergency services after reaching a safer location.",
            "Do not return to the slope simply because the first movement has stopped. Additional landslides or falling debris may follow."
        ],
        after: [
            "Stay away from the affected hillside and debris area. The ground may remain unstable and further movement can occur, especially if rain continues.",
            "Check whether anyone needs urgent medical help, but do not enter unstable debris to carry out a rescue without trained assistance.",
            "Report damaged electricity lines, water pipes, roads and bridges to the responsible authorities or service providers.",
            "Watch for new cracks, continuing ground movement and changes in nearby streams. These may indicate that the danger has not completely passed.",
            "Avoid walking or driving across damaged roads. A road surface may appear intact even when the supporting ground has been weakened or washed away.",
            "Follow official updates about evacuation zones, safe shelters and road closures.",
            "Arrange professional assessment of damaged buildings, retaining walls and slopes before repairs or reoccupation.",
            "Support affected households through safe community assistance, including sharing verified information and helping people reach authorised shelters."
        ],
        support: "Households near unstable slopes should plan early evacuation support for people with limited mobility. During heavy rain, accessible transport may become difficult, so identify helpers and alternative routes before conditions worsen.",
        avoid: "Do not cross a moving landslide, approach unstable slopes, drive over debris-covered roads or attempt to remove large rocks and mud without professional assistance. Landslides may occur suddenly and without visible warning signs.",
        sources: [
            ["USGS — Landslide warning signs and actions", "https://www.usgs.gov/programs/landslide-hazards/what-are-signs-landslide-development-what-do-i-do-if-a-landslide-occurs"],
            ["New Zealand Civil Defence — Landslides", "https://getready.govt.nz/emergency/landslides"]
        ]
    },
    subsidence: {
        name: "Subsidence & Sinkholes",
        before: [
            "Learn the difference between subsidence and sinkholes. Subsidence is the gradual or sudden lowering of the ground, while a sinkhole is a depression or opening that forms when material beneath the surface is removed or collapses.",
            "Inspect your property for unusual changes such as new ground depressions, widening cracks in walls or pavements, sinking pathways and sudden changes in the alignment of doors, windows or fences.",
            "Remember that not every crack or depression indicates a sinkhole. Ground movement may have several causes, including leaking underground pipes, poorly compacted soil or changes in groundwater.",
            "Report suspected underground water leaks, damaged drainage systems or unusual ground settlement to the appropriate utility provider or local authority.",
            "Seek advice from a qualified geologist, geotechnical engineer or building professional if signs of serious ground movement appear.",
            "Keep heavy vehicles, construction materials and unnecessary loads away from areas suspected of being unstable until the ground has been assessed.",
            "Discuss how household members would evacuate if the ground near a home or building suddenly became unsafe.",
            "Prepare important documents and essential supplies so they can be taken quickly if authorities recommend leaving."
        ],
        during: [
            "If the ground begins to collapse or a new opening appears, move away immediately. Do not approach the edge because surrounding soil may also be unstable.",
            "Warn other people to stay away from the affected area. Keep children, pets and vehicles at a safe distance.",
            "If a building develops sudden serious cracks, visible movement or other signs of structural danger, leave by a safe route and seek professional assistance.",
            "Do not attempt to investigate the depth of a hole, climb into it or stand close to it for photographs.",
            "If a road or pavement begins to sink, avoid crossing the affected section and notify the relevant authorities.",
            "Report suspected damage to underground electricity, water, gas or sewage systems to the responsible utility provider.",
            "If someone has fallen into a collapse area, contact emergency services immediately. Do not enter unstable ground to attempt an untrained rescue.",
            "Follow instructions from emergency personnel about exclusion zones, evacuation and safe access."
        ],
        after: [
            "Keep the affected area isolated until qualified specialists determine whether the ground is stable.",
            "Arrange a professional geological or geotechnical investigation to identify the likely cause of the movement.",
            "Contact the responsible utility providers if underground pipes, drainage systems or cables may have been damaged.",
            "Do not attempt to fill a sinkhole or repair unstable ground without an appropriate engineering assessment. Incorrect repairs may conceal continuing movement.",
            "Have damaged foundations, walls, floors and other structural elements inspected before re-entering the building.",
            "Document visible damage from a safe location for reporting and future repair assessments.",
            "Continue monitoring nearby areas for additional settlement, cracks or new depressions, following professional advice.",
            "Return to the affected property only after the relevant authorities or qualified professionals confirm that it is safe."
        ],
        support: "Make evacuation arrangements for household members who need mobility assistance. Keep access routes clear and avoid moving wheelchairs, walking aids or vehicles across visibly unstable ground.",
        avoid: "Never enter a sinkhole, stand near a collapsing edge, drive over damaged ground or attempt an unassessed repair. Not all depressions are natural sinkholes, so professional investigation is important.",
        sources: [
            ["USGS — What to do about a suspected sinkhole", "https://www.usgs.gov/faqs/i-have-or-think-i-have-a-sinkhole-my-property-what-should-i-do"],
            ["British Geological Survey — Sinkholes research", "https://www.bgs.ac.uk/geology-projects/sinkholes-research/"]
        ]
    },
    tsunamis: {
        name: "Tsunamis",
        before: [
            "Find out whether your home, school, workplace or other frequently visited coastal locations are within a tsunami hazard or evacuation zone.",
            "Identify evacuation routes leading to higher ground or inland areas outside the tsunami hazard zone. Choose more than one route because roads or bridges may become damaged.",
            "Learn natural warning signs, including strong or long earthquake shaking, a sudden rise or fall in sea level, or an unusual loud roaring sound from the ocean.",
            "Understand that a tsunami can arrive before an official warning is issued. Natural warning signs should be treated as a reason to evacuate immediately.",
            "Practise your evacuation route on foot if possible. Walking may be more reliable than driving when roads are damaged or traffic becomes congested.",
            "Prepare a lightweight emergency bag containing drinking water, essential medicines, a torch, identification documents and communication equipment.",
            "Agree on a family meeting place outside the coastal danger zone. Make sure children know the evacuation procedure used by their school.",
            "Check how local authorities issue tsunami alerts and keep access to reliable official information."
        ],
        during: [
            "If an earthquake occurs, protect yourself from the shaking first by using Drop, Cover and Hold On.",
            "As soon as it is safe to move, evacuate to higher ground or inland if you experience natural tsunami warning signs. Do not wait for an official announcement.",
            "Follow marked evacuation routes when available. Move away from beaches, harbours, river mouths and other low-lying coastal areas.",
            "Do not stop to watch the sea, take photographs or collect belongings. A tsunami may arrive quickly, leaving little time to escape.",
            "If you are already outside the tsunami hazard zone, remain in the safe area unless local authorities instruct you otherwise.",
            "Be aware that a tsunami is not necessarily a single wave. Dangerous waves and strong currents may continue for many hours.",
            "If evacuation routes are blocked, follow local emergency guidance. Designated vertical evacuation buildings may provide protection where such structures have been officially identified.",
            "Continue following official announcements from a safe location. Do not return to the coast simply because the water appears calm."
        ],
        after: [
            "Remain outside the tsunami hazard zone until local authorities clearly announce that it is safe to return.",
            "Remember that the first wave may not be the largest. Additional waves and strong currents can continue after the initial impact.",
            "Stay away from flooded buildings, damaged bridges, unstable roads and fallen electrical lines.",
            "Avoid contact with floodwater because it may contain sewage, chemicals, sharp objects and other dangerous debris.",
            "Check whether family members are safe and communicate your location using available methods.",
            "Use official information to find shelters, medical assistance, safe roads and drinking-water guidance.",
            "Do not enter buildings damaged by the earthquake or tsunami until they have been assessed by qualified personnel.",
            "Follow community recovery instructions and avoid entering restricted areas that emergency workers need to access."
        ],
        support: "Coastal households should practise accessible evacuation routes before an emergency. Discuss assistance for people with limited mobility and identify who can help children, older adults and anyone who needs communication support.",
        avoid: "Do not approach the shore to watch a tsunami, wait for an official warning after natural warning signs, or return after the first wave. Stay outside the hazard zone until authorities say it is safe.",
        sources: [
            ["NOAA — Tsunami safety", "https://www.weather.gov/safety/tsunami"],
            ["Ready.gov — Tsunamis", "https://www.ready.gov/tsunamis"]
        ]
    },
    flooding: {
        name: "Flooding",
        before: [
            "Find out whether your home, school or workplace is located in a low-lying area, near a river or stream, or in a location that has experienced flooding before.",
            "Learn local flood warning procedures and identify safe evacuation routes to higher ground. Avoid routes that cross streams, drainage channels or roads known to flood.",
            "Prepare an emergency kit with drinking water, non-perishable food, a torch, batteries, essential medicines, first-aid supplies, hygiene products and important documents.",
            "Keep important documents and electrical devices in waterproof containers or elevated storage areas where possible.",
            "Prepare a household communication plan that includes emergency contacts, meeting places and assistance for children, older adults and people with disabilities.",
            "Check drainage systems and gutters when conditions are safe. Report blocked public drains rather than entering dangerous drainage channels.",
            "Charge mobile phones and power banks before severe weather arrives. Keep access to official weather warnings through available communication channels.",
            "If your area is likely to flood, prepare to leave early. Do not wait until roads become submerged or access to safe locations is blocked."
        ],
        during: [
            "Move to higher ground if floodwater is approaching. Follow official evacuation instructions immediately and use designated safe routes.",
            "Never walk, swim or drive through floodwater. Even relatively shallow moving water can knock people down, and deeper water may sweep vehicles away.",
            "Do not attempt to cross flooded roads, bridges or streams. Water can conceal damaged road surfaces, open drains, sharp debris and strong currents.",
            "Keep away from electricity poles, fallen power lines and electrical equipment in flooded areas. Water may carry an electrical current.",
            "If you are indoors and floodwater begins rising, move to a higher safe level of the building if evacuation is no longer possible. Avoid enclosed attics without roof access because you could become trapped.",
            "Keep children away from floodwater, drainage channels and fast-flowing streams. Floodwater can rise suddenly and may be contaminated.",
            "Follow official updates using a battery-powered radio, charged mobile phone or another available communication method.",
            "Do not return to flooded areas or attempt to retrieve belongings while water is still rising."
        ],
        after: [
            "Return home only when local authorities confirm that conditions are safe. Floodwater may have weakened roads, bridges, walls and building foundations.",
            "Avoid touching standing floodwater because it may contain sewage, chemicals, sharp debris or electrical hazards.",
            "Follow official drinking-water instructions. Water supplies may become contaminated after flooding, and some chemical contamination cannot be removed by boiling.",
            "Discard food that has come into contact with floodwater unless official food-safety guidance specifically says it can be safely retained.",
            "Do not switch on electrical appliances or enter areas with damaged wiring until the electrical system has been checked by a qualified professional.",
            "Wear suitable protective clothing, waterproof boots and gloves when cleaning a flood-damaged property. Wash thoroughly after contact with contaminated materials.",
            "Clean and dry affected areas as soon as it is safe to do so to reduce mould growth and other health hazards.",
            "Document property damage from a safe location and follow local recovery instructions. Keep children and pets away from contaminated debris.",
            "Never use a portable generator indoors or inside a garage because its exhaust can cause deadly carbon monoxide poisoning."
        ],
        support: "Plan accessible transport and safe accommodation for people who may need assistance. Keep essential medicines, mobility aids and communication equipment available during evacuation. Do not enter floodwater to help someone if doing so would put you in danger; contact trained emergency responders.",
        avoid: "Never cross flooded roads, enter fast-moving water, touch wet electrical equipment or return to damaged buildings before they are declared safe. Do not assume floodwater is safe because it looks clean.",
        sources: [
            ["NOAA — Before a flood", "https://www.weather.gov/safety/flood-before"],
            ["NOAA — During a flood", "https://www.weather.gov/safety/flood-during"],
            ["NOAA — After a flood", "https://www.weather.gov/safety/flood-after"],
            ["CDC — Flood safety", "https://www.cdc.gov/floods/safety/index.html"]
        ]
    }
};
let selectedHazard = "earthquakes";
let selectedPhase = "before";
let displayedPhoto = "";
const hazardButtons = document.querySelectorAll(".hazard-button");
const phaseButtons = document.querySelectorAll(".phase-button");
const storyPhotos = document.querySelectorAll("[data-story-photo]");
const guideLabel = document.getElementById("guideLabel");
const guideTitle = document.getElementById("guideTitle");
const guideActions = document.getElementById("guideActions");
const guideSupport = document.getElementById("guideSupport");
const guideAvoid = document.getElementById("guideAvoid");
const guideSources = document.getElementById("guideSources");
const guideStatus = document.getElementById("guideStatus");
const printContent = document.getElementById("printGuideContent");
function refreshAnimations() {
    if (typeof AOS !== "undefined") {
        AOS.refresh();
    }
}
function addActions(list, actions) {
    list.replaceChildren();
    actions.forEach(function (action) {
        const item = document.createElement("li");
        item.textContent = action;
        list.appendChild(item);
    });
}
function updateStoryPhoto() {
    if (displayedPhoto === selectedHazard) {
        return;
    }
    storyPhotos.forEach(function (photo) {
        photo.hidden = photo.dataset.storyPhoto !== selectedHazard;
    });
    displayedPhoto = selectedHazard;
}
function showGuide(announce = false) {
    const guide = safetyGuides[selectedHazard];
    const phaseName = selectedPhase.charAt(0).toUpperCase() + selectedPhase.slice(1);
    guideLabel.textContent = guide.name.toUpperCase() + " SAFETY GUIDE";
    guideTitle.textContent = phaseName + ": " + guide.name;
    addActions(guideActions, guide[selectedPhase]);
    guideSupport.textContent = guide.support;
    guideAvoid.textContent = guide.avoid;
    guideSources.replaceChildren();
    guide.sources.forEach(function (source) {
        const item = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = source[0];
        link.href = source[1];
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        item.appendChild(link);
        guideSources.appendChild(item);
    });
    hazardButtons.forEach(function (button) {
        const active = button.dataset.hazard === selectedHazard;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
    });
    phaseButtons.forEach(function (button) {
        const active = button.dataset.phase === selectedPhase;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
    });
    printContent.replaceChildren();
    ["before", "during", "after"].forEach(function (phase) {
        const heading = document.createElement("h3");
        const list = document.createElement("ol");
        heading.textContent = phase.charAt(0).toUpperCase() + phase.slice(1);
        addActions(list, guide[phase]);
        printContent.appendChild(heading);
        printContent.appendChild(list);
    });
    updateStoryPhoto();
    if (announce) {
        guideStatus.textContent = guide.name + ": " + phaseName + " guidance displayed.";
    }
    refreshAnimations();
}
function readGuideHash() {
    const key = window.location.hash.substring(1).toLowerCase();
    selectedHazard = Object.prototype.hasOwnProperty.call(safetyGuides, key) ? key : "earthquakes";
    selectedPhase = "before";
    showGuide();
}
hazardButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        selectedHazard = button.dataset.hazard;
        selectedPhase = "before";
        if (window.location.hash !== "#" + selectedHazard) {
            history.pushState(null, "", "#" + selectedHazard);
        }
        showGuide(true);
    });
});
phaseButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        selectedPhase = button.dataset.phase;
        showGuide(true);
    });
});
document.querySelectorAll(".story-prompt").forEach(function (prompt) {
    prompt.addEventListener("toggle", refreshAnimations);
});
storyPhotos.forEach(function (photo) {
    photo.addEventListener("load", refreshAnimations);
});
document.getElementById("printGuide").addEventListener("click", function () {
    window.print();
});
window.addEventListener("hashchange", readGuideHash);
window.addEventListener("popstate", readGuideHash);
readGuideHash();
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
    if (authBusy || flipping) {
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
    if (!/[!-/:-@[-`{-~]/.test(password)) {
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
    if (authBusy || flipping) {
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