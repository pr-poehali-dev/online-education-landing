
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">КодМастер</h3>
            <p className="text-gray-400 mb-4">Ваш путь в мир IT начинается здесь. Современные курсы от практикующих экспертов.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Курсы</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Веб-разработка</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Мобильная разработка</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Аналитика данных</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Кибербезопасность</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">UX/UI Дизайн</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Связаться с нами</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Условия использования</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Политика конфиденциальности</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Подписаться на новости</h4>
            <p className="text-gray-400 mb-4">Получайте свежие новости и эксклюзивные предложения</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="px-4 py-2 rounded-l-md w-full text-gray-900 focus:outline-none"
              />
              <Button className="rounded-l-none">
                <Icon name="Send" size={18} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 КодМастер. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
