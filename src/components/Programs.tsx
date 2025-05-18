
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const programsData = [
  {
    title: "Frontend Developer",
    description: "Научись создавать современные веб-интерфейсы с использованием HTML, CSS, JavaScript и React",
    duration: "6 месяцев",
    lessonsCount: 48,
    projectsCount: 10,
    level: "Начинающий"
  },
  {
    title: "Backend Developer",
    description: "Освой серверную разработку на Node.js, изучи базы данных и создание API",
    duration: "7 месяцев",
    lessonsCount: 56,
    projectsCount: 8,
    level: "Начинающий"
  },
  {
    title: "Data Analyst",
    description: "Изучи анализ данных с помощью Python, SQL и визуализаций в Tableau",
    duration: "5 месяцев",
    lessonsCount: 40,
    projectsCount: 6,
    level: "Начинающий"
  },
  {
    title: "Full Stack Developer",
    description: "Стань универсальным разработчиком, освоив и клиентскую, и серверную части веб-приложений",
    duration: "9 месяцев",
    lessonsCount: 72,
    projectsCount: 12,
    level: "Средний"
  }
];

const Programs = () => {
  return (
    <section id="programs" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Программы обучения</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выбери подходящий курс и начни обучение с нуля до уровня уверенного специалиста
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programsData.map((program, index) => (
            <Card key={index} className="border-none shadow-md card-hover">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {program.level}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{program.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-100 rounded-lg">
                    <Icon name="Clock" className="mx-auto mb-2 text-primary" />
                    <span className="block text-sm text-gray-500">Длительность</span>
                    <span className="font-medium">{program.duration}</span>
                  </div>
                  <div className="text-center p-3 bg-gray-100 rounded-lg">
                    <Icon name="BookOpen" className="mx-auto mb-2 text-primary" />
                    <span className="block text-sm text-gray-500">Уроков</span>
                    <span className="font-medium">{program.lessonsCount}</span>
                  </div>
                  <div className="text-center p-3 bg-gray-100 rounded-lg">
                    <Icon name="Folder" className="mx-auto mb-2 text-primary" />
                    <span className="block text-sm text-gray-500">Проектов</span>
                    <span className="font-medium">{program.projectsCount}</span>
                  </div>
                </div>
                
                <Button className="w-full">Подробнее о курсе</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button variant="outline" size="lg">
            Смотреть все программы
            <Icon name="ArrowRight" className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
