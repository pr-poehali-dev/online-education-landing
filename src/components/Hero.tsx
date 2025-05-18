
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Стань <span className="text-primary">IT-профессионалом</span> с нуля
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Современные курсы с практическими заданиями от экспертов индустрии. Начни карьеру в IT уже сегодня!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="text-lg py-6 px-8">
                Начать обучение
                <Icon name="ArrowRight" className="ml-2" />
              </Button>
              <Button variant="outline" className="text-lg py-6 px-8">
                <Icon name="Play" className="mr-2" />
                Смотреть видео
              </Button>
            </div>
            <div className="mt-10 flex items-center">
              <div className="flex -space-x-2">
                <img 
                  src="https://randomuser.me/api/portraits/women/63.jpg" 
                  alt="Student" 
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Student" 
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Student" 
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img 
                  src="https://randomuser.me/api/portraits/men/55.jpg" 
                  alt="Student" 
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>
              <div className="ml-4">
                <p className="font-medium">+1000 студентов</p>
                <div className="flex items-center text-yellow-500">
                  <Icon name="Star" size={16} />
                  <Icon name="Star" size={16} />
                  <Icon name="Star" size={16} />
                  <Icon name="Star" size={16} />
                  <Icon name="Star" size={16} />
                  <span className="ml-1 text-gray-600">4.9</span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070" 
                alt="IT Education" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-70 z-0"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl opacity-70 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
