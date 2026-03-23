function IncomeExpense({ transaction }) {
  const amounts = transaction.map((item) => item.amount);

  const totalIncome = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, curr) => acc + curr, 0);

  const totalExpense = amounts
    .filter((amount) => amount < 0)
    .reduce((acc, curr) => acc + curr, 0);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    marginBottom: '20px'
  };

  const cardStyle = {
    flex: 1,
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    border: '2px solid',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  };

  const incomeCardStyle = {
    ...cardStyle,
    backgroundColor: '#e8f5e8',
    borderColor: '#4CAF50',
    color: '#2e7d32'
  };

  const expenseCardStyle = {
    ...cardStyle,
    backgroundColor: '#ffeaea',
    borderColor: '#f44336',
    color: '#c62828'
  };

  const titleStyle = {
    margin: '0 0 10px 0',
    fontSize: '16px',
    fontWeight: 'normal',
    opacity: '0.8'
  };

  const amountStyle = {
    margin: '0',
    fontSize: '24px',
    fontWeight: 'bold'
  };

  return (
    <div style={containerStyle}>
      <div style={incomeCardStyle}>
        <h3 style={titleStyle}>Income</h3>
        <h2 style={amountStyle}>+${totalIncome.toFixed(2)}</h2>
      </div>
      
      <div style={expenseCardStyle}>
        <h3 style={titleStyle}>Expense</h3>
        <h2 style={amountStyle}>${totalExpense.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default IncomeExpense;