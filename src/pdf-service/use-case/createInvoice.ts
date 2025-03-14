import * as fs from 'fs';
import * as PDFDocument from 'pdfkit';
import { getDataDto } from '../dto/getData.dto';
import * as path from 'path';

//(HORIZONTAL,VERTIKAL)

function formatCurrency(cents: any) {
  return 'Rp.' + cents;
}

function formatDate(date: any) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return year + '/' + month + '/' + day;
}

function generateHr(doc: any, y: any) {
  doc.strokeColor('#aaaaaa').lineWidth(1).moveTo(50, y).lineTo(550, y).stroke();
}

// function generateFooter(doc: any) {
//   doc
//     .fontSize(10)
//     .text(
//       'Payment is due within 15 days. Thank you for your business.',
//       50,
//       780,
//       { align: 'center', width: 500 },
//     );
// }

export async function createInvoice(
  invoice: getDataDto[],
  path: string,
): Promise<boolean> {
  const doc = new PDFDocument({ size: 'A4', margin: 50 });

  try {
    generateHeader(doc);
    generateCustomerInformation(doc, invoice);
    generateInvoiceTable(doc, invoice);
    // generateFooter(doc);

    doc.end();
    doc.pipe(fs.createWriteStream(path));
    return Promise.resolve(true);
  } catch (err) {
    return Promise.reject(
      new Error('Terjadi kesalahan saat create invoice' + err),
    );
  }
}

function generateHeader(doc: any) {
  const pathFile = path.join(
    __dirname,
    '../',
    '../',
    '../',
    'assets',
    'spinnin_records_logo.png',
  );
  doc
    .image(pathFile, 50, 45, {
      width: 50,
    })
    .fillColor('#444444')
    .fontSize(20)
    .text('Perhutani', 110, 57)
    .fontSize(10)
    .text('Perhutani.', 200, 50, { align: 'right' })
    .text('Marathon 4, 1213 PJ Hilversum', 200, 65, { align: 'right' })
    .moveDown();
}

function generateSubtotal(rows: getDataDto[]) {
  let subTotal = 0;
  rows.map((row) => {
    subTotal = subTotal + parseInt(row.total);
  });
  return subTotal;
}

function generateCustomerInformation(doc: any, invoice: getDataDto[]) {
  doc.fillColor('#444444').fontSize(20).text('PENERIMAAN GETAH', 50, 160);

  generateHr(doc, 185);

  const customerInformationTop = 200;

  doc
    .fontSize(10)
    .text('Invoice Number:', 50, customerInformationTop)
    .font('Helvetica-Bold')
    .text(Math.floor(Math.random() * 100) + 1, 150, customerInformationTop)
    .font('Helvetica')
    .text('Invoice Date:', 50, customerInformationTop + 15)
    .text(formatDate(new Date()), 150, customerInformationTop + 15)
    .text('Balance Due:', 50, customerInformationTop + 30)
    .text(
      formatCurrency(generateSubtotal(invoice)),
      150,
      customerInformationTop + 30,
    )

    .font('Helvetica-Bold')
    .text(invoice[0].fullname, 300, customerInformationTop)
    .moveDown();

  generateHr(doc, 252);
}

function generateInvoiceTable(doc: any, invoice: getDataDto[]) {
  let i;
  const invoiceTableTop = 330;

  doc.font('Helvetica-Bold');
  generateTableRow(
    doc,
    invoiceTableTop,
    'id',
    'Tpg',
    'Penyadap',
    'Tgl',
    'Mutu',
    'Jumlah',
    'H.Dasar',
    'H.Tambahan',
    'Total',
  );
  generateHr(doc, invoiceTableTop + 20);
  doc.font('Helvetica');

  for (i = 0; i < invoice.length; i++) {
    const item = invoice[i];
    const position = invoiceTableTop + (i + 1) * 30;
    generateTableRow(
      doc,
      position,
      item.id,
      item.namaTpg,
      item.namaPenyadap,
      item.created_at.toString().slice(0, 10),
      item.mutu,
      item.jumlah,
      item.harga_dasar,
      item.harga_tambahan,
      formatCurrency(item.total),
    );

    generateHr(doc, position + 20);
  }

  // const subtotalPosition = invoiceTableTop + (i + 1) * 30;
  // generateTableRow(
  //   doc,
  //   subtotalPosition,
  //   '',
  //   '',
  //   '',
  //   '',
  //   '',
  //   '',
  //   'Subtotal',
  //   '',
  //   formatCurrency(generateSubtotal(invoice)),
  // );

  // const duePosition = subtotalPosition + 45;
  // doc.font('Helvetica-Bold');
  // generateTableRow(
  //   doc,
  //   duePosition,
  //   '',
  //   '',
  //   '',
  //   '',
  //   '',
  //   '',
  //   'Balance-Due',
  //   '',
  //   formatCurrency(generateSubtotal(invoice)),
  // );

  // function generateFooter(doc : any) {
  //   doc
  //     .fontSize(10)
  //     .text(
  //       "Payment is due within 15 days. Thank you for your business.",
  //       50,
  //       780,
  //       { align: "center", width: 500 }
  //     );
  // }

  function generateTableRow(
    doc: any,
    y: number,
    id: string,
    tpg: string,
    namaPenyadap: string,
    created_at: string,
    mutu: string,
    jumlah: string,
    harga_dasar: string,
    harga_tambahan: string,
    total: string,
  ) {
    doc
      .fontSize(10)
      .text(id, 50, y)
      .text(tpg, 100, y)
      .text(namaPenyadap, 150, y)
      .text(created_at, 210, y)
      // .text(quantity, 370, y, { width: 90, align: "right" })
      .text(mutu, 280, y)
      .text(jumlah, 320, y)
      .text(harga_dasar, 360, y)
      .text(harga_tambahan, 410, y)
      .text(total, 460, y, { width: 90, align: 'right' });
  }
}
