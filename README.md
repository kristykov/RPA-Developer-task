# RPA-Developer-task
## JavaScript
### Task 1

```
const array = [1, 23, 58, 3, 88, 17];

Array.prototype.sortByAsced = function(){
    return this.sort( (a, b) => a - b );
}
Array.prototype.sortByDesced = function(){
    return this.reverse();
}

console.log(array.sortByAsced()); // [1, 3, 17, 23, 58, 88]
console.log(array.sortByDesced()); // [88, 58, 23, 17, 3, 1]
```
### Task2 
```
const size = 100;
const div = document.createElement('div');
div.style.cssText = `width: ${9*size}px; height:${6*size}px; border:1px solid #CCC;
  font-family:Arial,sans-serif;font-size:8px;font-weight:400;position:relative;color:white;
  background-color:#E2E2E2;`;
document.body.appendChild(div);
const styleEl = document.createElement('style');
document.head.appendChild(styleEl);
const sheet = styleEl.sheet;
let styles = `span {position:absolute;display:block;}`;
sheet.insertRule(styles, 0);
styles = `.b{color: #0A2463}`;
sheet.insertRule(styles, 1);
styles = `.r{color: #FB3640}`;
sheet.insertRule(styles, 2);

let x = 0;
let y = 0;

for (i = 0; i <= 59; i++){
   for(j = 0; j <= 79; j++){
        const el = document.createElement('span');
        x = x + 11;
       el.style.left = `${x}px`;
       el.style.top = `${y}px`;
       div.appendChild(el);
       el.innerText = 'o';
       if(i >= 40){
        el.className = 'r';
       } else if (i >= 20 && i < 40){
        el.className = 'b';
       } 
   }
   y = y + 10;
   x = 0;
}
```
### Tasks 3,4
https://kristykov.github.io/RPA-Developer-task/RPA-Developer-task/

## SQL

### Task 2
```
SELECT DEPARTMENT_ID
FROM EMPLOYEE
GROUPE BY DEPARTMENT_ID
HAVING COUNT(*) <= 3;
```
### Task 4
```
INSERT INTO DEPARTMENT
VALUES ('newID', 'newNAME');

```
### Task 5
```
INSERT INTO EMPLOYEE VALUES
('ID', (SELECT ID FROM DEPARTMENT WHERE DEPARTMENT.ID ='newNAME'), 'CHIEF_ID', 'NAME', 'SALARY'),
('ID', (SELECT ID FROM DEPARTMENT WHERE DEPARTMENT.ID ='newNAME'), 'CHIEF_ID', 'NAME', 'SALARY'),
('ID', (SELECT ID FROM DEPARTMENT WHERE DEPARTMENT.ID ='newNAME'), 'CHIEF_ID', 'NAME', 'SALARY'),
('ID', (SELECT ID FROM DEPARTMENT WHERE DEPARTMENT.ID ='newNAME'), 'CHIEF_ID', 'NAME', 'SALARY');

```
### Task 6
```
DELETE FROM DEPARTMENT
WHERE DEPARTMENT.ID ='newNAME');

```
### Task 7
```
UPDATE EMPLOYEE
WHERE DEPARTMENT_ID ='newNAME');

```
