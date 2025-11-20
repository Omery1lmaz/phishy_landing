import {NextRequest, NextResponse} from 'next/server';

export const runtime = 'edge';

interface ContactFormBody {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company: string;
  sourcePage?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormBody = await request.json();

    // IMPORTANT: Replace with your actual Slack Webhook URL
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

    if (!slackWebhookUrl) {
      console.error('Slack webhook URL is not defined. Please set SLACK_WEBHOOK_URL environment variable.');
      return NextResponse.json(
        {error: 'Server configuration error.'},
        {status: 500}
      );
    }

    const slackMessage = {
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: '📬 Phishy | New Contact Form Submission',
            emoji: true,
          },
        },
        {
          type: 'section',
          fields: [
            {type: 'mrkdwn', text: `*Name:*\n${body.firstName} ${body.lastName}`},
            {type: 'mrkdwn', text: `*Email:*\n<mailto:${body.email}|${body.email}>`},
          ],
        },
        {
          type: 'section',
          fields: [
            {type: 'mrkdwn', text: `*Phone:*\n${body.phone || 'N/A'}`},
            {type: 'mrkdwn', text: `*Company:*\n${body.company}`},
          ],
        },
        {
          type: 'section',
          fields: [
            {type: 'mrkdwn', text: `*Source Page:*\n${body.sourcePage || 'Direct access'}`},
          ],
        },
        {
          type: 'divider',
        },
        {
          type: 'context',
          elements: [
            {
              type: 'mrkdwn',
              text: `Received at: ${new Date().toUTCString()}`,
            },
          ],
        },
      ],
    };

    const response = await fetch(slackWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(slackMessage),
    });

    const responseText = await response.text();

    if (!response.ok) {
      console.error('Slack API error:', {
        status: response.status,
        statusText: response.statusText,
        body: responseText,
      });
      return NextResponse.json(
        {
          error: `Slack API error: ${response.statusText}. Please check your webhook URL.`,
        },
        {status: response.status}
      );
    }

    return NextResponse.json(
      {
        statusCode: 200,
        message: 'Message sent successfully',
      },
      {status: 200}
    );
  } catch (error) {
    console.error('Error sending Slack notification:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json(
      {
        error: `Failed to send message: ${errorMessage}`,
      },
      {status: 500}
    );
  }
}

