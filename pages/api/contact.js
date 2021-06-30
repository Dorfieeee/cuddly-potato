const SENDER_ADDRESS = process.env.HOME_FORM_MAIL_ADDRESS;
const SENDER_PASS = process.env.HOME_FORM_MAIL_PASS;
const SENDER_HOST = process.env.MAILBOX_HOST;
const RECEIVER_ADDRESS = process.env.MAILBOX_ADDRESS;

export default (req, res) => {
    if (req.method !== "POST")
        return res
            .status(404)
            .json({ msg: "This route accepts only POST requests" });

    const nodemailer = require("nodemailer");
    const emailData = createEmailBody(req.body);
    const transporter = nodemailer.createTransport({
        port: 465,
        host: SENDER_HOST,
        auth: {
            user: SENDER_ADDRESS,
            pass: SENDER_PASS,
        },
        secure: true,
    });

    transporter.sendMail(emailData, (err, info) => {
        if (err) return res.status(502).json({ msg: err });
        else return res.status(200).json({ msg: info });
    });
};

function createEmailBody(values) {
    const { name, email, tel, subject, body } = values;
    const createdAt = new Date().toLocaleString("en-GB", { timeZone: "CET" });
    const html = `
        <h2>${subject}</h2>
        <p>${body}</p>
        <hr/>
        <h4>Kontakty:</h4>
        <ul>
            ${name && `<li>Jméno: <b>${name}</b></li>`}
            ${email && `<li>Email: <a href="mailto:${email}">${email}</a></li>`}
            ${tel && `<li>Telefon: <a href="tel:${tel}">${tel}</a></li>`}
        </ul>
        <p><i>Odesláno pomocí webového formuláře - <b>${createdAt}</b></i></p>`;

    return {
        from: SENDER_ADDRESS,
        to: RECEIVER_ADDRESS,
        subject: subject + " | " + "Zpráva od " + name,
        text: body + " | Sent from: " + email || tel,
        html: html,
    };
}
