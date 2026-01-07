import React from 'react'
import { resumePdf } from '../constants/index';
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { download } from '../assets';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

function Resume() {
  return (
    <div className='flex flex-col items-center'>
      <a href={resumePdf} target='_blank'>
      <button className='shadow-skillCard p-3 my-5 rounded-lg'><img src={download} className='w-[28px] h-[28px] inline-block' alt="" /><span>Download</span></button>
      </a>
      <Document file={resumePdf} className="d-flex justify-content-center">
        <Page scale='1.1' pageNumber={1} wrap={false} />
      </Document>
      <a href={resumePdf} target='_blank'>
      <button className='shadow-skillCard p-3 my-5 rounded-lg'><img src={download} className='w-[28px] h-[28px] inline-block' alt="" /><span>Download</span></button>
      </a>
    </div>
  )
}

export default Resume