import React from 'react'
import { resumePdf } from '../constants/index';
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
function Resume() {
  return (
    <div className='flex flex-col items-center'>
      <a href={resumePdf} target='_blank'>
      <button className='shadow-skillCard p-3 my-5 rounded-lg'><img src="/src/assets/download.svg" className='w-[28px] h-[28px] inline-block' alt="" /><span>Download</span></button>
      </a>
      <Document file={resumePdf} className="d-flex justify-content-center">
        <Page scale='1.5' pageNumber={1} wrap={false} />
      </Document>
      <a href={resumePdf} target='_blank'>
      <button className='shadow-skillCard p-3 my-5 rounded-lg'><img src="/src/assets/download.svg" className='w-[28px] h-[28px] inline-block' alt="" /><span>Download</span></button>
      </a>
    </div>
  )
}

export default Resume