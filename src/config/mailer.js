const nodemailer = require('nodemailer');
const mailText=require("./mail-text")
const mailer=async (mailFrom,mailTo,BookingId,CustomerName,CustomerEmail,CustomerPhone,RoomType,Adults,Children,Checkin,Checkout,Comments)=>{
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        requireTLS: true,
     
        auth: {
            user: "burakemregundes@gmail.com",
            pass: "ywbkffpwgzznjfdo"
        }
    });
    
    let mailOptions = {
        from: mailFrom,
        to: mailTo,
        subject: 'Tarihi Kumbaba Otel Rezervasyon Bilgileri',
        html:mailText(BookingId,CustomerName,CustomerEmail,CustomerPhone,RoomType,Adults,Children,Checkin,Checkout,Comments),

    };
    
   await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('err');
            return console.log(error.message);
        }
        console.log('success');
        transporter.close()
    });
}

module.exports=mailer

