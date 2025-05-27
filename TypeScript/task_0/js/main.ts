interface Student
{
firstName: string;
lastName: string;
age: number;
location: string;
}

const student1: Student = {
	firstName: 'Spencer'
	lastName: 'Reed'
	age: 36,
	location: 'Paris';
}

const student2: Student = {
        firstName: 'carlos'
        lastName: 'sainz'
        age: 25,
        location: 'Mexico';
}

const studentsList: Student[] = [student1, student2];
const table: HTMLTableElement = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach((student: Student): void => {
	const newRow: HTMLTableRowElement = table.insertRow();
	const newRowFirstName: HTMLTableCellElement = newRow.insertCell();
	const newRowLocation: HTMLTableCellElement = newRow.insertCell();
	newRowFirstName.innerHTML = student.firstName;
	newRowLocation.innerHTML = student.location;
})
