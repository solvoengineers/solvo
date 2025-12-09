# Email Setup Guide

This application uses Nodemailer with Gmail to send emails for contact forms and job applications.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Gmail Credentials for Nodemailer
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-app-password

# Recipient Email Addresses (optional - defaults to GMAIL_USER if not set)
CONTACT_RECIPIENT_EMAIL=contact@yourcompany.com
JOB_RECIPIENT_EMAIL=careers@yourcompany.com
```

## Gmail App Password Setup

1. Go to your Google Account settings
2. Enable 2-Step Verification (required for App Passwords)
3. Go to Security → 2-Step Verification → App passwords
4. Generate a new app password for "Mail"
5. Use this app password as `GMAIL_PASS` (not your regular Gmail password)

## API Endpoints

- **Contact Form**: `POST /api/contact`
- **Job Application**: `POST /api/job`

Both endpoints accept FormData and handle file attachments.

## Notes

- The contact form accepts an optional file attachment
- The job application form requires a CV/Resume file
- All emails are sent from the `GMAIL_USER` address
- Recipient emails can be customized via environment variables
