


employees=[{id:101, name:'Rahul'},
            {id:102, name:'Priyanka'},
            {id:103, name: 'Sonia'},
            {id:104, name:'Modi'}]
            let i=0;
           while(i<=employees.length)
            {
                console.log("-------------")
                console.log(employees[i].id, employees[i].name);
                console.log("-------------")
                i++; 
               if(i==employees.length)
               {
                break;
               }
            }
            console.log("done")
        