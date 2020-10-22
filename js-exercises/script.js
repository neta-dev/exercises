// this function uses fontawesome, which must be included as a link in your html page(s)
function buildNavBar(){
    str =   `<div class="navbar">
                <a href="index.html"><i class="fa fa-fw fa-home"></i> Home</a> 
                <a href="simple-examples.html"><i class="fa fa-fw fa-tv"></i> Simple Examples</a> 
                <a href="test.html"><i class="fa fa-fw fa-circle"></i> Test Page</a> 
                <a href="navigation.html"><i class="fa fa-fw fa-database"></i> Navbar Page</a>
            </div>`;
    return str;
}

// set active class based on selected url
function setActiveClass(){
    var active = 0;
    document.links[active].className.replace('active', '');
		for (var i = 0; i < document.links.length; i++) {
			if (document.links[i].href === document.URL) {
				active = i;
			}
		}
	document.links[active].className = 'active';
}

function clearDivContents(divID) {
    let divElement = document.getElementById(divID);
    divElement.innerHTML = '';
}

function generateParagraphs(parentId, str, number){
    let parentElement = document.getElementById(parentId);
    for(let i=0; i<number; i++){
        let node = document.createElement("P");
        let textnode = document.createTextNode(str);
        node.appendChild(textnode);
        node.setAttribute("id", i);
        parentElement.appendChild(node);
    }

}

function paintParagraphs() {
    let pTags = document.getElementsByTagName('p');
        
    for (let i=0; i < pTags.length; i++){
            if(i % 2 != 0) pTags[i].style.backgroundColor = "lightgrey";
        }
}

var persons  = [];

function updateLocalStorage() {
    if(!localStorage.getItem('persons')) localStorage.setItem('persons');
}

function addPerson() {
    let person = {id:"", lastname:"", firstName:"", dob:""};
    person.firstName = document.getElementById('firstName').value;
    person.lastName = document.getElementById('lastName').value;
    person.dob = document.getElementById('dob').value;
    persons.push(person);
    console.log(persons);

    clearForm();
}

function clearForm(){
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('dob').value = '';
}

function getPersons() {
    return persons;
}

function getPerson(id) {
    let idx = persons.findIndex(x => x.id === id) ;
    return persons[idx];
}

function buildPresonsList() {
    let html = `<table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>DOB</th>
                    </tr>`;
    persons.forEach((item, index)=>{
        html += `
            <tr onclick="editPerson(${index})">
                <td>${index + 1}</td>
                <td>${item['firstName']}</td>
                <td>${item['lastName']}</td>
                <td>${item['dob']}</td>
            </tr>
        `
    });

    html += "</table>";
    document.getElementById('personsList').innerHTML = html;
}

function editPerson(index) {
    person = persons[index];
    // console.log(person);
    document.getElementById('personId').value = person['firstName'];
    document.getElementById('firstName').value = person['firstName'];
    document.getElementById('lastName').value = person['lastName'];
    document.getElementById('dob').value = person['dob'];
}

