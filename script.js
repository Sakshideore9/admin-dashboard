// Handle Admin Login
const loginForm = document.getElementById('adminLoginForm');
loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('adminUsername').value;
  const password = document.getElementById('adminPassword').value;

  if (username === 'admin' && password === 'admin') {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('uploadSection').style.display = 'block';
    document.getElementById('logSection').style.display = 'block';
    loadLogs();
  } else {
    alert('Invalid admin credentials');
  }
});

// Simulate file upload
const uploadForm = document.getElementById('uploadForm');
uploadForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const file = document.getElementById('fileInput').files[0];
  const expiry = document.getElementById('expiry').value;
  const password = document.getElementById('password').value;

  if (file) {
    const link = `https://yourdomain.com/download/${Math.random().toString(36).substring(2, 10)}`;
    document.getElementById('uploadResult').innerHTML = `
      ✅ <strong>${file.name}</strong> uploaded!<br>
      🔗 Download Link: <a href="${link}" target="_blank">${link}</a>`;
  }
});

// Simulated logs
function loadLogs() {
  document.getElementById('fileLogs').innerHTML = `
    <ul>
      <li><strong>project.pdf</strong> - Downloaded 5x - IP: 192.168.1.5</li>
      <li><strong>photo.zip</strong> - Expired after 1 day</li>
    </ul>
  `;
}
