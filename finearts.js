const backBtn = document.querySelector('.backBtn')
backBtn.addEventListener('click',() => {
    history.back()
})

const divsInContainer = document.querySelectorAll('#page-container div');

// add class fullDirLayout + dir-hover for each div element
divsInContainer.forEach(div => {
    div.classList.add('fullDirLayout');
    div.classList.add('dir-hover');
});

//project1
document.querySelector('.project1-title').innerHTML = projectData.Sunrise.showInfo(); 

document.querySelector('.project1-image').setAttribute ('src',projectData.Sunrise.documentation[1].url)

//project2
document.querySelector('.project2-title').innerHTML = projectData.LightHouse.showInfo(); 

document.querySelector('.project2-image').setAttribute ('src',projectData.LightHouse.documentation[1].url)

//project3
document.querySelector('.project3-title').innerHTML = projectData.EternaLight.showInfo(); 

document.querySelector('.project3-image').setAttribute ('src',projectData.EternaLight.documentation[1].url)


//---
const p1Click = document.querySelector('.project1-Sunrise')
p1Click.addEventListener('click',() =>{
    document.location.href = 'sunrise.html'
})

const p2Click = document.querySelector('.project2-LightHouse')
p2Click.addEventListener('click',() =>{
    document.location.href = 'LightHouse.html'
})

const p3Click = document.querySelector('.project3-EternaLight')
p3Click.addEventListener('click',() =>{
    document.location.href = 'EternaLight.html'
})