import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@shared/routes";
import { useCreateBooking } from "@/hooks/use-bookings";
import { BrutalButton } from "./ui/brutal-button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Send, Loader2 } from "lucide-react";
import { z } from "zod";

type BookingFormData = z.infer<typeof api.bookings.create.input>;

export function BookingForm() {
  const mutation = useCreateBooking();
  
  const form = useForm<BookingFormData>({
    resolver: zodResolver(api.bookings.create.input),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    }
  });

  const onSubmit = (data: BookingFormData) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl border-4 border-foreground brutal-shadow w-full max-w-xl mx-auto relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary rounded-full border-4 border-foreground opacity-20"></div>
      
      <div className="relative z-10 mb-8">
        <h2 className="text-3xl font-display font-bold mb-2">Book Your Adventure</h2>
        <p className="text-muted-foreground">Ready to explore? Drop your details below and our local guides will reach out to craft your perfect itinerary.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-base">Full Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Juan Dela Cruz" 
                    className="h-12 rounded-xl border-2 border-foreground bg-accent/10 focus-visible:ring-primary focus-visible:border-primary transition-colors text-base" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-base">WhatsApp / Phone</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="+63 912 345 6789" 
                    className="h-12 rounded-xl border-2 border-foreground bg-accent/10 focus-visible:ring-primary focus-visible:border-primary transition-colors text-base" 
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
              <FormItem>
                <FormLabel className="font-bold text-base">Tell us what you want to see!</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="I want to see the whalesharks and eat lots of lechon..." 
                    className="min-h-[120px] rounded-xl border-2 border-foreground bg-accent/10 focus-visible:ring-primary focus-visible:border-primary transition-colors text-base resize-none" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <BrutalButton 
            type="submit" 
            size="lg" 
            className="w-full text-xl group"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <><Loader2 className="mr-2 h-6 w-6 animate-spin" /> Sending...</>
            ) : (
              <><Send className="mr-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Send Request</>
            )}
          </BrutalButton>
        </form>
      </Form>
    </div>
  );
}
