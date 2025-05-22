# EmailJS Setup Guide for Portfolio Contact Form

This guide will help you set up EmailJS to handle both notification emails (sent to you when someone submits the contact form) and confirmation emails (sent to users after they submit the form).

## Step 1: Create an EmailJS Account

1. Go to [EmailJS website](https://www.emailjs.com/) and sign up for an account
2. Verify your email address

## Step 2: Set Up Email Service

1. In the EmailJS dashboard, go to "Email Services" tab
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account by following the prompts
5. Give your service a name (e.g., "Portfolio Contact")
6. Note down the **Service ID** - you'll need this for the code

## Step 3: Create HTML Email Templates

### Notification Template (sent to you)

1. In the EmailJS dashboard, go to "Email Templates" tab
2. Click "Create New Template"
3. Give it a name like "Portfolio Contact Notification"
4. Switch to the "Code" editor mode (not the visual editor)
5. Paste this HTML template with CSS styling:

Subject:
```
New Contact Form Submission: {{subject}}
```

Content:
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        /* Reset styles */
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f9f9f9;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        
        .header {
            background: linear-gradient(225deg, #7928CA 0%, #FF0080 100%);
            color: white;
            padding: 20px;
            border-radius: 8px 8px 0 0;
            text-align: center;
        }
        
        .content {
            padding: 20px;
        }
        
        .message-box {
            background-color: #f5f5f5;
            border-left: 4px solid #7928CA;
            padding: 15px;
            margin-top: 20px;
            border-radius: 0 4px 4px 0;
        }
        
        .field {
            margin-bottom: 10px;
        }
        
        .label {
            font-weight: bold;
            color: #555555;
        }
        
        .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
            color: #999999;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Contact Form Submission</h1>
        </div>
        
        <div class="content">
            <p>You've received a new message from your portfolio contact form:</p>
            
            <div class="field">
                <span class="label">Name:</span> {{from_name}}
            </div>
            
            <div class="field">
                <span class="label">Email:</span> {{from_email}}
            </div>
            
            <div class="field">
                <span class="label">Subject:</span> {{subject}}
            </div>
            
            <div class="message-box">
                <div class="label">Message:</div>
                <p>{{message}}</p>
            </div>
        </div>
        
        <div class="footer">
            <p>This is an automated notification from your portfolio website.</p>
        </div>
    </div>
</body>
</html>
```

6. Save the template and note down the **Template ID**

### Confirmation Template (sent to user)

1. Create another template named "Portfolio Contact Confirmation"
2. Switch to the "Code" editor mode
3. Paste this HTML template with CSS styling:

Subject:
```
Thank you for contacting me - {{subject}}
```

Content:
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You For Your Message</title>
    <style>
        /* Reset styles */
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f9f9f9;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        
        .header {
            background: linear-gradient(225deg, #7928CA 0%, #FF0080 100%);
            color: white;
            padding: 20px;
            border-radius: 8px 8px 0 0;
            text-align: center;
        }
        
        .content {
            padding: 20px;
        }
        
        .message-box {
            background-color: #f5f5f5;
            border-left: 4px solid #7928CA;
            padding: 15px;
            margin-top: 20px;
            border-radius: 0 4px 4px 0;
        }
        
        .button {
            display: inline-block;
            background: linear-gradient(225deg, #7928CA 0%, #FF0080 100%);
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 4px;
            margin-top: 20px;
            font-weight: bold;
        }
        
        .footer {
            text-align: center;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #eeeeee;
            font-size: 12px;
            color: #999999;
        }
        
        .social-links {
            margin-top: 15px;
        }
        
        .social-link {
            display: inline-block;
            margin: 0 8px;
            color: #7928CA;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Thank You For Your Message</h1>
        </div>
        
        <div class="content">
            <p>Hello {{to_name}},</p>
            
            <p>Thank you for reaching out! I have received your message and will get back to you as soon as possible.</p>
            
            <p>For your reference, here's a copy of your message:</p>
            
            <div class="message-box">
                <p><strong>Subject:</strong> {{subject}}</p>
                <p><strong>Message:</strong></p>
                <p>{{message}}</p>
            </div>
            
            <p>If you need to provide additional information, please feel free to reply to this email.</p>
            
            <center>
                <a href="YOUR_PORTFOLIO_URL" class="button">Visit My Portfolio</a>
            </center>
        </div>
        
        <div class="footer">
            <p>Best regards,<br>YOUR_NAME</p>
            
            <div class="social-links">
                <a href="https://github.com/YOUR_GITHUB" class="social-link">GitHub</a> | 
                <a href="https://linkedin.com/in/YOUR_LINKEDIN" class="social-link">LinkedIn</a>
            </div>
        </div>
    </div>
</body>
</html>
```

4. Update the template with your actual information (replace YOUR_PORTFOLIO_URL, YOUR_NAME, YOUR_GITHUB, YOUR_LINKEDIN)
5. Save the template and note down the **Template ID**

## Step 4: Update Code Configuration

In your Contact component (src/components/Contact/index.jsx), update the following values:

```javascript
// Replace these with your actual EmailJS service ID, template IDs, and public key
const serviceId = 'YOUR_SERVICE_ID'; // Your EmailJS service ID from step 2
const notificationTemplateId = 'YOUR_NOTIFICATION_TEMPLATE_ID'; // Template ID from step 3
const confirmationTemplateId = 'YOUR_CONFIRMATION_TEMPLATE_ID'; // Template ID from step 3
const publicKey = 'YOUR_PUBLIC_KEY'; // Your EmailJS public key from account settings
```

Also update:
```javascript
to_name: 'Your Name', // Replace with your actual name
to_email: 'your-email@example.com', // Replace with your actual email
```

## Step 5: Test Your Configuration

1. Save all changes and deploy/run your portfolio site
2. Fill out and submit the contact form
3. Verify that you receive the notification email
4. Verify that the sender receives the confirmation email

If everything works correctly, your contact form is now fully configured with EmailJS!

## Troubleshooting

If emails are not being sent:

1. Check browser console for any errors
2. Verify your EmailJS account is active
3. Confirm all IDs and keys are correct
4. Check your email service connection in EmailJS dashboard
5. Make sure template variables match the data being sent

## Email Styling Notes

1. Always use inline CSS for email compatibility across different email clients
2. If the templates don't display correctly in some email clients, you may need to simplify the CSS
3. Test your emails in different clients (Gmail, Outlook, Apple Mail, etc.)
4. For even better results, consider using an email testing service like Litmus or Email on Acid 