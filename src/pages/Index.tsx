import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string[];
  color: string[];
  filling: 'natural' | 'synthetic';
  season: 'winter' | 'demiseason';
  style: 'coat' | 'jacket' | 'raincoat' | 'trench';
  availability: { [key: string]: boolean };
}

const products: Product[] = [
  {
    id: 1,
    name: 'Пальто классическое бежевое',
    price: 15900,
    image: 'https://cdn.poehali.dev/projects/c98921fb-a37d-448c-b8ce-51bada2a57fb/files/e8374ebb-2cb8-4c07-8bd6-ec2c104b7e7d.jpg',
    size: ['S', 'M', 'L', 'XL'],
    color: ['Бежевый', 'Кремовый'],
    filling: 'natural',
    season: 'winter',
    style: 'coat',
    availability: { 'Москва, Тверская 12': true, 'Москва, Арбат 45': true, 'СПб, Невский 88': false }
  },
  {
    id: 2,
    name: 'Куртка шерстяная терракотовая',
    price: 12500,
    image: 'https://cdn.poehali.dev/projects/c98921fb-a37d-448c-b8ce-51bada2a57fb/files/67124257-ae37-4540-a328-2db2d745547b.jpg',
    size: ['M', 'L', 'XL'],
    color: ['Терракотовый', 'Коричневый'],
    filling: 'natural',
    season: 'demiseason',
    style: 'jacket',
    availability: { 'Москва, Тверская 12': true, 'Москва, Арбат 45': false, 'СПб, Невский 88': true }
  },
  {
    id: 3,
    name: 'Дождевик легкий кремовый',
    price: 8900,
    image: 'https://cdn.poehali.dev/projects/c98921fb-a37d-448c-b8ce-51bada2a57fb/files/bea7a545-c909-4452-b2b0-332f1022c2dd.jpg',
    size: ['S', 'M', 'L'],
    color: ['Кремовый', 'Бежевый'],
    filling: 'synthetic',
    season: 'demiseason',
    style: 'raincoat',
    availability: { 'Москва, Тверская 12': false, 'Москва, Арбат 45': true, 'СПб, Невский 88': true }
  },
  {
    id: 4,
    name: 'Пуховик зимний бежевый',
    price: 18900,
    image: 'https://cdn.poehali.dev/projects/c98921fb-a37d-448c-b8ce-51bada2a57fb/files/e8374ebb-2cb8-4c07-8bd6-ec2c104b7e7d.jpg',
    size: ['S', 'M', 'L', 'XL', 'XXL'],
    color: ['Бежевый', 'Кремовый', 'Коричневый'],
    filling: 'natural',
    season: 'winter',
    style: 'jacket',
    availability: { 'Москва, Тверская 12': true, 'Москва, Арбат 45': true, 'СПб, Невский 88': true }
  },
  {
    id: 5,
    name: 'Плащ демисезонный коричневый',
    price: 11200,
    image: 'https://cdn.poehali.dev/projects/c98921fb-a37d-448c-b8ce-51bada2a57fb/files/67124257-ae37-4540-a328-2db2d745547b.jpg',
    size: ['M', 'L', 'XL'],
    color: ['Коричневый', 'Терракотовый'],
    filling: 'synthetic',
    season: 'demiseason',
    style: 'trench',
    availability: { 'Москва, Тверская 12': true, 'Москва, Арбат 45': true, 'СПб, Невский 88': false }
  },
  {
    id: 6,
    name: 'Пальто шерстяное кремовое',
    price: 16500,
    image: 'https://cdn.poehali.dev/projects/c98921fb-a37d-448c-b8ce-51bada2a57fb/files/bea7a545-c909-4452-b2b0-332f1022c2dd.jpg',
    size: ['S', 'M', 'L'],
    color: ['Кремовый', 'Бежевый'],
    filling: 'natural',
    season: 'winter',
    style: 'coat',
    availability: { 'Москва, Тверская 12': true, 'Москва, Арбат 45': false, 'СПб, Невский 88': true }
  },
  {
    id: 7,
    name: 'Куртка пуховая коричневая',
    price: 19500,
    image: 'https://cdn.poehali.dev/projects/c98921fb-a37d-448c-b8ce-51bada2a57fb/files/67124257-ae37-4540-a328-2db2d745547b.jpg',
    size: ['M', 'L', 'XL', 'XXL'],
    color: ['Коричневый', 'Терракотовый'],
    filling: 'natural',
    season: 'winter',
    style: 'jacket',
    availability: { 'Москва, Тверская 12': true, 'Москва, Арбат 45': true, 'СПб, Невский 88': true }
  },
  {
    id: 8,
    name: 'Плащ классический бежевый',
    price: 13900,
    image: 'https://cdn.poehali.dev/projects/c98921fb-a37d-448c-b8ce-51bada2a57fb/files/e8374ebb-2cb8-4c07-8bd6-ec2c104b7e7d.jpg',
    size: ['S', 'M', 'L', 'XL'],
    color: ['Бежевый', 'Кремовый'],
    filling: 'synthetic',
    season: 'demiseason',
    style: 'trench',
    availability: { 'Москва, Тверская 12': false, 'Москва, Арбат 45': true, 'СПб, Невский 88': true }
  },
  {
    id: 9,
    name: 'Дождевик спортивный кремовый',
    price: 7500,
    image: 'https://cdn.poehali.dev/projects/c98921fb-a37d-448c-b8ce-51bada2a57fb/files/bea7a545-c909-4452-b2b0-332f1022c2dd.jpg',
    size: ['S', 'M', 'L'],
    color: ['Кремовый', 'Бежевый'],
    filling: 'synthetic',
    season: 'demiseason',
    style: 'raincoat',
    availability: { 'Москва, Тверская 12': true, 'Москва, Арбат 45': true, 'СПб, Невский 88': false }
  },
  {
    id: 10,
    name: 'Пальто удлиненное терракотовое',
    price: 21900,
    image: 'https://cdn.poehali.dev/projects/c98921fb-a37d-448c-b8ce-51bada2a57fb/files/67124257-ae37-4540-a328-2db2d745547b.jpg',
    size: ['M', 'L', 'XL'],
    color: ['Терракотовый', 'Коричневый'],
    filling: 'natural',
    season: 'winter',
    style: 'coat',
    availability: { 'Москва, Тверская 12': true, 'Москва, Арбат 45': false, 'СПб, Невский 88': true }
  },
  {
    id: 11,
    name: 'Куртка легкая бежевая',
    price: 9900,
    image: 'https://cdn.poehali.dev/projects/c98921fb-a37d-448c-b8ce-51bada2a57fb/files/e8374ebb-2cb8-4c07-8bd6-ec2c104b7e7d.jpg',
    size: ['S', 'M', 'L', 'XL'],
    color: ['Бежевый', 'Кремовый'],
    filling: 'synthetic',
    season: 'demiseason',
    style: 'jacket',
    availability: { 'Москва, Тверская 12': true, 'Москва, Арбат 45': true, 'СПб, Невский 88': true }
  },
  {
    id: 12,
    name: 'Плащ с капюшоном кремовый',
    price: 14500,
    image: 'https://cdn.poehali.dev/projects/c98921fb-a37d-448c-b8ce-51bada2a57fb/files/bea7a545-c909-4452-b2b0-332f1022c2dd.jpg',
    size: ['M', 'L', 'XL'],
    color: ['Кремовый', 'Бежевый'],
    filling: 'synthetic',
    season: 'demiseason',
    style: 'trench',
    availability: { 'Москва, Тверская 12': false, 'Москва, Арбат 45': true, 'СПб, Невский 88': true }
  }
];

