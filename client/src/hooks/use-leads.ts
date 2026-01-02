import { useMutation } from "@tanstack/react-query";
import { api, type InsertLead } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateLead() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertLead) => {
      const res = await fetch(api.leads.create.path, {
        method: api.leads.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to submit lead");
      }

      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Sucesso!",
        description: "Seu cupom foi ativado. Verifique seu e-mail.",
        variant: "default",
        className: "bg-green-600 text-white border-none",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Erro",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
