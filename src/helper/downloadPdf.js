import pdfLink from "../asset/file/resume-2025.pdf";

export const downloadPDF = () => {
  var link = document.createElement("a");
  link.href = pdfLink;
  link.download = "Umairatul 2025 Resume.pdf";
  link.dispatchEvent(new MouseEvent("click"));
};
