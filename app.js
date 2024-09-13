const nodeMailer = require('nodemailer');

const html = `
<h1> hello world </h1>
<p>Isnt node mailer useful > </p>`;

async function main(){
   const transporter =  nodeMailer.createTransport({
        service: 'gmail',
        port : 465,
        secure : true,
        auth :{
            user : 'tejas.s.surse2004@gmail.com',
            pass : 'barnsuqvgeguhkiz'
        }
    });
    const info = await transporter.sendMail({
        from : 'tejas.s.surse2004@gmail.com',
        to :'tejassunilsurse2004@gmail.com',
        subject : 'This mail is from node js dadau',
        html : html,
        text: "Hie me gmail from node js ",
    })
    console.log("Message Sent : " + info.messageId);
}

main().catch((e)=> console.log(e));