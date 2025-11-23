import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const MapDetail = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const mapData = {
    title: 'Легенды Затерянного Королевства',
    author: 'Steve',
    category: 'Приключения',
    version: '1.20.4',
    downloads: 1547,
    rating: 4.8,
    uploadDate: '15 ноября 2024',
    description: 'Эпичная приключенческая карта с множеством квестов, загадок и боссов. Исследуй древние руины, раскрывай тайны забытой цивилизации и спаси королевство от тьмы!',
    features: [
      'Более 20 уникальных локаций',
      'Пользовательская система квестов',
      'Боссы с уникальными механиками',
      'Секретные сокровища и достижения',
      'Кастомные текстуры и звуки',
      'Рассчитано на 2-4 часа игры'
    ],
    requirements: [
      'Minecraft 1.20.4 или выше',
      'Включить командные блоки',
      'Рекомендуется: 4GB RAM',
      'Играть на сложности Normal или Hard'
    ],
    screenshots: [
      'https://cdn.poehali.dev/projects/349ab9aa-195c-46e4-a02b-7c1e6a4ba1f6/files/91207242-cf44-4558-aa06-7f457967c0a2.jpg',
      'https://cdn.poehali.dev/projects/349ab9aa-195c-46e4-a02b-7c1e6a4ba1f6/files/1232de50-7a6f-49be-800c-69f647df38f6.jpg',
      'https://cdn.poehali.dev/projects/349ab9aa-195c-46e4-a02b-7c1e6a4ba1f6/files/4c0d5472-3998-48d4-abbd-3c414f6ea4da.jpg'
    ]
  };

  const handleDownload = () => {
    toast({
      title: "Скачивание началось! 📥",
      description: "Файл карты загружается на ваше устройство",
    });
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'url(https://cdn.poehali.dev/projects/349ab9aa-195c-46e4-a02b-7c1e6a4ba1f6/files/5367e5ea-bafd-4a1b-ae58-3171abac6cb2.jpg)',
        imageRendering: 'pixelated'
      }}
    >
      <div className="min-h-screen bg-black/20 backdrop-blur-[1px]">
        <header className="border-b-4 border-black bg-[#7CB342] minecraft-shadow">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                className="pixel-corners hover:bg-black/10 text-white"
                onClick={() => window.history.back()}
              >
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                НАЗАД
              </Button>
              <h1 className="text-2xl md:text-3xl text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)]">
                🧱 MINECRAFT КАРТЫ
              </h1>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card className="pixel-corners minecraft-shadow-lg border-4 border-black bg-white/95">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={mapData.screenshots[selectedImage]}
                      alt="Screenshot"
                      className="w-full h-[400px] object-cover"
                      style={{ imageRendering: 'pixelated' }}
                    />
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      {mapData.screenshots.map((screenshot, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImage(index)}
                          className={`flex-1 h-20 pixel-corners border-2 overflow-hidden transition-all ${
                            selectedImage === index 
                              ? 'border-[#7CB342] minecraft-shadow-lg' 
                              : 'border-black opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img 
                            src={screenshot}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                            style={{ imageRendering: 'pixelated' }}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="pixel-corners minecraft-shadow-lg border-4 border-black bg-white/95">
                <CardContent className="p-6">
                  <Tabs defaultValue="description">
                    <TabsList className="w-full pixel-corners bg-gray-200 border-2 border-black">
                      <TabsTrigger value="description" className="pixel-corners data-[state=active]:bg-[#7CB342] data-[state=active]:text-white">
                        Описание
                      </TabsTrigger>
                      <TabsTrigger value="features" className="pixel-corners data-[state=active]:bg-[#7CB342] data-[state=active]:text-white">
                        Особенности
                      </TabsTrigger>
                      <TabsTrigger value="requirements" className="pixel-corners data-[state=active]:bg-[#7CB342] data-[state=active]:text-white">
                        Требования
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="description" className="mt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {mapData.description}
                      </p>
                    </TabsContent>

                    <TabsContent value="features" className="mt-4">
                      <ul className="space-y-2">
                        {mapData.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Icon name="Check" size={20} className="text-[#7CB342] mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>

                    <TabsContent value="requirements" className="mt-4">
                      <ul className="space-y-2">
                        {mapData.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Icon name="AlertCircle" size={20} className="text-[#42A5F5] mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="pixel-corners minecraft-shadow-lg border-4 border-black bg-white/95">
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold text-[#6D4C41] mb-2">
                      {mapData.title}
                    </h2>
                    <button 
                      onClick={() => navigate(`/user/${mapData.author}`)}
                      className="flex items-center gap-2 text-sm text-gray-600 mb-4 hover:text-[#7CB342] transition-colors"
                    >
                      <Icon name="User" size={16} />
                      <span>Автор: {mapData.author}</span>
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge className="pixel-corners bg-[#6D4C41] border-2 border-black text-white">
                      {mapData.category}
                    </Badge>
                    <Badge className="pixel-corners bg-[#42A5F5] border-2 border-black text-white">
                      {mapData.version}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-4 border-y-2 border-gray-200">
                    <div>
                      <div className="flex items-center gap-1 text-gray-600 mb-1">
                        <Icon name="Download" size={16} />
                        <span className="text-sm">Скачиваний</span>
                      </div>
                      <div className="text-xl font-bold text-[#6D4C41]">
                        {mapData.downloads}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-gray-600 mb-1">
                        <Icon name="Star" size={16} />
                        <span className="text-sm">Рейтинг</span>
                      </div>
                      <div className="text-xl font-bold text-[#6D4C41]">
                        {mapData.rating}/5
                      </div>
                    </div>
                  </div>

                  <div className="text-sm text-gray-600">
                    <Icon name="Calendar" size={16} className="inline mr-1" />
                    Загружено: {mapData.uploadDate}
                  </div>

                  <Button 
                    onClick={handleDownload}
                    className="w-full pixel-corners minecraft-shadow-lg bg-[#7CB342] hover:bg-[#6CA032] text-white font-bold text-lg py-6 border-2 border-black"
                  >
                    <Icon name="Download" size={24} className="mr-2" />
                    СКАЧАТЬ КАРТУ
                  </Button>

                  <div className="grid grid-cols-2 gap-2">
                    <Button 
                      variant="outline"
                      className="pixel-corners border-2 border-black hover:bg-gray-100"
                    >
                      <Icon name="Heart" size={18} className="mr-2" />
                      В избранное
                    </Button>
                    <Button 
                      variant="outline"
                      className="pixel-corners border-2 border-black hover:bg-gray-100"
                    >
                      <Icon name="Share2" size={18} className="mr-2" />
                      Поделиться
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="pixel-corners minecraft-shadow-lg border-4 border-black bg-[#42A5F5]/95">
                <CardContent className="p-6 text-white">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <Icon name="Info" size={20} />
                    Как установить карту?
                  </h3>
                  <ol className="space-y-2 text-sm">
                    <li>1. Скачай файл карты (.zip)</li>
                    <li>2. Найди папку saves в Minecraft</li>
                    <li>3. Распакуй архив в эту папку</li>
                    <li>4. Запусти игру и выбери мир</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>

          <section className="mt-8">
            <Card className="pixel-corners minecraft-shadow-lg border-4 border-black bg-white/95">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[#6D4C41] mb-6 flex items-center gap-2">
                  <Icon name="MessageSquare" size={24} />
                  Комментарии (3)
                </h3>

                <div className="space-y-4">
                  <div className="border-2 border-gray-200 pixel-corners p-4 hover:border-[#7CB342] transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 pixel-corners overflow-hidden border-2 border-black flex-shrink-0">
                        <img 
                          src="https://cdn.poehali.dev/projects/349ab9aa-195c-46e4-a02b-7c1e6a4ba1f6/files/51ee9e93-7530-4d0d-ba6c-31bef4ad4797.jpg"
                          alt="Avatar"
                          className="w-full h-full object-cover"
                          style={{ imageRendering: 'pixelated' }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-bold text-[#6D4C41]">Creeper_Hunter</span>
                          <span className="text-sm text-gray-500">2 дня назад</span>
                          <div className="flex items-center gap-1 ml-auto">
                            {[1,2,3,4,5].map(star => (
                              <Icon key={star} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700">
                          Потрясающая карта! Квесты очень интересные, особенно понравилась битва с боссом в конце. Прошёл за 3 часа, очень затягивает!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-2 border-gray-200 pixel-corners p-4 hover:border-[#7CB342] transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 pixel-corners overflow-hidden border-2 border-black flex-shrink-0">
                        <img 
                          src="https://cdn.poehali.dev/projects/349ab9aa-195c-46e4-a02b-7c1e6a4ba1f6/files/51ee9e93-7530-4d0d-ba6c-31bef4ad4797.jpg"
                          alt="Avatar"
                          className="w-full h-full object-cover"
                          style={{ imageRendering: 'pixelated' }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-bold text-[#6D4C41]">BlockMaster</span>
                          <span className="text-sm text-gray-500">5 дней назад</span>
                          <div className="flex items-center gap-1 ml-auto">
                            {[1,2,3,4].map(star => (
                              <Icon key={star} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                            ))}
                            <Icon name="Star" size={16} className="text-gray-300" />
                          </div>
                        </div>
                        <p className="text-gray-700">
                          Отличная работа! Немного лагало в некоторых местах, но в целом всё супер. Загадки местами сложноваты, но это даже хорошо.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-2 border-gray-200 pixel-corners p-4 hover:border-[#7CB342] transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 pixel-corners overflow-hidden border-2 border-black flex-shrink-0">
                        <img 
                          src="https://cdn.poehali.dev/projects/349ab9aa-195c-46e4-a02b-7c1e6a4ba1f6/files/51ee9e93-7530-4d0d-ba6c-31bef4ad4797.jpg"
                          alt="Avatar"
                          className="w-full h-full object-cover"
                          style={{ imageRendering: 'pixelated' }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-bold text-[#6D4C41]">RedstoneKing</span>
                          <span className="text-sm text-gray-500">неделю назад</span>
                          <div className="flex items-center gap-1 ml-auto">
                            {[1,2,3,4,5].map(star => (
                              <Icon key={star} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700">
                          Лучшая приключенческая карта, что я играл! Механики боссов очень креативные, кастомные текстуры добавляют атмосферы. 10/10!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t-2 border-gray-200">
                    <h4 className="font-bold text-[#6D4C41] mb-4">Оставить комментарий</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm text-gray-600">Ваша оценка:</span>
                        <div className="flex gap-1">
                          {[1,2,3,4,5].map(star => (
                            <button 
                              key={star}
                              className="hover:scale-110 transition-transform"
                            >
                              <Icon name="Star" size={24} className="text-gray-300 hover:text-yellow-500" />
                            </button>
                          ))}
                        </div>
                      </div>
                      <Textarea 
                        placeholder="Поделитесь своим мнением о карте..."
                        className="pixel-corners border-2 border-black"
                        rows={4}
                      />
                      <Button className="pixel-corners minecraft-shadow bg-[#7CB342] hover:bg-[#6CA032] text-white font-bold border-2 border-black">
                        <Icon name="Send" size={18} className="mr-2" />
                        ОТПРАВИТЬ
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MapDetail;