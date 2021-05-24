









let deleteRoomTypeImage=async function(imageName,roomType){
  
    const response=await axios.post(`http://localhost:3030/room-type/delete-room-type-image`,{
        imageName,
        roomType
    })
    if(response.data.saveState){
        alert(response.data.saveStateMessage)
        window.location.reload()
    }else{
        alert(response.data.saveStateMessage)
        window.location.reload()
    }
return 1
        
}


window.onclick=function(event){
    if(event.target.id=="delete-image-button"){
        const imageName=event.target.getAttribute("imageName")
        const roomType=event.target.getAttribute("slugify")
        deleteRoomTypeImage(imageName,roomType)        
    }
}






