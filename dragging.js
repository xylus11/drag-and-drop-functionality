const container = document.querySelectorAll(".container")

const dragstate= 
{
    draggedElement :null,
    parentcontainer: null

}

function ondrag(event){
   const dragCard = event.target;
   dragstate.draggedElement = dragCard;
   dragstate.parentcontainer=dragCard.parentNode;
}
function ondragover(event){
    const currentcontainer = event.target.closest(".container");
    if(dragstate.parentcontainer.id ===currentcontainer.id)
    {
        return;
    }
    event.preventDefault();
}
function ondrop(event)
{
   const dropcontainer = event.target.closest(".container");
   dropcontainer.appendChild(dragstate.draggedElement);
}
for(let i =0;i<container.length;i++)
{
    container[i].addEventListener("dragover",ondragover);
    container[i].addEventListener("drop",ondrop);

}