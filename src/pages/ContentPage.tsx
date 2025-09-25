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
    <div className="space-y-6 rtl:text-right">
      <div className="flex items-center justify-end rtl:justify-start">
        <h1 className="text-3xl font-bold text-foreground rtl:text-right">
          إدارة المحتوى
        </h1>
      </div>

      <Tabs defaultValue="hero" className="space-y-4 rtl:text-right">
        <TabsList className="grid w-full grid-cols-3 rtl:text-center">
          <TabsTrigger value="hero" className="rtl:text-center">
            شرائح الهيرو
          </TabsTrigger>
          <TabsTrigger value="categories" className="rtl:text-center">
            الفئات
          </TabsTrigger>
          <TabsTrigger value="occasions" className="rtl:text-center">
            المناسبات
          </TabsTrigger>
        </TabsList>

        {/* Hero Slides Tab */}
        <TabsContent value="hero" className="space-y-4 rtl:text-right">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between rtl:flex-row-reverse">
                <div className="rtl:text-right">
                  <CardTitle className="rtl:text-right">شرائح الهيرو</CardTitle>
                  <CardDescription className="rtl:text-right">
                    إدارة شرائح الصفحة الرئيسية
                  </CardDescription>
                </div>
                <Dialog open={isAddSlideOpen} onOpenChange={setIsAddSlideOpen}>
                  <DialogTrigger asChild>
                    <Button className="rtl:flex-row-reverse">
                      <Plus className="w-4 h-4 rtl:ml-2 rtl:mr-0" />
                      إضافة شريحة
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl rtl:text-right">
                    <DialogHeader className="rtl:text-right">
                      <DialogTitle className="rtl:text-right">
                        إضافة شريحة جديدة
                      </DialogTitle>
                      <DialogDescription className="rtl:text-right">
                        أضف شريحة جديدة للصفحة الرئيسية
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4 rtl:text-right">
                      <div className="grid grid-cols-2 gap-4 rtl:grid-cols-2">
                        <div className="space-y-2 rtl:text-right">
                          <Label
                            htmlFor="slide-titleAr"
                            className="rtl:text-right"
                          >
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
                            className="rtl:text-right"
                          />
                        </div>
                        <div className="space-y-2 rtl:text-right">
                          <Label
                            htmlFor="slide-titleEn"
                            className="rtl:text-right"
                          >
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
                            className="rtl:text-right"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 rtl:grid-cols-2">
                        <div className="space-y-2 rtl:text-right">
                          <Label
                            htmlFor="slide-subtitleAr"
                            className="rtl:text-right"
                          >
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
                            className="rtl:text-right"
                          />
                        </div>
                        <div className="space-y-2 rtl:text-right">
                          <Label
                            htmlFor="slide-subtitleEn"
                            className="rtl:text-right"
                          >
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
                            className="rtl:text-right"
                          />
                        </div>
                      </div>
                      <div className="space-y-2 rtl:text-right">
                        <Label
                          htmlFor="slide-imageUrl"
                          className="rtl:text-right"
                        >
                          رابط الصورة
                        </Label>
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
                          className="rtl:text-right"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4 rtl:grid-cols-2">
                        <div className="space-y-2 rtl:text-right">
                          <Label
                            htmlFor="slide-buttonAr"
                            className="rtl:text-right"
                          >
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
                            className="rtl:text-right"
                          />
                        </div>
                        <div className="space-y-2 rtl:text-right">
                          <Label
                            htmlFor="slide-buttonEn"
                            className="rtl:text-right"
                          >
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
                            className="rtl:text-right"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 rtl:grid-cols-2">
                        <div className="space-y-2 rtl:text-right">
                          <Label
                            htmlFor="slide-link"
                            className="rtl:text-right"
                          >
                            الرابط
                          </Label>
                          <Input
                            id="slide-link"
                            value={newSlide.link}
                            onChange={(e) =>
                              setNewSlide({ ...newSlide, link: e.target.value })
                            }
                            placeholder="/products"
                            className="rtl:text-right"
                          />
                        </div>
                        <div className="space-y-2 rtl:text-right">
                          <Label
                            htmlFor="slide-priority"
                            className="rtl:text-right"
                          >
                            الأولوية
                          </Label>
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
                            className="rtl:text-right"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-end rtl:justify-start gap-2">
                        <Label
                          htmlFor="slide-isActive"
                          className="rtl:text-right order-2 rtl:order-1"
                        >
                          نشط
                        </Label>
                        <Switch
                          id="slide-isActive"
                          checked={newSlide.isActive}
                          onCheckedChange={(checked) =>
                            setNewSlide({ ...newSlide, isActive: checked })
                          }
                          className="order-1 rtl:order-2"
                        />
                      </div>
                    </div>
                    <DialogFooter className="flex justify-start rtl:justify-end">
                      <Button
                        variant="outline"
                        onClick={() => setIsAddSlideOpen(false)}
                        className="rtl:text-right"
                      >
                        إلغاء
                      </Button>
                      <Button
                        onClick={handleAddSlide}
                        className="rtl:text-right"
                      >
                        إضافة الشريحة
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <Table className="rtl:table">
                <TableHeader>
                  <TableRow>
                    <TableHead className="rtl:text-right">الصورة</TableHead>
                    <TableHead className="rtl:text-right">العنوان</TableHead>
                    <TableHead className="rtl:text-right">
                      العنوان الفرعي
                    </TableHead>
                    <TableHead className="rtl:text-right">الأولوية</TableHead>
                    <TableHead className="rtl:text-right">الحالة</TableHead>
                    <TableHead className="rtl:text-right">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {heroSlides.map((slide) => (
                    <TableRow key={slide.id}>
                      <TableCell className="rtl:text-center">
                        <img
                          src={slide.imageUrl || "/placeholder.svg"}
                          alt={slide.titleAr}
                          className="w-16 h-10 object-cover rounded mx-auto"
                        />
                      </TableCell>
                      <TableCell className="rtl:text-right">
                        <div>
                          <div className="font-medium rtl:text-right">
                            {slide.titleAr}
                          </div>
                          <div className="text-sm text-muted-foreground rtl:text-right">
                            {slide.titleEn}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="rtl:text-right">
                        <div>
                          <div className="text-sm rtl:text-right">
                            {slide.subtitleAr}
                          </div>
                          <div className="text-xs text-muted-foreground rtl:text-right">
                            {slide.subtitleEn}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="rtl:text-center">
                        {slide.priority}
                      </TableCell>
                      <TableCell className="rtl:text-center">
                        <Badge
                          variant={slide.isActive ? "default" : "secondary"}
                          className="rtl:text-center"
                        >
                          {slide.isActive ? "نشط" : "غير نشط"}
                        </Badge>
                      </TableCell>
                      <TableCell className="rtl:text-center">
                        <div className="flex items-center gap-2 rtl:flex-row-reverse rtl:justify-center">
                          <Button
                            variant="outline"
                            size="sm"
                            className="rtl:flex-row-reverse"
                          >
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
                            className="rtl:flex-row-reverse"
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
        <TabsContent value="categories" className="space-y-4 rtl:text-right">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between rtl:flex-row-reverse">
                <div className="rtl:text-right">
                  <CardTitle className="rtl:text-right">الفئات</CardTitle>
                  <CardDescription className="rtl:text-right">
                    إدارة فئات المنتجات
                  </CardDescription>
                </div>
                <Dialog
                  open={isAddCategoryOpen}
                  onOpenChange={setIsAddCategoryOpen}
                >
                  <DialogTrigger asChild>
                    <Button className="rtl:flex-row-reverse">
                      <Plus className="w-4 h-4 rtl:ml-2 rtl:mr-0" />
                      إضافة فئة
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="rtl:text-right">
                    <DialogHeader className="rtl:text-right">
                      <DialogTitle className="rtl:text-right">
                        إضافة فئة جديدة
                      </DialogTitle>
                      <DialogDescription className="rtl:text-right">
                        أضف فئة جديدة للمنتجات
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4 rtl:text-right">
                      <div className="grid grid-cols-2 gap-4 rtl:grid-cols-2">
                        <div className="space-y-2 rtl:text-right">
                          <Label
                            htmlFor="cat-nameAr"
                            className="rtl:text-right"
                          >
                            الاسم بالعربية *
                          </Label>
                          <Input
                            id="cat-nameAr"
                            value={newCategory.nameAr}
                            onChange={(e) =>
                              setNewCategory({
                                ...newCategory,
                                nameAr: e.target.value,
                              })
                            }
                            className="rtl:text-right"
                          />
                        </div>
                        <div className="space-y-2 rtl:text-right">
                          <Label
                            htmlFor="cat-nameEn"
                            className="rtl:text-right"
                          >
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
                            className="rtl:text-right"
                          />
                        </div>
                      </div>
                      <div className="space-y-2 rtl:text-right">
                        <Label
                          htmlFor="cat-imageUrl"
                          className="rtl:text-right"
                        >
                          رابط الصورة
                        </Label>
                        <Input
                          id="cat-imageUrl"
                          value={newCategory.imageUrl}
                          onChange={(e) =>
                            setNewCategory({
                              ...newCategory,
                              imageUrl: e.target.value,
                            })
                          }
                          className="rtl:text-right"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4 rtl:grid-cols-2">
                        <div className="space-y-2 rtl:text-right">
                          <Label
                            htmlFor="cat-sortOrder"
                            className="rtl:text-right"
                          >
                            ترتيب العرض
                          </Label>
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
                            className="rtl:text-right"
                          />
                        </div>
                        <div className="flex items-center justify-end rtl:justify-start gap-2 pt-6">
                          <Label
                            htmlFor="cat-isActive"
                            className="rtl:text-right order-2 rtl:order-1"
                          >
                            نشط
                          </Label>
                          <Switch
                            id="cat-isActive"
                            checked={newCategory.isActive}
                            onCheckedChange={(checked) =>
                              setNewCategory({
                                ...newCategory,
                                isActive: checked,
                              })
                            }
                            className="order-1 rtl:order-2"
                          />
                        </div>
                      </div>
                    </div>
                    <DialogFooter className="flex justify-start rtl:justify-end">
                      <Button
                        variant="outline"
                        onClick={() => setIsAddCategoryOpen(false)}
                        className="rtl:text-right"
                      >
                        إلغاء
                      </Button>
                      <Button
                        onClick={handleAddCategory}
                        className="rtl:text-right"
                      >
                        إضافة الفئة
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <Table className="rtl:table">
                <TableHeader>
                  <TableRow>
                    <TableHead className="rtl:text-right">الصورة</TableHead>
                    <TableHead className="rtl:text-right">الاسم</TableHead>
                    <TableHead className="rtl:text-right">الترتيب</TableHead>
                    <TableHead className="rtl:text-right">الحالة</TableHead>
                    <TableHead className="rtl:text-right">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {categories.map((category) => (
                    <TableRow key={category.id}>
                      <TableCell className="rtl:text-center">
                        <img
                          src={category.imageUrl || "/placeholder.svg"}
                          alt={category.nameAr}
                          className="w-12 h-12 object-cover rounded mx-auto"
                        />
                      </TableCell>
                      <TableCell className="rtl:text-right">
                        <div>
                          <div className="font-medium rtl:text-right">
                            {category.nameAr}
                          </div>
                          <div className="text-sm text-muted-foreground rtl:text-right">
                            {category.nameEn}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="rtl:text-center">
                        {category.sortOrder}
                      </TableCell>
                      <TableCell className="rtl:text-center">
                        <Badge
                          variant={category.isActive ? "default" : "secondary"}
                          className="rtl:text-center"
                        >
                          {category.isActive ? "نشط" : "غير نشط"}
                        </Badge>
                      </TableCell>
                      <TableCell className="rtl:text-center">
                        <div className="flex items-center gap-2 rtl:flex-row-reverse rtl:justify-center">
                          <Button
                            variant="outline"
                            size="sm"
                            className="rtl:flex-row-reverse"
                          >
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
                            className="rtl:flex-row-reverse"
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
        <TabsContent value="occasions" className="space-y-4 rtl:text-right">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between rtl:flex-row-reverse">
                <div className="rtl:text-right">
                  <CardTitle className="rtl:text-right">المناسبات</CardTitle>
                  <CardDescription className="rtl:text-right">
                    إدارة مناسبات المنتجات
                  </CardDescription>
                </div>
                <Dialog
                  open={isAddOccasionOpen}
                  onOpenChange={setIsAddOccasionOpen}
                >
                  <DialogTrigger asChild>
                    <Button className="rtl:flex-row-reverse">
                      <Plus className="w-4 h-4 rtl:ml-2 rtl:mr-0" />
                      إضافة مناسبة
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="rtl:text-right">
                    <DialogHeader className="rtl:text-right">
                      <DialogTitle className="rtl:text-right">
                        إضافة مناسبة جديدة
                      </DialogTitle>
                      <DialogDescription className="rtl:text-right">
                        أضف مناسبة جديدة للمنتجات
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4 rtl:text-right">
                      <div className="grid grid-cols-2 gap-4 rtl:grid-cols-2">
                        <div className="space-y-2 rtl:text-right">
                          <Label
                            htmlFor="occ-nameAr"
                            className="rtl:text-right"
                          >
                            الاسم بالعربية *
                          </Label>
                          <Input
                            id="occ-nameAr"
                            value={newOccasion.nameAr}
                            onChange={(e) =>
                              setNewOccasion({
                                ...newOccasion,
                                nameAr: e.target.value,
                              })
                            }
                            className="rtl:text-right"
                          />
                        </div>
                        <div className="space-y-2 rtl:text-right">
                          <Label
                            htmlFor="occ-nameEn"
                            className="rtl:text-right"
                          >
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
                            className="rtl:text-right"
                          />
                        </div>
                      </div>
                      <div className="space-y-2 rtl:text-right">
                        <Label
                          htmlFor="occ-imageUrl"
                          className="rtl:text-right"
                        >
                          رابط الصورة
                        </Label>
                        <Input
                          id="occ-imageUrl"
                          value={newOccasion.imageUrl}
                          onChange={(e) =>
                            setNewOccasion({
                              ...newOccasion,
                              imageUrl: e.target.value,
                            })
                          }
                          className="rtl:text-right"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4 rtl:grid-cols-2">
                        <div className="space-y-2 rtl:text-right">
                          <Label
                            htmlFor="occ-sortOrder"
                            className="rtl:text-right"
                          >
                            ترتيب العرض
                          </Label>
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
                            className="rtl:text-right"
                          />
                        </div>
                        <div className="flex items-center justify-end rtl:justify-start gap-2 pt-6">
                          <Label
                            htmlFor="occ-isActive"
                            className="rtl:text-right order-2 rtl:order-1"
                          >
                            نشط
                          </Label>
                          <Switch
                            id="occ-isActive"
                            checked={newOccasion.isActive}
                            onCheckedChange={(checked) =>
                              setNewOccasion({
                                ...newOccasion,
                                isActive: checked,
                              })
                            }
                            className="order-1 rtl:order-2"
                          />
                        </div>
                      </div>
                    </div>
                    <DialogFooter className="flex justify-start rtl:justify-end">
                      <Button
                        variant="outline"
                        onClick={() => setIsAddOccasionOpen(false)}
                        className="rtl:text-right"
                      >
                        إلغاء
                      </Button>
                      <Button
                        onClick={handleAddOccasion}
                        className="rtl:text-right"
                      >
                        إضافة المناسبة
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <Table className="rtl:table">
                <TableHeader>
                  <TableRow>
                    <TableHead className="rtl:text-right">الصورة</TableHead>
                    <TableHead className="rtl:text-right">الاسم</TableHead>
                    <TableHead className="rtl:text-right">الترتيب</TableHead>
                    <TableHead className="rtl:text-right">الحالة</TableHead>
                    <TableHead className="rtl:text-right">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {occasions.map((occasion) => (
                    <TableRow key={occasion.id}>
                      <TableCell className="rtl:text-center">
                        <img
                          src={occasion.imageUrl || "/placeholder.svg"}
                          alt={occasion.nameAr}
                          className="w-12 h-12 object-cover rounded mx-auto"
                        />
                      </TableCell>
                      <TableCell className="rtl:text-right">
                        <div>
                          <div className="font-medium rtl:text-right">
                            {occasion.nameAr}
                          </div>
                          <div className="text-sm text-muted-foreground rtl:text-right">
                            {occasion.nameEn}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="rtl:text-center">
                        {occasion.sortOrder}
                      </TableCell>
                      <TableCell className="rtl:text-center">
                        <Badge
                          variant={occasion.isActive ? "default" : "secondary"}
                          className="rtl:text-center"
                        >
                          {occasion.isActive ? "نشط" : "غير نشط"}
                        </Badge>
                      </TableCell>
                      <TableCell className="rtl:text-center">
                        <div className="flex items-center gap-2 rtl:flex-row-reverse rtl:justify-center">
                          <Button
                            variant="outline"
                            size="sm"
                            className="rtl:flex-row-reverse"
                          >
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
                            className="rtl:flex-row-reverse"
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
