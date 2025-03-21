import { QRCodeCanvas } from "qrcode.react";

const MarksheetQRCode = ({ studentId }) => {
  const marksheetUrl = `https://yourwebsite.com/marksheet?id=${studentId}`;

  return (
    <div>
      <h3>Scan to View Marksheet</h3>
      <QRCodeCanvas  value={marksheetUrl} size={150} />
    </div>
  );
};

export default MarksheetQRCode;
