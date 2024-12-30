import { NextResponse, NextRequest } from 'next/server'
import nodemailer from 'nodemailer';

// Handles POST requests to /api


export async function POST(request: Request) {

    const username = process.env.NEXT_SMTP_USERNAME;
    const password = process.env.NEXT_SMTP_PASSWORD;
    const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;
    const senderEmail = process.env.NEXT_PUBLIC_SENDER_EMAIL


    console.log("dealing with request")
    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email') as string | undefined;
    const message = formData.get('message')


    // create transporter object
    const transporter = nodemailer.createTransport({
        host: "smtp.ionos.com",
        port: 465,
        tls: {
            ciphers: "SSLv3",
            rejectUnauthorized: false,
        },

        auth: {

            user: username,
            pass: password
        }
    });

    try {

        const mail = await transporter.sendMail({
            from: senderEmail,
            to: myEmail,
            replyTo: email,
            subject: `Website activity from ${email}`,
            html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            `,
        })

        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        console.log(error)
        NextResponse.json({ error: 'Could not send message' }, { status: 500 })
    }


}