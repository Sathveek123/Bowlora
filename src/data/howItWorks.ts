export interface ProcessStep {
  id: string;
  order: number;
  stepNum: string;
  title: string;
  message: string;
  iconName: 'ClipboardList' | 'ChefHat' | 'Bike' | 'Utensils';
}

export const HOW_IT_WORKS_STEPS: ProcessStep[] = [
  {
    id: 'step-01',
    order: 1,
    stepNum: '01',
    title: 'Choose Your Meals',
    message: 'Select the meals or plan that suits you.',
    iconName: 'ClipboardList',
  },
  {
    id: 'step-02',
    order: 2,
    stepNum: '02',
    title: 'We Prepare',
    message: 'Fresh meals are prepared by the Bowlora kitchen.',
    iconName: 'ChefHat',
  },
  {
    id: 'step-03',
    order: 3,
    stepNum: '03',
    title: 'We Deliver',
    message: 'Your meals arrive fresh and ready to eat.',
    iconName: 'Bike',
  },
  {
    id: 'step-04',
    order: 4,
    stepNum: '04',
    title: 'Eat Better',
    message: 'Enjoy healthy food without worrying about cooking or dishes.',
    iconName: 'Utensils',
  },
];
