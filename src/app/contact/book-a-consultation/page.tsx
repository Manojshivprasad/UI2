import { SimpleForm } from "@/components/SimpleForm";

export default function BookAConsultationPage() {
  return (
    <SimpleForm
      eyebrow="Contact"
      title="Book a Consultation"
      description="Pick a time that works and we'll set up a call with our team."
      fields={[
        { id: "name", label: "Full name", type: "text", placeholder: "Jane Doe" },
        { id: "email", label: "Work email", type: "email", placeholder: "you@bank.com" },
        { id: "company", label: "Company", type: "text", placeholder: "Your organization" },
        { id: "date", label: "Preferred date", type: "date" },
        {
          id: "message",
          label: "What would you like to discuss?",
          type: "textarea",
          placeholder: "Core banking, migration, automation, agentic AI...",
        },
      ]}
      submitLabel="Request Consultation"
    />
  );
}
