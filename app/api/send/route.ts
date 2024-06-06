import { EmailTemplate } from './../../_components/email-template';
// import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: any) {
  const responce = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: 'Ajay@resend.dev',
      to: ['ajay.kusekar2003@gmail.com'],
      subject: responce?.userName+" share file with you",
      react: EmailTemplate({ responce  }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
