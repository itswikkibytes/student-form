const form = document.getElementById("studentForm");
const tableBody = document.getElementById("studentTableBody");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const course = document.getElementById("course").value;
    const email = document.getElementById("email").value;
    const genderInput = document.querySelector('input[name="gender"]:checked');

    if (!genderInput) {
        alert("Please select gender.");
        return;
    }

    const gender = genderInput.value;

    const row = document.createElement("tr");
    row.innerHTML = `
        <td class="border px-4 py-2">${name}</td>
        <td class="border px-4 py-2">${age}</td>
        <td class="border px-4 py-2">${gender}</td>
        <td class="border px-4 py-2">${course}</td>
        <td class="border px-4 py-2">${email}</td>
        <td class="border px-4 py-2">
          <button class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded deleteBtn">Delete</button>
        </td>
      `;

    row.querySelector(".deleteBtn").addEventListener("click", function(){
        tableBody.removeChild(row);
    });

    tableBody.appendChild(row);
    form.reset();
});