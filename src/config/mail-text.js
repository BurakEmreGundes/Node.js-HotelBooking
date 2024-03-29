const mailText=(BookingId,CustomerName,CustomerEmail,CustomerPhone,RoomType,Adults,Children,Checkin,Checkout,Comments)=>'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'
+'<html xmlns="http://www.w3.org/1999/xhtml">'

+'<head>'
  +  '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'
+'    <title>Reservation Details</title>'
  +  '<style type="text/css">'
   +    ' body {'
    +    '    margin: 0;'
     +      ' padding: 0;'
      +     ' min-width: 100%!important;'
    + '   }'

     + '  .content {'
      +    '  width: 100%;'
       +  '   max-width: 600px;'
        +    'border: 1px solid #f5eddb;'
       + '}'

       + '.main {'
        +    'padding: 30px 0;'
         +  ' color: #acbac4;'
          +  'line-height: 20px;'
           + 'font-family: sans-serif;'
        +'}'

      +  '.main a {'
       +   '  color: #acbac4;'
        +    'text-decoration: none;'
        +'}'

       + '.eheader {'
        +    'padding: 20px;'
       + '}'

       + '.innerpadding {'
        +   ' padding: 30px;'
       + '}'

      + ' .borderbottom {'
       +     'border-bottom: 1px solid #e6eff2;'
      + ' }'

       + '.title {'
        +   ' text-align: center;'
         +   'text-transform: uppercase;'
     +  ' }'

      +  '.title a {'
       +     'font-size: 30px;'
        +    'line-height: 40px;'
         + '  color: #fff;'
      + ' }'

       + '.subhead {'
        +   ' text-align: center;'
         +  ' font-size: 12px;'
          + ' color: #fff;'
      + ' }'

       + '.h1 {'
        +  '  text-align: center;'
         +'   font-size: 30px;'
          + ' color: #fff;'
       + '}'

       + '.h2 {'
        +   ' padding: 0 0 15px 0;'
         +   'font-size: 16px;'
          + ' line-height: 28px;'
           +' font-weight: bold;'
       + '}'

       + '.h3 {'
        +    'font-size: 15px;'
         +   'text-decoration: underline;'
       + '}'

        +'.bodycopy {'
         +   'font-size: 14px;'
          +  'line-height: 22px;'
        +'}'

        +'.details {'
         +  ' font-size: 14px;'
        +'}'

        +'.mssg {'
         +  ' font-size: 12px;'
          +  'text-align: center;'
       + '}'

        +'.footer {'
          +  'padding: 20px 30px 15px 30px;'
           + 'border-top: 1px solid #f2f2f2;'
       + '}'

      + ' .footer a {'
       +     'color: #edcb9a;'
       + '}'

        +'.footercopy {'
         +   'font-size: 15px;'
          + ' color: #777777;'
       + '}'

        +'.footercopy a {'
         +   'color: #edcb9a;'
       + '}'

        +'.social a {'
         +   'font-size: 14px;'
       + '}'

        +'table tr td {'
         + 'padding: 3px 0;'
       + '}'

        +'@media screen and (max-width: 600px) { .main { padding: 0; } }'
    +'</style>'
+'</head>'

+'<body yahoo bgcolor="#f5eddb">'
 +  ' <table width="100%" bgcolor="#f5eddb" class="main" border="0" cellpadding="0" cellspacing="0">'
  +     ' <tr>'
   +         '<td>'

+                '<table bgcolor="#ffffff" class="content" align="center" cellpadding="0" cellspacing="0" border="0">'
 +                   '<tr>'
  +                      '<td bgcolor="#edcb9a" class="eheader">'

   +                         '<table class="col425" align="left" border="0" cellpadding="0" cellspacing="0" style="width: 100%;">'
    +                            '<tr>'
     +                               '<td height="70">'
      +                                 ' <table width="100%" border="0" cellspacing="0" cellpadding="0">'
       +                                     '<tr>'
        +                                        '<td class="title" style="padding: 5px 0 0 0;">'
         +                                           '<a href="%site_url%">TARİHİ KUMBABA OTEL</a>'
          +                                     ' </td>'
           +                                 '</tr>'

            +                                '<tr>'
             +                                  ' <td class="subhead" style="padding: 0 0 0 3px;">'
              +                                     ' Rezervasyon Detayları'
               +                                 '</td>'
                +                            '</tr>'


                 +                       '</table>'
                  +                  '</td>'
                   +             '</tr>'
                    +        '</table>'

                     +   '</td>'
                   + '</tr>'
                   + '<tr>'
                    +    '<td class="innerpadding borderbottom">'
                     +       '<table width="100%" border="0" cellspacing="0" cellpadding="0">'
                      +          '<tr>'
                        +            ` <td class="h2">Merhaba ${CustomerName},</td>`
                        +        '</tr>'
                         +       '<tr>'
                          +         ' <td class="bodycopy">your reservation has been submitted to us and we ll contact you as quickly as possible to complete your booking. If you have any question please dont hesitate to contact us via email %admin_email% or via phone number %admin_phone%</td>'
                           +    ' </tr>'
                         + '  </table>'
                    + '   </td>'
               +  '   </tr>'
                +   ' <tr>'
                 +      ' <td class="innerpadding borderbottom">'

