import { render, screen } from '@testing-library/react';
import App from './App';
import PostalDetails from './components/PostalDetails';

test('renders Postal Code Search', () => {
  render(<App />);
  const linkElement = screen.getByText(/Postal Code Search/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders post codes lookup combobox ', () => {
  render(<App />);
  const selectPostCodesCombobox = screen.getByText(/please type post code here/i);
  expect(selectPostCodesCombobox).toBeInTheDocument();
});

test('renders post codes details ', () => {
  const postalData = {"country":"England","region":"East of England","area":"South","admin_district":"E07000241","parliamentary_constituency":"E14001027"}
  render(<PostalDetails postalData={postalData} />);
  const region = screen.getByText(/East of England/i);
  expect(region).toBeInTheDocument();

  const area = screen.getByText(/South/i);
  expect(area).toBeInTheDocument();

  const admin_district = screen.getByText(/E07000241/i);
  expect(admin_district).toBeInTheDocument();
});


