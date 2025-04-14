function addCourse() {
    const container = document.getElementById("courses-container");

    const input = document.createElement("input");
    input.type = 'text';
    input.name = 'courses';
    input.placeholder = 'Enter course and why';
    input.value = 'ITSC 3135';

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => {
        container.removeChild(input);
        container.removeChild(deleteBtn);
    };


    container.appendChild(input);
    container.appendChild(deleteBtn);

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
    courseInputs.forEach(input => {
        courses.push(input.value);
    });


    const platform = document.getElementById('platform').value;
    const funny = document.getElementById('funny').value;
    const anythingElse = document.getElementById('anything-else').value;

    
    const formDataContainer = document.getElementById('formDataContainer');
    formDataContainer.innerHTML = `
        <h3>BYO Form Info </h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mascot:</strong> ${mascot}</p>
        <p><strong>Image Caption:</strong> ${caption}</p>
        <p><strong>Image: </strong> </p>

        <img src="${imageSrc}" alt="Uploaded Image" style="max-width: 400px; max-height: 400px;">

        <p><strong>Personal Background:</strong> ${personalBackground}</p>
        <p><strong>Academic Background:</strong> ${academicBackground}</p>
        <p><strong>Professional Background:</strong> ${professionalBackground}</p>
        <p><strong>Web Development Background:</strong> ${subjectBackground}</p>
        <p><strong>Primary Computer Platform:</strong> ${platform}</p>

        <p><strong>Courses:</strong> ${courses.join(', ')}</p>

        <p><strong>Funny/Interesting Fact:</strong> ${funny}</p>
        <p><strong>Anything else:</strong> ${anythingElse}</p>
        <input type="reset" value="Reset" onclick="resetForm()"/>
        `
    ;

    document.getElementById('form').style.display = 'none';

});
