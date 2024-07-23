function showSection(sectionId) {
    document.querySelectorAll('.book-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}
