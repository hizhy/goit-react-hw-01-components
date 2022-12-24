import PropTypes from 'prop-types';
import { Table, Head, DataCell, DataRow } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <Head>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Head>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <DataRow key={id}>
            <DataCell>{type}</DataCell>
            <DataCell>{amount}</DataCell>
            <DataCell>{currency}</DataCell>
          </DataRow>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
