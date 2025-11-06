import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Sprout } from 'lucide-react';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import NotificationBox from '../components/NotificationBox';
import { submitRequirement, resetState } from '../features/requirements/requirementsSlice';

const AddRequirementPage = () => {
  const dispatch = useDispatch();
  const { loading, success, error, message } = useSelector((state) => state.requirements);

  const [formData, setFormData] = useState({
    productName: '',
    quantity: '',
    deliveryDate: '',
    notes: '',
  });

  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    if (success) {
      setFormData({
        productName: '',
        quantity: '',
        deliveryDate: '',
        notes: '',
      });
      setValidationErrors({});
    }
  }, [success]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    if (validationErrors[id]) {
      setValidationErrors((prev) => ({
        ...prev,
        [id]: '',
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.productName.trim()) {
      errors.productName = 'Product name is required';
    }
    if (!formData.quantity || formData.quantity <= 0) {
      errors.quantity = 'Quantity must be greater than 0';
    }
    if (!formData.deliveryDate) {
      errors.deliveryDate = 'Delivery date is required';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    dispatch(submitRequirement(formData));
  };

  const handleCloseNotification = () => {
    dispatch(resetState());
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-primary p-3 rounded-full">
              <Sprout className="text-white" size={32} />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Add Requirement</h1>
          <p className="text-gray-600">Submit your agricultural product requirements to our network of farmers</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-secondary/30 p-8">
          {(success || error) && (
            <NotificationBox
              type={success ? 'success' : 'error'}
              message={success ? message : error}
              onClose={handleCloseNotification}
            />
          )}

          <form onSubmit={handleSubmit}>
            <FormInput
              label="Product Name"
              id="productName"
              type="text"
              required
              value={formData.productName}
              onChange={handleChange}
              error={validationErrors.productName}
              placeholder="e.g., Organic Wheat, Fresh Tomatoes"
            />

            <FormInput
              label="Quantity"
              id="quantity"
              type="number"
              required
              value={formData.quantity}
              onChange={handleChange}
              error={validationErrors.quantity}
              placeholder="e.g., 1000 kg"
              min="1"
            />

            <FormInput
              label="Delivery Date"
              id="deliveryDate"
              type="date"
              required
              value={formData.deliveryDate}
              onChange={handleChange}
              error={validationErrors.deliveryDate}
              min={new Date().toISOString().split('T')[0]}
            />

            <FormInput
              label="Notes"
              id="notes"
              type="textarea"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any additional requirements or specifications..."
            />

            <Button type="submit" loading={loading}>
              Submit Requirement
            </Button>
          </form>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Your requirement will be shared with verified farmers in our network</p>
        </div>
      </div>
    </div>
  );
};

export default AddRequirementPage;
