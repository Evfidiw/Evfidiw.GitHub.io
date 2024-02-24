// last-updated
document.addEventListener('DOMContentLoaded', function () {
    const monthAbbreviations = ["Jan. ", "Feb. ", "Mar. ", "Apr. ", "May ", "Jun. ",
        "Jul. ", "Aug. ", "Sep. ", "Oct. ", "Nov. ", "Dec. "];
    const lastModifiedDate = new Date(document.lastModified);
    const year = lastModifiedDate.getFullYear();
    const monthIndex = lastModifiedDate.getMonth();
    const monthAbbreviation = monthAbbreviations[monthIndex];
    document.getElementById('last-updated').textContent = `${monthAbbreviation}${year}`;
});



// Click to jump
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// fold
function toggleContent(isCollapsing = false) {
    const toggleButton = document.getElementById('toggleButton');
    const collapseButton = document.getElementById('collapseButton');
    const additionalContent = document.getElementById('additionalContent');

    if (isCollapsing) {
        $('#additionalContent').collapse('hide');
        collapseButton.style.display = 'none';
        toggleButton.style.display = 'inline';
    } else {
        $('#additionalContent').collapse('show');
        collapseButton.style.display = 'inline';
        toggleButton.style.display = 'none';
    }
}