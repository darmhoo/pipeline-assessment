import fetchUsers from "./utilities/fetchListFromApi";


const startApp = async () => {
   let a = await fetchUsers.fetchUsers();
   let data = a.results[0];
   let info = a.info
    // a = JSON.stringify(a);

    


   let tbody = document.querySelector('tbody');

   for (let i = 0, row; row = tbody?.rows[i]; i++){
    row.setAttribute('data-entryid', data[info.page][i].id);
    row.cells[0].innerText = data[info.page][i].row;
    row.cells[1].innerText = data[info.page][i].gender;
    row.cells[2].innerText = data[info.page][i].age;

   }

  
   let btn = document.querySelectorAll('button');
  btn[0].setAttribute("data-prevbtn", a?.paging?.previous);
   btn[1].setAttribute('data-nextbtn', a?.paging?.next);



   btn[0].addEventListener('click', async function(){
    await fetchUsers.fetchUsers(null, this.getAttribute("data-prevbtn"));
  });

   let label = document.querySelector('label');
   label?.insertAdjacentHTML('afterbegin', `Current Page: ${info.page}`);
//    console.log();

   btn[1].addEventListener('click', async function(){
    await fetchUsers.fetchUsers(null, this.getAttribute("data-nextbtn"));
   });

  
   
   tbody?.setAttribute('data-sink', a[1] );
   console.log(a);
   

};

// const setContent

document.addEventListener('DOMContentLoaded', startApp);