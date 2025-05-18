
import Icon from "@/components/ui/icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const benefitsData = [
  {
    icon: "Lightbulb",
    title: "Актуальные знания",
    description: "Программы разработаны с учетом последних трендов в IT-индустрии"
  },
  {
    icon: "Users",
    title: "Опытные наставники",
    description: "Обучение под руководством практикующих разработчиков"
  },
  {
    icon: "Code2",
    title: "Практические проекты",
    description: "Работа над реальными задачами и создание портфолио"
  },
  {
    icon: "Clock",
    title: "Гибкий график",
    description: "Учитесь в удобное время, совмещая с работой или учебой"
  },
  {
    icon: "HeartHandshake",
    title: "Поддержка сообщества",
    description: "Доступ к сообществу единомышленников и выпускников"
  },
  {
    icon: "Briefcase",
    title: "Трудоустройство",
    description: "Помощь в составлении резюме и подготовке к собеседованиям"
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Преимущества обучения</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Наша образовательная платформа предлагает все необходимое для успешного старта карьеры в IT
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsData.map((benefit, index) => (
            <Card key={index} className="card-hover border-none">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={benefit.icon} className="text-primary w-6 h-6" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
