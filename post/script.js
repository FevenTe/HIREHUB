document.getElementById('jobForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let jobTitle = document.getElementById('jobTitle').value;
    let jobDescription = document.getElementById('jobDescription').value;
    let jobLocation = document.getElementById('jobLocation').value;
    let jobType = document.getElementById('jobType').value;

    // For demonstration purposes, we'll just log the values
    console.log('Job Title:', jobTitle);
    console.log('Job Description:', jobDescription);
    console.log('Job Location:', jobLocation);
    console.log('Job Type:', jobType);

    // You would typically send this data to a server to save it
    // and update the UI with the new job posting
});

// Simulated job listings (you would replace this with actual data from a server)
let jobListings = [
    { title: 'Software Engineer', location: 'Addis Abeba', type: 'Full-time' },
    { title: 'Business Administrator', location: 'Adama', type: 'Part-time' },
    { title: 'System Analysist', location: 'Dire Dawa', type: 'Contract' }
];

let jobListingsElement = document.getElementById('jobListings');
jobListings.forEach(function(job, index) {
    let li = document.createElement('li');
    li.textContent = `${job.title} - ${job.location} - ${job.type}`;

    let editButton = document.createElement('button');
    editButton.textContent =          'Edit';
    editButton.addEventListener('click', function() {
        // Handle editing of job
        
    });

    let deleteButton = document.createElement('button');
    deleteButton.textContent =         'Delete';
    deleteButton.addEventListener('click', function() {
        // Handle deleting of job
    });

    let viewApplicationsButton = document.createElement('button');
    viewApplicationsButton.textContent =       'View Applications';
    viewApplicationsButton.addEventListener('click', function() {
        // Handle viewing applications for job
    });

    li.appendChild(editButton);
    li.appendChild(deleteButton);
    li.appendChild(viewApplicationsButton);
    jobListingsElement.appendChild(li);
});

function renderJobApplications(applications) {
    let jobApplicationsElement = document.getElementById('jobApplications');
    jobApplicationsElement.innerHTML = '';

    applications.forEach(function(application) {
        let li = document.createElement('li');
        li.textContent = `${application.name} - ${application.email}`;

        let rejectButton = document.createElement('button');
        rejectButton.textContent = 'Reject';
        rejectButton.addEventListener('click', function() {
            // Handle rejecting application
        });

        let selectButton = document.createElement('button');
        selectButton.textContent = 'Select';
        selectButton.addEventListener('click', function() {
            // Handle selecting applicant for job
        });

        li.appendChild(rejectButton);
        li.appendChild(selectButton);
        jobApplicationsElement.appendChild(li);
    });
}
