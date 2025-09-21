import Calculator from '../Calculator';

export default function CalculatorExample() {
  const handleBMICalculation = (values: Record<string, string>) => {
    const height = parseFloat(values.height) / 100; // Convert cm to m
    const weight = parseFloat(values.weight);
    
    if (!height || !weight) return 0;
    
    const bmi = weight / (height * height);
    let category = '';
    
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 25) category = 'Normal';
    else if (bmi < 30) category = 'Overweight';
    else category = 'Obese';
    
    return `${bmi.toFixed(1)} (${category})`;
  };

  return (
    <Calculator
      title="BMI Calculator"
      description="Calculate your Body Mass Index to assess your weight status"
      fields={[
        {
          id: 'height',
          label: 'Height',
          type: 'number',
          placeholder: '170',
          unit: 'cm'
        },
        {
          id: 'weight',
          label: 'Weight',
          type: 'number',
          placeholder: '70',
          unit: 'kg'
        }
      ]}
      onCalculate={handleBMICalculation}
      resultLabel="Your BMI"
    />
  );
}