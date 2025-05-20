import { Request, Response } from "express";

export default function sendEmail(req: Request, res: Response) {
    require('dotenv').config()
    let nodemailer = require('nodemailer')

    const transporter = nodemailer.createTransport({
        host: process.env.smtp_host,
        secure: false,
        port: process.env.smtp_port,
        auth: {
            user: process.env.smtp_user,
            pass: process.env.smtp_password,
        },
    })
    const mailData = {
        from: process.env.smtp_user,
        to: process.env.smtp_destination,
        subject: `Message From ${req.body.name}`,
        text: `Subject: ${req.body.subject}` + " | Message:" + req.body.message + " | Sent from: " + req.body.email,
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
    transporter.sendMail(mailData, (err: any, info: any) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.send(info)
        }
    })

}