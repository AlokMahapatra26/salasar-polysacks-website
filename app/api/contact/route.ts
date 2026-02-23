import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, phone, email, subject, product, message } = body;

        let emailContent = `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
        `;

        // If bulk order, include the selected product
        if (subject === 'Bulk Order' && product) {
            emailContent += `<p><strong>Interested Product:</strong> ${product}</p>`;
        }

        emailContent += `
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br/>')}</p>
        `;

        const data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>', // Default Resend test email
            to: process.env.CONTACT_EMAIL || 'info@salasarpolysacks.com',
            subject: `New Inquiry: ${subject} from ${name}`,
            html: emailContent,
            replyTo: email,
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error("Failed to send email:", error);
        return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
    }
}
