
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-primary">
            КодМастер
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
          <a href="#benefits" className="text-gray-700 hover:text-primary transition-colors">Преимущества</a>
          <a href="#directions" className="text-gray-700 hover:text-primary transition-colors">Направления</a>
          <a href="#programs" className="text-gray-700 hover:text-primary transition-colors">Программы</a>
          <a href="#instructors" className="text-gray-700 hover:text-primary transition-colors">Наставники</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex">
            Войти
          </Button>
          <Button className="hidden md:flex">
            Записаться
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
