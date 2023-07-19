document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('website').value;
    const image = document.getElementById('image').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const skills = document.querySelectorAll('input[name="skill"]:checked');
  
    const enrolledStudents = document.getElementById('enrolled-students');
    const span = document.getElementById('span');
  
    if (name && email && website && image && gender && skills.length > 0) {
      const enrolledStudent = document.createElement('div');
      enrolledStudent.classList.add('enrolled-student');
  
      enrolledStudent.innerHTML = `
        <h3>Name: ${name}</h3>
        <p>Email: ${email}</p>
        <p>Website: ${website}</p>
        <p>Image link: ${image}</p>
        <p>Gender: ${gender.value}</p>
        <p>Skills: ${Array.from(skills).map(skill => skill.value).join(', ')}</p>
      `;
  
      enrolledStudents.appendChild(enrolledStudent);
      span.style.display = 'none';
    } else {
      alert('Please fill in all the fields.');
    }
  });
  
  document.getElementById('userForm').addEventListener('reset', function() {
    const enrolledStudents = document.getElementById('enrolled-students');
    const span = document.getElementById('span');
    enrolledStudents.innerHTML = '<div class="enroll-heading"><h2>Enrolled Students</h2></div><span id="span">*Fill the form to Enroll the Students.</span>';
    span.style.display = 'inline';
  });
  