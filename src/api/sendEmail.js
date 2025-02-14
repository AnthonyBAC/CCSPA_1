import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { name, lastName, phone, email, select, message } = req.body;

  try {
    // Configurar transporte con Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Tu email de Gmail
        pass: process.env.EMAIL_PASS, // Contraseña o App Password
      },
    });

    // Configurar contenido del correo
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL, // A dónde quieres recibir los correos
      subject: 'Nuevo formulario enviado',
      html: `
        <h2>Nuevo contacto desde la web</h2>
        <p><strong>Nombre:</strong> ${name} ${lastName}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Tipo de Espacio:</strong> ${select}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    };

    // Enviar correo
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Correo enviado con éxito' });
  } catch (error) {
    console.error('Error al enviar correo:', error);
    res.status(500).json({ error: 'No se pudo enviar el correo' });
  }
}
