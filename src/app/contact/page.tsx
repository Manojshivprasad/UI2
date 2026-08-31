import { SimpleForm } from "@/components/SimpleForm";

export default function ContactPage() {
  return (
    <SimpleForm
      eyebrow="Contact"
      title="Contact Us"
      description="Reach out and a member of our team will get back to you shortly."
      fields={[
        { id: "name", label: "Full name", type: "text", placeholder: "Jane Doe" },
        { id: "email", label: "Work email", type: "email", placeholder: "you@bank.com" },
        {
          id: "message",
          label: "Message",
          type: "textarea",
          placeholder: "Tell us a bit about what you need.",
        },
      ]}
      submitLabel="Send Message"
    />
  );
}
