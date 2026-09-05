export interface PartnershipsCMSData {
  eyebrow: string;
  headline: string;
  subheadline: string;
  benefits: Array<{
    id: string;
    title: string;
    description: string;
    iconName: string;
  }>;
  processSteps: Array<{
    stepNumber: string;
    title: string;
    description: string;
  }>;
  memberRanges: string[];
}

export const partnershipsData: PartnershipsCMSData = {
  eyebrow: "PARTNERSHIPS",
  headline: "Healthy eating made easier for your members.",
  subheadline:
    "Bring fresh, macro-counted meals directly into your gym, studio, or fitness community — a simple partnership that adds real value for your members.",
  benefits: [
    {
      id: "ben1",
      title: "Members Eat Better, Automatically",
      description:
        "No extra effort from your team — members simply get access to fresh, goal-aligned meals delivered right to your facility.",
      iconName: "Users",
    },
    {
      id: "ben2",
      title: "Built for Fitness Goals",
      description:
        "Every meal is macro-counted, so your members' nutrition actually matches their training intensity and fitness targets.",
      iconName: "Dumbbell",
    },
    {
      id: "ben3",
      title: "Simple, Flexible Terms",
      description:
        "No complicated contracts — a straightforward partnership that works for gyms, yoga studios, and fitness clubs of any size.",
      iconName: "ShieldCheck",
    },
  ],
  processSteps: [
    {
      stepNumber: "01",
      title: "Reach Out",
      description: "Fill out the enquiry form below with your gym details.",
    },
    {
      stepNumber: "02",
      title: "We Set Up Your Plan",
      description: "We customize delivery slots and exclusive member discounts.",
    },
    {
      stepNumber: "03",
      title: "Members Start Ordering",
      description: "Fresh meal delivery begins right to your gym lobby or doorstep.",
    },
  ],
  memberRanges: ["<50", "50-150", "150+"],
};
