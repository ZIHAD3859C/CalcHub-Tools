import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Copy, RotateCcw } from "lucide-react";

interface CalculatorProps {
  title: string;
  description: string;
  fields: Array<{
    id: string;
    label: string;
    type: string;
    placeholder: string;
    unit?: string;
    options?: Array<{ value: string; label: string }>;
  }>;
  onCalculate: (values: Record<string, string>) => string | number;
  resultLabel: string;
}

export default function Calculator({ 
  title, 
  description, 
  fields, 
  onCalculate, 
  resultLabel 
}: CalculatorProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [result, setResult] = useState<string | number | null>(null);

  const handleInputChange = (fieldId: string, value: string) => {
    setValues(prev => ({ ...prev, [fieldId]: value }));
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = onCalculate(values);
      setResult(calculatedResult);
      console.log('Calculation performed:', { values, result: calculatedResult });
    } catch (error) {
      console.error('Calculation error:', error);
      setResult('Error in calculation');
    }
  };

  const handleReset = () => {
    setValues({});
    setResult(null);
    console.log('Calculator reset');
  };

  const handleCopyResult = () => {
    if (result !== null) {
      navigator.clipboard.writeText(result.toString());
      console.log('Result copied to clipboard:', result);
      // TODO: Show toast notification
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl" data-testid="calculator-title">{title}</CardTitle>
        <p className="text-sm text-muted-foreground" data-testid="calculator-description">
          {description}
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Input Fields */}
        <div className="space-y-4">
          {fields.map((field) => (
            <div key={field.id} className="space-y-2">
              <Label htmlFor={field.id}>{field.label}</Label>
              <div className="relative">
                {field.type === "select" ? (
                  <Select 
                    value={values[field.id] || ''} 
                    onValueChange={(value) => handleInputChange(field.id, value)}
                  >
                    <SelectTrigger data-testid={`select-${field.id}`}>
                      <SelectValue placeholder={field.placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {field.options?.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : (
                  <Input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={values[field.id] || ''}
                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                    data-testid={`input-${field.id}`}
                  />
                )}
                {field.unit && (
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-muted-foreground">
                    {field.unit}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button 
            onClick={handleCalculate}
            className="flex-1"
            data-testid="button-calculate"
          >
            Calculate
          </Button>
          <Button
            variant="outline"
            onClick={handleReset}
            data-testid="button-reset"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>

        {/* Result */}
        {result !== null && (
          <div className="space-y-3">
            <div className="p-4 bg-primary/10 rounded-lg border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{resultLabel}</p>
                  <p className="text-2xl font-bold text-primary" data-testid="calculation-result">
                    {result}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleCopyResult}
                  data-testid="button-copy-result"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}