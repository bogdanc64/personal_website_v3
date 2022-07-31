import { Request, Response } from "express";

export default function (req:Request, res:Response) {
    
    require('dotenv').config()
    let nodemailer = require('nodemailer')

    const transporter = nodemailer.createTransport({
        host: "smtp.zoho.eu",
        secure: true,
        port: 465,
        auth: {
          user: process.env.user,
          pass: process.env.password,
        },
      })
    const mailData = {
        from: process.env.send_email,
        to: 'bogdancm02@gmail.com',
        subject: `Message From ${req.body.name}`,
        text: `Subject: ${req.body.subject}` + " | Message:" +  req.body.message + " | Sent from: " + req.body.email,
        html: 
        `
            <div>
                Subject: ${req.body.subject}
            </div>
            <div>
                <br>
                Message: ${req.body.message}
            </div>
            <p>
                Sent from: ${req.body.email}
            </p>
        `
      }
    transporter.sendMail(mailData, function (err:any, info:any) {
        if(err)
        {
            console.log(err)
            res.send(err)
        }        
        else
        {
            console.log(info)
            res.send(info)
        }
    })
    
  }