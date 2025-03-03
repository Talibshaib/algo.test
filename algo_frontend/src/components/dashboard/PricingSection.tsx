"use client"
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Coins } from "lucide-react";

interface PricingTier {
  name: string;
  coins: number;
  price: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

interface PricingSectionProps {
  tiers?: PricingTier[];
}

export default function PricingSection({
  tiers = [
    {
      name: "Basic",
      coins: 1000,
      price: "₹999",
      features: [
        "Access to basic trading features",
        "Standard execution speed",
        "Email support",
        "Basic market analysis",
      ],
      buttonText: "Buy Now",
    },
    {
      name: "Pro",
      coins: 2500,
      price: "₹2,249",
      features: [
        "All Basic features",
        "Priority execution speed",
        "Priority support",
        "Advanced market analysis",
        "Custom indicators",
      ],
      buttonText: "Buy Now",
      popular: true,
    },
    {
      name: "Premium",
      coins: 5000,
      price: "₹4,499",
      features: [
        "All Pro features",
        "Ultra-fast execution",
        "24/7 dedicated support",
        "Premium indicators",
        "Strategy automation",
      ],
      buttonText: "Buy Now",
    },
  ],
}: PricingSectionProps) {
  return (
    <div className="w-full py-12 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Z Coins Pricing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Purchase Z coins to access premium features and enhance your trading
            experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`flex flex-col h-full ${tier.popular ? "border-primary shadow-lg" : ""}`}
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {tier.name}
                  {tier.popular && (
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      Best Value
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <Coins className="h-6 w-6 text-primary" />
                  <span className="text-4xl font-bold">{tier.coins}</span>
                  <span className="text-muted-foreground ml-1">Z Coins</span>
                </div>
                <div className="mb-6">
                  <span className="text-2xl font-bold">{tier.price}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={tier.popular ? "default" : "outline"}
                >
                  {tier.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
