import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Instagram, Briefcase } from "lucide-react";

export default function CartaoVirtual() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center p-6" style={{ backgroundImage: "url('/mnt/data/catão de visita digital.png')" }} >
      <Card className="w-full max-w-md shadow-xl rounded-2xl p-6 bg-white/80 backdrop-blur">
        <CardContent className="space-y-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Seu Cartão Digital</h1>
          <p className="text-gray-600 text-base">Social Media • Designer Gráfico • Gráfica Rápida</p>

          <div className="grid gap-4 mt-6">
            <Button className="w-full rounded-xl py-6 text-lg flex items-center justify-center gap-2">
              <Phone /> Entre em contato pelo WhatsApp
            </Button>
            <Button className="w-full rounded-xl py-6 text-lg flex items-center justify-center gap-2">
              <Instagram /> Acesse meu Instagram
            </Button>
            <Button className="w-full rounded-xl py-6 text-lg flex items-center justify-center gap-2">
              <Briefcase /> Conheça meu portfólio
            </Button>
          </div>

          <p className="text-gray-500 text-sm mt-4">
            Clique nos ícones e descubra tudo o que posso fazer pelo seu negócio!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
