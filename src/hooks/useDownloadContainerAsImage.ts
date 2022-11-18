import { useRef, useState } from "react";
import html2canvas from 'html2canvas';
import { setTimeout } from "timers";


export const useDownloadContainerAsImage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  const handleDownloadImage = async () => {
    const element = containerRef?.current;
    setLoading(true);
    
    if (!element) {
      setLoading(false);
      return;
    }

    element.style.height = "720px";
    element.style.width = "1290px";
    element.style.boxShadow = 'none';
    
    const canvas = await html2canvas(element, {
      backgroundColor: null,
      allowTaint: true,
    });

    const data = canvas.toDataURL('image/jpg');

    const link = document.createElement('a');

    element.style.width = '100%';

    element.style.height = `100%`;

    setTimeout(() => {
      if (typeof link.download === 'string') {
        link.href = data;
        link.download = 'image.png';
  
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        window.open(data);
      }
      setLoading(false)
    }, 3000);
    
  };

  return {
    handleDownloadImage,
    containerRef,
    loading
  }
}