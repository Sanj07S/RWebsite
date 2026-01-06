import React from 'react';

export interface NavItem {
  label: string;
  id: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  cta: string;
  icon: React.ElementType;
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}