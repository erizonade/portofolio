import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactMessageSchema } from "@shared/schema";
import { Mail, Linkedin, MapPin, Clock, Send } from "lucide-react";
import type { InsertContactMessage } from "@shared/schema";

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      content: "erizonade2001@gmail.com",
      href: "mailto:erizonade2001@gmail.com",
    },
    {
      icon: <Linkedin className="h-6 w-6 text-primary" />,
      title: "LinkedIn",
      content: "Erizon Ade Pratama",
      href: "https://www.linkedin.com/in/erizon-adepratama-5751442a2",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      content: "Palembang, South Sumatra, Indonesia",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Availability",
      content: "Open for freelance projects",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Let's discuss your next project or collaboration opportunity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-8 animate-slide-up">Contact Information</h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className={`flex items-center space-x-4 animate-slide-in-left stagger-animation-${index + 1} hover:bg-muted/50 p-4 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer`}>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center animate-bounce-in hover:bg-primary/20 transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <Card className="mt-12 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-scale-in stagger-animation-5 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-6 relative">
                <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-200">Ready to work together?</h4>
                <p className="text-muted-foreground mb-4">
                  I'm always excited to take on new challenges and collaborate on
                  innovative projects.
                </p>
                <a href="mailto:erizonade2001@gmail.com">
                  <Button className="transform hover:scale-110 transition-all duration-300 hover:shadow-lg relative overflow-hidden group/btn">
                    <Send className="h-4 w-4 mr-2" />
                    <span className="relative z-10">Send Email</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer opacity-0 group-hover/btn:opacity-100"></div>
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-semibold mb-8 animate-slide-up">Send Message</h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="animate-slide-up stagger-animation-1">
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your full name" 
                          className="transition-all duration-300 focus:scale-105 hover:shadow-md"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="animate-slide-up stagger-animation-2">
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          className="transition-all duration-300 focus:scale-105 hover:shadow-md"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="animate-slide-up stagger-animation-3">
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Project discussion" 
                          className="transition-all duration-300 focus:scale-105 hover:shadow-md"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="animate-slide-up stagger-animation-4">
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about your project..."
                          className="resize-none transition-all duration-300 focus:scale-105 hover:shadow-md"
                          rows={6}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full transform hover:scale-110 transition-all duration-300 hover:shadow-lg relative overflow-hidden group animate-slide-up stagger-animation-5"
                  disabled={isSubmitting}
                >
                  <Send className="h-4 w-4 mr-2" />
                  <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer opacity-0 group-hover:opacity-100"></div>
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
