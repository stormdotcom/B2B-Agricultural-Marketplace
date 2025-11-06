import { CheckCircle, AlertTriangle, X } from 'lucide-react';

const NotificationBox = ({ type = 'success', message, onClose }) => {
  if (!message) return null;

  const isSuccess = type === 'success';
  const Icon = isSuccess ? CheckCircle : AlertTriangle;
  const bgColor = isSuccess ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200';
  const textColor = isSuccess ? 'text-green-800' : 'text-red-800';
  const iconColor = isSuccess ? 'text-green-600' : 'text-red-600';

  return (
    <div className={`${bgColor} border rounded-lg p-4 mb-6 flex items-start gap-3 animate-fade-in`}>
      <Icon className={`${iconColor} flex-shrink-0 mt-0.5`} size={20} />
      <p className={`${textColor} flex-1 text-sm font-medium`}>{message}</p>
      {onClose && (
        <button
          onClick={onClose}
          className={`${textColor} hover:opacity-70 transition-opacity flex-shrink-0`}
          aria-label="Close notification"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default NotificationBox;
