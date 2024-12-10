'use client'

import { Heart } from 'lucide-react'
import SvgLogo from "./image/Logo.svg"
import HeroImage from "./image/Image1.svg"
import Image2 from "./image/image2.svg"
import Image5 from "./image/Image5.svg"
import Image6 from "./image/Image6.svg"
import Image7 from "./image/Image7.svg"
import Image8 from "./image/Image8.svg"
import Image4 from "./image/Image4.svg"
import { Search, ShoppingCart, ChevronDown, Plus, Minus } from 'lucide-react'
import { Button, Card, CardContent, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { ArrowRight } from 'lucide-react'
import { Twitter, Instagram, Linkedin } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
interface Product {
  id: number
  title: string
  price: number
  image: string
}

const similarProducts: Product[] = [
  { id: 1, title: "Table ronde", price: 0, image: "/placeholder.svg" },
  { id: 2, title: "Table ronde", price: 0, image: "/placeholder.svg" },
  { id: 3, title: "Table ronde", price: 0, image: "/placeholder.svg" },
  { id: 4, title: "Table ronde", price: 0, image: "/placeholder.svg" },
  { id: 5, title: "Table ronde", price: 0, image: "/placeholder.svg" },
]

const recommendedProducts: Product[] = [
  { id: 6, title: "Table ronde", price: 0, image: "/placeholder.svg" },
  { id: 7, title: "Table ronde", price: 0, image: "/placeholder.svg" },
  { id: 8, title: "Table ronde", price: 0, image: "/placeholder.svg" },
]

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group relative border-none shadow-none">
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Heart className="h-5 w-5" />
      </Button>
      <CardContent className="p-0 space-y-3">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
          <Image2
            
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="space-y-1 text-sm">
          <h3 className="font-medium leading-none">{product.title}</h3>
          <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet</p>
          <p className="font-medium">{product.price}€</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ProductRecommendations() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center space-x-2">
            <SvgLogo/>
          </Link>


            <div className="hidden md:flex relative flex-1 max-w-xl mx-4">
              <Input
                type="search"
                placeholder="Rechercher un produit"
                className="w-full pl-4 pr-10"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>

            <div className="flex items-center gap-4">
              <Link href="/inspirations" className="hidden md:block text-gray-600 hover:text-gray-900">
                Inspirations
              </Link>
              <div className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                <Heart className="h-5 w-5" />
                <span className="hidden md:inline">Mes favoris</span>
                <span className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">24</span>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600">
                <ShoppingCart className="h-5 w-5 md:mr-2" />
                <span className="hidden md:inline">Panier</span>
              </Button>
              <button className="flex items-center gap-1 text-gray-600">
                FR
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <nav className="border-b overflow-x-auto">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-8 py-4 text-sm">
            {[
              "ART DE LA TABLE",
              "MOBILIER",
              "NAPPAGE",
              "MATÉRIEL DE SALLE",
              "CUISINE",
              "BARBECUE",
              "TENTE",
              "CHAUFFAGE",
              "PODIUM - PISTE DE DANSE",
              "SON ET LUMIÈRE",
              "PACKS",
              "CONSOMMABLES",
            ].map((item) => (
              <li key={item} className="whitespace-nowrap">
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <span>/</span>
          <Link href="/art-de-la-table" className="hover:text-gray-900">
            Art de la table
          </Link>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">

          <div className="space-y-4">
            <div className="flex justify-center items-center overflow-hidden">
              <HeroImage
                src="/placeholder.svg"
                alt="Raclette Device"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <h1 className="text-2xl font-medium">Cheese - appareil à raclette 1/2 roue</h1>
              <Button variant="ghost" size="icon">
                <Heart className="h-6 w-6" />
              </Button>
            </div>

            <div className="space-y-4">
              <div className="text-3xl font-medium">39,50€ <span className="text-sm text-gray-500">/pièce</span></div>
              
              <div className="flex space-x-8">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-sm">⚡</span>
                  </div>
                  <span>20cm</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-sm">📏</span>
                  </div>
                  <span>50cm</span>
                </div>
              </div>

              <div className="space-y-2 text-gray-600">
                <p>Location appareil à raclette - Raclette traditionnelle 1/2 roue</p>
                <p>Réglable en hauteur</p>
                <p>Appareil à raclette professionnel</p>
                <p>Boîtier de chauffe horizontal réglable en hauteur</p>
                <p>220V</p>
                <p>900W</p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded-md">
                  <Button variant="ghost" size="icon">
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="w-16 text-center border-0"
                  />
                  <Button variant="ghost" size="icon">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button className="flex-1 bg-blue-500 hover:bg-blue-600">
                  AJOUTER AU PANIER
                </Button>
              </div>
            </div>

            <Accordion className="w-full">
              <AccordionItem>
                <AccordionTrigger>Description produit</AccordionTrigger>
                <AccordionContent>
                  Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évènement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les évènements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".
                </AccordionContent>
              </AccordionItem>
              <AccordionItem>
                <AccordionTrigger>LIVRAISONS</AccordionTrigger>
                <AccordionContent>
                  Information about shipping and delivery options.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem>
                <AccordionTrigger>QUESTIONS</AccordionTrigger>
                <AccordionContent>
                  Frequently asked questions about the product.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>


    <div className="space-y-12 py-8">
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-medium">Articles similaires</h2>
          <Link href="/collection" className="text-sm text-gray-500 hover:text-gray-900">
            VOIR TOUTE LA COLLECTION
          </Link>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {similarProducts.map((product) => (
              <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-medium">Ces produits pourraient vous intéresser</h2>
          <Link href="/collection" className="text-sm text-gray-500 hover:text-gray-900">
            VOIR TOUTE LA COLLECTION
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recommendedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>

    <div className="min-h-screen flex flex-col">
      <header className="text-center py-8 px-4 md:py-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          On s'occupe de <span className="text-cyan-400">tout</span>
        </h1>
        <p className="text-gray-500 mt-4">
          Office ipsum you must be muted, it meeting commitment busy pain.
        </p>
      </header>

      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 border-2 rounded-lg">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <Image4
                alt="Delivery Icon"
                width={64}
                height={64}
                className="w-full h-full"
              />
            </div>
            <h3 className="font-medium mb-2">Livraison & Reprise</h3>
            <p className="text-sm text-gray-500">Selon vos besoins</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <Image5
                alt="Cleaning Icon"
                className="w-full h-full"
              />
            </div>
            <h3 className="font-medium mb-2">Nettoyage</h3>
            <p className="text-sm text-gray-500">Selon vos besoins</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <Image6
                className="w-full h-full"
              />
            </div>
            <h3 className="font-medium mb-2">Commande Illimitée</h3>
            <p className="text-sm text-gray-500">Tout est possible</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <Image7
                src="/placeholder.svg"
                alt="Transport Icon"
                width={64}
                height={64}
                className="w-full h-full"
              />
            </div>
            <h3 className="font-medium mb-2">Transport & Enlèvement</h3>
            <p className="text-sm text-gray-500">On s'occupe de tout</p>
          </div>
        </div>
      </div>

    
      <div className="w-full max-w-6xl mx-auto px-4 my-16">
        <div className="grid md:grid-cols-2 gap-8 items-center border-2 rounded-lg overflow-hidden">
        <div className="relative h-full md:h-full">
  <Image8
    className="object-cover w-full h-full"
  />
</div>

          <div className="p-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
              S'inscrire & économiser <span className="text-cyan-400">10%</span>
            </h2>
            <p className="text-gray-500 mb-6">
              Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didn't. Yet busy any meeting shark light marginalised 4-blocker message. Productize corporate nail caught synergy highlights lunch. Company another pushback items dear or any.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="john@doe.com"
                className="flex-1"
              />
              <Button className="bg-cyan-400 hover:bg-cyan-500">
                S'INSCRIRE
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

     <footer className="w-full border-t border-gray-200 bg-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <div className="md:col-span-1">
            <SvgLogo/>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              INFOS PRATIQUES
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Livraisons & Reprises
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Mode d'emploi
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              LÉGAL
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  CGU
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  CGV
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              MON COMPTE
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Accéder à mon compte
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Ma liste d'envie
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Créer un compte
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Mot de passe oublié
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              NOUS SUIVRE
            </h3>
            <div className="mt-4 flex space-x-6">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>

    </div>

  )
}

