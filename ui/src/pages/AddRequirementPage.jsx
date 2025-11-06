import { useFormik } from 'formik';
import { Sprout } from 'lucide-react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import Button from '../components/Button';
import FormInput from '../components/FormInput';
import NotificationBox from '../components/NotificationBox';
import { resetState, submitRequirement } from '../features/requirements/requirementsSlice';


const validationSchema = Yup.object({
  productName: Yup.string().trim().required('Product name is required'),
  quantity: Yup.number().positive('Quantity must be greater than 0').required('Quantity is required'),
  deliveryDate: Yup.date().required('Delivery date is required'),
  notes: Yup.string(),
});

const AddRequirementPage = () => {
  const dispatch = useDispatch();
  const { loading, success, error, message } = useSelector((state) => state.requirements);

  // ✅ Formik setup
  const formik = useFormik({
    initialValues: {
      productName: '',
      quantity: '',
      deliveryDate: '',
      notes: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const resultAction = await dispatch(submitRequirement(values));

      if (submitRequirement.fulfilled.match(resultAction)) {
        toast.success(resultAction.payload?.message || 'Requirement submitted!');
        resetForm();
      } else {
        toast.error(resultAction.payload?.message || 'Something went wrong!');
      }
    },
  });

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => dispatch(resetState()), 3000);
      return () => clearTimeout(timer);
    }
  }, [success, error, dispatch]);

  return (
    <div className=" bg-background ">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-primary p-3 rounded-full">
              <Sprout className="text-white" size={32} />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Add Requirement</h1>
          <p className="text-gray-600">Submit your product requirements to farmers</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-secondary/30 p-8">
          {(success || error) && (
            <NotificationBox
              type={success ? 'success' : 'error'}
              message={success ? message : error}
              onClose={() => dispatch(resetState())}
            />
          )}

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <FormInput
              label="Product Name"
              id="productName"
              type="text"
              required
              value={formik.values.productName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.productName && formik.errors.productName}
              placeholder="e.g., Organic Wheat, Fresh Tomatoes"
            />

            <FormInput
              label="Quantity"
              id="quantity"
              type="number"
              required
              value={formik.values.quantity}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.quantity && formik.errors.quantity}
              placeholder="e.g., 1000 kg"
              min="1"
            />

            <FormInput
              label="Delivery Date"
              id="deliveryDate"
              type="date"
              required
              value={formik.values.deliveryDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.deliveryDate && formik.errors.deliveryDate}
              min={new Date().toISOString().split('T')[0]}
            />

            <FormInput
              label="Notes"
              id="notes"
              type="textarea"
              value={formik.values.notes}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Any additional requirements or specifications..."
            />

            <Button type="submit" loading={loading}>
              Submit Requirement
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRequirementPage;
