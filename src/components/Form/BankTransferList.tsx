export default function BankTransferList({ content, onChange }) {
  return (
    <tr className="border-b-4">
      <td className="flex items-center my-1">
        <input
          type="radio"
          name="bankTransfer"
          onChange={onChange}
          value={content.vboutListCode}
          required
        />
        <div className="flex items-center">
          <img
            src={content.flag}
            alt={content.country}
            height="30px"
            width="30px"
            className="mx-3"
          />
          <div className="currency flex flex-col">
            <h6 className="font-bold">{content.currencyCode}</h6>
            <p className="text-muted">{content.currency}</p>
          </div>
        </div>
      </td>
      <td>
        <p className="mb-0">{content.country}</p>
      </td>
    </tr>
  );
}
