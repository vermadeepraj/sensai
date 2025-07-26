import { getUserOnboardingStatus } from '@/actions/user'
import { industries } from '@/data/industries'
import OnboardingForm from './_components/onboarding-form'
import React from 'react'

const OnboardingPage = async () => {
  // Check if the user is already onboarded,
 const {isOnboarded} =  await getUserOnboardingStatus();
  return (
    <main>
      <OnboardingForm industries= {industries}/>
    </main>
  )
}

export default OnboardingPage

