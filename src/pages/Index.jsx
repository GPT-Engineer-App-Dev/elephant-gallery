import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Index = () => {
  return (
    <div className="space-y-6">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Elephant Gallery</h1>
        <p className="text-lg mt-2">Welcome to the Elephant Gallery. Explore the majestic world of elephants through our curated collection of images.</p>
      </header>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Gallery Preview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item}>
              <CardHeader>
                <AspectRatio ratio={16 / 9}>
                  <img src="/placeholder.svg" alt={`Elephant ${item}`} className="object-cover w-full h-full" />
                </AspectRatio>
                <CardTitle>Elephant {item}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>This is a brief description of Elephant {item}.</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;