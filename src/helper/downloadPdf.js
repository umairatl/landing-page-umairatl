import pdfLink from "../asset/file/resume-2026.pdf";

export const downloadPDF = () => {
  var link = document.createElement("a");
  link.href = pdfLink;
  link.download = "Umairatul 2026 Resume.pdf";
  link.dispatchEvent(new MouseEvent("click"));
};
