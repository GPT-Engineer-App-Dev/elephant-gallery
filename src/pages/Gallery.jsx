import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, title: "Elephant 1", description: "This is a detailed description of Elephant 1." },
    { id: 2, title: "Elephant 2", description: "This is a detailed description of Elephant 2." },
    { id: 3, title: "Elephant 3", description: "This is a detailed description of Elephant 3." },
    { id: 4, title: "Elephant 4", description: "This is a detailed description of Elephant 4." },
    { id: 5, title: "Elephant 5", description: "This is a detailed description of Elephant 5." },
    { id: 6, title: "Elephant 6", description: "This is a detailed description of Elephant 6." },
  ];

  return (
    <div className="space-y-6">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Gallery</h1>
      </header>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <Dialog key={image.id} onOpenChange={(open) => open ? setSelectedImage(image) : setSelectedImage(null)}>
              <DialogTrigger asChild>
                <Card>
                  <CardHeader>
                    <AspectRatio ratio={16 / 9}>
                      <img src="/placeholder.svg" alt={image.title} className="object-cover w-full h-full" />
                    </AspectRatio>
                    <CardTitle>{image.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{image.description}</CardDescription>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent>
                {selectedImage && (
                  <div>
                    <AspectRatio ratio={16 / 9}>
                      <img src="/placeholder.svg" alt={selectedImage.title} className="object-cover w-full h-full" />
                    </AspectRatio>
                    <h2 className="text-2xl font-bold mt-4">{selectedImage.title}</h2>
                    <p className="mt-2">{selectedImage.description}</p>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;