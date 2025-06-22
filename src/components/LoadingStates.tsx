
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const SaveTheDateSkeleton = () => (
  <div className="min-h-screen flex items-center justify-center p-4 md:p-6 pt-20 md:pt-24">
    <div className="max-w-6xl mx-auto w-full">
      {/* Guest Greeting Skeleton */}
      <div className="text-center mb-6 md:mb-8">
        <div className="bg-white/80 rounded-3xl p-6 md:p-8 max-w-lg mx-auto">
          <Skeleton className="h-8 w-48 mx-auto mb-4" />
          <Skeleton className="h-4 w-64 mx-auto" />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left side - Text content skeleton */}
        <div className="text-center lg:text-left space-y-6 md:space-y-8 order-2 lg:order-1">
          <div className="bg-white/80 rounded-3xl p-6 md:p-8">
            <Skeleton className="h-16 w-full mb-4" />
          </div>
          
          <div className="bg-white/80 rounded-3xl p-6 md:p-8">
            <Skeleton className="h-12 w-3/4 mb-2" />
            <Skeleton className="h-1 w-24" />
          </div>
          
          <div className="bg-white/80 rounded-3xl p-6 md:p-8">
            <Skeleton className="h-6 w-32 mb-3" />
            <Skeleton className="h-8 w-16 mb-2" />
            <Skeleton className="h-6 w-48 mb-4" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-56" />
            </div>
          </div>
          
          <div className="bg-white/80 rounded-3xl p-6 md:p-8">
            <Skeleton className="h-6 w-full mb-6" />
            <Skeleton className="h-12 w-48" />
          </div>
        </div>

        {/* Right side - Photo skeleton */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <Skeleton className="w-64 h-80 sm:w-72 sm:h-90 md:w-80 md:h-96 rounded-3xl" />
        </div>
      </div>
    </div>
  </div>
);

export const MainInvitationSkeleton = () => (
  <div className="min-h-screen p-4 space-y-8">
    {/* Header Skeleton */}
    <div className="min-h-screen flex items-center justify-center pt-24">
      <div className="max-w-5xl mx-auto w-full">
        <div className="bg-white/80 rounded-3xl p-6 md:p-12 lg:p-16">
          <div className="text-center space-y-6 md:space-y-8">
            <Skeleton className="h-16 w-96 mx-auto" />
            <Skeleton className="h-1 w-48 mx-auto" />
            <Skeleton className="h-12 w-64 mx-auto" />
          </div>
          
          <div className="p-6 md:p-12 lg:p-16 space-y-8 md:space-y-12">
            <div className="bg-white/80 rounded-3xl p-4 md:p-6 lg:p-8">
              <Skeleton className="h-10 w-80 mx-auto mb-6" />
              <div className="bg-white/70 rounded-2xl p-4 md:p-6">
                <Skeleton className="h-20 w-full" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white/80 rounded-3xl p-6 md:p-8">
                <Skeleton className="h-8 w-32 mx-auto mb-6" />
                <div className="space-y-4">
                  <Skeleton className="h-6 w-48 mx-auto" />
                  <Skeleton className="h-6 w-32 mx-auto" />
                  <Skeleton className="h-6 w-56 mx-auto" />
                </div>
              </div>
              
              <div className="bg-white/80 rounded-3xl p-6 md:p-8">
                <Skeleton className="h-8 w-32 mx-auto mb-6" />
                <div className="space-y-4">
                  <Skeleton className="h-6 w-40 mx-auto" />
                  <Skeleton className="h-6 w-48 mx-auto" />
                  <Skeleton className="h-6 w-36 mx-auto" />
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 rounded-3xl p-8 md:p-10">
              <Skeleton className="h-8 w-32 mx-auto mb-4" />
              <Skeleton className="h-6 w-96 mx-auto" />
            </div>
            
            <div className="bg-white/80 rounded-3xl p-10 md:p-12">
              <Skeleton className="h-8 w-64 mx-auto mb-6" />
              <Skeleton className="h-6 w-48 mx-auto mb-8" />
              <div className="flex justify-center space-x-4">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="w-8 h-8 rounded-full" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Additional sections skeletons */}
    <div className="px-4 space-y-8">
      <Skeleton className="h-64 w-full rounded-3xl" />
      <Skeleton className="h-96 w-full rounded-3xl" />
      <Skeleton className="h-80 w-full rounded-3xl" />
    </div>
  </div>
);

export const WishesSkeleton = () => (
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-8">
      <Skeleton className="h-12 w-96 mx-auto mb-4" />
      <Skeleton className="h-6 w-2/3 mx-auto" />
    </div>
    
    <div className="max-w-3xl mx-auto mb-12">
      <div className="bg-white/80 rounded-2xl p-6">
        <Skeleton className="h-32 w-full mb-6" />
        <div className="flex items-center space-x-4 mb-6">
          <Skeleton className="h-12 w-32" />
          <Skeleton className="h-16 w-16 rounded-lg" />
        </div>
        <Skeleton className="h-12 w-full" />
      </div>
    </div>
    
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center items-center mb-6 space-x-4">
        <Skeleton className="h-10 w-24" />
        <div className="flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="w-3 h-3 rounded-full" />
          ))}
        </div>
        <Skeleton className="h-10 w-20" />
      </div>
      
      <div className="flex justify-center">
        <Skeleton className="h-80 w-full max-w-2xl rounded-3xl" />
      </div>
    </div>
  </div>
);
