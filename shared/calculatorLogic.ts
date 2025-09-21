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
  },

  "compound-interest-calculator": (values: Record<string, string>) => {
    const principal = parseFloat(values.principal);
    const rate = parseFloat(values.rate);
    const time = parseFloat(values.time);
    const frequency = parseFloat(values.frequency);
    
    if (!principal || !rate || !time || !frequency || 
        principal <= 0 || rate <= 0 || time <= 0 || frequency <= 0) {
      return "Invalid input values";
    }
    
    const r = rate / (100 * frequency);
    const n = frequency * time;
    const futureValue = principal * Math.pow(1 + r, n);
    const interest = futureValue - principal;
    
    return `$${futureValue.toFixed(2)} (Interest: $${interest.toFixed(2)})`;
  },

  "word-counter": (values: Record<string, string>) => {
    const text = values.text || "";
    
    if (!text.trim()) return "No text provided";
    
    // Count statistics
    const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, '').length;
    const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    
    // Estimate reading time (average 200 words per minute)
    const readingTime = Math.ceil(words / 200);
    
    return `Words: ${words}, Characters: ${characters} (${charactersNoSpaces} no spaces), Paragraphs: ${paragraphs}, Sentences: ${sentences}, Reading time: ${readingTime} min`;
  },

  "unit-converter": (values: Record<string, string>) => {
    const category = values.category;
    const fromUnit = values.fromUnit;
    const toUnit = values.toUnit;
    const inputValue = parseFloat(values.value);
    
    if (isNaN(inputValue) || !category || !fromUnit || !toUnit) {
      return "Invalid input values";
    }
    
    // Conversion factors to base unit (meters for length)
    const lengthConversions: Record<string, number> = {
      meter: 1,
      kilometer: 1000,
      centimeter: 0.01,
      millimeter: 0.001,
      inch: 0.0254,
      foot: 0.3048,
      yard: 0.9144,
      mile: 1609.34
    };
    
    if (category === "length") {
      if (!lengthConversions[fromUnit] || !lengthConversions[toUnit]) {
        return "Invalid unit selection";
      }
      
      const baseValue = inputValue * lengthConversions[fromUnit];
      const result = baseValue / lengthConversions[toUnit];
      
      return `${result.toFixed(6)} ${toUnit}`;
    }
    
    return "Unit conversion not implemented for this category";
  },

  "date-difference-calculator": (values: Record<string, string>) => {
    const startDate = new Date(values.startDate);
    const endDate = new Date(values.endDate);
    const includeEndDate = values.includeEndDate === "yes";
    
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      return "Invalid date format";
    }
    
    if (startDate > endDate) {
      return "Start date must be before end date";
    }
    
    const timeDiff = endDate.getTime() - startDate.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) + (includeEndDate ? 1 : 0);
    const weeksDiff = Math.floor(daysDiff / 7);
    const monthsDiff = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
                      (endDate.getMonth() - startDate.getMonth());
    const yearsDiff = Math.floor(monthsDiff / 12);
    
    return `${daysDiff} days (${weeksDiff} weeks, ${yearsDiff} years, ${monthsDiff % 12} months)`;
  },

  "discount-calculator": (values: Record<string, string>) => {
    const originalPrice = parseFloat(values.originalPrice);
    const discountType = values.discountType;
    const discountValue = parseFloat(values.discountValue);
    
    if (!originalPrice || !discountValue || originalPrice <= 0 || discountValue < 0) {
      return "Invalid input values";
    }
    
    let discountAmount = 0;
    let salePrice = 0;
    
    if (discountType === "percentage") {
      if (discountValue > 100) return "Discount percentage cannot exceed 100%";
      discountAmount = (originalPrice * discountValue) / 100;
      salePrice = originalPrice - discountAmount;
    } else if (discountType === "fixed") {
      if (discountValue > originalPrice) return "Fixed discount cannot exceed original price";
      discountAmount = discountValue;
      salePrice = originalPrice - discountAmount;
    } else {
      return "Invalid discount type";
    }
    
    const savingsPercent = ((discountAmount / originalPrice) * 100).toFixed(1);
    
    return `$${salePrice.toFixed(2)} (You save: $${discountAmount.toFixed(2)} - ${savingsPercent}%)`;
  },

  "sip-calculator": (values: Record<string, string>) => {
    const monthlyInvestment = parseFloat(values.monthlyInvestment);
    const annualReturn = parseFloat(values.annualReturn);
    const investmentPeriod = parseFloat(values.investmentPeriod);
    
    if (!monthlyInvestment || !annualReturn || !investmentPeriod || 
        monthlyInvestment <= 0 || annualReturn <= 0 || investmentPeriod <= 0) {
      return "Invalid input values";
    }
    
    const monthlyRate = annualReturn / (12 * 100);
    const numberOfMonths = investmentPeriod * 12;
    
    // SIP future value formula
    const futureValue = monthlyInvestment * 
      (((Math.pow(1 + monthlyRate, numberOfMonths) - 1) / monthlyRate) * (1 + monthlyRate));
    
    const totalInvestment = monthlyInvestment * numberOfMonths;
    const returns = futureValue - totalInvestment;
    
    return `$${futureValue.toFixed(2)} (Invested: $${totalInvestment.toFixed(0)}, Returns: $${returns.toFixed(2)})`;
  },

  "gst-calculator": (values: Record<string, string>) => {
    const calculationType = values.calculationType;
    const amount = parseFloat(values.amount);
    const gstRate = parseFloat(values.gstRate);
    
    if (!amount || !gstRate || amount <= 0 || gstRate < 0) {
      return "Invalid input values";
    }
    
    if (calculationType === "add-gst") {
      // Add GST to price (price is exclusive)
      const gstAmount = (amount * gstRate) / 100;
      const totalAmount = amount + gstAmount;
      
      return `Total: $${totalAmount.toFixed(2)} (GST: $${gstAmount.toFixed(2)})`;
    } else if (calculationType === "remove-gst") {
      // Remove GST from price (price is inclusive)
      const baseAmount = amount / (1 + gstRate / 100);
      const gstAmount = amount - baseAmount;
      
      return `Base: $${baseAmount.toFixed(2)} (GST: $${gstAmount.toFixed(2)})`;
    } else {
      return "Invalid calculation type";
    }
  },

  "simple-interest-calculator": (values: Record<string, string>) => {
    const principal = parseFloat(values.principal);
    const rate = parseFloat(values.rate);
    const time = parseFloat(values.time);
    
    if (!principal || !rate || !time || principal <= 0 || rate <= 0 || time <= 0) {
      return "Invalid input values";
    }
    
    const interest = (principal * rate * time) / 100;
    const totalAmount = principal + interest;
    
    return `$${interest.toFixed(2)} (Total Amount: $${totalAmount.toFixed(2)})`;
  }
};

export function getCalculatorFunction(calculatorId: string): CalculatorFunction | null {
  return calculatorLogic[calculatorId] || null;
}