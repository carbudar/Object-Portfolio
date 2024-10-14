//digital page
//project1
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.backBtn');  // Select the button

    // Add click event listener
    button.addEventListener('click', () => {
        history.back();

    });



document.querySelector('.project1-desc').innerHTML = projectData.RockPaperScissors.description; 

document.querySelector('.project1-image2').setAttribute ('src',projectData.RockPaperScissors.documentation[1].url)

const trueMediums = [];

// Loop through the medium object using forEach
Object.entries(projectData.RockPaperScissors.medium).forEach(([key, value]) => {
    if (value) {
        // Remove 'is' from the key for display
        const formattedKey = key.replace('is', '');
        trueMediums.push(formattedKey); // Add to the array if true
    }
});

// Display the true mediums in the HTML
document.querySelector('.project1-medium').innerHTML = `${trueMediums.join(', ')}`;



    
});


document.querySelector('.project1-title').innerHTML = projectData.RockPaperScissors.showInfo(); 


document.querySelector('.project1-image').setAttribute ('src',projectData.RockPaperScissors.documentation[0].url)


//project2
document.addEventListener('DOMContentLoaded', () => {
    const project2Title = document.querySelector('.project2-title');
    if (project2Title) {
        project2Title.innerHTML = projectData.PERSPECTIVES.showInfo();
    }
});

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

const divsInContainer = document.querySelectorAll('#page-container div');

// add class fullDirLayout + dir-hover for each div element
divsInContainer.forEach(div => {
    div.classList.add('fullDirLayout');
    div.classList.add('dir-hover');
});



const p1Click = document.querySelector('.project1-RockPaperScissors')

p1Click.addEventListener('click',() =>{
    document.location.href = 'rps.html'
    
})

const p2Click = document.querySelector('.project2-PERSPECTIVES')

p2Click.addEventListener('click',() =>{
    document.location.href = 'perspectives.html'
    
})


const p3Click = document.querySelector('.project3-DesertedStateOfMind')

p3Click.addEventListener('click',() =>{
    document.location.href = 'mind.html'
    
})
