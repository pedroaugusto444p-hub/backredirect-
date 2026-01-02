import { useState } from "react";
import { useCreateLead } from "@/hooks/use-leads";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowRight, Tag } from "lucide-react";
import { z } from "zod";

interface LeadModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LeadModal({ isOpen, onOpenChange }: LeadModalProps) {
  const [email, setEmail] = useState("");
  const createLead = useCreateLead();
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Simple client-side validation
    const emailSchema = z.string().email("Por favor, insira um e-mail válido.");
    const result = emailSchema.safeParse(email);

    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    createLead.mutate({ email }, {
      onSuccess: () => {
        setEmail("");
        onOpenChange(false);
        // In a real app, you might redirect to checkout here
        // window.location.href = "/checkout?coupon=DESCONTO90";
      }
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-2 border-primary/20">
        <DialogHeader>
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
            <Tag className="w-8 h-8 text-primary" />
          </div>
          <DialogTitle className="text-2xl text-center text-primary font-display uppercase">
            Garanta seu Desconto
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Digite seu melhor e-mail abaixo para liberar o acesso imediato por apenas <span className="font-bold text-foreground">R$ 5,00</span>.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 text-lg border-2 focus-visible:ring-primary"
            />
            {error && <p className="text-red-500 text-sm font-semibold">{error}</p>}
          </div>

          <Button 
            type="submit" 
            className="w-full h-12 text-lg font-bold bg-green-600 hover:bg-green-700 text-white transition-all hover:scale-[1.02]"
            disabled={createLead.isPending}
          >
            {createLead.isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processando...
              </>
            ) : (
              <>
                QUERO MEU DESCONTO <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
          
          <p className="text-xs text-center text-muted-foreground mt-4">
            * Seus dados estão 100% seguros. Não enviamos spam.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
