 /// Import models
const Room=require("../models/room.model")
const Booking=require('../models/booking.model')
const mailer=require("../config/mailer")





exports.createBooking=(req,res)=>{

        let {selectedBookingDates,roomType}=req.body
       
    
    
    if(parseInt((selectedBookingDates[1].split("-")[1])-parseInt(selectedBookingDates[0].split("-")[1]))<=1){
    
        let monthSimilarArray=[];      
        let months = selectedBookingDates.reduce(function(oldArray,nowSelectedBookingDate){
          if(!oldArray.includes(nowSelectedBookingDate.split("-")[1])){
    
              oldArray.push(nowSelectedBookingDate.split("-")[1])
              monthSimilarArray.push(nowSelectedBookingDate.split("-")[1])
          
              return oldArray
          }
          
    },[])
    
    

    if(monthSimilarArray.length>1){
      const startedDate=parseInt(selectedBookingDates[0].split("-")[0])
      const finishedDate=parseInt(selectedBookingDates[1].split("-")[0])
      const bookingDayCount=finishedDate-startedDate
      const startedDateMonth=selectedBookingDates[0].split("-")[1]
      const finishedDateMonth=selectedBookingDates[1].split("-")[1]
      const yearMonth=selectedBookingDates[0].split("-")[2]
      
      if(parseInt(startedDateMonth)==2 ){
          let dayTime=startedDate
          let i=0;
          selectedBookingDates=[]
          while(parseInt(dayTime)<=28){
              selectedBookingDates.push(dayTime.toString()+"-"+startedDateMonth+"-"+yearMonth)
              dayTime++       
          }
          for(let i=1;i<=finishedDate;i++){
              let dayTime=i
              selectedBookingDates.push(dayTime.toString()+"-"+finishedDateMonth+"-"+yearMonth)
          }
          Room.findOne({includeRoomType:roomType,roomBookingDates:{$nin:[...selectedBookingDates]}}).populate("includeRoomType").exec((err,room)=>{
            if(err){
                res.send(err.message)
            }else{
                if(room){
                  let newRoomBookingDates=  room.roomBookingDates
                  for(let i=0;i<selectedBookingDates.length;i++){
                      newRoomBookingDates.push(selectedBookingDates[i])
                  }
                  const bookingUniqId=req.body.userName+"-"+ new Date().getTime()
                       // ilk rez ekle sonra oda rez güncelle 
                  const booking=new Booking({roomType:room.includeRoomType,roomNumber:room.roomNumber,roomSelectedDates:selectedBookingDates,roomChildrenInfo:req.body.roomChildrenInfo,roomAdultInfo:req.body.roomAdultInfo,userName:req.body.userName,userEmail:req.body.userEmail,userPhone:req.body.userPhone,bookingComments:req.body.bookingComments,bookingUniqCode:bookingUniqId})
                  booking.save((err)=>{
                      if(err){
                          res.send(err.message)
                      }else{
                          Room.findOneAndUpdate({roomNumber:room.roomNumber}, {roomBookingDates:newRoomBookingDates}, {new:true}, (err,newRoom)=>{
                              if(err){
                                  res.send(err.message)
                              }else{
                                  mailer("Tarihi Kumbaba Otel <info@kumbaba@gmail.com>",req.body.userEmail,bookingUniqId,req.body.userName,req.body.userEmail,req.body.userPhone,room.includeRoomType.roomType,req.body.roomAdultInfo,req.body.roomChildrenInfo,req.body.selectedBookingDates[0],req.body.selectedBookingDates[1],req.body.bookingComments)
                                  res.send(newRoom)
                              }
                              
                         
                          }) 
                      }
                  })
              
                }else{
             
                    res.send("ODALAR DOLU")
                }
            }
        })
      }else if(parseInt(startedDateMonth)==1||parseInt(startedDateMonth)==3||parseInt(startedDateMonth)==5||parseInt(startedDateMonth)==7||parseInt(startedDateMonth)==8||parseInt(startedDateMonth)==10||parseInt(startedDateMonth)==12){
          let dayTime=startedDate
          let i=0;
          selectedBookingDates=[]
          while(parseInt(dayTime)<=31){
              selectedBookingDates.push(dayTime+"-"+startedDateMonth+"-"+yearMonth)   
              dayTime++    
          }
          for(let i=1;i<=finishedDate;i++){
              let dayTime=i
              selectedBookingDates.push(dayTime.toString()+"-"+finishedDateMonth+"-"+yearMonth)
          }
          Room.findOne({includeRoomType:roomType,roomBookingDates:{$nin:[...selectedBookingDates]}}).populate("includeRoomType").exec((err,room)=>{
            if(err){
                res.send(err.message)
            }else{
                if(room){
                  let newRoomBookingDates=  room.roomBookingDates
                  for(let i=0;i<selectedBookingDates.length;i++){
                      newRoomBookingDates.push(selectedBookingDates[i])
                  }
                  const bookingUniqId=req.body.userName+"-"+ new Date().getTime()
                  const booking=new Booking({roomType:room.includeRoomType,roomNumber:room.roomNumber,roomSelectedDates:selectedBookingDates,roomChildrenInfo:req.body.roomChildrenInfo,roomAdultInfo:req.body.roomAdultInfo,userName:req.body.userName,userEmail:req.body.userEmail,userPhone:req.body.userPhone,bookingUniqCode:bookingUniqId})
                  booking.save((err)=>{
                      if(err){
                          res.send(err.message)
                      }else{
                          Room.findOneAndUpdate({roomNumber:room.roomNumber}, {roomBookingDates:newRoomBookingDates}, {new:true}, (err,newRoom)=>{
                              if(err){
                                  res.send(err.message)
                              }else{
                                  mailer("Tarihi Kumbaba Otel <info@kumbaba@gmail.com>",req.body.userEmail,bookingUniqId,req.body.userName,req.body.userEmail,req.body.userPhone,room.includeRoomType.roomType,req.body.roomAdultInfo,req.body.roomChildrenInfo,req.body.selectedBookingDates[0],req.body.selectedBookingDates[1],req.body.bookingComments)
                                  res.send(newRoom)
                              }
                          }) 
                      }
                  })
                
               
                
                }else{
             
                    res.send("ODALAR DOLU")
                }
            }
        })
      }else if(parseInt(startedDateMonth)==4||parseInt(startedDateMonth)==6||parseInt(startedDateMonth)==9||parseInt(startedDateMonth)==11){
          let dayTime=startedDate
          let i=0;
          selectedBookingDates=[]
          while(parseInt(dayTime)<=30){
              selectedBookingDates.push(dayTime+"-"+startedDateMonth+"-"+yearMonth)   
              dayTime++    
          }
          for(let i=1;i<=finishedDate;i++){
              let dayTime=i
              selectedBookingDates.push(dayTime.toString()+"-"+finishedDateMonth+"-"+yearMonth)
          }
          console.log(selectedBookingDates);
          Room.findOne({includeRoomType:roomType,roomBookingDates:{$nin:[...selectedBookingDates]}}).populate("includeRoomType").exec((err,room)=>{
            if(err){
                res.send(err.message)
            }else{
                if(room){
  
                  let newRoomBookingDates=  room.roomBookingDates
                   for(let i=0;i<selectedBookingDates.length;i++){
                       newRoomBookingDates.push(selectedBookingDates[i])
                   }
                   const bookingUniqId=req.body.userName+"-"+ new Date().getTime()
                   const booking=new Booking({roomType:room.includeRoomType,roomNumber:room.roomNumber,roomSelectedDates:selectedBookingDates,roomChildrenInfo:req.body.roomChildrenInfo,roomAdultInfo:req.body.roomAdultInfo,userName:req.body.userName,userEmail:req.body.userEmail,userPhone:req.body.userPhone,bookingUniqCode:bookingUniqId})
                  booking.save((err)=>{
                      if(err){
                          res.send(err.message)
                      }else{
                          Room.findOneAndUpdate({roomNumber:room.roomNumber}, {roomBookingDates:newRoomBookingDates}, {new:true}, (err,newRoom)=>{
                              if(err){
                                  res.send(err.message)
                              }else{
                                  mailer("Tarihi Kumbaba Otel <info@kumbaba@gmail.com>",req.body.userEmail,bookingUniqId,req.body.userName,req.body.userEmail,req.body.userPhone,room.includeRoomType.roomType,req.body.roomAdultInfo,req.body.roomChildrenInfo,req.body.selectedBookingDates[0],req.body.selectedBookingDates[1],req.body.bookingComments)
                                  res.send(newRoom)
                              }
                          }) 
                      }
                  })
  
                  /// rezervasyonu rezervsayon tablosuna ekle
                   
                }else{   
                    res.send("ODALAR DOLU")
                }
            }
        })
      }
    }else{
      const startedDate=parseInt(selectedBookingDates[0].split("-")[0])
      const finishedDate=parseInt(selectedBookingDates[1].split("-")[0])
      const bookingDayCount=finishedDate-startedDate
      const dateMonth=selectedBookingDates[0].split("-")[1]                                                                             
      const yearMonth=selectedBookingDates[0].split("-")[2]
    
     
         if(bookingDayCount!=1){ 
            selectedBookingDates=[]
         let dayTime="";
         for(let i=1;i<=bookingDayCount;i++){
          dayTime=(startedDate+i).toString()
          selectedBookingDates.push(dayTime.toString()+"-"+dateMonth+"-"+yearMonth)
         }
         
     }else{
        selectedBookingDates[0]=startedDate+"-"+dateMonth+"-"+yearMonth
        selectedBookingDates[1]=finishedDate+"-"+dateMonth+"-"+yearMonth
     }
      Room.findOne({includeRoomType:roomType,roomBookingDates:{$nin:[...selectedBookingDates]}}).populate("includeRoomType").exec((err,room)=>{
        if(err){
            res.send(err.message)
        }else{
            if(room){
              let newRoomBookingDates=  room.roomBookingDates
                   for(let i=0;i<selectedBookingDates.length;i++){
                       newRoomBookingDates.push(selectedBookingDates[i])
                   }
                   const bookingUniqId=req.body.userName+"-"+ new Date().getTime()
                   const booking=new Booking({roomType:room.includeRoomType,roomNumber:room.roomNumber,roomSelectedDates:selectedBookingDates,roomChildrenInfo:req.body.roomChildrenInfo,roomAdultInfo:req.body.roomAdultInfo,userName:req.body.userName,userEmail:req.body.userEmail,userPhone:req.body.userPhone,bookingUniqCode:bookingUniqId})
                  booking.save((err)=>{
                      if(err){
                          res.send(err.message)
                      }else{
                          Room.findOneAndUpdate({roomNumber:room.roomNumber}, {roomBookingDates:newRoomBookingDates}, {new:true}, (err,newRoom)=>{
                              if(err){
                                  res.send(err.message)
                              }else{
                                  mailer("Tarihi Kumbaba Otel <info@kumbaba@gmail.com>",req.body.userEmail,bookingUniqId,req.body.userName,req.body.userEmail,req.body.userPhone,room.includeRoomType.roomType,req.body.roomAdultInfo,req.body.roomChildrenInfo,req.body.selectedBookingDates[0],req.body.selectedBookingDates[1],req.body.bookingComments)
                                  res.send(newRoom)
                              }
                          }) 
                      }
                  })
            
            }else{
         
                res.send("ODALAR DOLU")
            }
        }
    })
    }
     
    }else{
        res.send("Rezervasyon tarihi çok uzun!!!")
    }
        /// odayı rezerve et    oda numarası rezerve tarihi
        /// dizinin günlerini saydırıcaz daha sonra bu günleri içeren sorguyu aratıcaz
        /// eğer sorgudaki odayı bulursak bunu  döndürücez
        /// o odaya rez oluşturucaz
    }
