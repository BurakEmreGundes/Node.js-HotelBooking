






let getOneRoomType=async function(id){
  
    const response=await axios.get(`http://localhost:3030/room-type/${id}`)

    return response.data
}


document.querySelector("#roomType").addEventListener("click",async function(){
  document.querySelector("#roomType").value=""
  document.querySelector("#roomDescription").value=""
  document.querySelector("#roomServices").value=""
 const id= document.querySelector("#includeRoomType").value
 const roomType=await getOneRoomType(id)
 document.querySelector("#roomType").value=roomType.roomType
 document.querySelector("#roomDescription").value=roomType.roomDescription
 document.querySelector("#roomServices").value=roomType.roomServices
})