+                          '  <table class="col380" align="left" border="0" cellpadding="0" cellspacing="0" style="width: 100%;">'
 +                              ' <tr>'
  +                                '  <td class="h3">Rezervayon Detayları:</td>'
   +                             '</tr>'

    +                         '   <tr>'
     +                              ' <td class="innerpadding details">'

      +                                 ' <table class="col380" align="left" border="0" cellpadding="0" cellspacing="0" style="width: 100%;">'

       +                                    ' <tr>'
        +                                      '  <td>Booking ID</td>'
         +                                       `<td>${BookingId}</td>`
          +                                 ' </tr>'

           +                                ' <tr>'
            +                                 '   <td>İsim</td>'
             +                                 ` <td>${CustomerName}</td>`
              +                             ' </tr>'

               +                            ' <tr>'
                +                               ' <td>Email</td>'
                 +                              ` <td>${CustomerEmail}</td>`
                  +                         ' </tr>'

                   +                        ' <tr>'
                    +                           ' <td>Telefon Numarası</td>'
                     +                          ` <td>${CustomerPhone}</td>`
                      +                    '  </tr>'

                       +                     '<tr>'
                        +                     '   <td>Oda Türü</td>'
                         +                       `<td>${RoomType}</td>`
                          +               '   </tr>'

                           +                ' <tr>'
                            +                 '   <td>Yetişkin</td>'
                             +                  ` <td>${Adults}</td>`
                              +              '</tr>'

                               +             '<tr>'
                                +             '   <td>Çocuk</td>'
                                 +              ` <td>${Children}</td>`
                                  +         ' </tr>'

                                   +         '<tr>'
                                    +          '  <td>Giriş Tarihi</td>'
                                     +         ` <td>${Checkin}</td>`
                                      +     ' </tr>'

                                       +   '  <tr>'
                                        +       ' <td>Çıkış Tarihi</td>'
                                         +      `<td>${Checkout}</td>`
                                          + ' </tr>'

                                       

                                          +'  <tr>'
                                          +   '   <td>Özel İstekler</td>'
                                          +   `  <td>${Comments}</td>`
                                          + ' </tr>'

                                     + '  </table>'

                                  + ' </td>'

                             + '  </tr>'

                            +'</table>'

                       + '</td>'
                    +'</tr>'

                  + ' <tr>'
                   +   '  <td class="innerpadding bodycopy mssg">'
                    +       ' Thank You,'
                     +    '   <br> %site_title% </td>'
                  + ' </tr>'
                  + ' <tr>'
                   +     '<td class="footer" bgcolor="#f7f8f9">'
                    +        '<table width="100%" border="0" cellspacing="0" cellpadding="0">'
                     +          ' <tr>'
                      +         '   <td align="center" class="footercopy">'
                       +             '  &#169; 2018 <a href="%site_url%">%site_title%</a> All Rights Reserved.'
                        +        '  </td>'
                         +      ' </tr>'
                          +     ' <tr>'
                           +       '  <td align="center" class="social" style="padding: 10px 0 0 0;">'
                            +         '   <table border="0" cellspacing="0" cellpadding="0">'
                             +              ' <tr>'
                              +                 ' <td width="37" style="text-align: center; padding: 0 10px 0 10px;">'
                               +                   '  <a href="%facebook_link%">'
                                +                       ' facebook'
                                 +                 '  </a>'
                                  +             ' </td>'
                                   +          '   <td width="37" style="text-align: center; padding: 0 10px 0 10px;">'
                                    +                '<a href="%twitter_link%">'
                                     +                '   twitter'
                                      +           '   </a>'
                                       +        ' </td>'
                                        +   ' </tr>'
                                        +'</table>'
                                  + ' </td>'
                             + '  </tr>'
                           + '</table>'
                        +'</td>'
                   +' </tr>'
               +' </table>'

          + ' </td>'
      + ' </tr>'
 + '  </table>'
+'</body>'

+'</html>'


module.exports=mailText