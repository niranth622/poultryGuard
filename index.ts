export type UserRole = 'owner' | 'vet' | 'worker' | 'auditor';

export interface Flock {
  id: string;
  name: string;
  breed: string;
  startDate: string;
  birdCount: number;
  currentCount: number;
  mortalityRate: number;
  fcr: number;
}

export interface BiosecurityLog {
  id: string;
  date: string;
  type: string;
  description: string;
  score: number;
  userId: string;
}

export interface MedicationLog {
  id: string;
  flockId: string;
  medicine: string;
  dosage: string;
  date: string;
  administrator: string;
  withdrawalPeriod: number;
}

// Add more as needed
