# RhemaPulse Analytics Engine v2.0

An enterprise-grade Ministry Intelligence System designed for **RCCG Rhema Assembly Parish**. This platform digitizes service reporting, tracks growth metrics, and automates executive summaries to enhance administrative stewardship.

## 🚀 The Vision
To move ministry administration from manual paper-based logging to a data-driven "Product Architecture". RhemaPulse provides leadership with real-time insights into attendance trends, soul-winning impact, and departmental performance.

## 🛠 Tech Stack
*   **Framework:** Next.js 14 (App Router)
*   **Language:** TypeScript / JavaScript
*   **Database & Auth:** Supabase (PostgreSQL)
*   **Styling:** Tailwind CSS (Executive Noir Theme)
*   **Deployment:** Vercel

## ✨ Key Features
*   **Service Entry Module:** High-fidelity form for capturing multi-departmental attendance (Men, Women, Kids).
*   **Growth Intelligence:** Automated comparison logic that tracks week-over-week performance.
*   **Executive WhatsApp Integration:** One-click generation of "WhatsApp-ready" summaries for the Head Pastor.
*   **Strategic Insights:** Built-in logic that flags attendance variances and recommends administrative action.

## 🏗 System Architecture
The system utilizes a **Zero-Latency Sync** strategy with Supabase. 
1.  **AttendanceForm:** Captures raw service data and archives it to the `church_reports` table.
2.  **Database Views:** A PostgreSQL view (`service_comparisons`) calculates growth percentages and previous-week deltas.
3.  **Analytics Hub:** Consumes the view to render a professional dashboard with visual growth indicators.

## 📸 Dashboard Preview
> "Rhema Analytics: From Data to Decision Making."

## 🔧 Installation & Setup
1. Clone the repository:
   ```bash
   git clone [https://github.com/rejoiceuzodinma/rhema-pulse.git](https://github.com/rejoiceuzodinma/rhema-pulse.git)