
import React, { useRef, useState, useEffect } from 'react';
import { PiRectangle } from "react-icons/pi";
import { BsCircle } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { CiEraser } from "react-icons/ci";

const DrawingBoard = () => {
  const canvasRef = useRef(null);
  const offScreenCanvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('white');
  const [lineWidth, setLineWidth] = useState(5);
  const [eraserSize, setEraserSize] = useState(40);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [tool, setTool] = useState('pen');

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.lineCap = 'round';
    context.lineJoin = 'round';

    const offScreenCanvas = document.createElement('canvas');
    offScreenCanvas.width = canvas.width;
    offScreenCanvas.height = canvas.height;
    offScreenCanvasRef.current = offScreenCanvas;

    // Adjust canvas size on window resize
    const handleResize = () => {
      saveCanvasState(); // Save current content
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      offScreenCanvas.width = canvas.width;
      offScreenCanvas.height = canvas.height;
      restoreCanvasState(); // Restore the content after resizing
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const saveCanvasState = () => {
    const canvas = canvasRef.current;
    const offScreenContext = offScreenCanvasRef.current.getContext('2d');
    offScreenContext.clearRect(0, 0, canvas.width, canvas.height);
    offScreenContext.drawImage(canvas, 0, 0);
  };

  const restoreCanvasState = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(offScreenCanvasRef.current, 0, 0);
  };

  const startDrawing = (event) => {
    event.preventDefault(); // Prevent default touch behavior
    const { offsetX, offsetY } = getEventCoordinates(event);
    setStartX(offsetX);
    setStartY(offsetY);
    setIsDrawing(true);

    if (tool === 'pen') {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      context.beginPath();
      context.moveTo(offsetX, offsetY);
    } else {
      saveCanvasState();
    }
  };

  const draw = (event) => {
    event.preventDefault(); // Prevent default touch behavior
    if (!isDrawing) return;

    const { offsetX, offsetY } = getEventCoordinates(event);
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.strokeStyle = color;
    context.lineWidth = lineWidth;

    if (tool === 'pen') {
      context.lineTo(offsetX, offsetY); // Draw line to current mouse position
      context.stroke(); // Apply stroke
    } else if (tool === 'eraser') {
      context.clearRect(
        offsetX - eraserSize / 2,
        offsetY - eraserSize / 2,
        eraserSize,
        eraserSize
      );
    } else {
      restoreCanvasState();

      if (tool === 'rectangle') {
        const width = offsetX - startX;
        const height = offsetY - startY;
        context.strokeRect(startX, startY, width, height);
      } else if (tool === 'circle') {
        const radius = Math.sqrt(
          Math.pow(offsetX - startX, 2) + Math.pow(offsetY - startY, 2)
        );
        context.beginPath();
        context.arc(startX, startY, radius, 0, 2 * Math.PI);
        context.stroke();
      }
    }
  };

  const stopDrawing = (event) => {
    event.preventDefault(); // Prevent default touch behavior
    setIsDrawing(false);
    if (tool === 'pen') {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      context.closePath();
      saveCanvasState();
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    const offScreenContext = offScreenCanvasRef.current.getContext('2d');
    offScreenContext.clearRect(0, 0, canvas.width, canvas.height);
  };

  const getEventCoordinates = (event) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = event.touches ? event.touches[0].clientX : event.clientX;
    const y = event.touches ? event.touches[0].clientY : event.clientY;
    return {
      offsetX: x - rect.left,
      offsetY: y - rect.top
    };
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-x-hidden">
      <div className="fixed bottom-5 p-2 border rounded-2xl shadow-lg flex flex-wrap opacity-30 hover:opacity-100 transition-all duration-300 items-center justify-center space-x-2 gap-6 md:space-x-4 md:py-3">
        <label className="flex items-center space-x-1 md:space-x-2">
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="border rounded"
          />
        </label>

        <label className="flex items-center space-x-1 md:space-x-2">
          <input
            type="text"
            value={lineWidth}
            onChange={(e) => setLineWidth(Number(e.target.value))}
            className="border rounded w-12 text-center text-sm md:w-16 md:text-base bg-transparent text-white"
            inputMode="numeric"
          />
        </label>

        <button
          onClick={() => setTool('pen')}
          className={`px-2 py-1 rounded ${tool === 'pen' ? 'bg-violet-600 text-white' : 'bg-transparent'} text-sm md:text-base`}
        >
          <FaPencilAlt size={20} className="text-white" />
        </button>

        <button
          onClick={() => setTool('rectangle')}
          className={`px-2 py-1 rounded ${tool === 'rectangle' ? 'bg-violet-600 text-white' : 'bg-transparent'} text-sm md:text-base`}
        >
          <PiRectangle size={20} className="text-white" />
        </button>

        <button
          onClick={() => setTool('circle')}
          className={`px-2 py-1 rounded ${tool === 'circle' ? 'bg-violet-600 text-white' : 'bg-transparent'} text-sm md:text-base`}
        >
          <BsCircle size={20} className="text-white" />
        </button>

        <button
          onClick={() => setTool('eraser')}
          className={`px-2 py-1 rounded ${tool === 'eraser' ? 'bg-violet-600 text-white' : 'bg-transparent'} text-sm md:text-base`}
        >
          <CiEraser size={20} className="text-white" />
        </button>

        <button
          onClick={clearCanvas}
          className="bg-violet-600 text-white px-3 py-1 rounded shadow hover:bg-red-600 text-sm md:text-base"
        >
          Clear
        </button>
      </div>

      <div className="w-full flex justify-center items-center">
        <canvas
          ref={canvasRef}
          className="border-2 border-black cursor-crosshair rounded-lg"
          width={window.innerWidth}
          height={window.innerHeight}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          onTouchCancel={stopDrawing}
        />
      </div>
    </div>
  );
};

export default DrawingBoard;
