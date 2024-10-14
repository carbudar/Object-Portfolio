//digital page
//project1


//project 1
document.addEventListener('DOMContentLoaded', () => {
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

//---

//project2
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.project2-desc').innerHTML = projectData.PERSPECTIVES.description; 
    
    document.querySelector('.project2-image2').setAttribute ('src',projectData.PERSPECTIVES.documentation[1].url)
    
    const trueMediums = [];
    
    // Loop through the medium object using forEach
    Object.entries(projectData.PERSPECTIVES.medium).forEach(([key, value]) => {
        if (value) {
            // Remove 'is' from the key for display
            const formattedKey = key.replace('is', '');
            trueMediums.push(formattedKey); // Add to the array if true
        }
    });
    
    // Display the true mediums in the HTML
    document.querySelector('.project2-medium').innerHTML = `${trueMediums.join(', ')}`;

    document.querySelector('.project2-title').innerHTML = projectData.PERSPECTIVES.showInfo(); 

document.querySelector('.project2-image').setAttribute ('src',projectData.PERSPECTIVES.documentation[0].url)
});

//---

//project3
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.project3-desc').innerHTML = projectData.PERSPECTIVES.description; 
    
    document.querySelector('.project3-image2').setAttribute ('src',projectData.DesertedStateOfMind.documentation[1].url)
    
    const trueMediums = [];
    
    // Loop through the medium object using forEach
    Object.entries(projectData.DesertedStateOfMind.medium).forEach(([key, value]) => {
        if (value) {
            // Remove 'is' from the key for display
            const formattedKey = key.replace('is', '');
            trueMediums.push(formattedKey); // Add to the array if true
        }
    });
    
    // Display the true mediums in the HTML
    document.querySelector('.project3-medium').innerHTML = `${trueMediums.join(', ')}`;

    document.querySelector('.project3-title').innerHTML = projectData.DesertedStateOfMind.showInfo(); 

document.querySelector('.project3-image').setAttribute ('src',projectData.DesertedStateOfMind.documentation[0].url)
});

//---

//project4
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.project4-desc').innerHTML = projectData.today.description; 
    
    document.querySelector('.project4-image2').setAttribute ('src',projectData.today.documentation[0].url)
    
    const trueMediums = [];
    
    // Loop through the medium object using forEach
    Object.entries(projectData.today.medium).forEach(([key, value]) => {
        if (value) {
            // Remove 'is' from the key for display
            const formattedKey = key.replace('is', '');
            trueMediums.push(formattedKey); // Add to the array if true
        }
    });
    
    // Display the true mediums in the HTML
    document.querySelector('.project4-medium').innerHTML = `${trueMediums.join(', ')}`;

    document.querySelector('.project4-title').innerHTML = projectData.today.showInfo(); 

document.querySelector('.project4-image').setAttribute ('src',projectData.today.documentation[1].url)
});

//---



//project5
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.project5-desc').innerHTML = projectData.NodAndSmile.description; 
    
    document.querySelector('.project5-image2').setAttribute ('src',projectData.NodAndSmile.documentation[1].url)
    
    const trueMediums = [];
    
    // Loop through the medium object using forEach
    Object.entries(projectData.NodAndSmile.medium).forEach(([key, value]) => {
        if (value) {
            // Remove 'is' from the key for display
            const formattedKey = key.replace('is', '');
            trueMediums.push(formattedKey); // Add to the array if true
        }
    });
    
    // Display the true mediums in the HTML
    document.querySelector('.project5-medium').innerHTML = `${trueMediums.join(', ')}`;

    document.querySelector('.project5-title').innerHTML = projectData.NodAndSmile.showInfo(); 

document.querySelector('.project5-image').setAttribute ('src',projectData.NodAndSmile.documentation[0].url)

});

//---

//project6
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.project6-desc').innerHTML = projectData.DataPortrait.description; 
    
    document.querySelector('.project6-image2').setAttribute ('src',projectData.DataPortrait.documentation[1].url)
    
    const trueMediums = [];
    
    // Loop through the medium object using forEach
    Object.entries(projectData.DataPortrait.medium).forEach(([key, value]) => {
        if (value) {
            // Remove 'is' from the key for display
            const formattedKey = key.replace('is', '');
            trueMediums.push(formattedKey); // Add to the array if true
        }
    });
    
    // Display the true mediums in the HTML
    document.querySelector('.project6-medium').innerHTML = `${trueMediums.join(', ')}`;

    document.querySelector('.project6-title').innerHTML = projectData.DataPortrait.showInfo(); 

document.querySelector('.project6-image').setAttribute ('src',projectData.DataPortrait.documentation[0].url)

});

//---

//project7
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.project7-desc').innerHTML = projectData.TimeKeeper.description; 
    
    document.querySelector('.project7-image2').setAttribute ('src',projectData.TimeKeeper.documentation[1].url)
    
    const trueMediums = [];
    
    // Loop through the medium object using forEach
    Object.entries(projectData.TimeKeeper.medium).forEach(([key, value]) => {
        if (value) {
            // Remove 'is' from the key for display
            const formattedKey = key.replace('is', '');
            trueMediums.push(formattedKey); // Add to the array if true
        }
    });
    
    // Display the true mediums in the HTML
    document.querySelector('.project7-medium').innerHTML = `${trueMediums.join(', ')}`;

    document.querySelector('.project7-title').innerHTML = projectData.TimeKeeper.showInfo(); 

document.querySelector('.project7-image').setAttribute ('src',projectData.TimeKeeper.documentation[0].url)

});
//---


document.querySelector('.project1-title').innerHTML = projectData.RockPaperScissors.showInfo(); 


document.querySelector('.project1-image').setAttribute ('src',projectData.RockPaperScissors.documentation[0].url)


//project2
document.querySelector('.project2-title').innerHTML = projectData.PERSPECTIVES.showInfo(); 

document.querySelector('.project2-image').setAttribute ('src',projectData.PERSPECTIVES.documentation[0].url)

//project3
document.querySelector('.project3-title').innerHTML = projectData.DesertedStateOfMind.showInfo(); 

document.querySelector('.project3-image').setAttribute ('src',projectData.DesertedStateOfMind.documentation[1].url)

//project4
document.querySelector('.project4-title').innerHTML = projectData.today.showInfo(); 

document.querySelector('.project4-image').setAttribute ('src',projectData.today.documentation[1].url)

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

const p4Click = document.querySelector('.project4-today')
p4Click.addEventListener('click',() =>{
    document.location.href = 'today.html'
})

const p5Click = document.querySelector('.project5-NodAndSmile')
p5Click.addEventListener('click',() =>{
    document.location.href = 'NodAndSmile.html'
})

const p6Click = document.querySelector('.project6-DataPortrait')
p6Click.addEventListener('click',() =>{
    document.location.href = 'portrait.html'
})

const p7Click = document.querySelector('.project7-TimeKeeper')
p7Click.addEventListener('click',() =>{
    document.location.href = 'timeKeeper.html'
})