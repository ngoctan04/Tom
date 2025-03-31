// script.js
document.getElementById('pressMeBtn').addEventListener('click', function() {
    const teamMembers = ['Tân', 'Phúc', 'Tây'];
    const memberList = teamMembers.join(', ');
    document.getElementById('teamMembers').innerText = `Team Members: ${memberList}`;
});