import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarnos, responderemos a la brevedad.",
    });
    
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title font-display text-black dark:text-white">Contacto</h2>
          <p className="section-subtitle font-sans text-[#555] dark:text-zinc-200">
            ¿Necesitas nuestra ayuda? Envíanos un mensaje y te responderemos a la brevedad.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block font-sans text-sm font-medium mb-2 text-[#111] dark:text-zinc-100">
                  Nombre
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-sans text-sm font-medium mb-2 text-[#111] dark:text-zinc-100">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block font-sans text-sm font-medium mb-2 text-[#111] dark:text-zinc-100">
                Mensaje
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="¿En qué podemos ayudarte?"
                rows={5}
                required
              />
            </div>
            <div className="text-right">
              <Button type="submit" className="bg-[#222] hover:bg-[#111] text-white font-sans px-6 py-2 rounded-lg">Enviar mensaje</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
