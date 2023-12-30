const createissue =document.getElementById("create-issue-btn");
const issueinput= document.getElementById("issue-inp");
const todoo= document.getElementById("todo");
createissue.addEventListener("click",onClick);
issueinput.addEventListener("blur",onblurr);
issueinput.addEventListener("keyup",onEnter);
function onClick(){
     toggleclickOptions();
}

function toggleclickOptions(){
    createissue.classList.toggle("hide");
    issueinput.classList.toggle("hide");
    if(!issueinput.classList.contains("hide"))
    {
       
        issueinput.focus();
    }
} 
function onblurr(){
    if(!issueinput.classList.contains("hide"))
    {
    toggleclickOptions();
    }
}

function onEnter(e)
{
if(e.keyCode===13)
{
    const issueName = issueinput.value;
  if(!issueName)
  {
    return;
  }

    const issuecard = document.createElement("div");
    issuecard.className="card";
    issuecard.innerHTML = `
            <span>${issueName}</span>
            <span class="material-icons" onclick="deleteCard(this)">delete</span>
            `;

       
        // since issue cards needs to draggable
       issuecard.draggable= true;
       issuecard.addEventListener("dragstart",ondrag);


        
        issueinput.value = "" ;
        todoo.appendChild(issuecard);
      toggleclickOptions();

    
    
    


}
}

function deleteCard(deletebutn)
{ 
   const card = deletebutn.parentNode;
   card.remove();
}