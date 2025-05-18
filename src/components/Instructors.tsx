
const instructorsData = [
  {
    name: "Анна Смирнова",
    position: "Frontend-разработчик",
    company: "Яндекс",
    image: "https://randomuser.me/api/portraits/women/17.jpg"
  },
  {
    name: "Дмитрий Иванов",
    position: "Backend-разработчик",
    company: "Сбер",
    image: "https://randomuser.me/api/portraits/men/37.jpg"
  },
  {
    name: "Елена Петрова",
    position: "UX/UI Дизайнер",
    company: "VK",
    image: "https://randomuser.me/api/portraits/women/63.jpg"
  },
  {
    name: "Алексей Козлов",
    position: "DevOps Инженер",
    company: "Ozon",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Мария Сидорова",
    position: "Data Scientist",
    company: "Тинькофф",
    image: "https://randomuser.me/api/portraits/women/90.jpg"
  },
  {
    name: "Игорь Соколов",
    position: "Mobile-разработчик",
    company: "Авито",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    name: "Ольга Никитина",
    position: "QA Инженер",
    company: "Касперский",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    name: "Андрей Гаврилов",
    position: "Fullstack-разработчик",
    company: "Wildberries",
    image: "https://randomuser.me/api/portraits/men/91.jpg"
  }
];

// Duplicate the array to create a continuous scrolling effect
const duplicatedInstructors = [...instructorsData, ...instructorsData];

const Instructors = () => {
  return (
    <section id="instructors" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши наставники</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Обучайтесь у лучших специалистов с опытом работы в ведущих IT-компаниях
          </p>
        </div>
        
        <div className="instructor-scroll">
          <div className="instructor-scroll-content">
            {duplicatedInstructors.map((instructor, index) => (
              <div key={index} className="instructor-card">
                <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name} 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-1">{instructor.name}</h3>
                    <p className="text-gray-600">{instructor.position}</p>
                    <p className="text-primary font-medium">{instructor.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
