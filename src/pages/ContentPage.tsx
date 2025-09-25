import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Badge } from "../components/ui/badge";
import { Plus, Edit, Trash2 } from "lucide-react";
import { useToast } from "../hooks/use-toast";

interface HeroSlide {
  id: number;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  imageUrl: string;
  buttonTextAr: string;
  buttonTextEn: string;
  link: string;
  isActive: boolean;
  priority: number;
}

interface Category {
  id: string;
  nameAr: string;
  nameEn: string;
  imageUrl: string;
  isActive: boolean;
  sortOrder: number;
}

interface Occasion {
  id: string;
  nameAr: string;
  nameEn: string;
  imageUrl: string;
  isActive: boolean;
  sortOrder: number;
}

export default function ContentPage() {
  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>([
    {
      id: 1,
      titleAr: "مرحباً بكم في متجرنا",
      titleEn: "Welcome to Our Store",
      subtitleAr: "أفضل الهدايا والورود",
      subtitleEn: "Best Gifts and Flowers",
      imageUrl: "/placeholder.svg?height=400&width=800",
      buttonTextAr: "تسوق الآن",
      buttonTextEn: "Shop Now",
      link: "/products",
      isActive: true,
      priority: 1,
    },
  ]);

  const [categories, setCategories] = useState<Category[]>([
    {
      id: "flowers",
      nameAr: "الورود",
      nameEn: "Flowers",
      imageUrl: "/placeholder.svg?height=200&width=200",
      isActive: true,
      sortOrder: 1,
    },
    {
      id: "gifts",
      nameAr: "الهدايا",
      nameEn: "Gifts",
      imageUrl: "/placeholder.svg?height=200&width=200",
      isActive: true,
      sortOrder: 2,
    },
  ]);

  const [occasions, setOccasions] = useState<Occasion[]>([
    {
      id: "birthday",
      nameAr: "عيد ميلاد",
      nameEn: "Birthday",
      imageUrl: "/placeholder.svg?height=200&width=200",
      isActive: true,
      sortOrder: 1,
    },
    {
      id: "wedding",
      nameAr: "زفاف",
      nameEn: "Wedding",
      imageUrl: "/placeholder.svg?height=200&width=200",
      isActive: true,
      sortOrder: 2,
    },
  ]);

  const [isAddSlideOpen, setIsAddSlideOpen] = useState(false);
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);
  const [isAddOccasionOpen, setIsAddOccasionOpen] = useState(false);

  const [newSlide, setNewSlide] = useState<Partial<HeroSlide>>({
    titleAr: "",
    titleEn: "",
    subtitleAr: "",
    subtitleEn: "",
    imageUrl: "",
    buttonTextAr: "",
    buttonTextEn: "",
    link: "",
    isActive: true,
    priority: 1,
  });

  const [newCategory, setNewCategory] = useState<Partial<Category>>({
    nameAr: "",
    nameEn: "",
    imageUrl: "",
    isActive: true,
    sortOrder: 1,
  });

  const [newOccasion, setNewOccasion] = useState<Partial<Occasion>>({
    nameAr: "",
    nameEn: "",
    imageUrl: "",
    isActive: true,
    sortOrder: 1,
  });

  const { toast } = useToast();

  const handleAddSlide = () => {
    if (!newSlide.titleAr || !newSlide.titleEn) {
      toast({
        title: "خطأ",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    const slide: HeroSlide = {
      id: Date.now(),
      titleAr: newSlide.titleAr!,
      titleEn: newSlide.titleEn!,
      subtitleAr: newSlide.subtitleAr || "",
      subtitleEn: newSlide.subtitleEn || "",
      imageUrl: newSlide.imageUrl || "/placeholder.svg?height=400&width=800",
      buttonTextAr: newSlide.buttonTextAr || "",
      buttonTextEn: newSlide.buttonTextEn || "",
      link: newSlide.link || "",
      isActive: newSlide.isActive !== false,
      priority: newSlide.priority || 1,
    };

    setHeroSlides([...heroSlides, slide]);
    setNewSlide({
      titleAr: "",
      titleEn: "",
      subtitleAr: "",
      subtitleEn: "",
      imageUrl: "",
      buttonTextAr: "",
      buttonTextEn: "",
      link: "",
      isActive: true,
      priority: 1,
    });
    setIsAddSlideOpen(false);
    toast({
      title: "تم بنجاح",
      description: "تم إضافة الشريحة بنجاح",
    });
  };

  const handleAddCategory = () => {
    if (!newCategory.nameAr || !newCategory.nameEn) {
      toast({
        title: "خطأ",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    const category: Category = {
      id: Date.now().toString(),
      nameAr: newCategory.nameAr!,
      nameEn: newCategory.nameEn!,
      imageUrl: newCategory.imageUrl || "/placeholder.svg?height=200&width=200",
      isActive: newCategory.isActive !== false,
      sortOrder: newCategory.sortOrder || 1,
    };

    setCategories([...categories, category]);
    setNewCategory({
      nameAr: "",
      nameEn: "",
      imageUrl: "",
      isActive: true,
      sortOrder: 1,
    });
    setIsAddCategoryOpen(false);
    toast({
      title: "تم بنجاح",
      description: "تم إضافة الفئة بنجاح",
    });
  };

  const handleAddOccasion = () => {
    if (!newOccasion.nameAr || !newOccasion.nameEn) {
      toast({
        title: "خطأ",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    const occasion: Occasion = {
      id: Date.now().toString(),
      nameAr: newOccasion.nameAr!,
      nameEn: newOccasion.nameEn!,
      imageUrl: newOccasion.imageUrl || "/placeholder.svg?height=200&width=200",
      isActive: newOccasion.isActive !== false,
      sortOrder: newOccasion.sortOrder || 1,
    };

    setOccasions([...occasions, occasion]);
    setNewOccasion({
      nameAr: "",
      nameEn: "",
      imageUrl: "",
      isActive: true,
      sortOrder: 1,
    });
    setIsAddOccasionOpen(false);
    toast({
      title: "تم بنجاح",
      description: "تم إضافة المناسبة بنجاح",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">إدارة المحتوى</h1>
      </div>

      <Tabs defaultValue="hero" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="hero">شرائح الهيرو</TabsTrigger>
          <TabsTrigger value="categories">الفئات</TabsTrigger>
          <TabsTrigger value="occasions">المناسبات</TabsTrigger>
        </TabsList>

        {/* Hero Slides Tab */}
        <TabsContent value="hero" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>شرائح الهيرو</CardTitle>
                  <CardDescription>إدارة شرائح الصفحة الرئيسية</CardDescription>
                </div>
                <Dialog open={isAddSlideOpen} onOpenChange={setIsAddSlideOpen}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      إضافة شريحة
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>إضافة شريحة جديدة</DialogTitle>
                      <DialogDescription>
                        أضف شريحة جديدة للصفحة الرئيسية
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="slide-titleAr">
                            العنوان بالعربية *
                          </Label>
                          <Input
                            id="slide-titleAr"
                            value={newSlide.titleAr}
                            onChange={(e) =>
                              setNewSlide({
                                ...newSlide,
                                titleAr: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="slide-titleEn">
                            العنوان بالإنجليزية *
                          </Label>
                          <Input
                            id="slide-titleEn"
                            value={newSlide.titleEn}
                            onChange={(e) =>
                              setNewSlide({
                                ...newSlide,
                                titleEn: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="slide-subtitleAr">
                            العنوان الفرعي بالعربية
                          </Label>
                          <Input
                            id="slide-subtitleAr"
                            value={newSlide.subtitleAr}
                            onChange={(e) =>
                              setNewSlide({
                                ...newSlide,
                                subtitleAr: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="slide-subtitleEn">
                            العنوان الفرعي بالإنجليزية
                          </Label>
                          <Input
                            id="slide-subtitleEn"
                            value={newSlide.subtitleEn}
                            onChange={(e) =>
                              setNewSlide({
                                ...newSlide,
                                subtitleEn: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="slide-imageUrl">رابط الصورة</Label>
                        <Input
                          id="slide-imageUrl"
                          value={newSlide.imageUrl}
                          onChange={(e) =>
                            setNewSlide({
                              ...newSlide,
                              imageUrl: e.target.value,
                            })
                          }
                          placeholder="https://example.com/image.jpg"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="slide-buttonAr">
                            نص الزر بالعربية
                          </Label>
                          <Input
                            id="slide-buttonAr"
                            value={newSlide.buttonTextAr}
                            onChange={(e) =>
                              setNewSlide({
                                ...newSlide,
                                buttonTextAr: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="slide-buttonEn">
                            نص الزر بالإنجليزية
                          </Label>
                          <Input
                            id="slide-buttonEn"
                            value={newSlide.buttonTextEn}
                            onChange={(e) =>
                              setNewSlide({
                                ...newSlide,
                                buttonTextEn: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="slide-link">الرابط</Label>
                          <Input
                            id="slide-link"
                            value={newSlide.link}
                            onChange={(e) =>
                              setNewSlide({ ...newSlide, link: e.target.value })
                            }
                            placeholder="/products"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="slide-priority">الأولوية</Label>
                          <Input
                            id="slide-priority"
                            type="number"
                            value={newSlide.priority}
                            onChange={(e) =>
                              setNewSlide({
                                ...newSlide,
                                priority: Number(e.target.value),
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <Switch
                          id="slide-isActive"
                          checked={newSlide.isActive}
                          onCheckedChange={(checked) =>
                            setNewSlide({ ...newSlide, isActive: checked })
                          }
                        />
                        <Label htmlFor="slide-isActive">نشط</Label>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        variant="outline"
                        onClick={() => setIsAddSlideOpen(false)}
                      >
                        إلغاء
                      </Button>
                      <Button onClick={handleAddSlide}>إضافة الشريحة</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>الصورة</TableHead>
                    <TableHead>العنوان</TableHead>
                    <TableHead>العنوان الفرعي</TableHead>
                    <TableHead>الأولوية</TableHead>
                    <TableHead>الحالة</TableHead>
                    <TableHead>الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {heroSlides.map((slide) => (
                    <TableRow key={slide.id}>
                      <TableCell>
                        <img
                          src={slide.imageUrl || "/placeholder.svg"}
                          alt={slide.titleAr}
                          className="w-16 h-10 object-cover rounded"
                        />
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{slide.titleAr}</div>
                          <div className="text-sm text-muted-foreground">
                            {slide.titleEn}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="text-sm">{slide.subtitleAr}</div>
                          <div className="text-xs text-muted-foreground">
                            {slide.subtitleEn}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{slide.priority}</TableCell>
                      <TableCell>
                        <Badge
                          variant={slide.isActive ? "default" : "secondary"}
                        >
                          {slide.isActive ? "نشط" : "غير نشط"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              setHeroSlides(
                                heroSlides.filter((s) => s.id !== slide.id)
                              )
                            }
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Categories Tab */}
        <TabsContent value="categories" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>الفئات</CardTitle>
                  <CardDescription>إدارة فئات المنتجات</CardDescription>
                </div>
                <Dialog
                  open={isAddCategoryOpen}
                  onOpenChange={setIsAddCategoryOpen}
                >
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      إضافة فئة
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>إضافة فئة جديدة</DialogTitle>
                      <DialogDescription>
                        أضف فئة جديدة للمنتجات
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="cat-nameAr">الاسم بالعربية *</Label>
                          <Input
                            id="cat-nameAr"
                            value={newCategory.nameAr}
                            onChange={(e) =>
                              setNewCategory({
                                ...newCategory,
                                nameAr: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cat-nameEn">
                            الاسم بالإنجليزية *
                          </Label>
                          <Input
                            id="cat-nameEn"
                            value={newCategory.nameEn}
                            onChange={(e) =>
                              setNewCategory({
                                ...newCategory,
                                nameEn: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cat-imageUrl">رابط الصورة</Label>
                        <Input
                          id="cat-imageUrl"
                          value={newCategory.imageUrl}
                          onChange={(e) =>
                            setNewCategory({
                              ...newCategory,
                              imageUrl: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="cat-sortOrder">ترتيب العرض</Label>
                          <Input
                            id="cat-sortOrder"
                            type="number"
                            value={newCategory.sortOrder}
                            onChange={(e) =>
                              setNewCategory({
                                ...newCategory,
                                sortOrder: Number(e.target.value),
                              })
                            }
                          />
                        </div>
                        <div className="flex items-center space-x-2 space-x-reverse pt-6">
                          <Switch
                            id="cat-isActive"
                            checked={newCategory.isActive}
                            onCheckedChange={(checked) =>
                              setNewCategory({
                                ...newCategory,
                                isActive: checked,
                              })
                            }
                          />
                          <Label htmlFor="cat-isActive">نشط</Label>
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        variant="outline"
                        onClick={() => setIsAddCategoryOpen(false)}
                      >
                        إلغاء
                      </Button>
                      <Button onClick={handleAddCategory}>إضافة الفئة</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>الصورة</TableHead>
                    <TableHead>الاسم</TableHead>
                    <TableHead>الترتيب</TableHead>
                    <TableHead>الحالة</TableHead>
                    <TableHead>الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {categories.map((category) => (
                    <TableRow key={category.id}>
                      <TableCell>
                        <img
                          src={category.imageUrl || "/placeholder.svg"}
                          alt={category.nameAr}
                          className="w-12 h-12 object-cover rounded"
                        />
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{category.nameAr}</div>
                          <div className="text-sm text-muted-foreground">
                            {category.nameEn}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{category.sortOrder}</TableCell>
                      <TableCell>
                        <Badge
                          variant={category.isActive ? "default" : "secondary"}
                        >
                          {category.isActive ? "نشط" : "غير نشط"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              setCategories(
                                categories.filter((c) => c.id !== category.id)
                              )
                            }
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Occasions Tab */}
        <TabsContent value="occasions" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>المناسبات</CardTitle>
                  <CardDescription>إدارة مناسبات المنتجات</CardDescription>
                </div>
                <Dialog
                  open={isAddOccasionOpen}
                  onOpenChange={setIsAddOccasionOpen}
                >
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      إضافة مناسبة
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>إضافة مناسبة جديدة</DialogTitle>
                      <DialogDescription>
                        أضف مناسبة جديدة للمنتجات
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="occ-nameAr">الاسم بالعربية *</Label>
                          <Input
                            id="occ-nameAr"
                            value={newOccasion.nameAr}
                            onChange={(e) =>
                              setNewOccasion({
                                ...newOccasion,
                                nameAr: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="occ-nameEn">
                            الاسم بالإنجليزية *
                          </Label>
                          <Input
                            id="occ-nameEn"
                            value={newOccasion.nameEn}
                            onChange={(e) =>
                              setNewOccasion({
                                ...newOccasion,
                                nameEn: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="occ-imageUrl">رابط الصورة</Label>
                        <Input
                          id="occ-imageUrl"
                          value={newOccasion.imageUrl}
                          onChange={(e) =>
                            setNewOccasion({
                              ...newOccasion,
                              imageUrl: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="occ-sortOrder">ترتيب العرض</Label>
                          <Input
                            id="occ-sortOrder"
                            type="number"
                            value={newOccasion.sortOrder}
                            onChange={(e) =>
                              setNewOccasion({
                                ...newOccasion,
                                sortOrder: Number(e.target.value),
                              })
                            }
                          />
                        </div>
                        <div className="flex items-center space-x-2 space-x-reverse pt-6">
                          <Switch
                            id="occ-isActive"
                            checked={newOccasion.isActive}
                            onCheckedChange={(checked) =>
                              setNewOccasion({
                                ...newOccasion,
                                isActive: checked,
                              })
                            }
                          />
                          <Label htmlFor="occ-isActive">نشط</Label>
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        variant="outline"
                        onClick={() => setIsAddOccasionOpen(false)}
                      >
                        إلغاء
                      </Button>
                      <Button onClick={handleAddOccasion}>
                        إضافة المناسبة
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>الصورة</TableHead>
                    <TableHead>الاسم</TableHead>
                    <TableHead>الترتيب</TableHead>
                    <TableHead>الحالة</TableHead>
                    <TableHead>الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {occasions.map((occasion) => (
                    <TableRow key={occasion.id}>
                      <TableCell>
                        <img
                          src={occasion.imageUrl || "/placeholder.svg"}
                          alt={occasion.nameAr}
                          className="w-12 h-12 object-cover rounded"
                        />
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{occasion.nameAr}</div>
                          <div className="text-sm text-muted-foreground">
                            {occasion.nameEn}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{occasion.sortOrder}</TableCell>
                      <TableCell>
                        <Badge
                          variant={occasion.isActive ? "default" : "secondary"}
                        >
                          {occasion.isActive ? "نشط" : "غير نشط"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              setOccasions(
                                occasions.filter((o) => o.id !== occasion.id)
                              )
                            }
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
