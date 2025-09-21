export interface Calculator {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  popular: boolean;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  fields: Array<{
    id: string;
    label: string;
    type: string;
    placeholder: string;
    unit?: string;
    required?: boolean;
    min?: number;
    max?: number;
    options?: Array<{ value: string; label: string }>;
  }>;
  resultLabel: string;
  article: {
    title: string;
    introduction: string;
    sections: Array<{
      heading: string;
      content: string;
    }>;
    conclusion: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedTools: string[];
}

export const calculators: Calculator[] = [
  {
    id: "age-calculator",
    name: "Age Calculator",
    description: "Calculate your exact age in years, months, and days",
    category: "General",
    icon: "Calendar",
    popular: true,
    slug: "age-calculator",
    metaTitle: "Age Calculator - Calculate Your Exact Age in Years, Months, Days",
    metaDescription: "Free online age calculator to find your exact age in years, months, and days. Calculate time between dates, age difference, and more with our precise tool.",
    keywords: ["age calculator", "calculate age", "age in days", "age difference", "birthday calculator"],
    fields: [
      {
        id: "birthDate",
        label: "Date of Birth",
        type: "date",
        placeholder: "",
        required: true
      },
      {
        id: "currentDate",
        label: "Current Date (Optional)",
        type: "date",
        placeholder: "",
        required: false
      }
    ],
    resultLabel: "Your Age",
    article: {
      title: "Understanding Age Calculation: A Complete Guide",
      introduction: "Age calculation is more than just subtracting birth year from current year. Our comprehensive age calculator provides precise results in years, months, and days, accounting for leap years and varying month lengths.",
      sections: [
        {
          heading: "How Age Calculation Works",
          content: "Age calculation involves complex date arithmetic. Our calculator considers leap years, different month lengths, and provides results in multiple formats including total days lived, weeks, hours, and even seconds since birth."
        },
        {
          heading: "Why Precise Age Matters",
          content: "Accurate age calculation is crucial for legal documents, insurance applications, medical records, and educational admissions. Even small discrepancies can have significant implications in official processes."
        },
        {
          heading: "Common Use Cases",
          content: "Beyond personal curiosity, age calculators are used for retirement planning, determining legal age requirements, calculating insurance premiums, academic eligibility, and even planning special celebrations like 10,000-day birthdays."
        }
      ],
      conclusion: "Our age calculator provides the most accurate results by considering all calendar complexities. Use it for personal, professional, or legal purposes with complete confidence in its precision."
    },
    faqs: [
      {
        question: "How accurate is this age calculator?",
        answer: "Our calculator is extremely accurate, accounting for leap years, varying month lengths, and all calendar irregularities to provide precise results."
      },
      {
        question: "Can I calculate age for historical dates?",
        answer: "Yes, you can calculate age for any historical date. The calculator works with dates from the past as well as future projections."
      },
      {
        question: "What formats does the calculator show results in?",
        answer: "Results are displayed in years, months, days, as well as total days, weeks, hours, minutes, and seconds lived."
      }
    ],
    relatedTools: ["date-difference-calculator", "days-between-dates-calculator", "age-in-months-calculator"]
  },
  {
    id: "bmi-calculator",
    name: "BMI Calculator",
    description: "Body Mass Index calculator for health assessment",
    category: "Health",
    icon: "Heart",
    popular: true,
    slug: "bmi-calculator",
    metaTitle: "BMI Calculator - Calculate Your Body Mass Index | Free Health Tool",
    metaDescription: "Calculate your BMI (Body Mass Index) instantly with our free calculator. Determine if you're underweight, normal, overweight, or obese with WHO standards.",
    keywords: ["BMI calculator", "body mass index", "BMI chart", "healthy weight", "obesity calculator"],
    fields: [
      {
        id: "height",
        label: "Height",
        type: "number",
        placeholder: "170",
        unit: "cm",
        required: true,
        min: 50,
        max: 300
      },
      {
        id: "weight",
        label: "Weight",
        type: "number",
        placeholder: "70",
        unit: "kg",
        required: true,
        min: 20,
        max: 500
      }
    ],
    resultLabel: "Your BMI",
    article: {
      title: "Understanding BMI: A Complete Guide to Body Mass Index",
      introduction: "Body Mass Index (BMI) is a widely used metric to assess whether you have a healthy body weight for your height. While it's a useful screening tool, understanding its limitations and proper interpretation is crucial for making informed health decisions.",
      sections: [
        {
          heading: "What is BMI and How is it Calculated?",
          content: "BMI is calculated by dividing your weight in kilograms by your height in meters squared (kg/m²). This simple formula provides a standardized way to categorize body weight across different populations and has been used by healthcare professionals worldwide since the 1970s."
        },
        {
          heading: "BMI Categories and Health Implications",
          content: "The WHO defines BMI categories as: Underweight (below 18.5), Normal weight (18.5-24.9), Overweight (25-29.9), and Obese (30 and above). Each category carries different health risk implications, though individual health depends on many factors beyond BMI alone."
        },
        {
          heading: "Limitations of BMI",
          content: "BMI doesn't distinguish between muscle mass and fat mass, doesn't account for fat distribution, and may not be equally applicable across all ethnic groups. Athletes with high muscle mass may have elevated BMIs despite excellent health, while older adults may have normal BMIs but unhealthy body composition."
        },
        {
          heading: "When to Consult Healthcare Professionals",
          content: "While BMI is a useful screening tool, it shouldn't be the sole determinant of health status. Consult healthcare providers for comprehensive health assessments that consider additional factors like waist circumference, body composition, lifestyle factors, and medical history."
        }
      ],
      conclusion: "BMI is a valuable starting point for health awareness, but it's most effective when used alongside other health metrics and professional medical guidance. Regular monitoring can help track health trends over time."
    },
    faqs: [
      {
        question: "Is BMI accurate for everyone?",
        answer: "BMI is a general screening tool but may not be accurate for athletes, elderly individuals, or certain ethnic groups. It doesn't distinguish between muscle and fat mass."
      },
      {
        question: "What BMI range is considered healthy?",
        answer: "A BMI between 18.5 and 24.9 is generally considered normal or healthy weight range according to WHO standards."
      },
      {
        question: "Should I be concerned if my BMI is slightly outside the normal range?",
        answer: "Small deviations should be evaluated alongside other health factors. Consult with healthcare professionals for personalized assessment and guidance."
      }
    ],
    relatedTools: ["ideal-weight-calculator", "body-fat-calculator", "calorie-calculator", "bmr-calculator"]
  },
  {
    id: "loan-calculator",
    name: "Loan/EMI Calculator",
    description: "Calculate loan payments and interest",
    category: "Finance",
    icon: "DollarSign",
    popular: true,
    slug: "loan-calculator",
    metaTitle: "Loan Calculator - Calculate EMI, Interest & Monthly Payments",
    metaDescription: "Calculate loan EMI, total interest, and monthly payments instantly. Free loan calculator for home loans, car loans, personal loans with amortization schedule.",
    keywords: ["loan calculator", "EMI calculator", "monthly payment", "loan interest", "amortization"],
    fields: [
      {
        id: "loanAmount",
        label: "Loan Amount",
        type: "number",
        placeholder: "100000",
        unit: "$",
        required: true,
        min: 1000
      },
      {
        id: "interestRate",
        label: "Annual Interest Rate",
        type: "number",
        placeholder: "7.5",
        unit: "%",
        required: true,
        min: 0.1,
        max: 50
      },
      {
        id: "loanTerm",
        label: "Loan Term",
        type: "number",
        placeholder: "30",
        unit: "years",
        required: true,
        min: 1,
        max: 50
      }
    ],
    resultLabel: "Monthly Payment (EMI)",
    article: {
      title: "Complete Guide to Loan EMI Calculation",
      introduction: "Understanding how loan EMIs (Equated Monthly Installments) are calculated is crucial for making informed borrowing decisions. This comprehensive guide covers everything from basic calculations to advanced strategies for loan management.",
      sections: [
        {
          heading: "How EMI Calculation Works",
          content: "EMI calculation uses the mathematical formula: EMI = [P × R × (1+R)^N] / [(1+R)^N - 1], where P is principal, R is monthly interest rate, and N is the number of installments. This ensures equal monthly payments throughout the loan term."
        },
        {
          heading: "Factors Affecting Your EMI",
          content: "Three primary factors determine your EMI: loan amount (principal), interest rate, and loan tenure. Increasing the tenure reduces EMI but increases total interest paid. Higher down payments reduce the principal and subsequently the EMI amount."
        },
        {
          heading: "Types of Loans and EMI Variations",
          content: "Different loan types have varying EMI structures. Home loans typically offer longer tenures with lower EMIs, while personal loans have shorter terms with higher EMIs. Car loans fall in between, with moderate tenure and competitive rates for secured lending."
        },
        {
          heading: "Strategies to Reduce EMI Burden",
          content: "Consider making larger down payments, choosing longer tenures for lower EMIs (if total interest is acceptable), refinancing when rates drop, or making prepayments to reduce principal. Balance between affordability and total cost optimization."
        }
      ],
      conclusion: "Smart loan management starts with understanding EMI calculations. Use our calculator to compare different scenarios and choose the loan structure that best fits your financial goals and repayment capacity."
    },
    faqs: [
      {
        question: "What is EMI and how is it calculated?",
        answer: "EMI (Equated Monthly Installment) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. It's calculated using the loan amount, interest rate, and tenure."
      },
      {
        question: "Can I change my EMI amount during the loan term?",
        answer: "EMI amounts are generally fixed, but you can reduce them by making prepayments to reduce the principal, or potentially through loan restructuring with lender approval."
      },
      {
        question: "Is it better to choose a longer loan tenure for lower EMI?",
        answer: "Longer tenure reduces EMI but increases total interest paid. Choose based on your monthly budget and total cost considerations."
      }
    ],
    relatedTools: ["simple-interest-calculator", "compound-interest-calculator", "mortgage-calculator", "loan-affordability-calculator"]
  },
  {
    id: "percentage-calculator",
    name: "Percentage Calculator",
    description: "Calculate percentages, increases, and decreases",
    category: "Math",
    icon: "Percent",
    popular: true,
    slug: "percentage-calculator",
    metaTitle: "Percentage Calculator - Calculate Percentages, Increase & Decrease",
    metaDescription: "Free percentage calculator to find percentages, percentage increase/decrease, percentage of a number, and percentage differences. Easy and accurate calculations.",
    keywords: ["percentage calculator", "percent increase", "percent decrease", "percentage of number", "percentage change"],
    fields: [
      {
        id: "calculationType",
        label: "Calculation Type",
        type: "select",
        placeholder: "Select calculation type",
        required: true,
        options: [
          { value: "what-percent", label: "What % is X of Y?" },
          { value: "percent-of", label: "What is X% of Y?" },
          { value: "percent-change", label: "% change from X to Y" },
          { value: "reverse-percent", label: "X is Y% of what?" }
        ]
      },
      {
        id: "value1",
        label: "First Value",
        type: "number",
        placeholder: "100",
        required: true
      },
      {
        id: "value2",
        label: "Second Value",
        type: "number",
        placeholder: "20",
        required: true
      }
    ],
    resultLabel: "Result",
    article: {
      title: "Master Percentage Calculations: Complete Guide with Examples",
      introduction: "Percentages are fundamental mathematical concepts used in countless real-world applications, from calculating discounts and tax rates to analyzing business growth and academic grades. Master these calculations with our comprehensive guide.",
      sections: [
        {
          heading: "Types of Percentage Calculations",
          content: "There are several types of percentage calculations: finding what percentage one number is of another, calculating percentage increase or decrease, finding a percentage of a number, and determining the original value before percentage change. Each serves different practical purposes."
        },
        {
          heading: "Real-World Applications",
          content: "Percentage calculations are essential in finance (interest rates, investment returns), retail (discounts, markups), statistics (survey results, demographic data), academics (grades, test scores), and business analytics (growth rates, market share analysis)."
        },
        {
          heading: "Common Percentage Formulas",
          content: "Key formulas include: Percentage = (Part/Whole) × 100, Percentage Change = ((New Value - Old Value) / Old Value) × 100, and Finding the Whole = Part ÷ (Percentage/100). Understanding these formulas enables quick mental calculations."
        },
        {
          heading: "Avoiding Common Mistakes",
          content: "Common errors include confusing percentage points with percentages, incorrect baseline selection for percentage change calculations, and rounding errors in multi-step calculations. Always double-check your work and understand the context of your calculations."
        }
      ],
      conclusion: "Percentage calculations are powerful tools for data analysis and decision-making. Practice with different scenarios using our calculator to build confidence and accuracy in your percentage computations."
    },
    faqs: [
      {
        question: "What's the difference between percentage and percentage points?",
        answer: "Percentage points refer to the arithmetic difference between two percentages. For example, if something increases from 30% to 40%, that's a 10 percentage point increase, but a 33.3% relative increase."
      },
      {
        question: "How do I calculate compound percentage changes?",
        answer: "For compound changes, multiply the factors: if something increases 20% then decreases 10%, the net change is (1.20 × 0.90) - 1 = 8% increase."
      },
      {
        question: "Can percentages exceed 100%?",
        answer: "Yes, percentages can exceed 100%. This commonly occurs with percentage increases (like 150% growth) or when comparing parts to wholes in certain contexts."
      }
    ],
    relatedTools: ["discount-calculator", "percentage-increase-decrease-calculator", "compound-interest-calculator", "simple-interest-calculator"]
  }
  // TODO: Add remaining 46 calculators
];