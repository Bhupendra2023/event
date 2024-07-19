import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup.string().required('Event Name is required'),
  type: yup.string().oneOf(['sports', 'music', 'general', 'children', 'school'], 'Invalid Event Type').required('Event Type is required'),
  startDate: yup.date().nullable().required('Start Date is required'),
  endDate: yup.date().nullable().min(
    yup.ref('startDate'),
    'End Date must be later than Start Date'
  ).required('End Date is required'),
  description: yup.string().required('Event Description is required'),
  handledBy: yup.string().required('Event Handled By is required'),
  organisation: yup.string().required('Event Organisation is required'),
  subEvents: yup.number().min(0, 'Total Number of Sub-Events cannot be negative').required('Total Number of Sub-Events is required')
});
