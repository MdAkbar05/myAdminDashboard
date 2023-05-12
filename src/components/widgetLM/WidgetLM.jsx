import "./widgetLM.css";

const Button = ({ type }) => {
  return <button className={type}>{type}</button>;
};

const WidgetLM = () => {
  return (
    <div className="widgetLM">
      <h2 className="widgetLgTitle">Latest Transactions</h2>
      <table className="widgetLmTable">
        <tr className="widgetLmTr">
          <th className="widgetLmTh">Customer</th>
          <th className="widgetLmTh">Date</th>
          <th className="widgetLmTh">Amount</th>
          <th className="widgetLmTh">Status</th>
        </tr>
        <tr className="widgetLmTr">
          <td className="widgetLmUser">
            <img
              src="https://images.pexels.com/photos/1073083/pexels-photo-1073083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="widgetLmImg"
            />
            <span className="widgetlmName">Railer Mahsin</span>
          </td>
          <td className="widgetLmDate">2 June, 2022</td>
          <td className="widgetLmAmount">$1200.00</td>
          <td className="widgetLmStatus">
            <Button className="widgetLmBtn" type="Approved" />
          </td>
        </tr>

        <tr className="widgetLmTr">
          <td className="widgetLmUser">
            <img
              src="https://images.pexels.com/photos/1073083/pexels-photo-1073083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="widgetLmImg"
            />
            <span className="widgetlmName">Railer Mahsin</span>
          </td>
          <td className="widgetLmDate">2 June, 2022</td>
          <td className="widgetLmAmount">$1200.00</td>
          <td className="widgetLmStatus">
            <Button className="widgetLmBtn" type="Declined" />
          </td>
        </tr>

        <tr className="widgetLmTr">
          <td className="widgetLmUser">
            <img
              src="https://images.pexels.com/photos/1073083/pexels-photo-1073083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="widgetLmImg"
            />
            <span className="widgetlmName">Railer Mahsin</span>
          </td>
          <td className="widgetLmDate">2 June, 2022</td>
          <td className="widgetLmAmount">$1200.00</td>
          <td className="widgetLmStatus">
            <Button className="widgetLmBtn" type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLM;
