import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface InterestEmailRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received request to send-interest-email function");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: InterestEmailRequest = await req.json();
    
    console.log("Processing interest request for email:", email);

    if (!email || !email.includes("@")) {
      console.error("Invalid email provided:", email);
      return new Response(
        JSON.stringify({ error: "Valid email is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send notification email to hello@nexgroov.com
    const emailResponse = await resend.emails.send({
      from: "nexgroov <onboarding@resend.dev>",
      to: ["hello@nexgroov.com"],
      subject: "New Interest Request - nexgroov",
      html: `
        <h2>New Interest Request</h2>
        <p>Someone is interested in joining nexgroov!</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Submitted at:</strong> ${new Date().toISOString()}</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-interest-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
