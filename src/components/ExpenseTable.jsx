import React from 'react';

class ExpenseTable extends React.Component {
  render() {
    return (
      <table className="table-container">
        <tr className="table-header">
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        <tr className="table-body">
          <td>sdsdas</td>
          <td>sdsdas</td>
          <td>sdsdas</td>
          <td>sdsdas</td>
        </tr>
      </table>
    );
  }
}

export default ExpenseTable;
