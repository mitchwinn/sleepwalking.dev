var profilesKey = 'elden_ring_profiles';
var checkboxes = document.querySelectorAll('input[type="checkbox"]');

var defaultProfiles = {
    'current': 'Default Profile'
};
defaultProfiles[profilesKey] = {
    'Default Profile': {
        checklistData: {},
        completionPercentages: {}
    }
}
var profiles = JSON.parse(localStorage.getItem(profilesKey)) || defaultProfiles;

addEventListeners();
setInitialCheckboxesValue();
updateCompletion();

function addEventListeners() {
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('click', function() {
            var id = this.getAttribute('id');
            var isChecked = this.checked;
            profiles[profilesKey][profiles.current].checklistData[id] = isChecked;
            localStorage.setItem(profilesKey, JSON.stringify(profiles));
            updateCompletion();
        });
    });
}

function setInitialCheckboxesValue() {
    if (checkboxes.length == 0) {
        return;
    }

    for (const data in profiles[profilesKey][profiles.current].checklistData) {
        var id = data;
        var isChecked = profiles[profilesKey][profiles.current].checklistData[data];
        var element = document.getElementById(id)
        if (element) {
            element.checked = isChecked; 
        }
    }
}

function updateCompletion() {
    var total = checkboxes.length;
    var checked = 0;
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checked++;
        }
    });
    
    var percentage = (checked/total) * 100;
    percentage = percentage.toFixed(0);

    // if all items are checked
    if (percentage == 100) {
        removeMetaElement('completion-percentage');
        addMetaElement('complete', 'completed');
    } else {
        removeMetaElement('complete');
        addMetaElement('completion-percentage', `${percentage}`);
    }
    updateCompletionPercentages(percentage);
}

function updateCompletionPercentages(value) {
    var section = document.querySelector('[data-section]');
    if (section) {
        var attribteValue = section.getAttribute("data-section");
        profiles[profilesKey][profiles.current].completionPercentages[attribteValue] = `${value}`;
        localStorage.setItem(profilesKey, JSON.stringify(profiles));
    }
}

function addMetaElement(className, innerText, prepend = true) {
    var metadata = document.querySelector('.metadata');
    
    // only update the innerText if the element already exists
    if (metadata.querySelector(`.${className}`)) {
        metadata.querySelector(`.${className}`).innerText = innerText;
        return;
    }

    var span = document.createElement('span');
    span.className = `meta ${className}`;
    span.innerText = innerText;
    if (prepend) {
        metadata.prepend(span);
    } else {
        metadata.append(span);
    }
}

function removeMetaElement(className) {
    var metadata = document.querySelector('.metadata');
    var element = document.querySelector(`.${className}`);
    if (element) {
        metadata.removeChild(element);
    }
}