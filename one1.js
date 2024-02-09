let employees= [{id:101,name:'rahul'},{id:102,name:'Priyanka'}]
function display_data()
{
let rows='';

for(emp of employees)
{
    rows=rows+`<tr>
                   <td>${emp.id}</td>
                   <td>${emp.name}</td>
                   
                </tr>`
                
                document.getElementById('abc').innerHTML = rows;

}
}

/*Certain key take aways: It is important to mention predefined functions without changing the case.
                          It is necassary to mention the attributes accurately, especially while using IDs
                          to refer to code outside the HTML script.*/

