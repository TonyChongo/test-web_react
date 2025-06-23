interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Alice',
  lastName: 'Smith',
  age: 22,
  location: 'Paris',
};

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Johnson',
  age: 25,
  location: 'Berlin',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
table.border = '1';

const headerRow = document.createElement('tr');
const th1 = document.createElement('th');
th1.textContent = 'First Name';
const th2 = document.createElement('th');
th2.textContent = 'Location';
headerRow.appendChild(th1);
headerRow.appendChild(th2);
table.appendChild(headerRow);

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
