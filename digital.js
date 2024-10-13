//digital page
//project1
document.querySelector('.project1-title').innerHTML = projectData.RockPaperScissors.showInfo(); 

document.querySelector('.project1-image').setAttribute ('src',projectData.RockPaperScissors.documentation[0].url)

//project2
document.querySelector('.project2-title').innerHTML = projectData.PERSPECTIVES.showInfo(); 

document.querySelector('.project2-image').setAttribute ('src',projectData.PERSPECTIVES.documentation[1].url)

//project3
document.querySelector('.project3-title').innerHTML = projectData.DesertedStateOfMind.showInfo(); 

document.querySelector('.project3-image').setAttribute ('src',projectData.DesertedStateOfMind.documentation[1].url)

//project4
document.querySelector('.project4-title').innerHTML = projectData.today.showInfo(); 

document.querySelector('.project4-image').setAttribute ('src',projectData.today.documentation[0].url)

//project5
document.querySelector('.project5-title').innerHTML = projectData.NodAndSmile.showInfo(); 

document.querySelector('.project5-image').setAttribute ('src',projectData.NodAndSmile.documentation[1].url)

//project6
document.querySelector('.project6-title').innerHTML = projectData.DataPortrait.showInfo(); 

document.querySelector('.project6-image').setAttribute ('src',projectData.DataPortrait.documentation[1].url)

//project7
document.querySelector('.project7-title').innerHTML = projectData.TimeKeeper.showInfo(); 

document.querySelector('.project7-image').setAttribute ('src',projectData.TimeKeeper.documentation[1].url)


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