import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('maps');

  const userData = {
    username: 'Steve',
    joinDate: 'Январь 2024',
    totalMaps: 12,
    totalDownloads: 15420,
    followers: 342,
    bio: 'Создатель приключенческих карт для Minecraft. Люблю сложные головоломки и эпичные битвы с боссами!',
    avatar: 'https://cdn.poehali.dev/projects/349ab9aa-195c-46e4-a02b-7c1e6a4ba1f6/files/51ee9e93-7530-4d0d-ba6c-31bef4ad4797.jpg',
    banner: 'https://cdn.poehali.dev/projects/349ab9aa-195c-46e4-a02b-7c1e6a4ba1f6/files/90882737-c35a-47e0-aaa5-62aea97529c8.jpg'
  };

  const userMaps = [
    {
      id: 1,
      title: 'Легенды Затерянного Королевства',
      category: 'Приключения',
      downloads: 1547,
      rating: 4.8,
      image: 'https://cdn.poehali.dev/projects/349ab9aa-195c-46e4-a02b-7c1e6a4ba1f6/files/91207242-cf44-4558-aa06-7f457967c0a2.jpg'
    },
    {
      id: 2,
      title: 'Подземелье Теней',
      category: 'Хоррор',
      downloads: 2341,
      rating: 4.9,
      image: 'https://cdn.poehali.dev/projects/349ab9aa-195c-46e4-a02b-7c1e6a4ba1f6/files/1232de50-7a6f-49be-800c-69f647df38f6.jpg'
    },
    {
      id: 3,
      title: 'Небесный Город',
      category: 'Строительство',
      downloads: 3567,
      rating: 4.7,
      image: 'https://cdn.poehali.dev/projects/349ab9aa-195c-46e4-a02b-7c1e6a4ba1f6/files/4c0d5472-3998-48d4-abbd-3c414f6ea4da.jpg'
    },
    {
      id: 4,
      title: 'Битва Замков',
      category: 'PvP',
      downloads: 4123,
      rating: 4.6,
      image: 'https://cdn.poehali.dev/projects/349ab9aa-195c-46e4-a02b-7c1e6a4ba1f6/files/91207242-cf44-4558-aa06-7f457967c0a2.jpg'
    },
    {
      id: 5,
      title: 'Лабиринт Загадок',
      category: 'Головоломки',
      downloads: 1891,
      rating: 4.5,
      image: 'https://cdn.poehali.dev/projects/349ab9aa-195c-46e4-a02b-7c1e6a4ba1f6/files/1232de50-7a6f-49be-800c-69f647df38f6.jpg'
    },
    {
      id: 6,
      title: 'Драконий Остров',
      category: 'Приключения',
      downloads: 2876,
      rating: 4.8,
      image: 'https://cdn.poehali.dev/projects/349ab9aa-195c-46e4-a02b-7c1e6a4ba1f6/files/4c0d5472-3998-48d4-abbd-3c414f6ea4da.jpg'
    }
  ];

  const achievements = [
    { icon: '🏆', title: 'Популярный', description: '1000+ скачиваний' },
    { icon: '⭐', title: 'Звездный', description: 'Рейтинг 4.5+' },
    { icon: '🎯', title: 'Продуктивный', description: '10+ карт' },
    { icon: '❤️', title: 'Любимчик', description: '100+ подписчиков' }
  ];

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
          <Card className="pixel-corners minecraft-shadow-lg border-4 border-black bg-white/95 mb-8">
            <div 
              className="h-48 bg-cover bg-center border-b-4 border-black"
              style={{ 
                backgroundImage: `url(${userData.banner})`,
                imageRendering: 'pixelated'
              }}
            />
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center -mt-20 md:-mt-16">
                <div className="w-32 h-32 pixel-corners overflow-hidden border-4 border-black minecraft-shadow-lg bg-white flex-shrink-0">
                  <img 
                    src={userData.avatar}
                    alt={userData.username}
                    className="w-full h-full object-cover"
                    style={{ imageRendering: 'pixelated' }}
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h2 className="text-3xl font-bold text-[#6D4C41] mb-2">{userData.username}</h2>
                      <p className="text-gray-600 flex items-center gap-2">
                        <Icon name="Calendar" size={16} />
                        На сайте с {userData.joinDate}
                      </p>
                    </div>
                    <Button className="pixel-corners minecraft-shadow bg-[#7CB342] hover:bg-[#6CA032] text-white font-bold border-2 border-black">
                      <Icon name="UserPlus" size={18} className="mr-2" />
                      ПОДПИСАТЬСЯ
                    </Button>
                  </div>

                  <p className="text-gray-700 mb-4">{userData.bio}</p>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 pixel-corners bg-gray-100 border-2 border-gray-300">
                      <div className="text-2xl font-bold text-[#7CB342]">{userData.totalMaps}</div>
                      <div className="text-sm text-gray-600">Карт</div>
                    </div>
                    <div className="text-center p-3 pixel-corners bg-gray-100 border-2 border-gray-300">
                      <div className="text-2xl font-bold text-[#42A5F5]">{userData.totalDownloads.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Скачиваний</div>
                    </div>
                    <div className="text-center p-3 pixel-corners bg-gray-100 border-2 border-gray-300">
                      <div className="text-2xl font-bold text-[#FF5722]">{userData.followers}</div>
                      <div className="text-sm text-gray-600">Подписчиков</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full pixel-corners bg-white/95 border-4 border-black minecraft-shadow mb-6">
              <TabsTrigger 
                value="maps" 
                className="flex-1 pixel-corners data-[state=active]:bg-[#7CB342] data-[state=active]:text-white"
              >
                <Icon name="Map" size={18} className="mr-2" />
                Карты
              </TabsTrigger>
              <TabsTrigger 
                value="achievements" 
                className="flex-1 pixel-corners data-[state=active]:bg-[#7CB342] data-[state=active]:text-white"
              >
                <Icon name="Award" size={18} className="mr-2" />
                Достижения
              </TabsTrigger>
            </TabsList>

            <TabsContent value="maps">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userMaps.map(map => (
                  <Card 
                    key={map.id}
                    className="pixel-corners minecraft-shadow-lg border-4 border-black bg-white/95 hover:scale-[1.02] transition-transform cursor-pointer"
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        <img 
                          src={map.image}
                          alt={map.title}
                          className="w-full h-48 object-cover"
                          style={{ imageRendering: 'pixelated' }}
                        />
                        <Badge className="absolute top-3 right-3 pixel-corners bg-[#6D4C41] border-2 border-black text-white">
                          {map.category}
                        </Badge>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg text-[#6D4C41] mb-3">
                          {map.title}
                        </h3>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-1 text-gray-600">
                            <Icon name="Download" size={16} />
                            <span>{map.downloads.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1 text-yellow-600">
                            <Icon name="Star" size={16} className="fill-yellow-500" />
                            <span className="font-bold">{map.rating}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="achievements">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <Card 
                    key={index}
                    className="pixel-corners minecraft-shadow-lg border-4 border-black bg-white/95"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="text-5xl">{achievement.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-[#6D4C41] mb-1">
                            {achievement.title}
                          </h3>
                          <p className="text-gray-600">{achievement.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default UserProfile;
