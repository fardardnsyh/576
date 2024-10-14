'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay';
import messages from '@/messages.json';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function Home() {
  return (
    <>
      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 md:px-12 lg:px-24 py-12 bg-[#2C3639] text-white">
        <section className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Welcome to the Realm of Anonymous Thoughts
          </h1>
          <p className="mt-3 md:mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Whisper Link - Share your feelings without revealing your identity.
          </p>
        </section>

        {/* Carousel for Messages */}
        <Carousel
          plugins={[Autoplay({ delay: 2000 })]}
          className="w-full max-w-lg md:max-w-xl lg:max-w-2xl"
        >
          <CarouselContent>
            {messages.map((message, index) => (
              <CarouselItem key={index} className="p-4">
                <Card className="bg-[#DCD7C9] hover:shadow-2xl transition-shadow duration-300 rounded-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-[#2C3639]">{message.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
                    <Mail className="flex-shrink-0 text-[#2C3639] w-10 h-10" />
                    <div>
                      <p className="text-gray-800">{message.content}</p>
                      <p className="text-xs text-gray-600">{message.received}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Optional navigation buttons */}
          <div className="flex justify-between mt-4">
            <CarouselPrevious className="bg-gray-800 text-white rounded-full p-3 hover:bg-gray-700 transition duration-200">
              Back
            </CarouselPrevious>
            <CarouselNext className="bg-gray-800 text-white rounded-full p-3 hover:bg-gray-700 transition duration-200">
              Forward
            </CarouselNext>
          </div>
        </Carousel>
      </main>

      {/* Footer */}
      <footer className="text-center p-4 md:p-6 bg-[#2C3639] text-white">
        <p className="text-sm">© 2024 Whisper Link. Embrace your voice anonymously.</p>
      </footer>
    </>
  );
}
