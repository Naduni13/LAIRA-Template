import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Lock, Truck } from 'lucide-react';

const Checkout = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'LK', // Changed from 'US' to 'LK' for Sri Lanka
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });

  // Mock cart summary data
  const orderSummary = {
    subtotal: 255.97,
    shipping: 0,
    tax: 20.48,
    total: 276.45
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Process payment
    console.log('Processing payment:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8">
            Secure Checkout
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Checkout Form */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="card-premium p-6">
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="card-premium p-6">
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  Shipping Address
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="123 Main Street"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="state">Province</Label> {/* Changed from State to Province */}
                    <Select value={formData.state} onValueChange={(value) => handleInputChange('state', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select province" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="WP">Western Province</SelectItem>
                        <SelectItem value="SP">Southern Province</SelectItem>
                        <SelectItem value="CP">Central Province</SelectItem>
                        <SelectItem value="EP">Eastern Province</SelectItem>
                        <SelectItem value="NWP">North Western Province</SelectItem>
                        <SelectItem value="NCP">North Central Province</SelectItem>
                        <SelectItem value="UP">Uva Province</SelectItem>
                        <SelectItem value="SBP">Sabaragamuwa Province</SelectItem>
                        <SelectItem value="NP">Northern Province</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="zipCode">Postal Code</Label> {/* Changed from ZIP Code to Postal Code */}
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange('zipCode', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="LK">Sri Lanka</SelectItem> {/* Moved to top and set as default */}
                        <SelectItem value="US">United States</SelectItem>
                        <SelectItem value="CA">Canada</SelectItem>
                        <SelectItem value="UK">United Kingdom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="card-premium p-6">
                <div className="flex items-center mb-6">
                  <CreditCard className="h-6 w-6 text-primary mr-2" />
                  <h2 className="text-xl font-semibold text-foreground">
                    Payment Information
                  </h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="nameOnCard">Name on Card</Label>
                    <Input
                      id="nameOnCard"
                      value={formData.nameOnCard}
                      onChange={(e) => handleInputChange('nameOnCard', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      value={formData.cardNumber}
                      onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <Input
                        id="expiryDate"
                        value={formData.expiryDate}
                        onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        value={formData.cvv}
                        onChange={(e) => handleInputChange('cvv', e.target.value)}
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center mt-4 text-sm text-muted-foreground">
                  <Lock className="h-4 w-4 mr-2" />
                  Your payment information is encrypted and secure
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="card-premium p-6">
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  Order Summary
                </h2>
                
                {/* Sample order items */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">Hydrating Vitamin C Serum</h4>
                      <p className="text-sm text-muted-foreground">Quantity: 2</p>
                    </div>
                    <span className="font-medium">LKR 179.98</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">Regenerating Night Cream</h4>
                      <p className="text-sm text-muted-foreground">Quantity: 1</p>
                    </div>
                    <span className="font-medium">LKR 75.99</span>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">LKR {orderSummary.subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Shipping</span>
                    <div className="text-right">
                      <span className="font-medium">Free</span>
                      <Badge variant="secondary" className="ml-2 text-xs">
                        Over LKR 75
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="font-medium">LKR {orderSummary.tax.toFixed(2)}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">LKR {orderSummary.total.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="mt-6 space-y-4">
                  <Button 
                    className="w-full btn-hero"
                    onClick={handleSubmit}
                  >
                    Complete Order
                  </Button>
                  
                  <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Truck className="h-4 w-4 mr-1" />
                      Free shipping
                    </div>
                    <div className="flex items-center">
                      <Lock className="h-4 w-4 mr-1" />
                      Secure checkout
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;