import Details from "./components/details";
import Form from "./components/form";

export default function Contact() {
  return (
    <section
      className="scroll-mt-40 space-y-6"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <h2
        id="contact-heading"
        className="font-heading text-2xl font-bold md:text-3xl"
      >
        Contact
      </h2>

      <article className="grid gap-8 md:grid-cols-2">
        <Details />
        <Form />
      </article>
    </section>
  );
}
