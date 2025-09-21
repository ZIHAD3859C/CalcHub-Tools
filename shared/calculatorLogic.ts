// Calculator logic registry - pure functions for each calculator
export type CalculatorFunction = (values: Record<string, string>) => string | number;

export const calculatorLogic: Record<string, CalculatorFunction> = {
  "age-calculator": (values: Record<string, string>) => {
    const birthDate = new Date(values.birthDate);
    const currentDate = values.currentDate ? new Date(values.currentDate) : new Date();
    
    if (isNaN(birthDate.getTime())) return "Invalid birth date";
    if (isNaN(currentDate.getTime())) return "Invalid current date";
    if (birthDate > currentDate) return "Birth date cannot be in the future";
    
    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    return `${years} years, ${months} months, ${days} days`;
  },

  "bmi-calculator": (values: Record<string, string>) => {
    const height = parseFloat(values.height);
    const weight = parseFloat(values.weight);
    
    if (!height || !weight || height <= 0 || weight <= 0) return "Invalid input values";
    if (height < 50 || height > 300) return "Height must be between 50-300 cm";
    if (weight < 20 || weight > 500) return "Weight must be between 20-500 kg";
    
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    
    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";
    
    return `${bmi.toFixed(1)} (${category})`;
  },

  "loan-calculator": (values: Record<string, string>) => {
    const principal = parseFloat(values.loanAmount);
    const annualRate = parseFloat(values.interestRate);
    const years = parseFloat(values.loanTerm);
    
    if (!principal || !annualRate || !years || principal <= 0 || annualRate <= 0 || years <= 0) {
      return "Invalid input values";
    }
    if (principal < 1000) return "Loan amount must be at least $1,000";
    if (annualRate > 50) return "Interest rate seems too high (>50%)";
    if (years > 50) return "Loan term too long (>50 years)";
    
    const monthlyRate = annualRate / (12 * 100);
    const numberOfPayments = years * 12;
    
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    const totalPayment = emi * numberOfPayments;
    const totalInterest = totalPayment - principal;
    
    return `$${emi.toFixed(2)} (Total Interest: $${totalInterest.toFixed(0)})`;
  },

  "percentage-calculator": (values: Record<string, string>) => {
    const calculationType = values.calculationType;
    const value1 = parseFloat(values.value1);
    const value2 = parseFloat(values.value2);
    
    if (isNaN(value1) || isNaN(value2)) return "Invalid input values";
    
    switch (calculationType) {
      case "what-percent":
        if (value1 === 0) return "Cannot divide by zero";
        return `${((value2 / value1) * 100).toFixed(2)}%`;
      
      case "percent-of":
        return `${((value1 / 100) * value2).toFixed(2)}`;
      
      case "percent-change":
        if (value1 === 0) return "Cannot calculate change from zero";
        const change = ((value2 - value1) / value1) * 100;
        return `${change >= 0 ? '+' : ''}${change.toFixed(2)}%`;
      
      case "reverse-percent":
        if (value2 === 0) return "Percentage cannot be zero";
        return `${(value1 / (value2 / 100)).toFixed(2)}`;
      
      default:
        return "Please select a calculation type";
    }
  }
};

export function getCalculatorFunction(calculatorId: string): CalculatorFunction | null {
  return calculatorLogic[calculatorId] || null;
}