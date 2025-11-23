import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface MinecraftMap {
  id: number;
  title: string;
  description: string;
  image: string;
  downloads: number;
  category: string;
  author: string;
}

const Index = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'adventure'
  });

  const maps: MinecraftMap[] = [
    {
      id: 1,
      title: 'Приключенческий мир',
      description: 'Огромная карта с квестами и загадками',
      image: 'https://cdn.poehali.dev/projects/349ab9aa-195c-46e4-a02b-7c1e6a4ba1f6/files/b4f84c03-7516-464f-bcd6-03a1a387865b.jpg',
      downloads: 1547,
      category: 'Приключения',
      author: 'Steve'
    },
    {
      id: 2,
      title: 'Замок Фэнтези',
      description: 'Эпичный замок с секретными комнатами',
      image: 'https://cdn.poehali.dev/projects/349ab9aa-195c-46e4-a02b-7c1e6a4ba1f6/files/615ec7c7-0397-4729-89bc-05ec20a1596e.jpg',
      downloads: 2341,
      category: 'Постройка',
      author: 'Alex'
    },
    {
      id: 3,
      title: 'Паркур челлендж',
      description: 'Сложный паркур для профи',
      image: 'https://cdn.poehali.dev/projects/349ab9aa-195c-46e4-a02b-7c1e6a4ba1f6/files/32d7010b-cf07-452b-a60f-d1ad4458f4df.jpg',
      downloads: 987,
      category: 'Паркур',
      author: 'Herobrine'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Карта загружена! 🎮",
      description: `${formData.title} успешно добавлена в галерею`,
    });
    setUploadDialogOpen(false);
    setFormData({ title: '', description: '', category: 'adventure' });
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
            <div className="flex items-center justify-between">
              <h1 className="text-2xl md:text-3xl text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)]">
                🧱 MINECRAFT КАРТЫ
              </h1>
              <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="pixel-corners minecraft-shadow hover:translate-y-[-2px] transition-transform bg-[#6D4C41] hover:bg-[#5D3F31] text-white font-bold border-2 border-black">
                    <Icon name="Upload" size={20} className="mr-2" />
                    ЗАГРУЗИТЬ
                  </Button>
                </DialogTrigger>
                <DialogContent className="pixel-corners border-4 border-black">
                  <DialogHeader>
                    <DialogTitle className="text-xl">Загрузить карту</DialogTitle>
                    <DialogDescription>
                      Поделись своей картой с сообществом
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="title">Название карты</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        required
                        className="pixel-corners border-2 border-black"
                      />
                    </div>
                    <div>
                      <Label htmlFor="description">Описание</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        required
                        className="pixel-corners border-2 border-black"
                        rows={4}
                      />
                    </div>
                    <div>
                      <Label htmlFor="category">Категория</Label>
                      <select
                        id="category"
                        value={formData.category}
                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                        className="w-full px-3 py-2 pixel-corners border-2 border-black bg-white"
                      >
                        <option value="adventure">Приключения</option>
                        <option value="parkour">Паркур</option>
                        <option value="building">Постройка</option>
                        <option value="pvp">PVP</option>
                      </select>
                    </div>
                    <Button type="submit" className="w-full pixel-corners minecraft-shadow-lg bg-[#7CB342] hover:bg-[#6CA032] text-white font-bold border-2 border-black">
                      <Icon name="Check" size={20} className="mr-2" />
                      ОПУБЛИКОВАТЬ
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <section className="mb-12 text-center">
            <div className="inline-block bg-white/95 pixel-corners minecraft-shadow-lg border-4 border-black p-8 mb-8">
              <h2 className="text-3xl md:text-4xl mb-4 text-[#6D4C41]">
                Лучшие карты для Minecraft
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl">
                Скачивай карты, загружай свои и делись с друзьями!
              </p>
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl text-white drop-shadow-[3px_3px_0_rgba(0,0,0,1)] font-bold">
                🗺️ ПОПУЛЯРНЫЕ КАРТЫ
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {maps.map((map) => (
                <Card key={map.id} className="pixel-corners minecraft-shadow-lg border-4 border-black overflow-hidden hover:translate-y-[-4px] transition-transform bg-white/95">
                  <CardHeader className="p-0">
                    <div className="relative">
                      <img 
                        src={map.image} 
                        alt={map.title}
                        className="w-full h-48 object-cover"
                        style={{ imageRendering: 'pixelated' }}
                      />
                      <Badge className="absolute top-2 right-2 pixel-corners bg-[#6D4C41] border-2 border-black text-white">
                        {map.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-xl mb-2 text-[#6D4C41]">{map.title}</CardTitle>
                    <CardDescription className="text-gray-600 mb-3">
                      {map.description}
                    </CardDescription>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Icon name="Download" size={16} />
                        <span>{map.downloads}</span>
                      </div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/user/${map.author}`);
                        }}
                        className="flex items-center gap-1 hover:text-[#7CB342] transition-colors"
                      >
                        <Icon name="User" size={16} />
                        <span>{map.author}</span>
                      </button>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 gap-2 flex-col">
                    <Button 
                      onClick={() => navigate(`/map/${map.id}`)}
                      className="w-full pixel-corners minecraft-shadow bg-[#7CB342] hover:bg-[#6CA032] text-white font-bold border-2 border-black"
                    >
                      <Icon name="Eye" size={18} className="mr-2" />
                      ПОДРОБНЕЕ
                    </Button>
                    <Button className="w-full pixel-corners minecraft-shadow bg-[#42A5F5] hover:bg-[#2196F3] text-white font-bold border-2 border-black">
                      <Icon name="Download" size={18} className="mr-2" />
                      СКАЧАТЬ
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          <section className="text-center py-12">
            <div className="inline-block bg-[#6D4C41]/95 pixel-corners minecraft-shadow-lg border-4 border-black p-6">
              <h3 className="text-2xl text-white mb-4">
                Есть своя карта?
              </h3>
              <Button 
                onClick={() => setUploadDialogOpen(true)}
                className="pixel-corners minecraft-shadow-lg bg-[#7CB342] hover:bg-[#6CA032] text-white font-bold text-lg px-8 py-6 border-2 border-black"
              >
                <Icon name="Upload" size={24} className="mr-2" />
                ЗАГРУЗИТЬ КАРТУ
              </Button>
            </div>
          </section>
        </main>

        <footer className="border-t-4 border-black bg-[#6D4C41]/95 py-6 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-white text-sm">
              🎮 Minecraft Maps Platform © 2024
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;