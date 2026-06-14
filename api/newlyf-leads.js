export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const lead = req.body ?? {};

    console.log("newlyf_lead", {
      source: lead.source ?? "unknown",
      name: lead.name ?? "",
      phone: lead.phone ?? "",
      neetYear: lead.neetYear ?? "",
      city: lead.city ?? "",
      country: lead.country ?? "",
      timestamp: lead.timestamp ?? new Date().toISOString(),
    });

    return res.status(200).json({
      ok: true,
      message: "Lead received",
    });
  } catch (error) {
    console.error("newlyf_lead_error", error);
    return res.status(500).json({
      ok: false,
      error: "Unable to process lead",
    });
  }
}
