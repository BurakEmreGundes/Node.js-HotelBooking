const axios=require("axios")



let getRoomTypes=async function(){
    const response=await axios.get("http://localhost:3030/room-type")
    return response.data
}




module.exports=getRoomTypes