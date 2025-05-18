
import { Card, CardContent } from "@/components/ui/card";

const directionsData = [
  {
    title: "Веб-разработка",
    description: "Создание современных веб-сайтов и приложений для интернета",
    salaries: {
      junior: "60 000 ₽",
      middle: "150 000 ₽",
      senior: "300 000 ₽+"
    },
    color: "from-purple-500 to-blue-500"
  },
  {
    title: "Мобильная разработка",
    description: "Разработка приложений для iOS и Android платформ",
    salaries: {
      junior: "70 000 ₽",
      middle: "180 000 ₽",
      senior: "320 000 ₽+"
    },
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Data Science",
    description: "Анализ данных, машинное обучение и искусственный интеллект",
    salaries: {
      junior: "80 000 ₽",
      middle: "200 000 ₽",
      senior: "350 000 ₽+"
    },
    color: "from-emerald-500 to-green-400"
  },
  {
    title: "DevOps",
    description: "Автоматизация и оптимизация процессов разработки и деплоя",
    salaries: {
      junior: "90 000 ₽",
      middle: "210 000 ₽",
      senior: "340 000 ₽+"
    },
    color: "from-orange-500 to-amber-400"
  },
  {
    title: "UX/UI Дизайн",
    description: "Создание удобных и привлекательных интерфейсов для приложений",
    salaries: {
      junior: "65 000 ₽",
      middle: "160 000 ₽",
      senior: "280 000 ₽+"
    },
    color: "from-pink-500 to-rose-400"
  },
  {
    title: "Кибербезопасность",
    description: "Защита систем, сетей и программ от цифровых атак",
    salaries: {
      junior: "75 000 ₽",
      middle: "190 000 ₽",
      senior: "330 000 ₽+"
    },
    color: "from-indigo-500 to-violet-400"
  }
];

const Directions = () => {
  return (
    <section id="directions" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Направления обучения</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выбери перспективное направление и построй успешную карьеру в IT
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {directionsData.map((direction, index) => (
            <div key={index} className="direction-card shadow-md">
              <Card className="h-full border-none overflow-hidden">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-br ${direction.color} h-40 flex items-center justify-center p-6`}>
                    <h3 className="text-2xl font-bold text-white text-center">
                      {direction.title}
                    </h3>
                  </div>
                  
                  <div className="direction-info">
                    <p className="text-center font-medium mb-2">{direction.description}</p>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="text-lg font-semibold mb-2 text-center">Зарплаты на рынке</h4>
                    <div className="salary-info">
                      <div className="p-2 bg-gray-100 rounded">
                        <span className="block font-medium">Junior</span>
                        <span className="block font-bold">{direction.salaries.junior}</span>
                      </div>
                      <div className="p-2 bg-gray-100 rounded">
                        <span className="block font-medium">Middle</span>
                        <span className="block font-bold">{direction.salaries.middle}</span>
                      </div>
                      <div className="p-2 bg-gray-100 rounded">
                        <span className="block font-medium">Senior</span>
                        <span className="block font-bold">{direction.salaries.senior}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Directions;
