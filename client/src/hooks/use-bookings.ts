import { useMutation } from "@tanstack/react-query";
import { api, type BookingInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

export function useCreateBooking() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: BookingInput) => {
      const validated = api.bookings.create.input.parse(data);
      const res = await fetch(api.bookings.create.path, {
        method: api.bookings.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = api.bookings.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to submit booking");
      }
      return api.bookings.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Booking Submitted!",
        description: "We'll be in touch with you shortly.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Booking Failed",
        description: error.message || "Something went wrong.",
        variant: "destructive",
      });
    },
  });
}
