import * as sgMail from '@sendgrid/mail';

export default async (req, res) => {
  if (req.method === 'POST') {
    const data = JSON.parse(req.body);
    sgMail.setApiKey(process.env.sg_api_key);

    const message = {
      to: 'mykalmachon@gmail.com',
      from: `${data.email}`,
      subject: 'New "Contact Us" Submission on SupportLocalFV.ca',
      text: `There is a new email from ${data.email}, they said...`,
      html: `<p>There is a new email from ${data.email}, they said...</p> <p>${data.formContent}</p>`,
    };

    try {
      const emailAttempt = await sgMail.send(message);
      console.log(emailAttempt);
      res.status(200).json('msg', 'email sent!');
    } catch (err) {
      console.log(err.response.body);
      res.status(500).json({ err: 'failed to send email' });
    }
  } else {
    res.status(400).json({ err: 'improper type of request' });
  }
};
