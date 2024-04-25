var profilesKey = 'elden_ring_profiles';
var defaultProfiles = {
    'current': 'Default Profile'
};
defaultProfiles[profilesKey] = {
    'Default Profile': {
        checklistData: {},
        completedSections: {}
    }
}
var profiles = JSON.parse(localStorage.getItem(profilesKey)) || defaultProfiles;

updateCompletion();

function updateCompletion() {
    for (const data in profiles[profilesKey][profiles.current].completionPercentages) {
        var id = data;
        var percentage = profiles[profilesKey][profiles.current].completionPercentages[id];
        let parent = document.getElementById(id);
        let metaElement = parent.querySelector('.metadata');
        if (percentage == 100) {
            var span = document.createElement('span');
            span.className = "meta complete";
            span.innerText = "completed";
            metaElement.prepend(span);
        } else {
            var span = document.createElement('span');
            span.className = "meta completion-percentage";
            span.innerText = `${percentage}`;
            metaElement.prepend(span);
        }
    }
}