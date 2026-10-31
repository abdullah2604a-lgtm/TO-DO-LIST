function add(){
    var list = document.getElementById('list');
    var task = document.getElementById('input').value;


    if(task === ''){
        alert('Plaese Enter Task!');

    }
    else{
        list.innerHTML += `
          <tr class="bg-sky-500">
          <td class="number">1</td>
           <td class="text-start p-2">
                <input type="checkbox" onchange="completetask(this)" id="checkbox">
                <span class="task">${task}</span>
              </td>
                    <td class="text-start p-2 cursor-pointer">
                    <button  onclick="this.closest('tr').remove()">X</button>
                <button onclick="editTask(this)">Edit</button>
                    <button onclick="this.closest('tr').remove(); updateNumbers();"></button>
                    </td>
                </tr>
        `;
        document.getElementById('input').value = ''
        updatenumber()
    }
}

function editTask(btn){
    var row = btn.closest('tr');

    var taskcell = row.querySelector('.task'); 
    var newtask = prompt('edit your task', taskcell.textContent);
    if(newtask !== null && newtask.trim() !== ''){
     taskcell.textContent = newtask.trim();
    }
}

function updatenumber(){
   var row =document.querySelectorAll('#list tr');
   row.forEach( function (row,i){
    row.querySelector('.number').textContent = i  +1;
   }

   )
}
function filtertask(){
    var search = document.getElementById('serach').value.toLowerCase();
    var rows = document.querySelectorAll('# list tr');

    rows.forEach(function(row){
     var taskcell =row.querySelector('.task').textContent.toLowerCase();
       if (taskcell) {
        if(taskcell.includes(search)){
            row.style.display = '';
        }
        else{
            row.style.display = 'none';
        }
       }


    });
}

function completetask(checkbox){

    var task = checkbox.nextElementSibling;

    if(checkbox.checked){
        task.style.textDecoration = 'line-through';

    }
    else{
        task.style.textDecoration = 'none';
    }
}