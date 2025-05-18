
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Cta = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-10 md:p-16 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готов начать свой путь в IT?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Присоединяйся к нашим студентам и получи востребованную профессию с нуля
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="text-primary">
              Начать бесплатно
              <Icon name="ArrowRight" className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              Получить консультацию
            </Button>
          </div>
          
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 text-sm opacity-90">
            <div className="flex items-center">
              <Icon name="CheckCircle" className="mr-2" />
              <span>Гибкий график обучения</span>
            </div>
            <div className="flex items-center">
              <Icon name="CheckCircle" className="mr-2" />
              <span>Персональный наставник</span>
            </div>
            <div className="flex items-center">
              <Icon name="CheckCircle" className="mr-2" />
              <span>Помощь с трудоустройством</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
