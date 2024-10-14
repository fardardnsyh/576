'use client';

import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

export default function VerifyAccount() {
  const router = useRouter();
  const { toast } = useToast();

  const onSubmit = async () => {
    try {
      // Perform the action that was previously verified
      // For example, directly update the user's account status or redirect
      toast({
        title: 'Account Verified',
        description: 'Your account has been successfully verified.',
      });

      router.replace('/sign-in');
    } catch (error) {
      toast({
        title: 'Verification Failed',
        description: 'An error occurred. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-[#2C3639] rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
            Account Setup Complete
          </h1>
          <p className="mb-4">Your account has been set up successfully!</p>
        </div>
        <Button onClick={onSubmit}>Continue to Sign In</Button>
      </div>
    </div>
  );
}
