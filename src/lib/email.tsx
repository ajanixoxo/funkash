import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number.parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function sendAdminCredentials(email: string, name: string, password: string) {
  const mailOptions = {
    from: process.env.SMTP_FROM || "noreply@funkash.com",
    to: email,
    subject: "Your Admin Dashboard Credentials",
    html: `
      <h2>Welcome to Admin Dashboard</h2>
      <p>Hi ${name},</p>
      <p>Your admin account has been created. Here are your login credentials:</p>
      <p>
        <strong>Email:</strong> ${email}<br>
        <strong>Password:</strong> ${password}
      </p>
      <p>Please log in and change your password immediately for security.</p>
      <p>
        <a href="${process.env.NEXT_PUBLIC_APP_URL}/admin/login" style="background-color: #7c3aed; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
          Go to Admin Dashboard
        </a>
      </p>
      <p>Best regards,<br>Funkash Technology</p>
    `,
  }

  return transporter.sendMail(mailOptions)
}

export async function sendContactNotification(name: string, email: string, subject: string, message: string) {
  const mailOptions = {
    from: process.env.SMTP_FROM || "noreply@funkash.com",
    to: process.env.ADMIN_EMAIL,
    subject: `New Contact Form Submission: ${subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  }

  return transporter.sendMail(mailOptions)
}
