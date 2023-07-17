let inp = document.querySelector(".inp-job")
let btn = document.querySelector(".btn-saver")
let list = document.querySelector(".list")
// make list & add item's
btn.addEventListener("click" , function(){
    var val1 = inp.value
    if(val1 != " "){
        let item = document.createElement("li")
        item.innerHTML = `
        <div>
        <span class="content"> ${val1} </span>
       </div>
        <div >
            <a href="#" class="btn-close small " style =" margin-top:10px;" onclick="remover(event)"></a>
            <div class="d-flex">
            <div class="form-check  " style="margin-right: 10px ;">
               <button class=" btn btn-outline-success" onclick="chek_box(event)"> done! </button>
            </div>
            <div style="margin-right: 10px;">
                <button class=" btn btn-outline-warning" onclick="todo_chek(event)">  To do it </button>
            </div>
        </div>
        </div>
        `
        list.appendChild(item)
        item.className = 'alert alert-secondary list-unstyled d-flex justify-content-between alert-dismissible '

    }
    //for clear a inpout val 
    inp.value = ""
})
//remove work's
function remover (event){
    let target1 = event.target.parentElement.parentElement
    target1.remove()
}
        // chek box 
        function chek_box (event){
         var success_alert = event.target.parentElement.parentElement.parentElement.parentElement
         success_alert.classList.remove('alert-info') 
         success_alert.classList.remove('alert-warning')  
         success_alert.classList.add('alert-success')  
         success_alert.querySelector(".content").classList.add('text-decoration-line-through')
        }

        function todo_chek(event){
            let war_alert = event.target.parentElement.parentElement.parentElement.parentElement
         war_alert.classList.remove('alert-info') 
         war_alert.classList.remove('alert-success')  
         war_alert.classList.add('alert-warning')
         war_alert.querySelector(".content").classList.remove('text-decoration-line-through')
        }
