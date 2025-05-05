function addCourse() {
    const container = document.getElementById("courses-container");

    const courseContainer = document.createElement('div');

    const courseInput = document.createElement("input");

    courseInput.type = 'text';
    courseInput.placeholder = 'Enter course name: ';
    courseInput.className = 'course-name';
    courseInput.value = 'ITSC-3135';

    const whyInput = document.createElement("input");

    whyInput.name = 'course-reason';
    whyInput.className = 'course-reason';
    whyInput.type = 'text';
    whyInput.value = 'I wanted to suffer';


    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.textContent = 'Delete';

    deleteBtn.onclick = () => {
        container.removeChild(courseContainer);
    };


    courseContainer.appendChild(courseInput);
    courseContainer.appendChild(whyInput);
    courseContainer.appendChild(deleteBtn);

    container.appendChild(courseContainer);
}

function clearValue(elementId) {
    const input = document.getElementById(elementId);
    input.value = '';
}

function clearText(elementId) {
    const textID = document.getElementById(elementId);

    textID.value = '';
}


function resetForm() {

    document.getElementById('form').reset(); 
    const courseContainer = document.getElementById('courses-container');
    courseContainer.innerHTML = ''; 
    const formDataContainer = document.getElementById('formDataContainer'); 
    formDataContainer.innerHTML = '';
    document.getElementById('form').style.display = 'block';

    
}


document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const mascot = document.getElementById('mascot').value;

    const caption = document.getElementById('caption').value;
    const imageSrc = document.getElementById('preview-image').src;

    const personalBackground = document.getElementById('personal-background').value;
    const academicBackground = document.getElementById('academic-background').value;
    const professionalBackground = document.getElementById('professional-background').value;
    const subjectBackground = document.getElementById('subject-background').value;

    const courses = [];
    const courseInputs = document.querySelectorAll('#courses-container input');
    courseInputs.forEach((input) => {
        courses.push(input.value);
    });
    if (courses.length === 0) {
        alert('Please add at least one course!');
        return;
    }



    const platform = document.getElementById('platform').value;
    const funny = document.getElementById('funny').value;
    const anythingElse = document.getElementById('anything-else').value;

    
    /*const formDataContainer = document.getElementById('formDataContainer');*/


    let courseListHTML = '<li><strong>Courses:</strong><ul>';
    const courseGroups = document.querySelectorAll('#courses-container div');
    courseGroups.forEach((group) => {
        const course = group.querySelector('.course-name').value.trim();
        const reason = group.querySelector('.course-reason').value.trim();
        if (course) {
            courseListHTML += `<li><strong>${course}:</strong> ${reason}</li>`;
        }
    });
    courseListHTML += '</ul></li>';


    formDataContainer.innerHTML = `

         <h3> ${name}, ${mascot} </h3>



         <figure>
            <img src="${imageSrc}" alt="Uploaded Image" style="max-width: 400px; max-height: 400px;">

            <figcaption>${caption}</figcaption>
        </figure>

        <ul>
            <li><strong>Personal Background:</strong> ${personalBackground}</li>
            <li><strong>Academic Background:</strong> ${academicBackground}</li>
            <li><strong>Professional Background:</strong> ${professionalBackground}</li>
            <li><strong>Web Development Background:</strong> ${subjectBackground}</li>
            <li><strong>Primary Computer Platform:</strong> ${platform}</li>
            ${courseListHTML}
            <li><strong>Funny/Interesting Fact:</strong> ${funny}</li>
            <li><strong>Anything else:</strong> ${anythingElse}</li>
            
        </ul>
        <input type="reset" value="Reset" onclick="resetForm()"/>
        
        `
    ;

    document.getElementById('form').style.display = 'none';

});

