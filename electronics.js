//electronic page


//project1
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.project1-desc').innerHTML = projectData.LightHouse.description; 
    
    document.querySelector('.project1-image2').setAttribute ('src',projectData.LightHouse.documentation[1].url)
    
    const trueMediums = [];
    
    // Loop through the medium object using forEach
    Object.entries(projectData.LightHouse.medium).forEach(([key, value]) => {
        if (value) {
            // Remove 'is' from the key for display
            const formattedKey = key.replace('is', '');
            trueMediums.push(formattedKey); // Add to the array if true
        }
    });
    
    // Display the true mediums in the HTML
    document.querySelector('.project1-medium').innerHTML = `${trueMediums.join(', ')}`;

    document.querySelector('.project1-title').innerHTML = projectData.LightHouse.showInfo(); 

document.querySelector('.project1-image').setAttribute ('src',projectData.LightHouse.documentation[0].url)
});

//---

//project2
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.project2-desc').innerHTML = projectData.EternaLight.description; 
    
    document.querySelector('.project2-image2').setAttribute ('src',projectData.EternaLight.documentation[1].url)
    
    const trueMediums = [];
    
    // Loop through the medium object using forEach
    Object.entries(projectData.EternaLight.medium).forEach(([key, value]) => {
        if (value) {
            // Remove 'is' from the key for display
            const formattedKey = key.replace('is', '');
            trueMediums.push(formattedKey); // Add to the array if true
        }
    });
    
    // Display the true mediums in the HTML
    document.querySelector('.project2-medium').innerHTML = `${trueMediums.join(', ')}`;

    document.querySelector('.project2-title').innerHTML = projectData.EternaLight.showInfo(); 

document.querySelector('.project2-image').setAttribute ('src',projectData.EternaLight.documentation[0].url)
});

//---

//project4
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.project4-desc').innerHTML = projectData.Sunrise.description; 
    
    document.querySelector('.project4-image2').setAttribute ('src',projectData.Sunrise.documentation[1].url)
    
    const trueMediums = [];
    
    // Loop through the medium object using forEach
    Object.entries(projectData.Sunrise.medium).forEach(([key, value]) => {
        if (value) {
            // Remove 'is' from the key for display
            const formattedKey = key.replace('is', '');
            trueMediums.push(formattedKey); // Add to the array if true
        }
    });
    
    // Display the true mediums in the HTML
    document.querySelector('.project4-medium').innerHTML = `${trueMediums.join(', ')}`;

    document.querySelector('.project4-title').innerHTML = projectData.Sunrise.showInfo(); 

document.querySelector('.project4-image').setAttribute ('src',projectData.Sunrise.documentation[0].url)
});

//---


//project1
document.querySelector('.project1-title').innerHTML = projectData.LightHouse.showInfo(); 

document.querySelector('.project1-image').setAttribute ('src',projectData.LightHouse.documentation[0].url)

//project2
document.querySelector('.project2-title').innerHTML = projectData.EternaLight.showInfo(); 

document.querySelector('.project2-image').setAttribute ('src',projectData.EternaLight.documentation[1].url)

//project3
document.querySelector('.project3-title').innerHTML = projectData.NodAndSmile.showInfo(); 

document.querySelector('.project3-image').setAttribute ('src',projectData.NodAndSmile.documentation[1].url)

//project4
document.querySelector('.project4-title').innerHTML = projectData.Sunrise.showInfo(); 

document.querySelector('.project4-image').setAttribute ('src',projectData.Sunrise.documentation[0].url)


const divsInContainer = document.querySelectorAll('#page-container div');

// add class fullDirLayout + dir-hover for each div element
divsInContainer.forEach(div => {
    div.classList.add('fullDirLayout');
    div.classList.add('dir-hover');
});

const p1Click = document.querySelector('.project1-LightHouse')
p1Click.addEventListener('click',() =>{
    document.location.href = 'LightHouse.html'
})

const p2Click = document.querySelector('.project2-EternaLight')
p2Click.addEventListener('click',() =>{
    document.location.href = 'EternaLight.html'
})

const p3Click = document.querySelector('.project3-NodAndSmile')
p3Click.addEventListener('click',() =>{
    document.location.href = 'NodAndSmile.html'
})

const p4Click = document.querySelector('.project4-Sunrise')
p4Click.addEventListener('click',() =>{
    document.location.href = 'sunrise.html'
})