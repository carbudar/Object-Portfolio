document.addEventListener('DOMContentLoaded', () => {
    const project2Title = document.querySelector('.project2-title');

    if (project2Title) {
        console.log('project2-title element found:', project2Title);
        project2Title.innerHTML = projectData.PERSPECTIVES.showInfo();
    } else {
        console.error('project2-title element not found');
    }

    console.log('PERSPECTIVES data:', projectData.PERSPECTIVES);
});