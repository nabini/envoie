var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["rsocial"] = document.getElementById("rsocial").value;
    formData["energie"] = document.getElementById("energie").value;
    formData["agence"] = document.getElementById("agence").value;
    formData["vendeur"] = document.getElementById("vendeur").value;
    formData["statut"] = document.getElementById("statut").value;
    formData["datecree"] = document.getElementById("datecree").value;
    formData["dateremise"] = document.getElementById("dateremise").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.rsocial;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.energie;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.agence;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.statut;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.statut;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.datecree;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.dateremise;
    // cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    //                    <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("rsocial").value = "";
    document.getElementById("energie").value = "";
    document.getElementById("agence").value = "";
    document.getElementById("vendeur").value = "";
    document.getElementById("statut").value = "";
    document.getElementById("datecree").value = "";
    document.getElementById("dateremise").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("rsocial").value = selectedRow.cells[0].innerHTML;
    document.getElementById("energie").value = selectedRow.cells[1].innerHTML;
    document.getElementById("agence").value = selectedRow.cells[2].innerHTML;
    document.getElementById("vendeur").value = selectedRow.cells[3].innerHTML;
    document.getElementById("statut").value = selectedRow.cells[4].innerHTML;
    document.getElementById("datecree").value = selectedRow.cells[5].innerHTML;
    document.getElementById("dateremise").value = selectedRow.cells[6].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.rsocial;
    selectedRow.cells[1].innerHTML = formData.energie;
    selectedRow.cells[2].innerHTML = formData.agence;
    selectedRow.cells[3].innerHTML = formData.vendeur;
    selectedRow.cells[4].innerHTML = formData.statut;
    selectedRow.cells[5].innerHTML = formData.datecree;
    selectedRow.cells[6].innerHTML = formData.dateremise;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("rsocial").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}