const stores = [
  { city: 'Москва', address: 'Тверская 12', coords: { lat: 55.7558, lng: 37.6173 } },
  { city: 'Москва', address: 'Арбат 45', coords: { lat: 55.7522, lng: 37.5847 } },
  { city: 'СПб', address: 'Невский 88', coords: { lat: 59.9343, lng: 30.3351 } }
];

const Index = () => {
  const [selectedCity, setSelectedCity] = useState('Москва');
  const [selectedStore, setSelectedStore] = useState('Москва, Тверская 12');
  const [sortBy, setSortBy] = useState('price-asc');
  const [filters, setFilters] = useState({
    sizes: [] as string[],
    colors: [] as string[],
    filling: [] as string[],
    season: [] as string[],
    style: [] as string[]
  });

  const cityStores = stores.filter(s => s.city === selectedCity);
  
  const toggleFilter = (category: keyof typeof filters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(v => v !== value)
        : [...prev[category], value]
    }));
  };

  const filteredProducts = products.filter(product => {
    if (filters.sizes.length > 0 && !filters.sizes.some(s => product.size.includes(s))) return false;
    if (filters.colors.length > 0 && !filters.colors.some(c => product.color.includes(c))) return false;
    if (filters.filling.length > 0 && !filters.filling.includes(product.filling)) return false;
    if (filters.season.length > 0 && !filters.season.includes(product.season)) return false;
    if (filters.style.length > 0 && !filters.style.includes(product.style)) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0;
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-primary">Тепло</h1>
          <p className="text-muted-foreground mt-1">Магазин верхней одежды</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-[240px_1fr_260px] gap-6">
          <aside className="space-y-4 animate-fade-in">
            <Card className="sticky top-24">
              <CardContent className="p-5 space-y-5">
                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Icon name="SlidersHorizontal" size={20} />
                    Фильтры и сортировка
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-3 text-sm text-foreground">Сортировка по цене</h4>
                      <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Выберите" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="price-asc">По возрастанию</SelectItem>
                          <SelectItem value="price-desc">По убыванию</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-medium mb-3 text-sm text-foreground">Размер</h4>
                      <div className="space-y-2">
                        {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                          <div key={size} className="flex items-center space-x-2">
                            <Checkbox
                              id={`size-${size}`}
                              checked={filters.sizes.includes(size)}
                              onCheckedChange={() => toggleFilter('sizes', size)}
                            />
                            <Label htmlFor={`size-${size}`} className="cursor-pointer text-sm">
                              {size}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-medium mb-3 text-sm">Цвет</h4>
                      <div className="space-y-2">
                        {['Бежевый', 'Кремовый', 'Коричневый', 'Терракотовый'].map(color => (
                          <div key={color} className="flex items-center space-x-2">
                            <Checkbox
                              id={`color-${color}`}
                              checked={filters.colors.includes(color)}
                              onCheckedChange={() => toggleFilter('colors', color)}
                            />
                            <Label htmlFor={`color-${color}`} className="cursor-pointer text-sm">
                              {color}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-medium mb-3 text-sm">Наполнитель</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="filling-natural"
                            checked={filters.filling.includes('natural')}
                            onCheckedChange={() => toggleFilter('filling', 'natural')}
                          />
                          <Label htmlFor="filling-natural" className="cursor-pointer text-sm">
                            Натуральный
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="filling-synthetic"
                            checked={filters.filling.includes('synthetic')}
                            onCheckedChange={() => toggleFilter('filling', 'synthetic')}
                          />
                          <Label htmlFor="filling-synthetic" className="cursor-pointer text-sm">
                            Синтетический
                          </Label>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-medium mb-3 text-sm">Сезон</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="season-winter"
                            checked={filters.season.includes('winter')}
                            onCheckedChange={() => toggleFilter('season', 'winter')}
                          />
                          <Label htmlFor="season-winter" className="cursor-pointer text-sm">
                            Зимняя
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="season-demiseason"
                            checked={filters.season.includes('demiseason')}
                            onCheckedChange={() => toggleFilter('season', 'demiseason')}
                          />
                          <Label htmlFor="season-demiseason" className="cursor-pointer text-sm">
                            Межсезонная
                          </Label>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-medium mb-3 text-sm">Фасон</h4>
                      <div className="space-y-2">
                        {[
                          { value: 'coat', label: 'Пальто' },
                          { value: 'jacket', label: 'Куртка' },
                          { value: 'raincoat', label: 'Дождевик' },
                          { value: 'trench', label: 'Плащ' }
                        ].map(style => (
                          <div key={style.value} className="flex items-center space-x-2">
                            <Checkbox
                              id={`style-${style.value}`}
                              checked={filters.style.includes(style.value)}
                              onCheckedChange={() => toggleFilter('style', style.value)}
                            />
                            <Label htmlFor={`style-${style.value}`} className="cursor-pointer text-sm">
                              {style.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          <main className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">
                Каталог <span className="text-muted-foreground text-lg">({sortedProducts.length})</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {sortedProducts.map((product, index) => (
                <Card 
                  key={product.id} 
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.04}s` }}
                >
                  <div className="aspect-[3/4] overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-5 space-y-3">
                    <h3 className="font-semibold text-lg leading-tight">{product.name}</h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="secondary" className="text-xs">
                        {product.season === 'winter' ? 'Зимняя' : 'Межсезонная'}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {product.filling === 'natural' ? 'Натур.' : 'Синт.'}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-2xl font-bold text-primary">
                        {product.price.toLocaleString('ru-RU')} ₽
                      </span>
                      {product.availability[selectedStore] ? (
                        <Badge className="bg-green-500/10 text-green-700 hover:bg-green-500/20">
                          <Icon name="Check" size={14} className="mr-1" />
                          Есть
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="text-muted-foreground">
                          <Icon name="X" size={14} className="mr-1" />
                          Нет
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <Card className="p-12 text-center">
                <Icon name="ShoppingBag" size={48} className="mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Товары не найдены. Попробуйте изменить фильтры</p>
              </Card>
            )}
          </main>

          <aside className="space-y-6 animate-fade-in">
            <Card className="sticky top-24">
              <CardContent className="p-6 space-y-5">
                <h3 className="font-semibold text-xl flex items-center gap-2">
                  <Icon name="MapPin" size={22} />
                  Выбор магазина
                </h3>
                
                <div>
                  <Label className="text-sm font-medium mb-3 block">Город</Label>
                  <Select value={selectedCity} onValueChange={(value) => {
                    setSelectedCity(value);
                    const firstStore = stores.find(s => s.city === value);
                    if (firstStore) setSelectedStore(`${firstStore.city}, ${firstStore.address}`);
                  }}>
                    <SelectTrigger className="h-11">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Москва">Москва</SelectItem>
                      <SelectItem value="СПб">Санкт-Петербург</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div>
                  <Label className="text-sm font-medium mb-3 block">Адреса магазинов</Label>
                  <div className="space-y-2">
                    {cityStores.map(store => {
                      const storeId = `${store.city}, ${store.address}`;
                      return (
                        <Button
                          key={storeId}
                          variant={selectedStore === storeId ? 'default' : 'outline'}
                          className="w-full justify-start text-left h-auto py-3.5 px-4 font-normal"
                          onClick={() => setSelectedStore(storeId)}
                        >
                          <Icon name="Store" size={18} className="mr-3 flex-shrink-0" />
                          <span>{store.address}</span>
                        </Button>
                      );
                    })}
                  </div>
                </div>

                <Separator />

                <div>
                  <Label className="text-sm font-medium mb-3 block">Карта магазинов</Label>
                  <div className="aspect-square bg-muted rounded-xl overflow-hidden relative border border-border">
                    <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-muted">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center space-y-3 p-4">
                          <Icon name="Map" size={56} className="mx-auto text-muted-foreground/50" />
                          <div>
                            <p className="text-base font-medium text-foreground">
                              {selectedCity === 'Москва' ? 'Москва' : 'Санкт-Петербург'}
                            </p>
                            <p className="text-sm text-muted-foreground mt-1">
                              {cityStores.length} {cityStores.length === 1 ? 'магазин' : 'магазина'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {cityStores.map((store, idx) => (
                      <div
                        key={idx}
                        className="absolute w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold shadow-xl border-2 border-background animate-scale-in cursor-pointer hover:scale-110 transition-transform"
                        style={{
                          left: `${25 + idx * 25}%`,
                          top: `${35 + idx * 20}%`,
                          animationDelay: `${idx * 0.15}s`
                        }}
                        title={store.address}
                      >
                        {idx + 1}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Index;