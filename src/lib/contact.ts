export interface ContactSubmission {
  name: string;
  email: string;
  linkedin: string;
  role: string;
  companySize: string;
  challenge: string;
  timestamp?: string;
}

/**
 * Abstracted utility to handle lead intake submissions.
 * Currently logs to console, but makes it simple to integrate HubSpot, 
 * Resend, Airtable, or Notion APIs by replacing the function body.
 */
export async function saveContactSubmission(submission: ContactSubmission): Promise<boolean> {
  try {
    const enrichedSubmission = {
      ...submission,
      timestamp: new Date().toISOString(),
    };
    
    // Log to server console
    console.log("=== PREMIUM LEAD INTAKE SUBMISSION ===");
    console.log(JSON.stringify(enrichedSubmission, null, 2));
    console.log("======================================");

    // Mimic API latency
    await new Promise((resolve) => setTimeout(resolve, 800));

    return true;
  } catch (error) {
    console.error("Error processing contact submission:", error);
    return false;
  }
}
